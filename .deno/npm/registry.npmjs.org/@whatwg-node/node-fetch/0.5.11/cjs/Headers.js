"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PonyfillHeaders = exports.isHeadersLike = void 0;
const util_1 = require("util");
function isHeadersLike(headers) {
    return headers?.get && headers?.forEach;
}
exports.isHeadersLike = isHeadersLike;
class PonyfillHeaders {
    constructor(headersInit) {
        this.headersInit = headersInit;
        this.objectNormalizedKeysOfHeadersInit = [];
        this.objectOriginalKeysOfHeadersInit = [];
        this._setCookies = [];
    }
    // perf: we don't need to build `this.map` for Requests, as we can access the headers directly
    _get(key) {
        const normalized = key.toLowerCase();
        if (normalized === 'set-cookie') {
            return this._setCookies.join(', ');
        }
        // If the map is built, reuse it
        if (this._map) {
            return this._map.get(normalized) || null;
        }
        // If the map is not built, try to get the value from the this.headersInit
        if (this.headersInit == null) {
            return null;
        }
        if (Array.isArray(this.headersInit)) {
            return this.headersInit.find(header => header[0].toLowerCase() === normalized)?.[1] || null;
        }
        else if (isHeadersLike(this.headersInit)) {
            return this.headersInit.get(normalized);
        }
        else {
            const initValue = this.headersInit[key] || this.headersInit[normalized];
            if (initValue != null) {
                return initValue;
            }
            if (!this.objectNormalizedKeysOfHeadersInit.length) {
                Object.keys(this.headersInit).forEach(k => {
                    this.objectOriginalKeysOfHeadersInit.push(k);
                    this.objectNormalizedKeysOfHeadersInit.push(k.toLowerCase());
                });
            }
            const index = this.objectNormalizedKeysOfHeadersInit.indexOf(normalized);
            if (index === -1) {
                return null;
            }
            const originalKey = this.objectOriginalKeysOfHeadersInit[index];
            return this.headersInit[originalKey];
        }
    }
    // perf: Build the map of headers lazily, only when we need to access all headers or write to it.
    // I could do a getter here, but I'm too lazy to type `getter`.
    getMap() {
        if (!this._map) {
            if (this.headersInit != null) {
                if (Array.isArray(this.headersInit)) {
                    this._map = new Map();
                    this.headersInit.forEach(([key, value]) => {
                        const normalizedKey = key.toLowerCase();
                        if (normalizedKey === 'set-cookie') {
                            this._setCookies.push(value);
                            return;
                        }
                        this._map.set(normalizedKey, value);
                    });
                }
                else if (isHeadersLike(this.headersInit)) {
                    this._map = new Map();
                    this.headersInit.forEach((value, key) => {
                        if (key === 'set-cookie') {
                            this._setCookies.push(value);
                            return;
                        }
                        this._map.set(key, value);
                    });
                }
                else {
                    this._map = new Map();
                    for (const initKey in this.headersInit) {
                        const initValue = this.headersInit[initKey];
                        if (initValue != null) {
                            const normalizedKey = initKey.toLowerCase();
                            if (normalizedKey === 'set-cookie') {
                                this._setCookies.push(initValue);
                                continue;
                            }
                            this._map.set(normalizedKey, initValue);
                        }
                    }
                }
            }
            else {
                this._map = new Map();
            }
        }
        return this._map;
    }
    append(name, value) {
        const key = name.toLowerCase();
        if (key === 'set-cookie') {
            this._setCookies.push(value);
            return;
        }
        const existingValue = this.getMap().get(key);
        const finalValue = existingValue ? `${existingValue}, ${value}` : value;
        this.getMap().set(key, finalValue);
    }
    get(name) {
        const value = this._get(name);
        if (value == null) {
            return null;
        }
        return value;
    }
    has(name) {
        if (name === 'set-cookie') {
            return this._setCookies.length > 0;
        }
        return !!this._get(name); // we might need to check if header exists and not just check if it's not nullable
    }
    set(name, value) {
        const key = name.toLowerCase();
        if (key === 'set-cookie') {
            this._setCookies = [value];
            return;
        }
        this.getMap().set(key, value);
    }
    delete(name) {
        const key = name.toLowerCase();
        if (key === 'set-cookie') {
            this._setCookies = [];
            return;
        }
        this.getMap().delete(key);
    }
    forEach(callback) {
        this._setCookies.forEach(setCookie => {
            callback(setCookie, 'set-cookie', this);
        });
        if (!this._map) {
            if (this.headersInit) {
                if (Array.isArray(this.headersInit)) {
                    this.headersInit.forEach(([key, value]) => {
                        callback(value, key, this);
                    });
                    return;
                }
                if (isHeadersLike(this.headersInit)) {
                    this.headersInit.forEach(callback);
                    return;
                }
                Object.entries(this.headersInit).forEach(([key, value]) => {
                    if (value != null) {
                        callback(value, key, this);
                    }
                });
            }
            return;
        }
        this.getMap().forEach((value, key) => {
            callback(value, key, this);
        });
    }
    *keys() {
        if (this._setCookies.length) {
            yield 'set-cookie';
        }
        if (!this._map) {
            if (this.headersInit) {
                if (Array.isArray(this.headersInit)) {
                    yield* this.headersInit.map(([key]) => key)[Symbol.iterator]();
                    return;
                }
                if (isHeadersLike(this.headersInit)) {
                    yield* this.headersInit.keys();
                    return;
                }
                yield* Object.keys(this.headersInit)[Symbol.iterator]();
                return;
            }
        }
        yield* this.getMap().keys();
    }
    *values() {
        yield* this._setCookies;
        if (!this._map) {
            if (this.headersInit) {
                if (Array.isArray(this.headersInit)) {
                    yield* this.headersInit.map(([, value]) => value)[Symbol.iterator]();
                    return;
                }
                if (isHeadersLike(this.headersInit)) {
                    yield* this.headersInit.values();
                    return;
                }
                yield* Object.values(this.headersInit)[Symbol.iterator]();
                return;
            }
        }
        yield* this.getMap().values();
    }
    *entries() {
        yield* this._setCookies.map(cookie => ['set-cookie', cookie]);
        if (!this._map) {
            if (this.headersInit) {
                if (Array.isArray(this.headersInit)) {
                    yield* this.headersInit;
                    return;
                }
                if (isHeadersLike(this.headersInit)) {
                    yield* this.headersInit.entries();
                    return;
                }
                yield* Object.entries(this.headersInit);
                return;
            }
        }
        yield* this.getMap().entries();
    }
    getSetCookie() {
        return this._setCookies;
    }
    [Symbol.iterator]() {
        return this.entries();
    }
    [Symbol.for('nodejs.util.inspect.custom')]() {
        const record = {};
        this.forEach((value, key) => {
            if (key === 'set-cookie') {
                record['set-cookie'] = this._setCookies;
            }
            else {
                record[key] = value.includes(',') ? value.split(',').map(el => el.trim()) : value;
            }
        });
        return `Headers ${(0, util_1.inspect)(record)}`;
    }
}
exports.PonyfillHeaders = PonyfillHeaders;
