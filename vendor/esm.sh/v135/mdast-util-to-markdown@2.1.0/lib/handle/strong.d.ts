/**
 * @param {Strong} node
 * @param {Parents | undefined} _
 * @param {State} state
 * @param {Info} info
 * @returns {string}
 */
export function strong(node: Strong, _: Parents | undefined, state: State, info: Info): string;
export namespace strong {
    export { strongPeek as peek };
}
export type Parents = import('https://esm.sh/v135/@types/mdast@4.0.3/index.d.ts').Parents;
export type Strong = import('https://esm.sh/v135/@types/mdast@4.0.3/index.d.ts').Strong;
export type Info = import('../types.d.ts').Info;
export type State = import('../types.d.ts').State;
/**
 * @param {Strong} _
 * @param {Parents | undefined} _1
 * @param {State} state
 * @returns {string}
 */
declare function strongPeek(_: Strong, _1: Parents | undefined, state: State): string;
export {};
