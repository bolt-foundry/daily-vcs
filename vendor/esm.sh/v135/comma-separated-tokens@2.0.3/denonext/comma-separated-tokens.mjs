/* esm.sh - esbuild bundle(comma-separated-tokens@2.0.3) denonext production */
function f(n){let i=[],t=String(n||""),e=t.indexOf(","),r=0,o=!1;for(;!o;){e===-1&&(e=t.length,o=!0);let s=t.slice(r,e).trim();(s||!o)&&i.push(s),r=e+1,e=t.indexOf(",",r)}return i}function p(n,i){let t=i||{};return(n[n.length-1]===""?[...n,""]:n).join((t.padRight?" ":"")+","+(t.padLeft===!1?"":" ")).trim()}export{f as parse,p as stringify};
//# sourceMappingURL=comma-separated-tokens.mjs.map