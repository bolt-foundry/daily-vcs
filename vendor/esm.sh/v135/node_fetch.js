const n=globalThis.Blob,s=globalThis.File,b=globalThis.FormData,c=globalThis.Headers,p=globalThis.Request,l=globalThis.Response,d=globalThis.AbortController,i=globalThis.fetch||(()=>{throw new Error("global fetch is not available!")});var w=i;class f extends Error{}class u extends Error{}async function x(o,e){if(typeof Deno<"u"){const r=await Deno.open(o),t=new l(r.readable);return new n([await t.blob()],{type:e})}throw new Error("blobFrom is not supported in browser")}function h(o,e){if(typeof Deno<"u"){const r=Deno.readFileSync(o);return new n([r],{type:e})}throw new Error("blobFromSync is not supported in browser")}async function F(o,e){if(typeof Deno<"u"){const r=await Deno.open(o),t=new l(r.readable);return new s([await t.blob()],o.split(/[\/\\]/).pop(),{type:e})}throw new Error("blobFrom is not supported in browser")}function y(o,e){if(typeof Deno<"u"){const r=Deno.readFileSync(o);return new s([r],o.split(/[\/\\]/).pop(),{type:e})}throw new Error("blobFromSync is not supported in browser")}const a=new Set([301,302,303,307,308]),m=o=>a.has(o);export{d as AbortController,f as AbortError,n as Blob,u as FetchError,s as File,b as FormData,c as Headers,p as Request,l as Response,x as blobFrom,h as blobFromSync,w as default,i as fetch,F as fileFrom,y as fileFromSync,m as isRedirect};
