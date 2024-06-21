/* esm.sh - esbuild bundle(micromark-extension-mdx-jsx@3.0.0) denonext production */
import{cont as N,start as l}from"/v135/estree-util-is-identifier-name@3.0.0/denonext/estree-util-is-identifier-name.mjs";import{factoryMdxExpression as c}from"/v135/micromark-factory-mdx-expression@2.0.1/denonext/micromark-factory-mdx-expression.mjs";import{markdownLineEnding as C,markdownLineEndingOrSpace as p,markdownSpace as d,unicodeWhitespace as b}from"/v135/micromark-util-character@2.0.1/denonext/micromark-util-character.mjs";import{VFileMessage as tt}from"/v135/vfile-message@4.0.2/denonext/vfile-message.mjs";var rt="https://github.com/micromark/micromark-extension-mdx-jsx";function X(r,u,s,x,g,m,w,E,J,_,T,n,o,A,k,$,L,et,it,ut,V,j,P,W,O,M,R,z,U,xt,st,lt){let F=this,a,S;return mt;function mt(t){return r.enter(E),r.enter(J),r.consume(t),r.exit(J),ot}function ot(t){return p(t)?s(t):(a=ht,e(t))}function ht(t){if(t===47)return r.enter(_),r.consume(t),r.exit(_),a=bt,e;if(t===62)return f(t);if(t!==null&&t>=0&&l(t))return r.enter(n),r.enter(o),r.consume(t),B;i(t,"before name","a character that can start a name, such as a letter, `$`, or `_`"+(t===33?" (note: to create a comment in MDX, use `{/* text */}`)":""))}function bt(t){if(t===62)return f(t);if(t!==null&&t>=0&&l(t))return r.enter(n),r.enter(o),r.consume(t),B;i(t,"before name","a character that can start a name, such as a letter, `$`, or `_`"+(t===42||t===47?" (note: JS comments in JSX tags are not supported in MDX)":""))}function B(t){if(t!==null&&t>=0&&N(t,{jsx:!0}))return r.consume(t),B;if(t===46||t===47||t===58||t===62||t===123||p(t)||b(t))return r.exit(o),a=pt,e(t);i(t,"in name","a name character such as letters, digits, `$`, or `_`; whitespace before attributes; or the end of the tag"+(t===64?" (note: to create a link in MDX, use `[text](url)`)":""))}function pt(t){if(t===46)return r.enter(A),r.consume(t),r.exit(A),a=q,e;if(t===58)return r.enter($),r.consume(t),r.exit($),a=wt,e;if(t===47||t===62||t===123||t!==null&&t>=0&&l(t))return r.exit(n),h(t);i(t,"after name","a character that can start an attribute name, such as a letter, `$`, or `_`; whitespace before attributes; or the end of the tag")}function q(t){if(t!==null&&t>=0&&l(t))return r.enter(k),r.consume(t),Q;i(t,"before member name","a character that can start an attribute name, such as a letter, `$`, or `_`; whitespace before attributes; or the end of the tag")}function Q(t){if(t!==null&&t>=0&&N(t,{jsx:!0}))return r.consume(t),Q;if(t===46||t===47||t===62||t===123||p(t)||b(t))return r.exit(k),a=gt,e(t);i(t,"in member name","a name character such as letters, digits, `$`, or `_`; whitespace before attributes; or the end of the tag"+(t===64?" (note: to create a link in MDX, use `[text](url)`)":""))}function gt(t){if(t===46)return r.enter(A),r.consume(t),r.exit(A),a=q,e;if(t===47||t===62||t===123||t!==null&&t>=0&&l(t))return r.exit(n),h(t);i(t,"after member name","a character that can start an attribute name, such as a letter, `$`, or `_`; whitespace before attributes; or the end of the tag")}function wt(t){if(t!==null&&t>=0&&l(t))return r.enter(L),r.consume(t),G;i(t,"before local name","a character that can start a name, such as a letter, `$`, or `_`"+(t===43||t!==null&&t>46&&t<58?" (note: to create a link in MDX, use `[text](url)`)":""))}function G(t){if(t!==null&&t>=0&&N(t,{jsx:!0}))return r.consume(t),G;if(t===47||t===62||t===123||p(t)||b(t))return r.exit(L),a=Jt,e(t);i(t,"in local name","a name character such as letters, digits, `$`, or `_`; whitespace before attributes; or the end of the tag")}function Jt(t){if(t===47||t===62||t===123||t!==null&&t>=0&&l(t))return r.exit(n),h(t);i(t,"after local name","a character that can start an attribute name, such as a letter, `$`, or `_`; whitespace before attributes; or the end of the tag")}function h(t){if(t===47)return r.enter(T),r.consume(t),r.exit(T),a=Vt,e;if(t===62)return f(t);if(t===123)return c.call(F,r,Tt,et,it,ut,x,g,m,!0,!1,w)(t);if(t!==null&&t>=0&&l(t))return r.enter(V),r.enter(j),r.enter(P),r.consume(t),H;i(t,"before attribute name","a character that can start an attribute name, such as a letter, `$`, or `_`; whitespace before attributes; or the end of the tag")}function Tt(t){return a=h,e(t)}function H(t){if(t!==null&&t>=0&&N(t,{jsx:!0}))return r.consume(t),H;if(t===47||t===58||t===61||t===62||t===123||p(t)||b(t))return r.exit(P),a=Ft,e(t);i(t,"in attribute name","an attribute name character such as letters, digits, `$`, or `_`; `=` to initialize a value; whitespace before attributes; or the end of the tag")}function Ft(t){if(t===58)return r.enter(W),r.consume(t),r.exit(W),a=Et,e;if(t===61)return r.exit(j),r.enter(M),r.consume(t),r.exit(M),a=K,e;if(t===47||t===62||t===123||p(t)||b(t)||t!==null&&t>=0&&l(t))return r.exit(j),r.exit(V),a=h,e(t);i(t,"after attribute name","a character that can start an attribute name, such as a letter, `$`, or `_`; `=` to initialize a value; or the end of the tag")}function Et(t){if(t!==null&&t>=0&&l(t))return r.enter(O),r.consume(t),I;i(t,"before local attribute name","a character that can start an attribute name, such as a letter, `$`, or `_`; `=` to initialize a value; or the end of the tag")}function I(t){if(t!==null&&t>=0&&N(t,{jsx:!0}))return r.consume(t),I;if(t===47||t===61||t===62||t===123||p(t)||b(t))return r.exit(O),r.exit(j),a=At,e(t);i(t,"in local attribute name","an attribute name character such as letters, digits, `$`, or `_`; `=` to initialize a value; whitespace before attributes; or the end of the tag")}function At(t){if(t===61)return r.enter(M),r.consume(t),r.exit(M),a=K,e;if(t===47||t===62||t===123||t!==null&&t>=0&&l(t))return r.exit(V),h(t);i(t,"after local attribute name","a character that can start an attribute name, such as a letter, `$`, or `_`; `=` to initialize a value; or the end of the tag")}function K(t){if(t===34||t===39)return r.enter(R),r.enter(z),r.consume(t),r.exit(z),S=t,D;if(t===123)return c.call(F,r,kt,xt,st,lt,x,g,m,!1,!1,w)(t);i(t,"before attribute value","a character that can start an attribute value, such as `\"`, `'`, or `{`"+(t===60?" (note: to use an element or fragment as a prop value in MDX, use `{<element />}`)":""))}function kt(t){return r.exit(V),a=h,e(t)}function D(t){return t===null&&i(t,"in attribute value","a corresponding closing quote `"+String.fromCodePoint(S)+"`"),t===S?(r.enter(z),r.consume(t),r.exit(z),r.exit(R),r.exit(V),S=void 0,a=h,e):C(t)?(a=D,e(t)):(r.enter(U),Y(t))}function Y(t){return t===null||t===S||C(t)?(r.exit(U),D(t)):(r.consume(t),Y)}function Vt(t){if(t===62)return f(t);i(t,"after self-closing slash","`>` to end the tag"+(t===42||t===47?" (note: JS comments in JSX tags are not supported in MDX)":""))}function f(t){return r.enter(J),r.consume(t),r.exit(J),r.exit(E),u}function e(t){return C(t)?(r.enter("lineEnding"),r.consume(t),r.exit("lineEnding"),St):d(t)||b(t)?(r.enter("esWhitespace"),Z(t)):a(t)}function Z(t){return C(t)?(r.exit("esWhitespace"),e(t)):d(t)||b(t)?(r.consume(t),Z):(r.exit("esWhitespace"),a(t))}function St(t){if(!w&&F.parser.lazy[F.now().line]){let v=new tt("Unexpected lazy line in container, expected line to be prefixed with `>` when in a block quote, whitespace when in a list, etc",F.now(),"micromark-extension-mdx-jsx:unexpected-lazy");throw v.url=rt+"#unexpected-lazy-line-in-container-expected-line-to-be",v}return e(t)}function i(t,v,Nt){let y=new tt("Unexpected "+(t===null?"end of file":"character `"+(t===96?"` ` `":String.fromCodePoint(t))+"` ("+_t(t)+")")+" "+v+", expected "+Nt,F.now(),"micromark-extension-mdx-jsx:unexpected-"+(t===null?"eof":"character"));throw y.url=rt+(t===null?"#unexpected-end-of-file-at-expected-expect":"#unexpected-character-at-expected-expect"),y}}function _t(r){return"U+"+r.toString(16).toUpperCase().padStart(4,"0")}function nt(r,u){return{name:"mdxJsxTextTag",tokenize:s};function s(x,g,m){return X.call(this,x,g,m,r,u.acornOptions,u.addResult,!0,"mdxJsxTextTag","mdxJsxTextTagMarker","mdxJsxTextTagClosingMarker","mdxJsxTextTagSelfClosingMarker","mdxJsxTextTagName","mdxJsxTextTagNamePrimary","mdxJsxTextTagNameMemberMarker","mdxJsxTextTagNameMember","mdxJsxTextTagNamePrefixMarker","mdxJsxTextTagNameLocal","mdxJsxTextTagExpressionAttribute","mdxJsxTextTagExpressionAttributeMarker","mdxJsxTextTagExpressionAttributeValue","mdxJsxTextTagAttribute","mdxJsxTextTagAttributeName","mdxJsxTextTagAttributeNamePrimary","mdxJsxTextTagAttributeNamePrefixMarker","mdxJsxTextTagAttributeNameLocal","mdxJsxTextTagAttributeInitializerMarker","mdxJsxTextTagAttributeValueLiteral","mdxJsxTextTagAttributeValueLiteralMarker","mdxJsxTextTagAttributeValueLiteralValue","mdxJsxTextTagAttributeValueExpression","mdxJsxTextTagAttributeValueExpressionMarker","mdxJsxTextTagAttributeValueExpressionValue")}}import{markdownLineEnding as $t,markdownSpace as jt}from"/v135/micromark-util-character@2.0.1/denonext/micromark-util-character.mjs";import{factorySpace as Mt}from"/v135/micromark-factory-space@2.0.0/denonext/micromark-factory-space.mjs";function at(r,u){return{name:"mdxJsxFlowTag",tokenize:s,concrete:!0};function s(x,g,m){let w=this;return E;function E(n){return J(n)}function J(n){return X.call(w,x,_,m,r,u.acornOptions,u.addResult,!1,"mdxJsxFlowTag","mdxJsxFlowTagMarker","mdxJsxFlowTagClosingMarker","mdxJsxFlowTagSelfClosingMarker","mdxJsxFlowTagName","mdxJsxFlowTagNamePrimary","mdxJsxFlowTagNameMemberMarker","mdxJsxFlowTagNameMember","mdxJsxFlowTagNamePrefixMarker","mdxJsxFlowTagNameLocal","mdxJsxFlowTagExpressionAttribute","mdxJsxFlowTagExpressionAttributeMarker","mdxJsxFlowTagExpressionAttributeValue","mdxJsxFlowTagAttribute","mdxJsxFlowTagAttributeName","mdxJsxFlowTagAttributeNamePrimary","mdxJsxFlowTagAttributeNamePrefixMarker","mdxJsxFlowTagAttributeNameLocal","mdxJsxFlowTagAttributeInitializerMarker","mdxJsxFlowTagAttributeValueLiteral","mdxJsxFlowTagAttributeValueLiteralMarker","mdxJsxFlowTagAttributeValueLiteralValue","mdxJsxFlowTagAttributeValueExpression","mdxJsxFlowTagAttributeValueExpressionMarker","mdxJsxFlowTagAttributeValueExpressionValue")(n)}function _(n){return jt(n)?Mt(x,T,"whitespace")(n):T(n)}function T(n){let o=w.parser.constructs.flow[123],k=(Array.isArray(o)?o:o?[o]:[]).find($=>$.name==="mdxFlowExpression");return n===60?E(n):n===123&&k?x.attempt(k,T,m)(n):n===null||$t(n)?g(n):m(n)}}}function zt(r){let u=r||{},s=u.acorn,x;if(s){if(!s.parse||!s.parseExpressionAt)throw new Error("Expected a proper `acorn` instance passed in as `options.acorn`");x=Object.assign({ecmaVersion:2024,sourceType:"module"},u.acornOptions,{locations:!0})}else if(u.acornOptions||u.addResult)throw new Error("Expected an `acorn` instance passed in as `options.acorn`");return{flow:{60:at(s||void 0,{acornOptions:x,addResult:u.addResult||void 0})},text:{60:nt(s||void 0,{acornOptions:x,addResult:u.addResult||void 0})}}}export{zt as mdxJsx};
//# sourceMappingURL=micromark-extension-mdx-jsx.mjs.map