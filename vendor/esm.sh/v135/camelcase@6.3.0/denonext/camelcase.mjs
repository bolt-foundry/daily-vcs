/* esm.sh - esbuild bundle(camelcase@6.3.0) denonext production */
var N=Object.create;var C=Object.defineProperty;var S=Object.getOwnPropertyDescriptor;var u=Object.getOwnPropertyNames;var w=Object.getPrototypeOf,T=Object.prototype.hasOwnProperty;var v=(e,s)=>()=>(s||e((s={exports:{}}).exports,s),s.exports),D=(e,s)=>{for(var r in s)C(e,r,{get:s[r],enumerable:!0})},A=(e,s,r,l)=>{if(s&&typeof s=="object"||typeof s=="function")for(let c of u(s))!T.call(e,c)&&c!==r&&C(e,c,{get:()=>s[c],enumerable:!(l=S(s,c))||l.enumerable});return e},E=(e,s,r)=>(A(e,s,"default"),r&&A(r,s,"default")),I=(e,s,r)=>(r=e!=null?N(w(e)):{},A(s||!e||!e.__esModule?C(r,"default",{value:e,enumerable:!0}):r,e));var p=v((M,L)=>{"use strict";var P=/[\p{Lu}]/u,y=/[\p{Ll}]/u,R=/^[\p{Lu}](?![\p{Lu}])/gu,d=/([\p{Alpha}\p{N}_]|$)/u,x=/[_.\- ]+/,g=new RegExp("^"+x.source),_=new RegExp(x.source+d.source,"gu"),h=new RegExp("\\d+"+d.source,"gu"),n=(e,s,r)=>{let l=!1,c=!1,a=!1;for(let o=0;o<e.length;o++){let t=e[o];l&&P.test(t)?(e=e.slice(0,o)+"-"+e.slice(o),l=!1,a=c,c=!0,o++):c&&a&&y.test(t)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),a=c,c=!1,l=!0):(l=s(t)===t&&r(t)!==t,a=c,c=r(t)===t&&s(t)!==t)}return e},O=(e,s)=>(R.lastIndex=0,e.replace(R,r=>s(r))),F=(e,s)=>(_.lastIndex=0,h.lastIndex=0,e.replace(_,(r,l)=>s(l)).replace(h,r=>s(r))),U=(e,s)=>{if(!(typeof e=="string"||Array.isArray(e)))throw new TypeError("Expected the input to be `string | string[]`");if(s={pascalCase:!1,preserveConsecutiveUppercase:!1,...s},Array.isArray(e)?e=e.map(a=>a.trim()).filter(a=>a.length).join("-"):e=e.trim(),e.length===0)return"";let r=s.locale===!1?a=>a.toLowerCase():a=>a.toLocaleLowerCase(s.locale),l=s.locale===!1?a=>a.toUpperCase():a=>a.toLocaleUpperCase(s.locale);return e.length===1?s.pascalCase?l(e):r(e):(e!==r(e)&&(e=n(e,r,l)),e=e.replace(g,""),s.preserveConsecutiveUppercase?e=O(e,r):e=r(e),s.pascalCase&&(e=l(e.charAt(0))+e.slice(1)),F(e,l))};L.exports=U;L.exports.default=U});var f={};D(f,{default:()=>j});var G=I(p());E(f,I(p()));var{default:m,...b}=G,j=m!==void 0?m:b;export{j as default};
//# sourceMappingURL=camelcase.mjs.map