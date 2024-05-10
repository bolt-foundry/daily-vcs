/* esm.sh - esbuild bundle(ecdsa-sig-formatter@1.0.11) denonext production */
import * as __0$ from "/v135/safe-buffer@5.2.1/denonext/safe-buffer.mjs";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"safe-buffer":return e(__0$);default:throw new Error("module \""+n+"\" not found");}};
var U=Object.create;var y=Object.defineProperty;var G=Object.getOwnPropertyDescriptor;var M=Object.getOwnPropertyNames;var j=Object.getPrototypeOf,F=Object.prototype.hasOwnProperty;var J=(r=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(r,{get:(e,t)=>(typeof require<"u"?require:e)[t]}):r)(function(r){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+r+'" is not supported')});var _=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),Q=(r,e)=>{for(var t in e)y(r,t,{get:e[t],enumerable:!0})},x=(r,e,t,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let f of M(e))!F.call(r,f)&&f!==t&&y(r,f,{get:()=>e[f],enumerable:!(s=G(e,f))||s.enumerable});return r},v=(r,e,t)=>(x(r,e,"default"),t&&x(t,e,"default")),B=(r,e,t)=>(t=r!=null?U(j(r)):{},x(e||!r||!r.__esModule?y(t,"default",{value:r,enumerable:!0}):t,r));var b=_((or,A)=>{"use strict";function T(r){var e=(r/8|0)+(r%8===0?0:1);return e}var R={ES256:T(256),ES384:T(384),ES512:T(521)};function V(r){var e=R[r];if(e)return e;throw new Error('Unknown algorithm "'+r+'"')}A.exports=V});var g=_((tr,I)=>{"use strict";var w=J("safe-buffer").Buffer,L=b(),E=128,P=0,X=32,k=16,z=2,C=k|X|P<<6,m=z|P<<6;function H(r){return r.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function D(r){if(w.isBuffer(r))return r;if(typeof r=="string")return w.from(r,"base64");throw new TypeError("ECDSA signature must be a Base64 string or a Buffer")}function K(r,e){r=D(r);var t=L(e),s=t+1,f=r.length,o=0;if(r[o++]!==C)throw new Error('Could not find expected "seq"');var p=r[o++];if(p===(E|1)&&(p=r[o++]),f-o<p)throw new Error('"seq" specified length of "'+p+'", only "'+(f-o)+'" remaining');if(r[o++]!==m)throw new Error('Could not find expected "int" for "r"');var i=r[o++];if(f-o-2<i)throw new Error('"r" specified length of "'+i+'", only "'+(f-o-2)+'" available');if(s<i)throw new Error('"r" specified length of "'+i+'", max of "'+s+'" is acceptable');var h=o;if(o+=i,r[o++]!==m)throw new Error('Could not find expected "int" for "s"');var d=r[o++];if(f-o!==d)throw new Error('"s" specified length of "'+d+'", expected "'+(f-o)+'"');if(s<d)throw new Error('"s" specified length of "'+d+'", max of "'+s+'" is acceptable');var a=o;if(o+=d,o!==f)throw new Error('Expected to consume entire buffer, but "'+(f-o)+'" bytes remain');var n=t-i,u=t-d,c=w.allocUnsafe(n+i+u+d);for(o=0;o<n;++o)c[o]=0;r.copy(c,o,h+Math.max(-n,0),h+i),o=t;for(var O=o;o<O+u;++o)c[o]=0;return r.copy(c,o,a+Math.max(-u,0),a+d),c=c.toString("base64"),c=H(c),c}function S(r,e,t){for(var s=0;e+s<t&&r[e+s]===0;)++s;var f=r[e+s]>=E;return f&&--s,s}function W(r,e){r=D(r);var t=L(e),s=r.length;if(s!==t*2)throw new TypeError('"'+e+'" signatures must be "'+t*2+'" bytes, saw "'+s+'"');var f=S(r,0,t),o=S(r,t,r.length),p=t-f,i=t-o,h=2+p+1+1+i,d=h<E,a=w.allocUnsafe((d?2:3)+h),n=0;return a[n++]=C,d?a[n++]=h:(a[n++]=E|1,a[n++]=h&255),a[n++]=m,a[n++]=p,f<0?(a[n++]=0,n+=r.copy(a,n,0,t)):n+=r.copy(a,n,f,t),a[n++]=m,a[n++]=i,o<0?(a[n++]=0,r.copy(a,n,t)):r.copy(a,n,t+o),a}I.exports={derToJose:K,joseToDer:W}});var l={};Q(l,{default:()=>rr,derToJose:()=>Y,joseToDer:()=>Z});var N=B(g());v(l,B(g()));var{derToJose:Y,joseToDer:Z}=N,{default:q,...$}=N,rr=q!==void 0?q:$;export{rr as default,Y as derToJose,Z as joseToDer};
//# sourceMappingURL=ecdsa-sig-formatter.mjs.map