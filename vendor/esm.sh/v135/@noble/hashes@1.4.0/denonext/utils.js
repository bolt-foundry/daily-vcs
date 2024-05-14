/* esm.sh - esbuild bundle(@noble/hashes@1.4.0/utils) denonext production */
import{crypto as f}from"/v135/@noble/hashes@1.4.0/denonext/crypto.js";import{bytes as u}from"/v135/@noble/hashes@1.4.0/denonext/_assert.js";function h(t){return t instanceof Uint8Array||t!=null&&typeof t=="object"&&t.constructor.name==="Uint8Array"}var O=t=>new Uint8Array(t.buffer,t.byteOffset,t.byteLength),U=t=>new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength/4)),B=t=>new DataView(t.buffer,t.byteOffset,t.byteLength),E=(t,e)=>t<<32-e|t>>>e,k=(t,e)=>t<<e|t>>>32-e>>>0,d=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68,a=t=>t<<24&4278190080|t<<8&16711680|t>>>8&65280|t>>>24&255,S=d?t=>t:t=>a(t);function T(t){for(let e=0;e<t.length;e++)t[e]=a(t[e])}var w=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function j(t){u(t);let e="";for(let o=0;o<t.length;o++)e+=w[t[o]];return e}var i={_0:48,_9:57,_A:65,_F:70,_a:97,_f:102};function x(t){if(t>=i._0&&t<=i._9)return t-i._0;if(t>=i._A&&t<=i._F)return t-(i._A-10);if(t>=i._a&&t<=i._f)return t-(i._a-10)}function V(t){if(typeof t!="string")throw new Error("hex string expected, got "+typeof t);let e=t.length,o=e/2;if(e%2)throw new Error("padded hex string expected, got unpadded hex of length "+e);let n=new Uint8Array(o);for(let r=0,c=0;r<o;r++,c+=2){let p=x(t.charCodeAt(c)),l=x(t.charCodeAt(c+1));if(p===void 0||l===void 0){let g=t[c]+t[c+1];throw new Error('hex string expected, got non-hex character "'+g+'" at index '+c)}n[r]=p*16+l}return n}var b=async()=>{};async function D(t,e,o){let n=Date.now();for(let r=0;r<t;r++){o(r);let c=Date.now()-n;c>=0&&c<e||(await b(),n+=c)}}function m(t){if(typeof t!="string")throw new Error(`utf8ToBytes expected string, got ${typeof t}`);return new Uint8Array(new TextEncoder().encode(t))}function s(t){return typeof t=="string"&&(t=m(t)),u(t),t}function F(...t){let e=0;for(let n=0;n<t.length;n++){let r=t[n];u(r),e+=r.length}let o=new Uint8Array(e);for(let n=0,r=0;n<t.length;n++){let c=t[n];o.set(c,r),r+=c.length}return o}var y=class{clone(){return this._cloneInto()}},L={}.toString;function R(t,e){if(e!==void 0&&L.call(e)!=="[object Object]")throw new Error("Options should be object or undefined");return Object.assign(t,e)}function C(t){let e=n=>t().update(s(n)).digest(),o=t();return e.outputLen=o.outputLen,e.blockLen=o.blockLen,e.create=()=>t(),e}function I(t){let e=(n,r)=>t(r).update(s(n)).digest(),o=t({});return e.outputLen=o.outputLen,e.blockLen=o.blockLen,e.create=n=>t(n),e}function W(t){let e=(n,r)=>t(r).update(s(n)).digest(),o=t({});return e.outputLen=o.outputLen,e.blockLen=o.blockLen,e.create=n=>t(n),e}function M(t=32){if(f&&typeof f.getRandomValues=="function")return f.getRandomValues(new Uint8Array(t));throw new Error("crypto.getRandomValues must be defined")}export{y as Hash,D as asyncLoop,a as byteSwap,T as byteSwap32,S as byteSwapIfBE,j as bytesToHex,R as checkOpts,F as concatBytes,B as createView,V as hexToBytes,h as isBytes,d as isLE,b as nextTick,M as randomBytes,k as rotl,E as rotr,s as toBytes,U as u32,O as u8,m as utf8ToBytes,C as wrapConstructor,I as wrapConstructorWithOpts,W as wrapXOFConstructorWithOpts};
/*! Bundled license information:

@noble/hashes/esm/utils.js:
  (*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) *)
*/
//# sourceMappingURL=utils.js.map