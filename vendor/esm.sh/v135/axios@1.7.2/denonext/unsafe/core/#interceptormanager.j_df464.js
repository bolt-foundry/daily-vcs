/* esm.sh - esbuild bundle(axios@1.7.2/unsafe/core/InterceptorManager) denonext production */
import n from"/v135/axios@1.7.2/denonext/unsafe/utils.js";var r=class{constructor(){this.handlers=[]}use(h,l,s){return this.handlers.push({fulfilled:h,rejected:l,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1}eject(h){this.handlers[h]&&(this.handlers[h]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(h){n.forEach(this.handlers,function(s){s!==null&&h(s)})}},u=r;export{u as default};

import "https://deno.land/x/xhr@0.3.0/mod.ts";//# sourceMappingURL=InterceptorManager.js.map