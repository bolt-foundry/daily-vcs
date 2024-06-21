/* esm.sh - esbuild bundle(hast-util-to-estree@3.1.0) denonext production */
function X(e,t){let n={type:"Block",value:e.value};t.inherit(e,n),t.comments.push(n);let r={type:"JSXEmptyExpression",comments:[Object.assign({},n,{leading:!1,trailing:!0})]};t.patch(e,r);let s={type:"JSXExpressionContainer",expression:r};return t.patch(e,s),s}import{stringify as P}from"/v135/comma-separated-tokens@2.0.3/denonext/comma-separated-tokens.mjs";import{name as x}from"/v135/estree-util-is-identifier-name@3.0.0/denonext/estree-util-is-identifier-name.mjs";import{find as k,hastToReact as T,svg as I}from"/v135/property-information@6.4.0/denonext/property-information.mjs";import{stringify as V}from"/v135/space-separated-tokens@2.0.2/denonext/space-separated-tokens.mjs";import M from"/v135/style-to-object@0.4.4/denonext/style-to-object.mjs";var g={}.hasOwnProperty,z=/[A-Z]/g,B=/-([a-z])/g,q=new Set(["td","th"]);function C(e,t){let n=t.schema,r=n,s=e.properties||{};n.space==="html"&&e.tagName.toLowerCase()==="svg"&&(r=I,t.schema=r);let i=t.all(e),o=[],l,h,c;for(l in s)if(g.call(s,l)){let a=s[l],p=k(r,l),m;if(a==null||a===!1||typeof a=="number"&&Number.isNaN(a)||!a&&p.boolean)continue;if(l=t.elementAttributeNameCase==="react"&&p.space?T[p.property]||p.property:p.attribute,Array.isArray(a)&&(a=p.commaSeparated?P(a):V(a)),l==="style"){let f=typeof a=="object"?a:D(String(a),e.tagName);t.stylePropertyNameCase==="css"&&(f=H(f));let y=[],d;for(d in f)g.call(f,d)&&y.push({type:"Property",method:!1,shorthand:!1,computed:!1,key:x(d)?{type:"Identifier",name:d}:{type:"Literal",value:d},value:{type:"Literal",value:String(f[d])},kind:"init"});c=y,m={type:"JSXExpressionContainer",expression:{type:"ObjectExpression",properties:y}}}else if(a===!0)m=null;else if(t.tableCellAlignToStyle&&q.has(e.tagName)&&l==="align"){h=String(a);continue}else m={type:"Literal",value:String(a)};x(l,{jsx:!0})?o.push({type:"JSXAttribute",name:{type:"JSXIdentifier",name:l},value:m}):o.push({type:"JSXSpreadAttribute",argument:{type:"ObjectExpression",properties:[{type:"Property",method:!1,shorthand:!1,computed:!1,key:{type:"Literal",value:String(l)},value:m||{type:"Literal",value:!0},kind:"init"}]}})}if(h!==void 0){c||(c=[],o.push({type:"JSXAttribute",name:{type:"JSXIdentifier",name:"style"},value:{type:"JSXExpressionContainer",expression:{type:"ObjectExpression",properties:c}}}));let a=t.stylePropertyNameCase==="css"?v("textAlign"):"textAlign";c.push({type:"Property",method:!1,shorthand:!1,computed:!1,key:x(a)?{type:"Identifier",name:a}:{type:"Literal",value:a},value:{type:"Literal",value:h},kind:"init"})}t.schema=n;let u={type:"JSXElement",openingElement:{type:"JSXOpeningElement",attributes:o,name:t.createJsxElementName(e.tagName),selfClosing:i.length===0},closingElement:i.length>0?{type:"JSXClosingElement",name:t.createJsxElementName(e.tagName)}:null,children:i};return t.inherit(e,u),u}function D(e,t){let n={};try{M(e,r)}catch(s){let i=s;throw new Error("Could not parse `style` attribute on `"+t+"`",{cause:i})}return n;function r(s,i){let o=s;o.slice(0,2)!=="--"&&(o.slice(0,4)==="-ms-"&&(o="ms-"+o.slice(4)),o=o.replace(B,R)),n[o]=i}}function H(e){let t={},n;for(n in e)g.call(e,n)&&(t[v(n)]=e[n]);return t}function v(e){let t=e.replace(z,U);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function R(e,t){return t.toUpperCase()}function U(e){return"-"+e.toLowerCase()}import{attachComments as Z}from"/v135/estree-util-attach-comments@3.0.0/denonext/estree-util-attach-comments.mjs";function S(e,t){let n=e.data&&e.data.estree,r=n&&n.comments||[],s;n&&(t.comments.push(...r),Z(n,n.comments),s=n.body[0]&&n.body[0].type==="ExpressionStatement"&&n.body[0].expression||void 0),s||(s={type:"JSXEmptyExpression"},t.patch(e,s));let i={type:"JSXExpressionContainer",expression:s};return t.inherit(e,i),i}import{attachComments as w}from"/v135/estree-util-attach-comments@3.0.0/denonext/estree-util-attach-comments.mjs";import{svg as _}from"/v135/property-information@6.4.0/denonext/property-information.mjs";function b(e,t){let n=t.schema,r=n,s=e.attributes||[],i=-1;e.name&&n.space==="html"&&e.name.toLowerCase()==="svg"&&(r=_,t.schema=r);let o=t.all(e),l=[];for(;++i<s.length;){let c=s[i],u=c.value,a;if(c.type==="mdxJsxAttribute"){if(u==null)a=null;else if(typeof u=="object"){let m=u.data&&u.data.estree,f=m&&m.comments||[],y;m&&(t.comments.push(...f),w(m,m.comments),y=m.body[0]&&m.body[0].type==="ExpressionStatement"&&m.body[0].expression||void 0),a={type:"JSXExpressionContainer",expression:y||{type:"JSXEmptyExpression"}},t.inherit(u,a)}else a={type:"Literal",value:String(u)};let p={type:"JSXAttribute",name:t.createJsxAttributeName(c.name),value:a};t.inherit(c,p),l.push(p)}else{let p=c.data&&c.data.estree,m=p&&p.comments||[],f;p&&(t.comments.push(...m),w(p,p.comments),f=p.body[0]&&p.body[0].type==="ExpressionStatement"&&p.body[0].expression&&p.body[0].expression.type==="ObjectExpression"&&p.body[0].expression.properties&&p.body[0].expression.properties[0]&&p.body[0].expression.properties[0].type==="SpreadElement"&&p.body[0].expression.properties[0].argument||void 0);let y={type:"JSXSpreadAttribute",argument:f||{type:"ObjectExpression",properties:[]}};t.inherit(c,y),l.push(y)}}t.schema=n;let h=e.name?{type:"JSXElement",openingElement:{type:"JSXOpeningElement",attributes:l,name:t.createJsxElementName(e.name),selfClosing:o.length===0},closingElement:o.length>0?{type:"JSXClosingElement",name:t.createJsxElementName(e.name)}:null,children:o}:{type:"JSXFragment",openingFragment:{type:"JSXOpeningFragment"},closingFragment:{type:"JSXClosingFragment"},children:o};return t.inherit(e,h),h}import{attachComments as G}from"/v135/estree-util-attach-comments@3.0.0/denonext/estree-util-attach-comments.mjs";function N(e,t){let n=e.data&&e.data.estree,r=n&&n.comments||[];n&&(t.comments.push(...r),G(n,r),t.esm.push(...n.body))}import{whitespace as K}from"/v135/hast-util-whitespace@3.0.0/denonext/hast-util-whitespace.mjs";function A(e,t){let n=t.all(e),r=[],s=-1,i;for(;++s<n.length;){let l=n[s];l.type==="JSXExpressionContainer"&&l.expression.type==="Literal"&&K(String(l.expression.value))?i&&i.push(l):(i&&r.push(...i),r.push(l),i=[])}let o={type:"JSXFragment",openingFragment:{type:"JSXOpeningFragment"},closingFragment:{type:"JSXClosingFragment"},children:r};return t.inherit(e,o),o}function F(e,t){let n=String(e.value||"");if(n){let r={type:"Literal",value:n};t.inherit(e,r);let s={type:"JSXExpressionContainer",expression:r};return t.patch(e,s),s}}var E={comment:X,doctype:Q,element:C,mdxFlowExpression:S,mdxJsxFlowElement:b,mdxJsxTextElement:b,mdxTextExpression:S,mdxjsEsm:N,root:A,text:F};function Q(){}import{ok as J}from"/v135/devlop@1.1.0/denonext/devlop.mjs";import{html as W,svg as Y}from"/v135/property-information@6.4.0/denonext/property-information.mjs";import{position as $}from"/v135/unist-util-position@5.0.0/denonext/unist-util-position.mjs";import{zwitch as ee}from"/v135/zwitch@2.0.4/denonext/zwitch.mjs";var te={}.hasOwnProperty,ne=new Set(["table","tbody","thead","tfoot","tr"]);function j(e){let t=ee("type",{invalid:re,unknown:se,handlers:{...E,...e.handlers}});return{elementAttributeNameCase:e.elementAttributeNameCase||"react",schema:e.space==="svg"?Y:W,stylePropertyNameCase:e.stylePropertyNameCase||"dom",tableCellAlignToStyle:e.tableCellAlignToStyle!==!1,comments:[],esm:[],all:oe,createJsxAttributeName:ae,createJsxElementName:pe,handle:n,inherit:ie,patch:L};function n(r){return t(r,this)}}function re(e){throw new Error("Cannot handle value `"+e+"`, expected node")}function se(e){throw J(e&&typeof e=="object"),J("type"in e),new Error("Cannot handle unknown node `"+e.type+"`")}function oe(e){let t=e.children||[],n=-1,r=[],s=this.schema.space==="html"&&e.type==="element"&&ne.has(e.tagName.toLowerCase());for(;++n<t.length;){let i=t[n];if(s&&i.type==="text"&&i.value===`
`)continue;let o=this.handle(i);Array.isArray(o)?r.push(...o):o&&r.push(o)}return r}function ie(e,t){let n=e.data,r,s;if(L(e,t),n){for(s in n)te.call(n,s)&&s!=="estree"&&(r||(r={}),r[s]=n[s]);r&&(t.data=r)}}function L(e,t){let n=$(e);n&&n.start.offset!==void 0&&n.end.offset!==void 0&&(t.start=n.start.offset,t.end=n.end.offset,t.loc={start:{line:n.start.line,column:n.start.column-1},end:{line:n.end.line,column:n.end.column-1}},t.range=[n.start.offset,n.end.offset])}function ae(e){let t=O(e);if(t.type==="JSXMemberExpression")throw new Error("Member expressions in attribute names are not supported");return t}function pe(e){return O(e)}function O(e){if(e.includes(".")){let t=e.split("."),n=t.shift();J(n,"Expected `part` to be defined");let r={type:"JSXIdentifier",name:n};for(;n=t.shift();)r={type:"JSXMemberExpression",object:r,property:{type:"JSXIdentifier",name:n}};return r}if(e.includes(":")){let t=e.split(":");return{type:"JSXNamespacedName",namespace:{type:"JSXIdentifier",name:t[0]},name:{type:"JSXIdentifier",name:t[1]}}}return{type:"JSXIdentifier",name:e}}function le(e,t){let n=j(t||{}),r=n.handle(e),s=n.esm;if(r){r.type!=="JSXFragment"&&r.type!=="JSXElement"&&(r={type:"JSXFragment",openingFragment:{type:"JSXOpeningFragment"},closingFragment:{type:"JSXClosingFragment"},children:[r]},n.patch(e,r));let o={type:"ExpressionStatement",expression:r};n.patch(e,o),s.push(o)}let i={type:"Program",body:s,sourceType:"module",comments:n.comments};return n.patch(e,i),i}export{E as defaultHandlers,le as toEstree};
//# sourceMappingURL=hast-util-to-estree.mjs.map