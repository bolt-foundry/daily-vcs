/* esm.sh - esbuild bundle(axios@1.7.2/lib/adapters/http) denonext production */
import __Process$ from "node:process";
import { Buffer as __Buffer$ } from "node:buffer";
import i from"/v135/axios@1.7.2/denonext/unsafe/utils.js";import H from"/v135/axios@1.7.2/denonext/unsafe/core/settle.js";import ae from"/v135/axios@1.7.2/denonext/unsafe/core/buildFullPath.js";import ne from"/v135/axios@1.7.2/denonext/unsafe/helpers/buildURL.js";import{getProxyForUrl as ie}from"/v135/proxy-from-env@1.1.0/denonext/proxy-from-env.mjs";import le from"node:http";import me from"node:https";import ue from"node:util";import de from"/v135/follow-redirects@1.15.6/denonext/follow-redirects.mjs";import B from"node:zlib";import{VERSION as J}from"/v135/axios@1.7.2/denonext/unsafe/env/data.js";import pe from"/v135/axios@1.7.2/denonext/unsafe/defaults/transitional.js";import l from"/v135/axios@1.7.2/denonext/unsafe/core/AxiosError.js";import W from"/v135/axios@1.7.2/denonext/unsafe/cancel/CanceledError.js";import he from"/v135/axios@1.7.2/denonext/unsafe/platform.js";import fe from"/v135/axios@1.7.2/denonext/unsafe/helpers/fromDataURI.js";import _ from"node:stream";import K from"/v135/axios@1.7.2/denonext/unsafe/core/AxiosHeaders.js";import X from"/v135/axios@1.7.2/denonext/unsafe/helpers/AxiosTransformStream.js";import{EventEmitter as ce}from"node:events";import Re from"/v135/axios@1.7.2/denonext/unsafe/helpers/formDataToStream.js";import be from"/v135/axios@1.7.2/denonext/unsafe/helpers/readBlob.js";import ye from"/v135/axios@1.7.2/denonext/unsafe/helpers/ZlibHeaderTransformStream.js";import xe from"/v135/axios@1.7.2/denonext/unsafe/helpers/callbackify.js";var j={flush:B.constants.Z_SYNC_FLUSH,finishFlush:B.constants.Z_SYNC_FLUSH},Ee={flush:B.constants.BROTLI_OPERATION_FLUSH,finishFlush:B.constants.BROTLI_OPERATION_FLUSH},ee=i.isFunction(B.createBrotliDecompress),{http:we,https:Be}=de,Se=/https:?/,te=he.protocols.map(o=>o+":");function Le(o,e){o.beforeRedirects.proxy&&o.beforeRedirects.proxy(o),o.beforeRedirects.config&&o.beforeRedirects.config(o,e)}function V(o,e,U){let a=e;if(!a&&a!==!1){let n=ie(U);n&&(a=new URL(n))}if(a){if(a.username&&(a.auth=(a.username||"")+":"+(a.password||"")),a.auth){(a.auth.username||a.auth.password)&&(a.auth=(a.auth.username||"")+":"+(a.auth.password||""));let x=__Buffer$.from(a.auth,"utf8").toString("base64");o.headers["Proxy-Authorization"]="Basic "+x}o.headers.host=o.hostname+(o.port?":"+o.port:"");let n=a.hostname||a.host;o.hostname=n,o.host=n,o.port=a.port,o.path=U,a.protocol&&(o.protocol=a.protocol.includes(":")?a.protocol:`${a.protocol}:`)}o.beforeRedirects.proxy=function(x){V(x,e,x.href)}}var Te=typeof __Process$<"u"&&i.kindOf(__Process$)==="process",Ae=o=>new Promise((e,U)=>{let a,n,x=(c,S)=>{n||(n=!0,a&&a(c,S))},s=c=>{x(c),e(c)},E=c=>{x(c,!0),U(c)};o(s,E,c=>a=c).catch(E)}),_e=({address:o,family:e})=>{if(!i.isString(o))throw TypeError("address must be a string");return{address:o,family:e||(o.indexOf(".")<0?6:4)}},re=(o,e)=>_e(i.isObject(o)?o:{address:o,family:e}),Xe=Te&&function(e){return Ae(async function(a,n,x){let{data:s,lookup:E,family:c}=e,{responseType:S,responseEncoding:A}=e,z=e.method.toUpperCase(),Y,q=!1,u;if(E){let t=xe(E,r=>i.isArray(r)?r:[r]);E=(r,d,T)=>{t(r,d,(m,w,Q)=>{if(m)return T(m);let y=i.isArray(w)?w.map(b=>re(b)):[re(w,Q)];d.all?T(m,y):T(m,y[0].address,y[0].family)})}}let D=new ce,$=()=>{e.cancelToken&&e.cancelToken.unsubscribe(L),e.signal&&e.signal.removeEventListener("abort",L),D.removeAllListeners()};x((t,r)=>{Y=!0,r&&(q=!0,$())});function L(t){D.emit("abort",!t||t.type?new W(null,e,u):t)}D.once("abort",n),(e.cancelToken||e.signal)&&(e.cancelToken&&e.cancelToken.subscribe(L),e.signal&&(e.signal.aborted?L():e.signal.addEventListener("abort",L)));let se=ae(e.baseURL,e.url),R=new URL(se,"http://localhost"),P=R.protocol||te[0];if(P==="data:"){let t;if(z!=="GET")return H(a,n,{status:405,statusText:"method not allowed",headers:{},config:e});try{t=fe(e.url,S==="blob",{Blob:e.env&&e.env.Blob})}catch(r){throw l.from(r,l.ERR_BAD_REQUEST,e)}return S==="text"?(t=t.toString(A),(!A||A==="utf8")&&(t=i.stripBOM(t))):S==="stream"&&(t=_.Readable.from(t)),H(a,n,{data:t,status:200,statusText:"OK",headers:new K,config:e})}if(te.indexOf(P)===-1)return n(new l("Unsupported protocol "+P,l.ERR_BAD_REQUEST,e));let f=K.from(e.headers).normalize();f.set("User-Agent","axios/"+J,!1);let I=e.onDownloadProgress,g=e.onUploadProgress,C=e.maxRate,F,M;if(i.isSpecCompliantForm(s)){let t=f.getContentType(/boundary=([-_\w\d]{10,70})/i);s=Re(s,r=>{f.set(r)},{tag:`axios-${J}-boundary`,boundary:t&&t[1]||void 0})}else if(i.isFormData(s)&&i.isFunction(s.getHeaders)){if(f.set(s.getHeaders()),!f.hasContentLength())try{let t=await ue.promisify(s.getLength).call(s);Number.isFinite(t)&&t>=0&&f.setContentLength(t)}catch{}}else if(i.isBlob(s))s.size&&f.setContentType(s.type||"application/octet-stream"),f.setContentLength(s.size||0),s=_.Readable.from(be(s));else if(s&&!i.isStream(s)){if(!__Buffer$.isBuffer(s))if(i.isArrayBuffer(s))s=__Buffer$.from(new Uint8Array(s));else if(i.isString(s))s=__Buffer$.from(s,"utf-8");else return n(new l("Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream",l.ERR_BAD_REQUEST,e));if(f.setContentLength(s.length,!1),e.maxBodyLength>-1&&s.length>e.maxBodyLength)return n(new l("Request body larger than maxBodyLength limit",l.ERR_BAD_REQUEST,e))}let oe=i.toFiniteNumber(f.getContentLength());i.isArray(C)?(F=C[0],M=C[1]):F=M=C,s&&(g||F)&&(i.isStream(s)||(s=_.Readable.from(s,{objectMode:!1})),s=_.pipeline([s,new X({length:oe,maxRate:i.toFiniteNumber(F)})],i.noop),g&&s.on("progress",t=>{g(Object.assign(t,{upload:!0}))}));let O;if(e.auth){let t=e.auth.username||"",r=e.auth.password||"";O=t+":"+r}if(!O&&R.username){let t=R.username,r=R.password;O=t+":"+r}O&&f.delete("authorization");let G;try{G=ne(R.pathname+R.search,e.params,e.paramsSerializer).replace(/^\?/,"")}catch(t){let r=new Error(t.message);return r.config=e,r.url=e.url,r.exists=!0,n(r)}f.set("Accept-Encoding","gzip, compress, deflate"+(ee?", br":""),!1);let h={path:G,method:z,headers:f.toJSON(),agents:{http:e.httpAgent,https:e.httpsAgent},auth:O,protocol:P,family:c,beforeRedirect:Le,beforeRedirects:{}};!i.isUndefined(E)&&(h.lookup=E),e.socketPath?h.socketPath=e.socketPath:(h.hostname=R.hostname,h.port=R.port,V(h,e.proxy,P+"//"+R.hostname+(R.port?":"+R.port:"")+h.path));let N,v=Se.test(h.protocol);if(h.agent=v?e.httpsAgent:e.httpAgent,e.transport?N=e.transport:e.maxRedirects===0?N=v?me:le:(e.maxRedirects&&(h.maxRedirects=e.maxRedirects),e.beforeRedirect&&(h.beforeRedirects.config=e.beforeRedirect),N=v?Be:we),e.maxBodyLength>-1?h.maxBodyLength=e.maxBodyLength:h.maxBodyLength=1/0,e.insecureHTTPParser&&(h.insecureHTTPParser=e.insecureHTTPParser),u=N.request(h,function(r){if(u.destroyed)return;let d=[r],T=+r.headers["content-length"];if(I){let b=new X({length:i.toFiniteNumber(T),maxRate:i.toFiniteNumber(M)});I&&b.on("progress",k=>{I(Object.assign(k,{download:!0}))}),d.push(b)}let m=r,w=r.req||u;if(e.decompress!==!1&&r.headers["content-encoding"])switch((z==="HEAD"||r.statusCode===204)&&delete r.headers["content-encoding"],(r.headers["content-encoding"]||"").toLowerCase()){case"gzip":case"x-gzip":case"compress":case"x-compress":d.push(B.createUnzip(j)),delete r.headers["content-encoding"];break;case"deflate":d.push(new ye),d.push(B.createUnzip(j)),delete r.headers["content-encoding"];break;case"br":ee&&(d.push(B.createBrotliDecompress(Ee)),delete r.headers["content-encoding"])}m=d.length>1?_.pipeline(d,i.noop):d[0];let Q=_.finished(m,()=>{Q(),$()}),y={status:r.statusCode,statusText:r.statusMessage,headers:new K(r.headers),config:e,request:w};if(S==="stream")y.data=m,H(a,n,y);else{let b=[],k=0;m.on("data",function(p){b.push(p),k+=p.length,e.maxContentLength>-1&&k>e.maxContentLength&&(q=!0,m.destroy(),n(new l("maxContentLength size of "+e.maxContentLength+" exceeded",l.ERR_BAD_RESPONSE,e,w)))}),m.on("aborted",function(){if(q)return;let p=new l("maxContentLength size of "+e.maxContentLength+" exceeded",l.ERR_BAD_RESPONSE,e,w);m.destroy(p),n(p)}),m.on("error",function(p){u.destroyed||n(l.from(p,null,e,w))}),m.on("end",function(){try{let p=b.length===1?b[0]:__Buffer$.concat(b);S!=="arraybuffer"&&(p=p.toString(A),(!A||A==="utf8")&&(p=i.stripBOM(p))),y.data=p}catch(p){return n(l.from(p,null,e,y.request,y))}H(a,n,y)})}D.once("abort",b=>{m.destroyed||(m.emit("error",b),m.destroy())})}),D.once("abort",t=>{n(t),u.destroy(t)}),u.on("error",function(r){n(l.from(r,null,e,u))}),u.on("socket",function(r){r.setKeepAlive(!0,1e3*60)}),e.timeout){let t=parseInt(e.timeout,10);if(Number.isNaN(t)){n(new l("error trying to parse `config.timeout` to int",l.ERR_BAD_OPTION_VALUE,e,u));return}u.setTimeout(t,function(){if(Y)return;let d=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",T=e.transitional||pe;e.timeoutErrorMessage&&(d=e.timeoutErrorMessage),n(new l(d,T.clarifyTimeoutError?l.ETIMEDOUT:l.ECONNABORTED,e,u)),L()})}if(i.isStream(s)){let t=!1,r=!1;s.on("end",()=>{t=!0}),s.once("error",d=>{r=!0,u.destroy(d)}),s.on("close",()=>{!t&&!r&&L(new W("Request stream has been aborted",e,u))}),s.pipe(u)}else u.end(s)})},je=V;export{je as __setProxy,Xe as default};

import "https://deno.land/x/xhr@0.3.0/mod.ts";//# sourceMappingURL=http.js.map