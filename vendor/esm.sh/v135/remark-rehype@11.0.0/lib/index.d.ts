/**
 * Turn markdown into HTML.
 *
 * ##### Notes
 *
 * ###### Signature
 *
 * *   if a processor is given, runs the (rehype) plugins used on it with a
 *     hast tree, then discards the result (*bridge mode*)
 * *   otherwise, returns a hast tree, the plugins used after `remarkRehype`
 *     are rehype plugins (*mutate mode*)
 *
 * > 👉 **Note**: It’s highly unlikely that you want to pass a `processor`.
 *
 * ###### HTML
 *
 * Raw HTML is available in mdast as `html` nodes and can be embedded in hast
 * as semistandard `raw` nodes.
 * Most plugins ignore `raw` nodes but two notable ones don’t:
 *
 * *   `rehype-stringify` also has an option `allowDangerousHtml` which will
 *     output the raw HTML.
 *     This is typically discouraged as noted by the option name but is useful if
 *     you completely trust authors
 * *   `rehype-raw` can handle the raw embedded HTML strings by parsing them
 *     into standard hast nodes (`element`, `text`, etc).
 *     This is a heavy task as it needs a full HTML parser, but it is the only way
 *     to support untrusted content
 *
 * ###### Footnotes
 *
 * Many options supported here relate to footnotes.
 * Footnotes are not specified by CommonMark, which we follow by default.
 * They are supported by GitHub, so footnotes can be enabled in markdown with
 * `remark-gfm`.
 *
 * The options `footnoteBackLabel` and `footnoteLabel` define natural language
 * that explains footnotes, which is hidden for sighted users but shown to
 * assistive technology.
 * When your page is not in English, you must define translated values.
 *
 * Back references use ARIA attributes, but the section label itself uses a
 * heading that is hidden with an `sr-only` class.
 * To show it to sighted users, define different attributes in
 * `footnoteLabelProperties`.
 *
 * ###### Clobbering
 *
 * Footnotes introduces a problem, as it links footnote calls to footnote
 * definitions on the page through `id` attributes generated from user content,
 * which results in DOM clobbering.
 *
 * DOM clobbering is this:
 *
 * ```html
 * <p id=x></p>
 * <script>alert(x) // `x` now refers to the DOM `p#x` element</script>
 * ```
 *
 * Elements by their ID are made available by browsers on the `window` object,
 * which is a security risk.
 * Using a prefix solves this problem.
 *
 * More information on how to handle clobbering and the prefix is explained in
 * *Example: headings (DOM clobbering)* in `rehype-sanitize`.
 *
 * ###### Unknown nodes
 *
 * Unknown nodes are nodes with a type that isn’t in `handlers` or `passThrough`.
 * The default behavior for unknown nodes is:
 *
 * *   when the node has a `value` (and doesn’t have `data.hName`,
 *     `data.hProperties`, or `data.hChildren`, see later), create a hast `text`
 *     node
 * *   otherwise, create a `<div>` element (which could be changed with
 *     `data.hName`), with its children mapped from mdast to hast as well
 *
 * This behavior can be changed by passing an `unknownHandler`.
 *
 * @overload
 * @param {Processor} processor
 * @param {Readonly<Options> | null | undefined} [options]
 * @returns {TransformBridge}
 *
 * @overload
 * @param {Readonly<Options> | null | undefined} [options]
 * @returns {TransformMutate}
 *
 * @param {Readonly<Options> | Processor | null | undefined} [destination]
 *   Processor or configuration (optional).
 * @param {Readonly<Options> | null | undefined} [options]
 *   When a processor was given, configuration (optional).
 * @returns {TransformBridge | TransformMutate}
 *   Transform.
 */
