/* esm.sh - esbuild bundle(@anthropic-ai/sdk@0.22.0/_shims/registry) denonext production */
var n=!1,t,o,d,a,i,l,p,f,u,x,R,c,g;function k(e,r={auto:!1}){if(n)throw new Error(`you must \`import '@anthropic-ai/sdk/shims/${e.kind}'\` before importing anything else from @anthropic-ai/sdk`);if(t)throw new Error(`can't \`import '@anthropic-ai/sdk/shims/${e.kind}'\` after \`import '@anthropic-ai/sdk/shims/${t}'\``);n=r.auto,t=e.kind,o=e.fetch,d=e.Request,a=e.Response,i=e.Headers,l=e.FormData,p=e.Blob,f=e.File,u=e.ReadableStream,x=e.getMultipartRequestOptions,R=e.getDefaultAgent,c=e.fileFromPath,g=e.isFsReadStream}export{p as Blob,f as File,l as FormData,i as Headers,u as ReadableStream,d as Request,a as Response,n as auto,o as fetch,c as fileFromPath,R as getDefaultAgent,x as getMultipartRequestOptions,g as isFsReadStream,t as kind,k as setShims};
//# sourceMappingURL=registry.js.map