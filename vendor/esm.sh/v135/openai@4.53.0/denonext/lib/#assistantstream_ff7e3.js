/* esm.sh - esbuild bundle(openai@4.53.0/lib/AssistantStream) denonext production */
import*as v from"/v135/openai@4.53.0/denonext/core.js";import{AbstractAssistantStreamRunner as I}from"/v135/openai@4.53.0/denonext/lib/AbstractAssistantStreamRunner.js";import{Stream as O}from"/v135/openai@4.53.0/denonext/streaming.js";import{APIUserAbortError as A,OpenAIError as L}from"/v135/openai@4.53.0/denonext/error.js";var n=function(i,e,a,r){if(a==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?i!==e||!r:!e.has(i))throw new TypeError("Cannot read private member from an object whose class did not declare it");return a==="m"?r:a==="a"?r.call(i):r?r.value:e.get(i)},l=function(i,e,a,r,t){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!t)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?i!==e||!t:!e.has(i))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?t.call(i,a):t?t.value=a:e.set(i,a),a},d,C,u,y,h,m,p,f,R,c,x,k,b,w,g,M,D,T,W,P,j,F,E=class i extends I{constructor(){super(...arguments),d.add(this),C.set(this,[]),u.set(this,{}),y.set(this,{}),h.set(this,void 0),m.set(this,void 0),p.set(this,void 0),f.set(this,void 0),R.set(this,void 0),c.set(this,void 0),x.set(this,void 0),k.set(this,void 0),b.set(this,void 0)}[(C=new WeakMap,u=new WeakMap,y=new WeakMap,h=new WeakMap,m=new WeakMap,p=new WeakMap,f=new WeakMap,R=new WeakMap,c=new WeakMap,x=new WeakMap,k=new WeakMap,b=new WeakMap,d=new WeakSet,Symbol.asyncIterator)](){let e=[],a=[],r=!1;return this.on("event",t=>{let s=a.shift();s?s.resolve(t):e.push(t)}),this.on("end",()=>{r=!0;for(let t of a)t.resolve(void 0);a.length=0}),this.on("abort",t=>{r=!0;for(let s of a)s.reject(t);a.length=0}),this.on("error",t=>{r=!0;for(let s of a)s.reject(t);a.length=0}),{next:async()=>e.length?{value:e.shift(),done:!1}:r?{value:void 0,done:!0}:new Promise((s,o)=>a.push({resolve:s,reject:o})).then(s=>s?{value:s,done:!1}:{value:void 0,done:!0}),return:async()=>(this.abort(),{value:void 0,done:!0})}}static fromReadableStream(e){let a=new i;return a._run(()=>a._fromReadableStream(e)),a}async _fromReadableStream(e,a){let r=a?.signal;r&&(r.aborted&&this.controller.abort(),r.addEventListener("abort",()=>this.controller.abort())),this._connected();let t=O.fromReadableStream(e,this.controller);for await(let s of t)n(this,d,"m",w).call(this,s);if(t.controller.signal?.aborted)throw new A;return this._addRun(n(this,d,"m",g).call(this))}toReadableStream(){return new O(this[Symbol.asyncIterator].bind(this),this.controller).toReadableStream()}static createToolAssistantStream(e,a,r,t,s){let o=new i;return o._run(()=>o._runToolAssistantStream(e,a,r,t,{...s,headers:{...s?.headers,"X-Stainless-Helper-Method":"stream"}})),o}async _createToolAssistantStream(e,a,r,t,s){let o=s?.signal;o&&(o.aborted&&this.controller.abort(),o.addEventListener("abort",()=>this.controller.abort()));let _={...t,stream:!0},S=await e.submitToolOutputs(a,r,_,{...s,signal:this.controller.signal});this._connected();for await(let q of S)n(this,d,"m",w).call(this,q);if(S.controller.signal?.aborted)throw new A;return this._addRun(n(this,d,"m",g).call(this))}static createThreadAssistantStream(e,a,r){let t=new i;return t._run(()=>t._threadAssistantStream(e,a,{...r,headers:{...r?.headers,"X-Stainless-Helper-Method":"stream"}})),t}static createAssistantStream(e,a,r,t){let s=new i;return s._run(()=>s._runAssistantStream(e,a,r,{...t,headers:{...t?.headers,"X-Stainless-Helper-Method":"stream"}})),s}currentEvent(){return n(this,x,"f")}currentRun(){return n(this,k,"f")}currentMessageSnapshot(){return n(this,h,"f")}currentRunStepSnapshot(){return n(this,b,"f")}async finalRunSteps(){return await this.done(),Object.values(n(this,u,"f"))}async finalMessages(){return await this.done(),Object.values(n(this,y,"f"))}async finalRun(){if(await this.done(),!n(this,m,"f"))throw Error("Final run was not received.");return n(this,m,"f")}async _createThreadAssistantStream(e,a,r){let t=r?.signal;t&&(t.aborted&&this.controller.abort(),t.addEventListener("abort",()=>this.controller.abort()));let s={...a,stream:!0},o=await e.createAndRun(s,{...r,signal:this.controller.signal});this._connected();for await(let _ of o)n(this,d,"m",w).call(this,_);if(o.controller.signal?.aborted)throw new A;return this._addRun(n(this,d,"m",g).call(this))}async _createAssistantStream(e,a,r,t){let s=t?.signal;s&&(s.aborted&&this.controller.abort(),s.addEventListener("abort",()=>this.controller.abort()));let o={...r,stream:!0},_=await e.create(a,o,{...t,signal:this.controller.signal});this._connected();for await(let S of _)n(this,d,"m",w).call(this,S);if(_.controller.signal?.aborted)throw new A;return this._addRun(n(this,d,"m",g).call(this))}static accumulateDelta(e,a){for(let[r,t]of Object.entries(a)){if(!e.hasOwnProperty(r)){e[r]=t;continue}let s=e[r];if(s==null){e[r]=t;continue}if(r==="index"||r==="type"){e[r]=t;continue}if(typeof s=="string"&&typeof t=="string")s+=t;else if(typeof s=="number"&&typeof t=="number")s+=t;else if(v.isObj(s)&&v.isObj(t))s=this.accumulateDelta(s,t);else if(Array.isArray(s)&&Array.isArray(t)){if(s.every(o=>typeof o=="string"||typeof o=="number")){s.push(...t);continue}}else throw Error(`Unhandled record type: ${r}, deltaValue: ${t}, accValue: ${s}`);e[r]=s}return e}};w=function(e){if(!this.ended)switch(l(this,x,e,"f"),n(this,d,"m",T).call(this,e),e.event){case"thread.created":break;case"thread.run.created":case"thread.run.queued":case"thread.run.in_progress":case"thread.run.requires_action":case"thread.run.completed":case"thread.run.failed":case"thread.run.cancelling":case"thread.run.cancelled":case"thread.run.expired":n(this,d,"m",F).call(this,e);break;case"thread.run.step.created":case"thread.run.step.in_progress":case"thread.run.step.delta":case"thread.run.step.completed":case"thread.run.step.failed":case"thread.run.step.cancelled":case"thread.run.step.expired":n(this,d,"m",D).call(this,e);break;case"thread.message.created":case"thread.message.in_progress":case"thread.message.delta":case"thread.message.completed":case"thread.message.incomplete":n(this,d,"m",M).call(this,e);break;case"error":throw new Error("Encountered an error event in event processing - errors should be processed earlier")}},g=function(){if(this.ended)throw new L("stream has ended, this shouldn't happen");if(!n(this,m,"f"))throw Error("Final run has not been received");return n(this,m,"f")},M=function(e){let[a,r]=n(this,d,"m",P).call(this,e,n(this,h,"f"));l(this,h,a,"f"),n(this,y,"f")[a.id]=a;for(let t of r){let s=a.content[t.index];s?.type=="text"&&this._emit("textCreated",s.text)}switch(e.event){case"thread.message.created":this._emit("messageCreated",e.data);break;case"thread.message.in_progress":break;case"thread.message.delta":if(this._emit("messageDelta",e.data.delta,a),e.data.delta.content)for(let t of e.data.delta.content){if(t.type=="text"&&t.text){let s=t.text,o=a.content[t.index];if(o&&o.type=="text")this._emit("textDelta",s,o.text);else throw Error("The snapshot associated with this text delta is not text or missing")}if(t.index!=n(this,p,"f")){if(n(this,f,"f"))switch(n(this,f,"f").type){case"text":this._emit("textDone",n(this,f,"f").text,n(this,h,"f"));break;case"image_file":this._emit("imageFileDone",n(this,f,"f").image_file,n(this,h,"f"));break}l(this,p,t.index,"f")}l(this,f,a.content[t.index],"f")}break;case"thread.message.completed":case"thread.message.incomplete":if(n(this,p,"f")!==void 0){let t=e.data.content[n(this,p,"f")];if(t)switch(t.type){case"image_file":this._emit("imageFileDone",t.image_file,n(this,h,"f"));break;case"text":this._emit("textDone",t.text,n(this,h,"f"));break}}n(this,h,"f")&&this._emit("messageDone",e.data),l(this,h,void 0,"f")}},D=function(e){let a=n(this,d,"m",W).call(this,e);switch(l(this,b,a,"f"),e.event){case"thread.run.step.created":this._emit("runStepCreated",e.data);break;case"thread.run.step.delta":let r=e.data.delta;if(r.step_details&&r.step_details.type=="tool_calls"&&r.step_details.tool_calls&&a.step_details.type=="tool_calls")for(let s of r.step_details.tool_calls)s.index==n(this,R,"f")?this._emit("toolCallDelta",s,a.step_details.tool_calls[s.index]):(n(this,c,"f")&&this._emit("toolCallDone",n(this,c,"f")),l(this,R,s.index,"f"),l(this,c,a.step_details.tool_calls[s.index],"f"),n(this,c,"f")&&this._emit("toolCallCreated",n(this,c,"f")));this._emit("runStepDelta",e.data.delta,a);break;case"thread.run.step.completed":case"thread.run.step.failed":case"thread.run.step.cancelled":case"thread.run.step.expired":l(this,b,void 0,"f"),e.data.step_details.type=="tool_calls"&&n(this,c,"f")&&(this._emit("toolCallDone",n(this,c,"f")),l(this,c,void 0,"f")),this._emit("runStepDone",e.data,a);break;case"thread.run.step.in_progress":break}},T=function(e){n(this,C,"f").push(e),this._emit("event",e)},W=function(e){switch(e.event){case"thread.run.step.created":return n(this,u,"f")[e.data.id]=e.data,e.data;case"thread.run.step.delta":let a=n(this,u,"f")[e.data.id];if(!a)throw Error("Received a RunStepDelta before creation of a snapshot");let r=e.data;if(r.delta){let t=E.accumulateDelta(a,r.delta);n(this,u,"f")[e.data.id]=t}return n(this,u,"f")[e.data.id];case"thread.run.step.completed":case"thread.run.step.failed":case"thread.run.step.cancelled":case"thread.run.step.expired":case"thread.run.step.in_progress":n(this,u,"f")[e.data.id]=e.data;break}if(n(this,u,"f")[e.data.id])return n(this,u,"f")[e.data.id];throw new Error("No snapshot available")},P=function(e,a){let r=[];switch(e.event){case"thread.message.created":return[e.data,r];case"thread.message.delta":if(!a)throw Error("Received a delta with no existing snapshot (there should be one from message creation)");let t=e.data;if(t.delta.content)for(let s of t.delta.content)if(s.index in a.content){let o=a.content[s.index];a.content[s.index]=n(this,d,"m",j).call(this,s,o)}else a.content[s.index]=s,r.push(s);return[a,r];case"thread.message.in_progress":case"thread.message.completed":case"thread.message.incomplete":if(a)return[a,r];throw Error("Received thread message event with no existing snapshot")}throw Error("Tried to accumulate a non-message event")},j=function(e,a){return E.accumulateDelta(a,e)},F=function(e){switch(l(this,k,e.data,"f"),e.event){case"thread.run.created":break;case"thread.run.queued":break;case"thread.run.in_progress":break;case"thread.run.requires_action":case"thread.run.cancelled":case"thread.run.failed":case"thread.run.completed":case"thread.run.expired":l(this,m,e.data,"f"),n(this,c,"f")&&(this._emit("toolCallDone",n(this,c,"f")),l(this,c,void 0,"f"));break;case"thread.run.cancelling":break}};export{E as AssistantStream};
//# sourceMappingURL=AssistantStream.js.map