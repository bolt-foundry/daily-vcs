/* esm.sh - esbuild bundle(axios@1.7.2/unsafe/core/AxiosError) denonext production */
import n from"/v135/axios@1.7.2/denonext/unsafe/utils.js";function s(t,r,i,o,E){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",r&&(this.code=r),i&&(this.config=i),o&&(this.request=o),E&&(this.response=E)}n.inherits(s,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:n.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var R=s.prototype,u={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{u[t]={value:t}});Object.defineProperties(s,u);Object.defineProperty(R,"isAxiosError",{value:!0});s.from=(t,r,i,o,E,c)=>{let e=Object.create(R);return n.toFlatObject(t,e,function(h){return h!==Error.prototype},a=>a!=="isAxiosError"),s.call(e,t.message,r,i,o,E),e.cause=t,e.name=t.name,c&&Object.assign(e,c),e};var m=s;export{m as default};

import "https://deno.land/x/xhr@0.3.0/mod.ts";//# sourceMappingURL=AxiosError.js.map