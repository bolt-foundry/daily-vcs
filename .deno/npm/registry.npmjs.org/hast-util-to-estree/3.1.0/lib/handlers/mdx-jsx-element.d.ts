/**
 * Turn an MDX JSX element node into an estree node.
 *
 * @param {MdxJsxFlowElement | MdxJsxTextElement} node
 *   hast node to transform.
 * @param {State} state
 *   Info passed around about the current state.
 * @returns {JsxElement | JsxFragment}
 *   JSX element or fragment.
 */
export function mdxJsxElement(node: MdxJsxFlowElement | MdxJsxTextElement, state: State): JsxElement | JsxFragment;
export type Expression = import('estree').Expression;
export type JsxAttribute = import('estree-jsx').JSXAttribute;
export type JsxElement = import('estree-jsx').JSXElement;
export type JsxFragment = import('estree-jsx').JSXFragment;
export type JsxSpreadAttribute = import('estree-jsx').JSXSpreadAttribute;
export type MdxJsxFlowElement = import('mdast-util-mdx-jsx').MdxJsxFlowElementHast;
export type MdxJsxTextElement = import('mdast-util-mdx-jsx').MdxJsxTextElementHast;
export type State = import('../state.js').State;
