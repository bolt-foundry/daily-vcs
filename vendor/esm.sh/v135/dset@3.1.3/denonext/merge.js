/* esm.sh - esbuild bundle(dset@3.1.3/merge) denonext production */
function f(o,r,t){if(typeof o=="object"&&typeof r=="object"){if(Array.isArray(o)&&Array.isArray(r))for(t=0;t<r.length;t++)o[t]=f(o[t],r[t]);else for(t in r){if(t==="__proto__"||t==="constructor"||t==="prototype")break;o[t]=f(o[t],r[t])}return o}return r}function _(o,r,t){r.split&&(r=r.split("."));for(var i=0,n=r.length,p=o,c,e;i<n&&(e=r[i++],!(e==="__proto__"||e==="constructor"||e==="prototype"));)p=p[e]=i===n?f(p[e],t):typeof(c=p[e])==typeof r?c:r[i]*0!==0||~(""+r[i]).indexOf(".")?{}:[]}export{_ as dset,f as merge};
//# sourceMappingURL=merge.js.map