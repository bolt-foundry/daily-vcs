/* esm.sh - esbuild bundle(gtoken@7.0.1) denonext production */
import * as __0$ from "node:fs";
import * as __1$ from "/v135/gaxios@6.1.1/denonext/gaxios.mjs";
import * as __2$ from "/v135/jws@4.0.0/denonext/jws.mjs";
import * as __3$ from "node:path";
import * as __4$ from "node:util";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"fs":return e(__0$);case"gaxios":return c(__1$);case"jws":return e(__2$);case"path":return e(__3$);case"util":return e(__4$);default:throw new Error("module \""+n+"\" not found");}};
var R=Object.create;var p=Object.defineProperty;var A=Object.getOwnPropertyDescriptor;var C=Object.getOwnPropertyNames;var q=Object.getPrototypeOf,N=Object.prototype.hasOwnProperty;var c=(s=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(s,{get:(e,t)=>(typeof require<"u"?require:e)[t]}):s)(function(s){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+s+'" is not supported')});var F=(s,e)=>()=>(e||s((e={exports:{}}).exports,e),e.exports),I=(s,e)=>{for(var t in e)p(s,t,{get:e[t],enumerable:!0})},k=(s,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of C(e))!N.call(s,r)&&r!==t&&p(s,r,{get:()=>e[r],enumerable:!(i=A(e,r))||i.enumerable});return s},a=(s,e,t)=>(k(s,e,"default"),t&&k(t,e,"default")),w=(s,e,t)=>(t=s!=null?R(q(s)):{},k(e||!s||!s.__esModule?p(t,"default",{value:s,enumerable:!0}):t,s));var y=F(f=>{"use strict";Object.defineProperty(f,"__esModule",{value:!0});f.GoogleToken=void 0;var g=c("fs"),O=c("gaxios"),S=c("jws"),j=c("path"),b=c("util"),_=g.readFile?(0,b.promisify)(g.readFile):async()=>{throw new h("use key rather than keyFile.","MISSING_CREDENTIALS")},m="https://www.googleapis.com/oauth2/v4/token",M="https://accounts.google.com/o/oauth2/revoke?token=",h=class extends Error{constructor(e,t){super(e),this.code=t}},T=class{get accessToken(){return this.rawToken?this.rawToken.access_token:void 0}get idToken(){return this.rawToken?this.rawToken.id_token:void 0}get tokenType(){return this.rawToken?this.rawToken.token_type:void 0}get refreshToken(){return this.rawToken?this.rawToken.refresh_token:void 0}constructor(e){this.transporter={request:t=>(0,O.request)(t)},this.configure(e)}hasExpired(){let e=new Date().getTime();return this.rawToken&&this.expiresAt?e>=this.expiresAt:!0}isTokenExpiring(){var e;let t=new Date().getTime(),i=(e=this.eagerRefreshThresholdMillis)!==null&&e!==void 0?e:0;return this.rawToken&&this.expiresAt?this.expiresAt<=t+i:!0}getToken(e,t={}){if(typeof e=="object"&&(t=e,e=void 0),t=Object.assign({forceRefresh:!1},t),e){let i=e;this.getTokenAsync(t).then(r=>i(null,r),e);return}return this.getTokenAsync(t)}async getCredentials(e){switch(j.extname(e)){case".json":{let i=await _(e,"utf8"),r=JSON.parse(i),u=r.private_key,d=r.client_email;if(!u||!d)throw new h("private_key and client_email are required.","MISSING_CREDENTIALS");return{privateKey:u,clientEmail:d}}case".der":case".crt":case".pem":return{privateKey:await _(e,"utf8")};case".p12":case".pfx":throw new h("*.p12 certificates are not supported after v6.1.2. Consider utilizing *.json format or converting *.p12 to *.pem using the OpenSSL CLI.","UNKNOWN_CERTIFICATE_TYPE");default:throw new h("Unknown certificate type. Type is determined based on file extension. Current supported extensions are *.json, and *.pem.","UNKNOWN_CERTIFICATE_TYPE")}}async getTokenAsync(e){if(this.inFlightRequest&&!e.forceRefresh)return this.inFlightRequest;try{return await(this.inFlightRequest=this.getTokenAsyncInner(e))}finally{this.inFlightRequest=void 0}}async getTokenAsyncInner(e){if(this.isTokenExpiring()===!1&&e.forceRefresh===!1)return Promise.resolve(this.rawToken);if(!this.key&&!this.keyFile)throw new Error("No key or keyFile set.");if(!this.key&&this.keyFile){let t=await this.getCredentials(this.keyFile);this.key=t.privateKey,this.iss=t.clientEmail||this.iss,t.clientEmail||this.ensureEmail()}return this.requestToken()}ensureEmail(){if(!this.iss)throw new h("email is required.","MISSING_CREDENTIALS")}revokeToken(e){if(e){this.revokeTokenAsync().then(()=>e(),e);return}return this.revokeTokenAsync()}async revokeTokenAsync(){if(!this.accessToken)throw new Error("No token to revoke.");let e=M+this.accessToken;await this.transporter.request({url:e}),this.configure({email:this.iss,sub:this.sub,key:this.key,keyFile:this.keyFile,scope:this.scope,additionalClaims:this.additionalClaims})}configure(e={}){this.keyFile=e.keyFile,this.key=e.key,this.rawToken=void 0,this.iss=e.email||e.iss,this.sub=e.sub,this.additionalClaims=e.additionalClaims,typeof e.scope=="object"?this.scope=e.scope.join(" "):this.scope=e.scope,this.eagerRefreshThresholdMillis=e.eagerRefreshThresholdMillis,e.transporter&&(this.transporter=e.transporter)}async requestToken(){var e,t;let i=Math.floor(new Date().getTime()/1e3),r=this.additionalClaims||{},u=Object.assign({iss:this.iss,scope:this.scope,aud:m,exp:i+3600,iat:i,sub:this.sub},r),d=S.sign({header:{alg:"RS256"},payload:u,secret:this.key});try{let n=await this.transporter.request({method:"POST",url:m,data:{grant_type:"urn:ietf:params:oauth:grant-type:jwt-bearer",assertion:d},headers:{"Content-Type":"application/x-www-form-urlencoded"},responseType:"json"});return this.rawToken=n.data,this.expiresAt=n.data.expires_in===null||n.data.expires_in===void 0?void 0:(i+n.data.expires_in)*1e3,this.rawToken}catch(n){this.rawToken=void 0,this.tokenExpires=void 0;let l=n.response&&(!((e=n.response)===null||e===void 0)&&e.data)?(t=n.response)===null||t===void 0?void 0:t.data:{};if(l.error){let x=l.error_description?`: ${l.error_description}`:"";n.message=`${l.error}${x}`}throw n}}};f.GoogleToken=T});var o={};I(o,{GoogleToken:()=>K,__esModule:()=>G,default:()=>D});var v=w(y());a(o,w(y()));var{__esModule:G,GoogleToken:K}=v,{default:E,...L}=v,D=E!==void 0?E:L;export{K as GoogleToken,G as __esModule,D as default};
//# sourceMappingURL=gtoken.mjs.map