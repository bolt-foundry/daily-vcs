/* esm.sh - esbuild bundle(openai@4.53.0/lib/ChatCompletionStreamingRunner) denonext production */
import{ChatCompletionStream as a}from"/v135/openai@4.53.0/denonext/lib/ChatCompletionStream.js";var u=class s extends a{static fromReadableStream(n){let e=new s;return e._run(()=>e._fromReadableStream(n)),e}static runFunctions(n,e,t){let r=new s,o={...t,headers:{...t?.headers,"X-Stainless-Helper-Method":"runFunctions"}};return r._run(()=>r._runFunctions(n,e,o)),r}static runTools(n,e,t){let r=new s,o={...t,headers:{...t?.headers,"X-Stainless-Helper-Method":"runTools"}};return r._run(()=>r._runTools(n,e,o)),r}};export{u as ChatCompletionStreamingRunner};
//# sourceMappingURL=ChatCompletionStreamingRunner.js.map