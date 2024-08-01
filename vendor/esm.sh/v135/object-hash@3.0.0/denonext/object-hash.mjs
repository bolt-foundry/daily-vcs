/* esm.sh - esbuild bundle(object-hash@3.0.0) denonext production */
var __global$ = globalThis || (typeof window !== "undefined" ? window : self);
var yr=Object.create;var ir=Object.defineProperty;var wr=Object.getOwnPropertyDescriptor;var mr=Object.getOwnPropertyNames;var br=Object.getPrototypeOf,vr=Object.prototype.hasOwnProperty;var rr=(y=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(y,{get:(I,B)=>(typeof require<"u"?require:I)[B]}):y)(function(y){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+y+'" is not supported')});var _r=(y,I)=>()=>(I||y((I={exports:{}}).exports,I),I.exports),Er=(y,I)=>{for(var B in I)ir(y,B,{get:I[B],enumerable:!0})},or=(y,I,B,j)=>{if(I&&typeof I=="object"||typeof I=="function")for(let N of mr(I))!vr.call(y,N)&&N!==B&&ir(y,N,{get:()=>I[N],enumerable:!(j=wr(I,N))||j.enumerable});return y},Q=(y,I,B)=>(or(y,I,"default"),B&&or(B,I,"default")),cr=(y,I,B)=>(B=y!=null?yr(br(y)):{},or(I||!y||!y.__esModule?ir(B,"default",{value:y,enumerable:!0}):B,y));var ur=_r((dr,hr)=>{(function(y){var I;typeof dr=="object"?hr.exports=y():typeof define=="function"&&define.amd?define(y):(typeof window<"u"?I=window:typeof __global$<"u"?I=__global$:typeof self<"u"&&(I=self),I.objectHash=y())})(function(){return function y(I,B,j){function N(Y,q){if(!B[Y]){if(!I[Y]){var J=typeof rr=="function"&&rr;if(!q&&J)return J(Y,!0);if(z)return z(Y,!0);throw new Error("Cannot find module '"+Y+"'")}q=B[Y]={exports:{}},I[Y][0].call(q.exports,function(K){var R=I[Y][1][K];return N(R||K)},q,q.exports,y,I,B,j)}return B[Y].exports}for(var z=typeof rr=="function"&&rr,V=0;V<j.length;V++)N(j[V]);return N}({1:[function(y,I,B){(function(j,N,z,V,Y,q,J,K,R){"use strict";var w=y("crypto");function E(u,f){f=p(u,f);var t;return(t=f.algorithm!=="passthrough"?w.createHash(f.algorithm):new A).write===void 0&&(t.write=t.update,t.end=t.update),h(f,t).dispatch(u),t.update||t.end(""),t.digest?t.digest(f.encoding==="buffer"?void 0:f.encoding):(u=t.read(),f.encoding!=="buffer"?u.toString(f.encoding):u)}(B=I.exports=E).sha1=function(u){return E(u)},B.keys=function(u){return E(u,{excludeValues:!0,algorithm:"sha1",encoding:"hex"})},B.MD5=function(u){return E(u,{algorithm:"md5",encoding:"hex"})},B.keysMD5=function(u){return E(u,{algorithm:"md5",encoding:"hex",excludeValues:!0})};var l=w.getHashes?w.getHashes().slice():["sha1","md5"],m=(l.push("passthrough"),["buffer","hex","binary","base64"]);function p(u,f){var t={};if(t.algorithm=(f=f||{}).algorithm||"sha1",t.encoding=f.encoding||"hex",t.excludeValues=!!f.excludeValues,t.algorithm=t.algorithm.toLowerCase(),t.encoding=t.encoding.toLowerCase(),t.ignoreUnknown=f.ignoreUnknown===!0,t.respectType=f.respectType!==!1,t.respectFunctionNames=f.respectFunctionNames!==!1,t.respectFunctionProperties=f.respectFunctionProperties!==!1,t.unorderedArrays=f.unorderedArrays===!0,t.unorderedSets=f.unorderedSets!==!1,t.unorderedObjects=f.unorderedObjects!==!1,t.replacer=f.replacer||void 0,t.excludeKeys=f.excludeKeys||void 0,u===void 0)throw new Error("Object argument required.");for(var o=0;o<l.length;++o)l[o].toLowerCase()===t.algorithm.toLowerCase()&&(t.algorithm=l[o]);if(l.indexOf(t.algorithm)===-1)throw new Error('Algorithm "'+t.algorithm+'"  not supported. supported values: '+l.join(", "));if(m.indexOf(t.encoding)===-1&&t.algorithm!=="passthrough")throw new Error('Encoding "'+t.encoding+'"  not supported. supported values: '+m.join(", "));return t}function g(u){if(typeof u=="function")return/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(u))!=null}function h(u,f,t){t=t||[];function o(n){return f.update?f.update(n,"utf8"):f.write(n,"utf8")}return{dispatch:function(n){return this["_"+((n=u.replacer?u.replacer(n):n)===null?"null":typeof n)](n)},_object:function(n){var s,a=Object.prototype.toString.call(n),x=/\[object (.*)\]/i.exec(a);if(x=(x=x?x[1]:"unknown:["+a+"]").toLowerCase(),0<=(a=t.indexOf(n)))return this.dispatch("[CIRCULAR:"+a+"]");if(t.push(n),z!==void 0&&z.isBuffer&&z.isBuffer(n))return o("buffer:"),o(n);if(x==="object"||x==="function"||x==="asyncfunction")return a=Object.keys(n),u.unorderedObjects&&(a=a.sort()),u.respectType===!1||g(n)||a.splice(0,0,"prototype","__proto__","constructor"),u.excludeKeys&&(a=a.filter(function(L){return!u.excludeKeys(L)})),o("object:"+a.length+":"),s=this,a.forEach(function(L){s.dispatch(L),o(":"),u.excludeValues||s.dispatch(n[L]),o(",")});if(!this["_"+x]){if(u.ignoreUnknown)return o("["+x+"]");throw new Error('Unknown object type "'+x+'"')}this["_"+x](n)},_array:function(n,L){L=L!==void 0?L:u.unorderedArrays!==!1;var a=this;if(o("array:"+n.length+":"),!L||n.length<=1)return n.forEach(function(U){return a.dispatch(U)});var x=[],L=n.map(function(U){var _=new A,k=t.slice();return h(u,_,k).dispatch(U),x=x.concat(k.slice(t.length)),_.read().toString()});return t=t.concat(x),L.sort(),this._array(L,!1)},_date:function(n){return o("date:"+n.toJSON())},_symbol:function(n){return o("symbol:"+n.toString())},_error:function(n){return o("error:"+n.toString())},_boolean:function(n){return o("bool:"+n.toString())},_string:function(n){o("string:"+n.length+":"),o(n.toString())},_function:function(n){o("fn:"),g(n)?this.dispatch("[native]"):this.dispatch(n.toString()),u.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(n.name)),u.respectFunctionProperties&&this._object(n)},_number:function(n){return o("number:"+n.toString())},_xml:function(n){return o("xml:"+n.toString())},_null:function(){return o("Null")},_undefined:function(){return o("Undefined")},_regexp:function(n){return o("regex:"+n.toString())},_uint8array:function(n){return o("uint8array:"),this.dispatch(Array.prototype.slice.call(n))},_uint8clampedarray:function(n){return o("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(n))},_int8array:function(n){return o("int8array:"),this.dispatch(Array.prototype.slice.call(n))},_uint16array:function(n){return o("uint16array:"),this.dispatch(Array.prototype.slice.call(n))},_int16array:function(n){return o("int16array:"),this.dispatch(Array.prototype.slice.call(n))},_uint32array:function(n){return o("uint32array:"),this.dispatch(Array.prototype.slice.call(n))},_int32array:function(n){return o("int32array:"),this.dispatch(Array.prototype.slice.call(n))},_float32array:function(n){return o("float32array:"),this.dispatch(Array.prototype.slice.call(n))},_float64array:function(n){return o("float64array:"),this.dispatch(Array.prototype.slice.call(n))},_arraybuffer:function(n){return o("arraybuffer:"),this.dispatch(new Uint8Array(n))},_url:function(n){return o("url:"+n.toString())},_map:function(n){return o("map:"),n=Array.from(n),this._array(n,u.unorderedSets!==!1)},_set:function(n){return o("set:"),n=Array.from(n),this._array(n,u.unorderedSets!==!1)},_file:function(n){return o("file:"),this.dispatch([n.name,n.size,n.type,n.lastModfied])},_blob:function(){if(u.ignoreUnknown)return o("[blob]");throw Error(`Hashing Blob objects is currently not supported
(see https://github.com/puleos/object-hash/issues/26)
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow:function(){return o("domwindow")},_bigint:function(n){return o("bigint:"+n.toString())},_process:function(){return o("process")},_timer:function(){return o("timer")},_pipe:function(){return o("pipe")},_tcp:function(){return o("tcp")},_udp:function(){return o("udp")},_tty:function(){return o("tty")},_statwatcher:function(){return o("statwatcher")},_securecontext:function(){return o("securecontext")},_connection:function(){return o("connection")},_zlib:function(){return o("zlib")},_context:function(){return o("context")},_nodescript:function(){return o("nodescript")},_httpparser:function(){return o("httpparser")},_dataview:function(){return o("dataview")},_signal:function(){return o("signal")},_fsevent:function(){return o("fsevent")},_tlswrap:function(){return o("tlswrap")}}}function A(){return{buf:"",write:function(u){this.buf+=u},end:function(u){this.buf+=u},read:function(){return this.buf}}}B.writeToStream=function(u,f,t){return t===void 0&&(t=f,f={}),h(f=p(u,f),t).dispatch(u)}}).call(this,y("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},y("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_9a5aa49d.js","/")},{buffer:3,crypto:5,lYpoI2:11}],2:[function(y,I,B){(function(j,N,z,V,Y,q,J,K,R){(function(w){"use strict";var E=typeof Uint8Array<"u"?Uint8Array:Array,l=43,m=47,p=48,g=97,h=65,A=45,u=95;function f(t){return t=t.charCodeAt(0),t===l||t===A?62:t===m||t===u?63:t<p?-1:t<p+10?t-p+26+26:t<h+26?t-h:t<g+26?t-g+26:void 0}w.toByteArray=function(t){var o,n;if(0<t.length%4)throw new Error("Invalid string. Length must be a multiple of 4");var s=t.length,s=t.charAt(s-2)==="="?2:t.charAt(s-1)==="="?1:0,a=new E(3*t.length/4-s),x=0<s?t.length-4:t.length,L=0;function U(_){a[L++]=_}for(o=0;o<x;o+=4,0)U((16711680&(n=f(t.charAt(o))<<18|f(t.charAt(o+1))<<12|f(t.charAt(o+2))<<6|f(t.charAt(o+3))))>>16),U((65280&n)>>8),U(255&n);return s==2?U(255&(n=f(t.charAt(o))<<2|f(t.charAt(o+1))>>4)):s==1&&(U((n=f(t.charAt(o))<<10|f(t.charAt(o+1))<<4|f(t.charAt(o+2))>>2)>>8&255),U(255&n)),a},w.fromByteArray=function(t){var o,n,s,a,x=t.length%3,L="";function U(_){return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(_)}for(o=0,s=t.length-x;o<s;o+=3)n=(t[o]<<16)+(t[o+1]<<8)+t[o+2],L+=U((a=n)>>18&63)+U(a>>12&63)+U(a>>6&63)+U(63&a);switch(x){case 1:L=(L+=U((n=t[t.length-1])>>2))+U(n<<4&63)+"==";break;case 2:L=(L=(L+=U((n=(t[t.length-2]<<8)+t[t.length-1])>>10))+U(n>>4&63))+U(n<<2&63)+"="}return L}})(B===void 0?this.base64js={}:B)}).call(this,y("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},y("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js","/node_modules/gulp-browserify/node_modules/base64-js/lib")},{buffer:3,lYpoI2:11}],3:[function(y,I,B){(function(j,N,l,V,Y,q,J,K,R){var w=y("base64-js"),E=y("ieee754");function l(r,e,i){if(!(this instanceof l))return new l(r,e,i);var d,c,v,S,M=typeof r;if(e==="base64"&&M=="string")for(r=(S=r).trim?S.trim():S.replace(/^\s+|\s+$/g,"");r.length%4!=0;)r+="=";if(M=="number")d=P(r);else if(M=="string")d=l.byteLength(r,e);else{if(M!="object")throw new Error("First argument needs to be a number, array or string.");d=P(r.length)}if(l._useTypedArrays?c=l._augment(new Uint8Array(d)):((c=this).length=d,c._isBuffer=!0),l._useTypedArrays&&typeof r.byteLength=="number")c._set(r);else if(T(S=r)||l.isBuffer(S)||S&&typeof S=="object"&&typeof S.length=="number")for(v=0;v<d;v++)l.isBuffer(r)?c[v]=r.readUInt8(v):c[v]=r[v];else if(M=="string")c.write(r,0,e);else if(M=="number"&&!l._useTypedArrays&&!i)for(v=0;v<d;v++)c[v]=0;return c}function m(r,e,i,d){return l._charsWritten=nr(function(c){for(var v=[],S=0;S<c.length;S++)v.push(255&c.charCodeAt(S));return v}(e),r,i,d)}function p(r,e,i,d){return l._charsWritten=nr(function(c){for(var v,S,M=[],D=0;D<c.length;D++)S=c.charCodeAt(D),v=S>>8,S=S%256,M.push(S),M.push(v);return M}(e),r,i,d)}function g(r,e,i){var d="";i=Math.min(r.length,i);for(var c=e;c<i;c++)d+=String.fromCharCode(r[c]);return d}function h(r,e,i,v){v||(b(typeof i=="boolean","missing or invalid endian"),b(e!=null,"missing offset"),b(e+1<r.length,"Trying to read beyond buffer length"));var c,v=r.length;if(!(v<=e))return i?(c=r[e],e+1<v&&(c|=r[e+1]<<8)):(c=r[e]<<8,e+1<v&&(c|=r[e+1])),c}function A(r,e,i,v){v||(b(typeof i=="boolean","missing or invalid endian"),b(e!=null,"missing offset"),b(e+3<r.length,"Trying to read beyond buffer length"));var c,v=r.length;if(!(v<=e))return i?(e+2<v&&(c=r[e+2]<<16),e+1<v&&(c|=r[e+1]<<8),c|=r[e],e+3<v&&(c+=r[e+3]<<24>>>0)):(e+1<v&&(c=r[e+1]<<16),e+2<v&&(c|=r[e+2]<<8),e+3<v&&(c|=r[e+3]),c+=r[e]<<24>>>0),c}function u(r,e,i,d){if(d||(b(typeof i=="boolean","missing or invalid endian"),b(e!=null,"missing offset"),b(e+1<r.length,"Trying to read beyond buffer length")),!(r.length<=e))return d=h(r,e,i,!0),32768&d?-1*(65535-d+1):d}function f(r,e,i,d){if(d||(b(typeof i=="boolean","missing or invalid endian"),b(e!=null,"missing offset"),b(e+3<r.length,"Trying to read beyond buffer length")),!(r.length<=e))return d=A(r,e,i,!0),2147483648&d?-1*(4294967295-d+1):d}function t(r,e,i,d){return d||(b(typeof i=="boolean","missing or invalid endian"),b(e+3<r.length,"Trying to read beyond buffer length")),E.read(r,e,i,23,4)}function o(r,e,i,d){return d||(b(typeof i=="boolean","missing or invalid endian"),b(e+7<r.length,"Trying to read beyond buffer length")),E.read(r,e,i,52,8)}function n(r,e,i,d,c){if(c||(b(e!=null,"missing value"),b(typeof d=="boolean","missing or invalid endian"),b(i!=null,"missing offset"),b(i+1<r.length,"trying to write beyond buffer length"),tr(e,65535)),c=r.length,!(c<=i))for(var v=0,S=Math.min(c-i,2);v<S;v++)r[i+v]=(e&255<<8*(d?v:1-v))>>>8*(d?v:1-v)}function s(r,e,i,d,c){if(c||(b(e!=null,"missing value"),b(typeof d=="boolean","missing or invalid endian"),b(i!=null,"missing offset"),b(i+3<r.length,"trying to write beyond buffer length"),tr(e,4294967295)),c=r.length,!(c<=i))for(var v=0,S=Math.min(c-i,4);v<S;v++)r[i+v]=e>>>8*(d?v:3-v)&255}function a(r,e,i,d,c){c||(b(e!=null,"missing value"),b(typeof d=="boolean","missing or invalid endian"),b(i!=null,"missing offset"),b(i+1<r.length,"Trying to write beyond buffer length"),er(e,32767,-32768)),r.length<=i||n(r,0<=e?e:65535+e+1,i,d,c)}function x(r,e,i,d,c){c||(b(e!=null,"missing value"),b(typeof d=="boolean","missing or invalid endian"),b(i!=null,"missing offset"),b(i+3<r.length,"Trying to write beyond buffer length"),er(e,2147483647,-2147483648)),r.length<=i||s(r,0<=e?e:4294967295+e+1,i,d,c)}function L(r,e,i,d,c){c||(b(e!=null,"missing value"),b(typeof d=="boolean","missing or invalid endian"),b(i!=null,"missing offset"),b(i+3<r.length,"Trying to write beyond buffer length"),fr(e,34028234663852886e22,-34028234663852886e22)),r.length<=i||E.write(r,e,i,d,23,4)}function U(r,e,i,d,c){c||(b(e!=null,"missing value"),b(typeof d=="boolean","missing or invalid endian"),b(i!=null,"missing offset"),b(i+7<r.length,"Trying to write beyond buffer length"),fr(e,17976931348623157e292,-17976931348623157e292)),r.length<=i||E.write(r,e,i,d,52,8)}B.Buffer=l,B.SlowBuffer=l,B.INSPECT_MAX_BYTES=50,l.poolSize=8192,l._useTypedArrays=function(){try{var r=new ArrayBuffer(0),e=new Uint8Array(r);return e.foo=function(){return 42},e.foo()===42&&typeof e.subarray=="function"}catch{return!1}}(),l.isEncoding=function(r){switch(String(r).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},l.isBuffer=function(r){return!(r==null||!r._isBuffer)},l.byteLength=function(r,e){var i;switch(r+="",e||"utf8"){case"hex":i=r.length/2;break;case"utf8":case"utf-8":i=$(r).length;break;case"ascii":case"binary":case"raw":i=r.length;break;case"base64":i=sr(r).length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":i=2*r.length;break;default:throw new Error("Unknown encoding")}return i},l.concat=function(r,e){if(b(T(r),`Usage: Buffer.concat(list, [totalLength])
list should be an Array.`),r.length===0)return new l(0);if(r.length===1)return r[0];if(typeof e!="number")for(c=e=0;c<r.length;c++)e+=r[c].length;for(var i=new l(e),d=0,c=0;c<r.length;c++){var v=r[c];v.copy(i,d),d+=v.length}return i},l.prototype.write=function(r,e,i,d){isFinite(e)?isFinite(i)||(d=i,i=void 0):(D=d,d=e,e=i,i=D),e=Number(e)||0;var c,v,S,M,D=this.length-e;switch((!i||D<(i=Number(i)))&&(i=D),d=String(d||"utf8").toLowerCase()){case"hex":c=function(X,H,W,O){W=Number(W)||0;var F=X.length-W;(!O||F<(O=Number(O)))&&(O=F),b((F=H.length)%2==0,"Invalid hex string"),F/2<O&&(O=F/2);for(var Z=0;Z<O;Z++){var lr=parseInt(H.substr(2*Z,2),16);b(!isNaN(lr),"Invalid hex string"),X[W+Z]=lr}return l._charsWritten=2*Z,Z}(this,r,e,i);break;case"utf8":case"utf-8":v=this,S=e,M=i,c=l._charsWritten=nr($(r),v,S,M);break;case"ascii":case"binary":c=m(this,r,e,i);break;case"base64":v=this,S=e,M=i,c=l._charsWritten=nr(sr(r),v,S,M);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":c=p(this,r,e,i);break;default:throw new Error("Unknown encoding")}return c},l.prototype.toString=function(r,e,i){var d,c,v,S,M=this;if(r=String(r||"utf8").toLowerCase(),e=Number(e)||0,(i=i!==void 0?Number(i):M.length)===e)return"";switch(r){case"hex":d=function(D,X,H){var W=D.length;(!X||X<0)&&(X=0),(!H||H<0||W<H)&&(H=W);for(var O="",F=X;F<H;F++)O+=C(D[F]);return O}(M,e,i);break;case"utf8":case"utf-8":d=function(D,X,H){var W="",O="";H=Math.min(D.length,H);for(var F=X;F<H;F++)D[F]<=127?(W+=ar(O)+String.fromCharCode(D[F]),O=""):O+="%"+D[F].toString(16);return W+ar(O)}(M,e,i);break;case"ascii":case"binary":d=g(M,e,i);break;case"base64":c=M,S=i,d=(v=e)===0&&S===c.length?w.fromByteArray(c):w.fromByteArray(c.slice(v,S));break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":d=function(D,X,H){for(var W=D.slice(X,H),O="",F=0;F<W.length;F+=2)O+=String.fromCharCode(W[F]+256*W[F+1]);return O}(M,e,i);break;default:throw new Error("Unknown encoding")}return d},l.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},l.prototype.copy=function(r,e,i,d){if(e=e||0,(d=d||d===0?d:this.length)!==(i=i||0)&&r.length!==0&&this.length!==0){b(i<=d,"sourceEnd < sourceStart"),b(0<=e&&e<r.length,"targetStart out of bounds"),b(0<=i&&i<this.length,"sourceStart out of bounds"),b(0<=d&&d<=this.length,"sourceEnd out of bounds"),d>this.length&&(d=this.length);var c=(d=r.length-e<d-i?r.length-e+i:d)-i;if(c<100||!l._useTypedArrays)for(var v=0;v<c;v++)r[v+e]=this[v+i];else r._set(this.subarray(i,i+c),e)}},l.prototype.slice=function(r,e){var i=this.length;if(r=k(r,i,0),e=k(e,i,i),l._useTypedArrays)return l._augment(this.subarray(r,e));for(var d=e-r,c=new l(d,void 0,!0),v=0;v<d;v++)c[v]=this[v+r];return c},l.prototype.get=function(r){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(r)},l.prototype.set=function(r,e){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(r,e)},l.prototype.readUInt8=function(r,e){if(e||(b(r!=null,"missing offset"),b(r<this.length,"Trying to read beyond buffer length")),!(r>=this.length))return this[r]},l.prototype.readUInt16LE=function(r,e){return h(this,r,!0,e)},l.prototype.readUInt16BE=function(r,e){return h(this,r,!1,e)},l.prototype.readUInt32LE=function(r,e){return A(this,r,!0,e)},l.prototype.readUInt32BE=function(r,e){return A(this,r,!1,e)},l.prototype.readInt8=function(r,e){if(e||(b(r!=null,"missing offset"),b(r<this.length,"Trying to read beyond buffer length")),!(r>=this.length))return 128&this[r]?-1*(255-this[r]+1):this[r]},l.prototype.readInt16LE=function(r,e){return u(this,r,!0,e)},l.prototype.readInt16BE=function(r,e){return u(this,r,!1,e)},l.prototype.readInt32LE=function(r,e){return f(this,r,!0,e)},l.prototype.readInt32BE=function(r,e){return f(this,r,!1,e)},l.prototype.readFloatLE=function(r,e){return t(this,r,!0,e)},l.prototype.readFloatBE=function(r,e){return t(this,r,!1,e)},l.prototype.readDoubleLE=function(r,e){return o(this,r,!0,e)},l.prototype.readDoubleBE=function(r,e){return o(this,r,!1,e)},l.prototype.writeUInt8=function(r,e,i){i||(b(r!=null,"missing value"),b(e!=null,"missing offset"),b(e<this.length,"trying to write beyond buffer length"),tr(r,255)),e>=this.length||(this[e]=r)},l.prototype.writeUInt16LE=function(r,e,i){n(this,r,e,!0,i)},l.prototype.writeUInt16BE=function(r,e,i){n(this,r,e,!1,i)},l.prototype.writeUInt32LE=function(r,e,i){s(this,r,e,!0,i)},l.prototype.writeUInt32BE=function(r,e,i){s(this,r,e,!1,i)},l.prototype.writeInt8=function(r,e,i){i||(b(r!=null,"missing value"),b(e!=null,"missing offset"),b(e<this.length,"Trying to write beyond buffer length"),er(r,127,-128)),e>=this.length||(0<=r?this.writeUInt8(r,e,i):this.writeUInt8(255+r+1,e,i))},l.prototype.writeInt16LE=function(r,e,i){a(this,r,e,!0,i)},l.prototype.writeInt16BE=function(r,e,i){a(this,r,e,!1,i)},l.prototype.writeInt32LE=function(r,e,i){x(this,r,e,!0,i)},l.prototype.writeInt32BE=function(r,e,i){x(this,r,e,!1,i)},l.prototype.writeFloatLE=function(r,e,i){L(this,r,e,!0,i)},l.prototype.writeFloatBE=function(r,e,i){L(this,r,e,!1,i)},l.prototype.writeDoubleLE=function(r,e,i){U(this,r,e,!0,i)},l.prototype.writeDoubleBE=function(r,e,i){U(this,r,e,!1,i)},l.prototype.fill=function(r,e,i){if(e=e||0,i=i||this.length,b(typeof(r=typeof(r=r||0)=="string"?r.charCodeAt(0):r)=="number"&&!isNaN(r),"value is not a number"),b(e<=i,"end < start"),i!==e&&this.length!==0){b(0<=e&&e<this.length,"start out of bounds"),b(0<=i&&i<=this.length,"end out of bounds");for(var d=e;d<i;d++)this[d]=r}},l.prototype.inspect=function(){for(var r=[],e=this.length,i=0;i<e;i++)if(r[i]=C(this[i]),i===B.INSPECT_MAX_BYTES){r[i+1]="...";break}return"<Buffer "+r.join(" ")+">"},l.prototype.toArrayBuffer=function(){if(typeof Uint8Array>"u")throw new Error("Buffer.toArrayBuffer not supported in this browser");if(l._useTypedArrays)return new l(this).buffer;for(var r=new Uint8Array(this.length),e=0,i=r.length;e<i;e+=1)r[e]=this[e];return r.buffer};var _=l.prototype;function k(r,e,i){return typeof r!="number"?i:e<=(r=~~r)?e:0<=r||0<=(r+=e)?r:0}function P(r){return(r=~~Math.ceil(+r))<0?0:r}function T(r){return(Array.isArray||function(e){return Object.prototype.toString.call(e)==="[object Array]"})(r)}function C(r){return r<16?"0"+r.toString(16):r.toString(16)}function $(r){for(var e=[],i=0;i<r.length;i++){var d=r.charCodeAt(i);if(d<=127)e.push(r.charCodeAt(i));else for(var c=i,v=(55296<=d&&d<=57343&&i++,encodeURIComponent(r.slice(c,i+1)).substr(1).split("%")),S=0;S<v.length;S++)e.push(parseInt(v[S],16))}return e}function sr(r){return w.toByteArray(r)}function nr(r,e,i,d){for(var c=0;c<d&&!(c+i>=e.length||c>=r.length);c++)e[c+i]=r[c];return c}function ar(r){try{return decodeURIComponent(r)}catch{return"\uFFFD"}}function tr(r,e){b(typeof r=="number","cannot write a non-number as a number"),b(0<=r,"specified a negative value for writing an unsigned value"),b(r<=e,"value is larger than maximum value for type"),b(Math.floor(r)===r,"value has a fractional component")}function er(r,e,i){b(typeof r=="number","cannot write a non-number as a number"),b(r<=e,"value larger than maximum allowed value"),b(i<=r,"value smaller than minimum allowed value"),b(Math.floor(r)===r,"value has a fractional component")}function fr(r,e,i){b(typeof r=="number","cannot write a non-number as a number"),b(r<=e,"value larger than maximum allowed value"),b(i<=r,"value smaller than minimum allowed value")}function b(r,e){if(!r)throw new Error(e||"Failed assertion")}l._augment=function(r){return r._isBuffer=!0,r._get=r.get,r._set=r.set,r.get=_.get,r.set=_.set,r.write=_.write,r.toString=_.toString,r.toLocaleString=_.toString,r.toJSON=_.toJSON,r.copy=_.copy,r.slice=_.slice,r.readUInt8=_.readUInt8,r.readUInt16LE=_.readUInt16LE,r.readUInt16BE=_.readUInt16BE,r.readUInt32LE=_.readUInt32LE,r.readUInt32BE=_.readUInt32BE,r.readInt8=_.readInt8,r.readInt16LE=_.readInt16LE,r.readInt16BE=_.readInt16BE,r.readInt32LE=_.readInt32LE,r.readInt32BE=_.readInt32BE,r.readFloatLE=_.readFloatLE,r.readFloatBE=_.readFloatBE,r.readDoubleLE=_.readDoubleLE,r.readDoubleBE=_.readDoubleBE,r.writeUInt8=_.writeUInt8,r.writeUInt16LE=_.writeUInt16LE,r.writeUInt16BE=_.writeUInt16BE,r.writeUInt32LE=_.writeUInt32LE,r.writeUInt32BE=_.writeUInt32BE,r.writeInt8=_.writeInt8,r.writeInt16LE=_.writeInt16LE,r.writeInt16BE=_.writeInt16BE,r.writeInt32LE=_.writeInt32LE,r.writeInt32BE=_.writeInt32BE,r.writeFloatLE=_.writeFloatLE,r.writeFloatBE=_.writeFloatBE,r.writeDoubleLE=_.writeDoubleLE,r.writeDoubleBE=_.writeDoubleBE,r.fill=_.fill,r.inspect=_.inspect,r.toArrayBuffer=_.toArrayBuffer,r}}).call(this,y("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},y("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/buffer/index.js","/node_modules/gulp-browserify/node_modules/buffer")},{"base64-js":2,buffer:3,ieee754:10,lYpoI2:11}],4:[function(y,I,B){(function(j,N,w,V,Y,q,J,K,R){var w=y("buffer").Buffer,E=4,l=new w(E);l.fill(0),I.exports={hash:function(m,p,g,h){for(var A=p(function(n,s){n.length%E!=0&&(a=n.length+(E-n.length%E),n=w.concat([n,l],a));for(var a,x=[],L=s?n.readInt32BE:n.readInt32LE,U=0;U<n.length;U+=E)x.push(L.call(n,U));return x}(m=w.isBuffer(m)?m:new w(m),h),8*m.length),p=h,u=new w(g),f=p?u.writeInt32BE:u.writeInt32LE,t=0;t<A.length;t++)f.call(u,A[t],4*t,!0);return u}}}).call(this,y("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},y("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],5:[function(y,I,B){(function(j,N,w,V,Y,q,J,K,R){var w=y("buffer").Buffer,E=y("./sha"),l=y("./sha256"),m=y("./rng"),p={sha1:E,sha256:l,md5:y("./md5")},g=64,h=new w(g);function A(n,s){var a=p[n=n||"sha1"],x=[];return a||u("algorithm:",n,"is not yet supported"),{update:function(L){return w.isBuffer(L)||(L=new w(L)),x.push(L),L.length,this},digest:function(L){var U=w.concat(x),U=s?function(_,k,P){w.isBuffer(k)||(k=new w(k)),w.isBuffer(P)||(P=new w(P)),k.length>g?k=_(k):k.length<g&&(k=w.concat([k,h],g));for(var T=new w(g),C=new w(g),$=0;$<g;$++)T[$]=54^k[$],C[$]=92^k[$];return P=_(w.concat([T,P])),_(w.concat([C,P]))}(a,s,U):a(U);return x=null,L?U.toString(L):U}}}function u(){var n=[].slice.call(arguments).join(" ");throw new Error([n,"we accept pull requests","http://github.com/dominictarr/crypto-browserify"].join(`
`))}h.fill(0),B.createHash=function(n){return A(n)},B.createHmac=A,B.randomBytes=function(n,s){if(!s||!s.call)return new w(m(n));try{s.call(this,void 0,new w(m(n)))}catch(a){s(a)}};var f,t=["createCredentials","createCipher","createCipheriv","createDecipher","createDecipheriv","createSign","createVerify","createDiffieHellman","pbkdf2"],o=function(n){B[n]=function(){u("sorry,",n,"is not implemented yet")}};for(f in t)o(t[f],f)}).call(this,y("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},y("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./md5":6,"./rng":7,"./sha":8,"./sha256":9,buffer:3,lYpoI2:11}],6:[function(y,I,B){(function(j,N,z,V,Y,q,J,K,R){var w=y("./helpers");function E(u,f){u[f>>5]|=128<<f%32,u[14+(f+64>>>9<<4)]=f;for(var t=1732584193,o=-271733879,n=-1732584194,s=271733878,a=0;a<u.length;a+=16){var x=t,L=o,U=n,_=s,t=m(t,o,n,s,u[a+0],7,-680876936),s=m(s,t,o,n,u[a+1],12,-389564586),n=m(n,s,t,o,u[a+2],17,606105819),o=m(o,n,s,t,u[a+3],22,-1044525330);t=m(t,o,n,s,u[a+4],7,-176418897),s=m(s,t,o,n,u[a+5],12,1200080426),n=m(n,s,t,o,u[a+6],17,-1473231341),o=m(o,n,s,t,u[a+7],22,-45705983),t=m(t,o,n,s,u[a+8],7,1770035416),s=m(s,t,o,n,u[a+9],12,-1958414417),n=m(n,s,t,o,u[a+10],17,-42063),o=m(o,n,s,t,u[a+11],22,-1990404162),t=m(t,o,n,s,u[a+12],7,1804603682),s=m(s,t,o,n,u[a+13],12,-40341101),n=m(n,s,t,o,u[a+14],17,-1502002290),t=p(t,o=m(o,n,s,t,u[a+15],22,1236535329),n,s,u[a+1],5,-165796510),s=p(s,t,o,n,u[a+6],9,-1069501632),n=p(n,s,t,o,u[a+11],14,643717713),o=p(o,n,s,t,u[a+0],20,-373897302),t=p(t,o,n,s,u[a+5],5,-701558691),s=p(s,t,o,n,u[a+10],9,38016083),n=p(n,s,t,o,u[a+15],14,-660478335),o=p(o,n,s,t,u[a+4],20,-405537848),t=p(t,o,n,s,u[a+9],5,568446438),s=p(s,t,o,n,u[a+14],9,-1019803690),n=p(n,s,t,o,u[a+3],14,-187363961),o=p(o,n,s,t,u[a+8],20,1163531501),t=p(t,o,n,s,u[a+13],5,-1444681467),s=p(s,t,o,n,u[a+2],9,-51403784),n=p(n,s,t,o,u[a+7],14,1735328473),t=g(t,o=p(o,n,s,t,u[a+12],20,-1926607734),n,s,u[a+5],4,-378558),s=g(s,t,o,n,u[a+8],11,-2022574463),n=g(n,s,t,o,u[a+11],16,1839030562),o=g(o,n,s,t,u[a+14],23,-35309556),t=g(t,o,n,s,u[a+1],4,-1530992060),s=g(s,t,o,n,u[a+4],11,1272893353),n=g(n,s,t,o,u[a+7],16,-155497632),o=g(o,n,s,t,u[a+10],23,-1094730640),t=g(t,o,n,s,u[a+13],4,681279174),s=g(s,t,o,n,u[a+0],11,-358537222),n=g(n,s,t,o,u[a+3],16,-722521979),o=g(o,n,s,t,u[a+6],23,76029189),t=g(t,o,n,s,u[a+9],4,-640364487),s=g(s,t,o,n,u[a+12],11,-421815835),n=g(n,s,t,o,u[a+15],16,530742520),t=h(t,o=g(o,n,s,t,u[a+2],23,-995338651),n,s,u[a+0],6,-198630844),s=h(s,t,o,n,u[a+7],10,1126891415),n=h(n,s,t,o,u[a+14],15,-1416354905),o=h(o,n,s,t,u[a+5],21,-57434055),t=h(t,o,n,s,u[a+12],6,1700485571),s=h(s,t,o,n,u[a+3],10,-1894986606),n=h(n,s,t,o,u[a+10],15,-1051523),o=h(o,n,s,t,u[a+1],21,-2054922799),t=h(t,o,n,s,u[a+8],6,1873313359),s=h(s,t,o,n,u[a+15],10,-30611744),n=h(n,s,t,o,u[a+6],15,-1560198380),o=h(o,n,s,t,u[a+13],21,1309151649),t=h(t,o,n,s,u[a+4],6,-145523070),s=h(s,t,o,n,u[a+11],10,-1120210379),n=h(n,s,t,o,u[a+2],15,718787259),o=h(o,n,s,t,u[a+9],21,-343485551),t=A(t,x),o=A(o,L),n=A(n,U),s=A(s,_)}return Array(t,o,n,s)}function l(u,f,t,o,n,s){return A((f=A(A(f,u),A(o,s)))<<n|f>>>32-n,t)}function m(u,f,t,o,n,s,a){return l(f&t|~f&o,u,f,n,s,a)}function p(u,f,t,o,n,s,a){return l(f&o|t&~o,u,f,n,s,a)}function g(u,f,t,o,n,s,a){return l(f^t^o,u,f,n,s,a)}function h(u,f,t,o,n,s,a){return l(t^(f|~o),u,f,n,s,a)}function A(u,f){var t=(65535&u)+(65535&f);return(u>>16)+(f>>16)+(t>>16)<<16|65535&t}I.exports=function(u){return w.hash(u,E,16)}}).call(this,y("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},y("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],7:[function(y,I,B){(function(j,N,z,V,Y,q,J,K,R){var w;I.exports=w||function(E){for(var l,m=new Array(E),p=0;p<E;p++)!(3&p)&&(l=4294967296*Math.random()),m[p]=l>>>((3&p)<<3)&255;return m}}).call(this,y("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},y("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],8:[function(y,I,B){(function(j,N,z,V,Y,q,J,K,R){var w=y("./helpers");function E(p,g){p[g>>5]|=128<<24-g%32,p[15+(g+64>>9<<4)]=g;for(var h,A,u,f=Array(80),t=1732584193,o=-271733879,n=-1732584194,s=271733878,a=-1009589776,x=0;x<p.length;x+=16){for(var L=t,U=o,_=n,k=s,P=a,T=0;T<80;T++){f[T]=T<16?p[x+T]:m(f[T-3]^f[T-8]^f[T-14]^f[T-16],1);var C=l(l(m(t,5),(C=o,A=n,u=s,(h=T)<20?C&A|~C&u:!(h<40)&&h<60?C&A|C&u|A&u:C^A^u)),l(l(a,f[T]),(h=T)<20?1518500249:h<40?1859775393:h<60?-1894007588:-899497514)),a=s,s=n,n=m(o,30),o=t,t=C}t=l(t,L),o=l(o,U),n=l(n,_),s=l(s,k),a=l(a,P)}return Array(t,o,n,s,a)}function l(p,g){var h=(65535&p)+(65535&g);return(p>>16)+(g>>16)+(h>>16)<<16|65535&h}function m(p,g){return p<<g|p>>>32-g}I.exports=function(p){return w.hash(p,E,20,!0)}}).call(this,y("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},y("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],9:[function(y,I,B){(function(j,N,z,V,Y,q,J,K,R){function w(g,h){var A=(65535&g)+(65535&h);return(g>>16)+(h>>16)+(A>>16)<<16|65535&A}function E(g,h){var A,u=new Array(1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298),f=new Array(1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225),t=new Array(64);g[h>>5]|=128<<24-h%32,g[15+(h+64>>9<<4)]=h;for(var o,n,s=0;s<g.length;s+=16){for(var a=f[0],x=f[1],L=f[2],U=f[3],_=f[4],k=f[5],P=f[6],T=f[7],C=0;C<64;C++)t[C]=C<16?g[C+s]:w(w(w((n=t[C-2],m(n,17)^m(n,19)^p(n,10)),t[C-7]),(n=t[C-15],m(n,7)^m(n,18)^p(n,3))),t[C-16]),A=w(w(w(w(T,m(n=_,6)^m(n,11)^m(n,25)),_&k^~_&P),u[C]),t[C]),o=w(m(o=a,2)^m(o,13)^m(o,22),a&x^a&L^x&L),T=P,P=k,k=_,_=w(U,A),U=L,L=x,x=a,a=w(A,o);f[0]=w(a,f[0]),f[1]=w(x,f[1]),f[2]=w(L,f[2]),f[3]=w(U,f[3]),f[4]=w(_,f[4]),f[5]=w(k,f[5]),f[6]=w(P,f[6]),f[7]=w(T,f[7])}return f}var l=y("./helpers"),m=function(g,h){return g>>>h|g<<32-h},p=function(g,h){return g>>>h};I.exports=function(g){return l.hash(g,E,32,!0)}}).call(this,y("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},y("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],10:[function(y,I,B){(function(j,N,z,V,Y,q,J,K,R){B.read=function(w,E,l,m,s){var g,h,A=8*s-m-1,u=(1<<A)-1,f=u>>1,t=-7,o=l?s-1:0,n=l?-1:1,s=w[E+o];for(o+=n,g=s&(1<<-t)-1,s>>=-t,t+=A;0<t;g=256*g+w[E+o],o+=n,t-=8);for(h=g&(1<<-t)-1,g>>=-t,t+=m;0<t;h=256*h+w[E+o],o+=n,t-=8);if(g===0)g=1-f;else{if(g===u)return h?NaN:1/0*(s?-1:1);h+=Math.pow(2,m),g-=f}return(s?-1:1)*h*Math.pow(2,g-m)},B.write=function(w,E,l,m,p,a){var h,A,u=8*a-p-1,f=(1<<u)-1,t=f>>1,o=p===23?Math.pow(2,-24)-Math.pow(2,-77):0,n=m?0:a-1,s=m?1:-1,a=E<0||E===0&&1/E<0?1:0;for(E=Math.abs(E),isNaN(E)||E===1/0?(A=isNaN(E)?1:0,h=f):(h=Math.floor(Math.log(E)/Math.LN2),E*(m=Math.pow(2,-h))<1&&(h--,m*=2),2<=(E+=1<=h+t?o/m:o*Math.pow(2,1-t))*m&&(h++,m/=2),f<=h+t?(A=0,h=f):1<=h+t?(A=(E*m-1)*Math.pow(2,p),h+=t):(A=E*Math.pow(2,t-1)*Math.pow(2,p),h=0));8<=p;w[l+n]=255&A,n+=s,A/=256,p-=8);for(h=h<<p|A,u+=p;0<u;w[l+n]=255&h,n+=s,h/=256,u-=8);w[l+n-s]|=128*a}}).call(this,y("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},y("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/ieee754/index.js","/node_modules/gulp-browserify/node_modules/ieee754")},{buffer:3,lYpoI2:11}],11:[function(y,I,B){(function(j,N,z,V,Y,q,J,K,R){var w,E,l;function m(){}(j=I.exports={}).nextTick=(E=typeof window<"u"&&window.setImmediate,l=typeof window<"u"&&window.postMessage&&window.addEventListener,E?function(p){return window.setImmediate(p)}:l?(w=[],window.addEventListener("message",function(p){var g=p.source;g!==window&&g!==null||p.data!=="process-tick"||(p.stopPropagation(),0<w.length&&w.shift()())},!0),function(p){w.push(p),window.postMessage("process-tick","*")}):function(p){setTimeout(p,0)}),j.title="browser",j.browser=!0,j.env={},j.argv=[],j.on=m,j.addListener=m,j.once=m,j.off=m,j.removeListener=m,j.removeAllListeners=m,j.emit=m,j.binding=function(p){throw new Error("process.binding is not supported")},j.cwd=function(){return"/"},j.chdir=function(p){throw new Error("process.chdir is not supported")}}).call(this,y("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},y("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/process/browser.js","/node_modules/gulp-browserify/node_modules/process")},{buffer:3,lYpoI2:11}]},{},[1])(1)})});var G={};Er(G,{MD5:()=>Br,default:()=>Sr,keys:()=>Ar,keysMD5:()=>Lr,sha1:()=>Ir,writeToStream:()=>xr});var gr=cr(ur());Q(G,cr(ur()));var{sha1:Ir,keys:Ar,MD5:Br,keysMD5:Lr,writeToStream:xr}=gr,{default:pr,...Ur}=gr,Sr=pr!==void 0?pr:Ur;export{Br as MD5,Sr as default,Ar as keys,Lr as keysMD5,Ir as sha1,xr as writeToStream};
//# sourceMappingURL=object-hash.mjs.map