export default function remarkRehype(processor: Processor, options?: Readonly<Options> | null | undefined): TransformBridge;
/**
 * Turn markdown into HTML.
 *
 * ##### Notes
 *
 * ###### Signature
 *
 * *   if a processor is given, runs the (rehype) plugins used on it with a
 *     hast tree, then discards the result (*bridge mode*)
 * *   otherwise, returns a hast tree, the plugins used after `remarkRehype`
 *     are rehype plugins (*mutate mode*)
 *
 * > 👉 **Note**: It’s highly unlikely that you want to pass a `processor`.
 *
 * ###### HTML
 *
 * Raw HTML is available in mdast as `html` nodes and can be embedded in hast
 * as semistandard `raw` nodes.
 * Most plugins ignore `raw` nodes but two notable ones don’t:
 *
 * *   `rehype-stringify` also has an option `allowDangerousHtml` which will
 *     output the raw HTML.
 *     This is typically discouraged as noted by the option name but is useful if
 *     you completely trust authors
 * *   `rehype-raw` can handle the raw embedded HTML strings by parsing them
 *     into standard hast nodes (`element`, `text`, etc).
 *     This is a heavy task as it needs a full HTML parser, but it is the only way
 *     to support untrusted content
 *
 * ###### Footnotes
 *
 * Many options supported here relate to footnotes.
 * Footnotes are not specified by CommonMark, which we follow by default.
 * They are supported by GitHub, so footnotes can be enabled in markdown with
 * `remark-gfm`.
 *
 * The options `footnoteBackLabel` and `footnoteLabel` define natural language
 * that explains footnotes, which is hidden for sighted users but shown to
 * assistive technology.
 * When your page is not in English, you must define translated values.
 *
 * Back references use ARIA attributes, but the section label itself uses a
 * heading that is hidden with an `sr-only` class.
 * To show it to sighted users, define different attributes in
 * `footnoteLabelProperties`.
 *
 * ###### Clobbering
 *
 * Footnotes introduces a problem, as it links footnote calls to footnote
 * definitions on the page through `id` attributes generated from user content,
 * which results in DOM clobbering.
 *
 * DOM clobbering is this:
 *
 * ```html
 * <p id=x></p>
 * <script>alert(x) // `x` now refers to the DOM `p#x` element</script>
 * ```
 *
 * Elements by their ID are made available by browsers on the `window` object,
 * which is a security risk.
 * Using a prefix solves this problem.
 *
 * More information on how to handle clobbering and the prefix is explained in
 * *Example: headings (DOM clobbering)* in `rehype-sanitize`.
 *
 * ###### Unknown nodes
 *
 * Unknown nodes are nodes with a type that isn’t in `handlers` or `passThrough`.
 * The default behavior for unknown nodes is:
 *
 * *   when the node has a `value` (and doesn’t have `data.hName`,
 *     `data.hProperties`, or `data.hChildren`, see later), create a hast `text`
 *     node
 * *   otherwise, create a `<div>` element (which could be changed with
 *     `data.hName`), with its children mapped from mdast to hast as well
 *
 * This behavior can be changed by passing an `unknownHandler`.
 *
 * @overload
 * @param {Processor} processor
 * @param {Readonly<Options> | null | undefined} [options]
 * @returns {TransformBridge}
 *
 * @overload
 * @param {Readonly<Options> | null | undefined} [options]
 * @returns {TransformMutate}
 *
 * @param {Readonly<Options> | Processor | null | undefined} [destination]
 *   Processor or configuration (optional).
 * @param {Readonly<Options> | null | undefined} [options]
 *   When a processor was given, configuration (optional).
 * @returns {TransformBridge | TransformMutate}
 *   Transform.
 */
export default function remarkRehype(options?: Readonly<Options> | null | undefined): TransformMutate;
export type HastRoot = import('https://esm.sh/v135/@types/hast@3.0.3/index.d.ts').Root;
export type MdastRoot = import('https://esm.sh/v135/@types/mdast@4.0.3/index.d.ts').Root;
export type Options = import('https://esm.sh/v135/mdast-util-to-hast@13.0.2/index.d.ts').Options;
export type Processor = import('https://esm.sh/v135/unified@11.0.4/index.d.ts').Processor;
export type VFile = import('https://esm.sh/v135/vfile@6.0.1/index.d.ts').VFile;
/**
 * Bridge-mode.
 *
 * Runs the destination with the new hast tree.
 * Discards result.
 */
export type TransformBridge = (tree: MdastRoot, file: VFile) => Promise<undefined>;
/**
 * Mutate-mode.
 *
 * Further transformers run on the hast tree.
 */
export type TransformMutate = (tree: MdastRoot, file: VFile) => HastRoot;
