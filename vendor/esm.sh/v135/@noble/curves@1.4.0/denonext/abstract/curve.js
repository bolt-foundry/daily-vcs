/* esm.sh - esbuild bundle(@noble/curves@1.4.0/abstract/curve) denonext production */
import{validateField as F,nLength as S}from"/v135/@noble/curves@1.4.0/denonext/abstract/modular.js";import{validateObject as O}from"/v135/@noble/curves@1.4.0/denonext/abstract/utils.js";var A=BigInt(0),g=BigInt(1);function x(i,u){let l=(t,n)=>{let e=n.negate();return t?e:n},h=t=>{let n=Math.ceil(u/t)+1,e=2**(t-1);return{windows:n,windowSize:e}};return{constTimeNegate:l,unsafeLadder(t,n){let e=i.ZERO,f=t;for(;n>A;)n&g&&(e=e.add(f)),f=f.double(),n>>=g;return e},precomputeWindow(t,n){let{windows:e,windowSize:f}=h(n),s=[],o=t,d=o;for(let w=0;w<e;w++){d=o,s.push(d);for(let a=1;a<f;a++)d=d.add(o),s.push(d);o=d.double()}return s},wNAF(t,n,e){let{windows:f,windowSize:s}=h(t),o=i.ZERO,d=i.BASE,w=BigInt(2**t-1),a=2**t,b=BigInt(t);for(let c=0;c<f;c++){let p=c*s,r=Number(e&w);e>>=b,r>s&&(r-=a,e+=g);let B=p,m=p+Math.abs(r)-1,I=c%2!==0,N=r<0;r===0?d=d.add(l(I,n[B])):o=o.add(l(N,n[m]))}return{p:o,f:d}},wNAFCached(t,n,e,f){let s=t._WINDOW_SIZE||1,o=n.get(t);return o||(o=this.precomputeWindow(t,s),s!==1&&n.set(t,f(o))),this.wNAF(s,o,e)}}}function z(i){return F(i.Fp),O(i,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze({...S(i.n,i.nBitLength),...i,p:i.Fp.ORDER})}export{z as validateBasic,x as wNAF};
/*! Bundled license information:

@noble/curves/esm/abstract/curve.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)
*/
//# sourceMappingURL=curve.js.map