/* esm.sh - esbuild bundle(@whatwg-node/server@0.9.23) denonext production */
import { Buffer as __Buffer$ } from "node:buffer";
import*as ne from"/v135/@whatwg-node/fetch@0.9.13/denonext/fetch.mjs";import{URL as Y}from"/v135/@whatwg-node/fetch@0.9.13/denonext/fetch.mjs";function M(e){return e!=null&&typeof e=="object"&&typeof e[Symbol.asyncIterator]=="function"}function Q(e){if(e.socket?.localPort)return e.socket?.localPort;let r=(e.headers?.[":authority"]||e.headers?.host)?.split(":")?.[1];return r||80}function X(e){if(e.headers?.[":authority"])return e.headers?.[":authority"];if(e.headers?.host)return e.headers?.host;let t=Q(e);if(e.hostname)return e.hostname+":"+t;let r=e.socket?.localAddress;return r&&!r?.includes("::")&&!r?.includes("ffff")?`${r}:${t}`:"localhost"}function Z(e){let t=X(e),r=e.protocol||(e.socket?.encrypted?"https":"http"),n=e.originalUrl||e.url||"/graphql";return`${r}://${t}${n}`}function v(e){let t=e[Symbol.toStringTag];return!!(typeof e=="string"||t==="Uint8Array"||t==="Blob"||t==="FormData"||t==="URLSearchParams"||M(e))}var C=class extends EventTarget{constructor(){super(...arguments),this.aborted=!1,this._onabort=null}throwIfAborted(){if(this.aborted)throw new DOMException("Aborted","AbortError")}sendAbort(){this.aborted=!0,this.dispatchEvent(new Event("abort"))}get onabort(){return this._onabort}set onabort(t){this._onabort=t,t?this.addEventListener("abort",t):this.removeEventListener("abort",t)}},q=!1;function K(e,t){let r=e.raw||e.req||e,n=Z(r);if(e.query){let s=new Y(n);for(let f in e.query)s.searchParams.set(f,e.query[f]);n=s.toString()}let i;if(t!==globalThis.Request)i=new C,r?.once&&r.once("close",()=>{r.aborted&&i.sendAbort()});else{let s=new AbortController;i=s.signal,r.once&&r.once("close",()=>{r.aborted&&s.abort()})}if(e.method==="GET"||e.method==="HEAD")return new t(n,{method:e.method,headers:e.headers,signal:i});let o=e.body;if(o!=null&&Object.keys(o).length>0){if(v(o))return new t(n,{method:e.method,headers:e.headers,body:o,signal:i});let s=new t(n,{method:e.method,headers:e.headers,signal:i});return s.headers.get("content-type")?.includes("json")||s.headers.set("content-type","application/json; charset=utf-8"),new Proxy(s,{get:(f,u,b)=>{switch(u){case"json":return async()=>o;case"text":return async()=>JSON.stringify(o);default:return Reflect.get(f,u,b)}}})}return globalThis.process?.versions?.bun&&N(r)?(q||(q=!0,console.warn(`You use Bun Node compatibility mode, which is not recommended!
It will affect your performance. Please check our Bun integration recipe, and avoid using 'node:http' for your server implementation.`)),new t(n,{method:e.method,headers:e.headers,body:new ReadableStream({start(s){r.on("data",f=>{s.enqueue(f)}),r.on("error",f=>{s.error(f)}),r.on("end",()=>{s.close()})},cancel(s){r.destroy(s)}}),signal:i})):new t(n,{method:e.method,headers:e.headers,body:r,signal:i})}function N(e){return e.read!=null}function V(e){return N(e)}function I(e){return e!=null&&e.setHeader!=null&&e.end!=null&&e.once!=null&&e.write!=null}function de(e){return e!=null&&e.getReader!=null}function L(e){return e!=null&&e.request!=null&&e.respondWith!=null}function ee(e){e?.socket?.setTimeout?.(0),e?.socket?.setNoDelay?.(!0),e?.socket?.setKeepAlive?.(!0)}function O(e){e.end(null,null,null)}async function te(e,t){for await(let r of t)if(!e.write(r))break;O(e)}function W(e,t,r){if(t.closed||t.destroyed)return;if(!e){t.statusCode=404,t.end();return}t.statusCode=e.status,t.statusMessage=e.statusText;let n=!1;e.headers.forEach((s,f)=>{if(f==="set-cookie"){if(n)return;n=!0;let u=e.headers.getSetCookie?.();if(u){t.setHeader("set-cookie",u);return}}t.setHeader(f,s)});let i=e._buffer;if(i){t.write(i),O(t);return}let o=e.body;if(o==null){O(t);return}if(o[Symbol.toStringTag]==="Uint8Array"){t.write(o),O(t);return}if(ee(r),N(o)){t.once("close",()=>{o.destroy()}),o.pipe(t);return}if(M(o))return te(t,o)}function B(e){return e!=null&&typeof e=="object"&&("body"in e||"cache"in e||"credentials"in e||"headers"in e||"integrity"in e||"keepalive"in e||"method"in e||"mode"in e||"redirect"in e||"referrer"in e||"referrerPolicy"in e||"signal"in e||"window"in e)}function U(...e){let[t,...r]=e.filter(n=>n!=null&&typeof n=="object");return r.forEach(n=>{let i=Object.getOwnPropertyNames(n).reduce((o,s)=>(o[s]=Object.getOwnPropertyDescriptor(n,s),o),{});Object.getOwnPropertySymbols(n).forEach(o=>{let s=Object.getOwnPropertyDescriptor(n,o);s.enumerable&&(i[o]=s)}),Object.defineProperties(t,i)}),t}function p(e){return e?.then!=null}function F(e,t){let r=e[Symbol.iterator](),n=!1;function i(){n=!0}function o(){let{done:s,value:f}=r.next();if(s)return;let u=t(f,i);if(p(u))return u.then(()=>{if(!n)return o()});if(!n)return o()}return o()}function $(e,t){return new t(e.stack||e.message||e.toString(),{status:e.status||500})}function _(e,t){if(e==null)return{};let r={},n=new Set;return new Proxy(e,{get(i,o,s){if(t!=null&&o==="waitUntil")return function(u){t.push(u.catch(b=>console.error(b)))};if(o in r)return Reflect.get(r,o,s);if(!n.has(o)&&o in i)return Reflect.get(i,o,s)},set(i,o,s,f){return Reflect.set(r,o,s,f)},has(i,o){return t!=null&&o==="waitUntil"?!0:n.has(o)?!1:o in r?!0:Reflect.has(i,o)},defineProperty(i,o,s){return Reflect.defineProperty(r,o,s)},deleteProperty(i,o){return o in r?Reflect.deleteProperty(r,o):(n.add(o),!0)},ownKeys(i){let o=Reflect.ownKeys(r),s=Reflect.ownKeys(i),f=Array.from(n),u=new Set(o.concat(s.filter(b=>!f.includes(b))));return t!=null&&u.add("waitUntil"),Array.from(u)},getOwnPropertyDescriptor(i,o){if(o in r)return Reflect.getOwnPropertyDescriptor(r,o);if(!n.has(o))return Reflect.getOwnPropertyDescriptor(i,o)}})}function R(e){return!!e.onData}function J({req:e,res:t,fetchAPI:r}){let n,i=e.getMethod();if(i!=="get"&&i!=="head"){n=new r.ReadableStream({});let u=n.readable;t.onAborted(()=>{u.push(null)});let b=!1;t.onData(function(E,P){let k=__Buffer$.from(E,0,E.byteLength);!b&&P?u.push(k):u.push(__Buffer$.from(k)),P&&u.push(null),b=!0})}let o=new r.Headers;e.forEach((u,b)=>{o.set(u,b)});let s=`http://localhost${e.getUrl()}`,f=e.getQuery();return f&&(s+=`?${f}`),new r.Request(s,{method:i,headers:o,body:n,signal:new C})}async function re(e,t){let r=!1;e.onAborted(function(){r=!0});for await(let n of t.body){if(r)return;e.cork(()=>{e.write(n)})}e.cork(()=>{e.end()})}function D(e,t){if(!t){e.writeStatus("404 Not Found"),e.end();return}let r=t._buffer;if(e.cork(()=>{e.writeStatus(`${t.status} ${t.statusText}`);for(let[n,i]of t.headers)if(n!=="content-length"){if(n==="set-cookie"){let o=t.headers.getSetCookie?.();if(o){for(let s of o)e.writeHeader(n,s);continue}}e.writeHeader(n,i)}r&&e.end(r)}),!r){if(!t.body){e.end();return}return re(e,t)}}async function oe(e){await Promise.allSettled(e)}function ie(e){try{return!!e?.request}catch{return!1}}var se={};function be(e,t){let r={...ne,...t?.fetchAPI},n=typeof e=="function"?e:e.handle,i=[],o=[];if(t?.plugins!=null)for(let l of t.plugins)l.onRequest&&i.push(l.onRequest),l.onResponse&&o.push(l.onResponse);let s=i.length>0||o.length>0?function(a,c){let d=n,w;if(i.length===0)return H();let y=new Proxy(se,{get(m,g,x){return y=new r.URL(a.url,"http://localhost"),Reflect.get(y,g,y)}}),h=F(i,(m,g)=>m({request:a,serverContext:c,fetchAPI:r,url:y,requestHandler:d,setRequestHandler(x){d=x},endResponse(x){w=x,x&&g()}}));function A(m){if(i.length===0)return m;let g={request:a,response:m,serverContext:c},x=F(o,G=>G(g));return p(x)?x.then(()=>m):m}function H(){if(!w){let m=d(a,c);return p(m)?m.then(A):A(m)}return A(w)}return p(h)?h.then(H):H()}:n;function f(l,...a){let c=a.length>1?U(...a):a[0]||{},d=K(l,r.Request);return s(d,c)}function u(l,a,...c){let d=[],w={req:l,res:a,waitUntil(h){d.push(h.catch(A=>console.error(A)))}},y;try{y=f(l,w,...c)}catch(h){y=$(h,r.Response)}if(p(y))return y.catch(h=>$(h,r.Response)).then(h=>W(h,a,l)).catch(h=>{console.error(`Unexpected error while handling request: ${h.message||h}`)});try{return W(y,a,l)}catch(h){console.error(`Unexpected error while handling request: ${h.message||h}`)}}function b(l,a,...c){let d=[],w={res:l,req:a,waitUntil(g){d.push(g.catch(x=>console.error(x)))}},h=c.filter(g=>g!=null).length>0?U(w,...c):w,A=J({req:a,res:l,fetchAPI:r}),H=!1;l.onAborted(()=>{H=!0,A.signal.sendAbort()});let m;try{m=s(A,h)}catch(g){m=$(g,r.Response)}if(p(m))return m.catch(g=>$(g,r.Response)).then(g=>{if(!H)return D(l,g)}).catch(g=>{console.error(`Unexpected error while handling request: ${g.message||g}`)});try{return D(l,m)}catch(g){console.error(`Unexpected error while handling request: ${g.message||g}`)}}function E(l,...a){if(!l.respondWith||!l.request)throw new TypeError(`Expected FetchEvent, got ${l}`);let c=a.filter(y=>y!=null),d=c.length>0?U({},l,...c):_(l),w=s(l.request,d);l.respondWith(w)}function P(l,...a){let c=a.filter(h=>h!=null),d,w=c.length>1?U(...c):_(c[0],c[0]==null||c[0].waitUntil==null?d=[]:void 0),y=s(l,w);return d?.length?oe(d).then(()=>y):y}let k=(l,...a)=>{if(typeof l=="string"||"href"in l){let[c,...d]=a;return B(c)?P(new r.Request(l,c),...d):P(new r.Request(l),...a)}return P(l,...a)},S=(l,...a)=>{let[c,...d]=a;if(V(l)){if(!I(c))throw new TypeError(`Expected ServerResponse, got ${c}`);return u(l,c,...d)}if(R(l))return b(l,c,...d);if(I(c))throw new TypeError("Got Node response without Node request");return ie(l)?L(l)?E(l,...a):P(l.request,l,...a):k(l,...a)},T={handleRequest:s,fetch:k,handleNodeRequest:f,requestListener:u,handleEvent:E,handleUWS:b,handle:S},j=new Proxy(S,{has:(l,a)=>a in T||a in S||e&&a in e,get:(l,a)=>{let c=T[a];if(c)return c.bind?c.bind(T):c;let d=S[a];if(d)return d.bind?d.bind(S):d;if(e){let w=e[a];if(w)return w.bind?function(...y){let h=e[a](...y);return h===e?j:h}:w}},apply(l,a,c){return S(...c)}});return j}function le(e,t){let r=e.headers.get("origin");if(t===!1||r==null)return null;let n={};if(t.origin==null||t.origin.length===0||t.origin.includes("*")?(n["Access-Control-Allow-Origin"]=r,n.Vary="Origin"):typeof t.origin=="string"?n["Access-Control-Allow-Origin"]=t.origin:Array.isArray(t.origin)&&(t.origin.length===1?n["Access-Control-Allow-Origin"]=t.origin[0]:t.origin.includes(r)?(n["Access-Control-Allow-Origin"]=r,n.Vary="Origin"):n["Access-Control-Allow-Origin"]="null"),t.methods?.length)n["Access-Control-Allow-Methods"]=t.methods.join(", ");else{let i=e.headers.get("access-control-request-method");i&&(n["Access-Control-Allow-Methods"]=i)}if(t.allowedHeaders?.length)n["Access-Control-Allow-Headers"]=t.allowedHeaders.join(", ");else{let i=e.headers.get("access-control-request-headers");i&&(n["Access-Control-Allow-Headers"]=i,n.Vary&&(n.Vary+=", Access-Control-Request-Headers"),n.Vary="Access-Control-Request-Headers")}return t.credentials!=null?t.credentials===!0&&(n["Access-Control-Allow-Credentials"]="true"):n["Access-Control-Allow-Origin"]!=="*"&&(n["Access-Control-Allow-Credentials"]="true"),t.exposedHeaders&&(n["Access-Control-Expose-Headers"]=t.exposedHeaders.join(", ")),t.maxAge&&(n["Access-Control-Max-Age"]=t.maxAge.toString()),n}async function ae(e,t,r){let n=await t(e,r);return le(e,n)}function pe(e){let t=()=>({});if(e!=null)if(typeof e=="function")t=e;else if(typeof e=="object"){let r={...e};t=()=>r}else e===!1&&(t=()=>!1);return{onRequest({request:r,fetchAPI:n,endResponse:i}){if(r.method.toUpperCase()==="OPTIONS"){let o=new n.Response(null,{status:204,headers:{"Content-Length":"0"}});i(o)}},async onResponse({request:r,serverContext:n,response:i}){let o=await ae(r,t,n);if(o!=null)for(let s in o)i.headers.set(s,o[s])}}}import{Response as ce}from"/v135/@whatwg-node/fetch@0.9.13/denonext/fetch.mjs";function ue(e=ce){return function(r){return r.details||r.status||r.headers||r.name==="HTTPError"?new e(typeof r.details=="object"?JSON.stringify(r.details):r.message,{status:r.status,headers:r.headers||{}}):(console.error(r),e.error?e.error():new e(null,{status:500}))}}var z=class e extends Error{constructor(t=500,r,n={},i){super(r),this.status=t,this.message=r,this.headers=n,this.details=i,this.name="HTTPError",Error.captureStackTrace(this,e)}};function He(e){return{onRequest({requestHandler:t,setRequestHandler:r,fetchAPI:n}){let i=e||ue(n.Response);r(function(s,f){try{let u=t(s,f);return p(u)?u.catch(b=>i(b,s,f)):u}catch(u){return i(u,s,f)}})}}}import{Response as Fe}from"/v135/@whatwg-node/fetch@0.9.13/denonext/fetch.mjs";export{z as HTTPError,Fe as Response,C as ServerAdapterRequestAbortSignal,U as completeAssign,ue as createDefaultErrorHandler,be as createServerAdapter,le as getCORSHeadersByRequestAndOptions,J as getRequestFromUWSRequest,$ as handleErrorFromRequestHandler,M as isAsyncIterable,L as isFetchEvent,V as isNodeRequest,p as isPromise,N as isReadable,de as isReadableStream,B as isRequestInit,I as isServerResponse,R as isUWSResponse,_ as isolateObject,F as iterateAsyncVoid,K as normalizeNodeRequest,W as sendNodeResponse,D as sendResponseToUwsOpts,pe as useCORS,He as useErrorHandling};
//# sourceMappingURL=server.mjs.map