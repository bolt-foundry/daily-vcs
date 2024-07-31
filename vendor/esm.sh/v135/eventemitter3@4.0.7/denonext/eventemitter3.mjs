/* esm.sh - esbuild bundle(eventemitter3@4.0.7) denonext production */
var k=Object.create;var w=Object.defineProperty;var P=Object.getOwnPropertyDescriptor;var N=Object.getOwnPropertyNames;var S=Object.getPrototypeOf,T=Object.prototype.hasOwnProperty;var j=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports),q=(n,e)=>{for(var t in e)w(n,t,{get:e[t],enumerable:!0})},m=(n,e,t,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let f of N(e))!T.call(n,f)&&f!==t&&w(n,f,{get:()=>e[f],enumerable:!(s=P(e,f))||s.enumerable});return n},_=(n,e,t)=>(m(n,e,"default"),t&&m(t,e,"default")),E=(n,e,t)=>(t=n!=null?k(S(n)):{},m(e||!n||!n.__esModule?w(t,"default",{value:n,enumerable:!0}):t,n));var b=j((J,g)=>{"use strict";var z=Object.prototype.hasOwnProperty,l="~";function d(){}Object.create&&(d.prototype=Object.create(null),new d().__proto__||(l=!1));function B(n,e,t){this.fn=n,this.context=e,this.once=t||!1}function L(n,e,t,s,f){if(typeof t!="function")throw new TypeError("The listener must be a function");var u=new B(t,s||n,f),o=l?l+e:e;return n._events[o]?n._events[o].fn?n._events[o]=[n._events[o],u]:n._events[o].push(u):(n._events[o]=u,n._eventsCount++),n}function x(n,e){--n._eventsCount===0?n._events=new d:delete n._events[e]}function c(){this._events=new d,this._eventsCount=0}c.prototype.eventNames=function(){var e=[],t,s;if(this._eventsCount===0)return e;for(s in t=this._events)z.call(t,s)&&e.push(l?s.slice(1):s);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(t)):e};c.prototype.listeners=function(e){var t=l?l+e:e,s=this._events[t];if(!s)return[];if(s.fn)return[s.fn];for(var f=0,u=s.length,o=new Array(u);f<u;f++)o[f]=s[f].fn;return o};c.prototype.listenerCount=function(e){var t=l?l+e:e,s=this._events[t];return s?s.fn?1:s.length:0};c.prototype.emit=function(e,t,s,f,u,o){var a=l?l+e:e;if(!this._events[a])return!1;var r=this._events[a],p=arguments.length,v,i;if(r.fn){switch(r.once&&this.removeListener(e,r.fn,void 0,!0),p){case 1:return r.fn.call(r.context),!0;case 2:return r.fn.call(r.context,t),!0;case 3:return r.fn.call(r.context,t,s),!0;case 4:return r.fn.call(r.context,t,s,f),!0;case 5:return r.fn.call(r.context,t,s,f,u),!0;case 6:return r.fn.call(r.context,t,s,f,u,o),!0}for(i=1,v=new Array(p-1);i<p;i++)v[i-1]=arguments[i];r.fn.apply(r.context,v)}else{var A=r.length,y;for(i=0;i<A;i++)switch(r[i].once&&this.removeListener(e,r[i].fn,void 0,!0),p){case 1:r[i].fn.call(r[i].context);break;case 2:r[i].fn.call(r[i].context,t);break;case 3:r[i].fn.call(r[i].context,t,s);break;case 4:r[i].fn.call(r[i].context,t,s,f);break;default:if(!v)for(y=1,v=new Array(p-1);y<p;y++)v[y-1]=arguments[y];r[i].fn.apply(r[i].context,v)}}return!0};c.prototype.on=function(e,t,s){return L(this,e,t,s,!1)};c.prototype.once=function(e,t,s){return L(this,e,t,s,!0)};c.prototype.removeListener=function(e,t,s,f){var u=l?l+e:e;if(!this._events[u])return this;if(!t)return x(this,u),this;var o=this._events[u];if(o.fn)o.fn===t&&(!f||o.once)&&(!s||o.context===s)&&x(this,u);else{for(var a=0,r=[],p=o.length;a<p;a++)(o[a].fn!==t||f&&!o[a].once||s&&o[a].context!==s)&&r.push(o[a]);r.length?this._events[u]=r.length===1?r[0]:r:x(this,u)}return this};c.prototype.removeAllListeners=function(e){var t;return e?(t=l?l+e:e,this._events[t]&&x(this,t)):(this._events=new d,this._eventsCount=0),this};c.prototype.off=c.prototype.removeListener;c.prototype.addListener=c.prototype.on;c.prefixed=l;c.EventEmitter=c;typeof g<"u"&&(g.exports=c)});var h={};q(h,{EventEmitter:()=>F,default:()=>H,prefixed:()=>D});var C=E(b());_(h,E(b()));var{prefixed:D,EventEmitter:F}=C,{default:O,...G}=C,H=O!==void 0?O:G;export{F as EventEmitter,H as default,D as prefixed};
//# sourceMappingURL=eventemitter3.mjs.map