"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEngine = void 0;
const useEngine = (engine) => {
    return {
        onExecute: ({ setExecuteFn }) => {
            if (engine.execute) {
                setExecuteFn(engine.execute);
            }
        },
        onParse: ({ setParseFn }) => {
            if (engine.parse) {
                setParseFn(engine.parse);
            }
        },
        onValidate: ({ setValidationFn, addValidationRule }) => {
            if (engine.validate) {
                setValidationFn(engine.validate);
            }
            engine.specifiedRules?.map(addValidationRule);
        },
        onSubscribe: ({ setSubscribeFn }) => {
            if (engine.subscribe) {
                setSubscribeFn(engine.subscribe);
            }
        },
    };
};
exports.useEngine = useEngine;
