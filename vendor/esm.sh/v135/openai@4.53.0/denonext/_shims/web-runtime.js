/* esm.sh - esbuild bundle(openai@4.53.0/_shims/web-runtime) denonext production */
import{MultipartBody as d}from"/v135/openai@4.53.0/denonext/_shims/MultipartBody.js";function h({manuallyImported:s}={}){let t=s?"You may need to use polyfills":"Add one of these imports before your first `import \u2026 from 'openai'`:\n- `import 'openai/shims/node'` (if you're running on Node)\n- `import 'openai/shims/web'` (otherwise)\n",o,r,n,i;try{o=fetch,r=Request,n=Response,i=Headers}catch(e){throw new Error(`this environment is missing the following Web Fetch API type: ${e.message}. ${t}`)}return{kind:"web",fetch:o,Request:r,Response:n,Headers:i,FormData:typeof FormData<"u"?FormData:class{constructor(){throw new Error(`file uploads aren't supported in this environment yet as 'FormData' is undefined. ${t}`)}},Blob:typeof Blob<"u"?Blob:class{constructor(){throw new Error(`file uploads aren't supported in this environment yet as 'Blob' is undefined. ${t}`)}},File:typeof File<"u"?File:class{constructor(){throw new Error(`file uploads aren't supported in this environment yet as 'File' is undefined. ${t}`)}},ReadableStream:typeof ReadableStream<"u"?ReadableStream:class{constructor(){throw new Error(`streaming isn't supported in this environment yet as 'ReadableStream' is undefined. ${t}`)}},getMultipartRequestOptions:async(e,a)=>({...a,body:new d(e)}),getDefaultAgent:e=>{},fileFromPath:()=>{throw new Error("The `fileFromPath` function is only supported in Node. See the README for more details: https://www.github.com/openai/openai-node#file-uploads")},isFsReadStream:e=>!1}}export{h as getRuntime};
//# sourceMappingURL=web-runtime.js.map