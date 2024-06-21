"use strict";
/*

Terminology:

- Match Builder
- Matcher
  - Tag Matcher
  - Data Matcher
- Pattern
  - Tag
  - Data
- Handler
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.match = void 0;
const utils_js_1 = require("./lib/utils.js");
const controller_js_1 = require("./record/types/controller.js");
const lodash_ismatch_1 = __importDefault(require("lodash.ismatch"));
const match = (...args) => {
    const input = args[0];
    const elseBranch = {
        defined: false,
        value: undefined,
    };
    const matcherStack = [];
    const tagMatchers = {};
    const execute = () => {
        for (const matcher of matcherStack) {
            if ((typeof input === `string` && matcher.tag === input) ||
                (typeof input === `object` && matcher.tag === (0, controller_js_1.getTag)(input))) {
                if (matcher._tag === `DataMatcherDefinition`) {
                    if ((0, lodash_ismatch_1.default)(input, matcher.dataPattern)) {
                        return matcher.handler(input);
                    }
                }
                else {
                    return matcher.handler(input);
                }
            }
        }
        if (elseBranch.defined) {
            return typeof elseBranch.value === `function` ? elseBranch.value(input) : elseBranch.value;
        }
        throw new Error(`No matcher matched on the given data. This should be impossible. Are you sure the runtime is not different than the static types? Please report a bug at https://jasonkuhrt/alge. The given data was:\n${(0, utils_js_1.inspect)(input)}`);
    };
    const proxy = new Proxy({}, {
        get: (_target, property, _receiver) => {
            if (property === `else`) {
                if (matcherStack.length === 0)
                    return undefined;
                elseBranch.defined = true;
                return (value) => {
                    elseBranch.value = value;
                    return execute();
                };
            }
            if (property === `done`) {
                // done only when exhaustive, only exhaustive when every tag generally matched
                if (Object.keys(tagMatchers).length === 0)
                    return undefined;
                return execute;
            }
            return (...args) => {
                const matcher = args.length === 1
                    ? { _tag: `TagMatcherDefinition`, tag: property, handler: args[0] }
                    : {
                        _tag: `DataMatcherDefinition`,
                        tag: property,
                        dataPattern: args[0],
                        handler: args[1],
                    };
                if (tagMatchers[property]) {
                    if (matcher._tag === `TagMatcherDefinition`) {
                        throw new Error(`${property} has already been matched on.`);
                    }
                    throw new Error(`Cannot define this data matcher:\n${(0, utils_js_1.inspect)(args[0])}\nfor ${property} because it will never match because it comes after matching on ${property} generally.`);
                }
                matcherStack.push(matcher);
                if (matcher._tag === `TagMatcherDefinition`) {
                    tagMatchers[property] = matcher;
                }
                return proxy;
            };
        },
    });
    // eslint-disable-next-line
    return proxy;
};
exports.match = match;
//# sourceMappingURL=match.js.map