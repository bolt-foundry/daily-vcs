/* esm.sh - esbuild bundle(axios@1.7.2/unsafe/adapters/adapters) denonext production */
import a from"/v135/axios@1.7.2/denonext/unsafe/utils.js";import h from"/v135/axios@1.7.2/denonext/lib/adapters/http.js";import m from"/v135/axios@1.7.2/denonext/lib/adapters/xhr.js";import u from"/v135/axios@1.7.2/denonext/unsafe/adapters/fetch.js";import d from"/v135/axios@1.7.2/denonext/unsafe/core/AxiosError.js";var s={http:h,xhr:m,fetch:u};a.forEach(s,(e,n)=>{if(e){try{Object.defineProperty(e,"name",{value:n})}catch{}Object.defineProperty(e,"adapterName",{value:n})}});var c=e=>`- ${e}`,b=e=>a.isFunction(e)||e===null||e===!1,y={getAdapter:e=>{e=a.isArray(e)?e:[e];let{length:n}=e,o,r,p={};for(let t=0;t<n;t++){o=e[t];let i;if(r=o,!b(o)&&(r=s[(i=String(o)).toLowerCase()],r===void 0))throw new d(`Unknown adapter '${i}'`);if(r)break;p[i||"#"+t]=r}if(!r){let t=Object.entries(p).map(([f,l])=>`adapter ${f} `+(l===!1?"is not supported by the environment":"is not available in the build")),i=n?t.length>1?`since :
`+t.map(c).join(`
`):" "+c(t[0]):"as no adapter specified";throw new d("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:s};export{y as default};

import "https://deno.land/x/xhr@0.3.0/mod.ts";//# sourceMappingURL=adapters.js.map