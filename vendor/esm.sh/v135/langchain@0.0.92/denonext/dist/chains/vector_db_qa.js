/* esm.sh - esbuild bundle(langchain@0.0.92/dist/chains/vector_db_qa) denonext production */
import __Process$ from "node:process";
var se="__run",R=class{constructor(e){Object.defineProperty(this,"text",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.text=e}toJSON(){return{type:this._getType(),data:{content:this.text,role:"role"in this?this.role:void 0}}}},v=class extends R{_getType(){return"human"}};var V=class extends R{_getType(){return"system"}};var T=class{};import{v4 as L}from"/v135/uuid@9.0.1/denonext/uuid.mjs";import*as oe from"/v135/uuid@9.0.1/denonext/uuid.mjs";var Q=class{},g=class a extends Q{constructor(e){super(),Object.defineProperty(this,"ignoreLLM",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"ignoreChain",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"ignoreAgent",{enumerable:!0,configurable:!0,writable:!0,value:!1}),e&&(this.ignoreLLM=e.ignoreLLM??this.ignoreLLM,this.ignoreChain=e.ignoreChain??this.ignoreChain,this.ignoreAgent=e.ignoreAgent??this.ignoreAgent)}copy(){return new this.constructor(this)}static fromMethods(e){class t extends a{constructor(){super(),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:oe.v4()}),Object.assign(this,e)}}return new t}};import le from"/v135/ansi-styles@5.2.0/denonext/ansi-styles.mjs";var f=class extends g{constructor(){super(),Object.defineProperty(this,"runMap",{enumerable:!0,configurable:!0,writable:!0,value:new Map})}copy(){return this}_addChildRun(e,t){e.child_runs.push(t)}_startTrace(e){if(e.parent_run_id!==void 0){let t=this.runMap.get(e.parent_run_id);t&&this._addChildRun(t,e)}this.runMap.set(e.id,e)}async _endTrace(e){let t=e.parent_run_id!==void 0&&this.runMap.get(e.parent_run_id);t?t.child_execution_order=Math.max(t.child_execution_order,e.child_execution_order):await this.persistRun(e),this.runMap.delete(e.id)}_getExecutionOrder(e){let t=e!==void 0&&this.runMap.get(e);return t?t.child_execution_order+1:1}async handleLLMStart(e,t,r,n,i){let s=this._getExecutionOrder(n),o={id:r,name:e.name,parent_run_id:n,start_time:Date.now(),serialized:e,inputs:{prompts:t},execution_order:s,child_runs:[],child_execution_order:s,run_type:"llm",extra:i};this._startTrace(o),await this.onLLMStart?.(o)}async handleChatModelStart(e,t,r,n,i){let s=this._getExecutionOrder(n),o={id:r,name:e.name,parent_run_id:n,start_time:Date.now(),serialized:e,inputs:{messages:t},execution_order:s,child_runs:[],child_execution_order:s,run_type:"llm",extra:i};this._startTrace(o),await this.onLLMStart?.(o)}async handleLLMEnd(e,t){let r=this.runMap.get(t);if(!r||r?.run_type!=="llm")throw new Error("No LLM run to end.");r.end_time=Date.now(),r.outputs=e,await this.onLLMEnd?.(r),await this._endTrace(r)}async handleLLMError(e,t){let r=this.runMap.get(t);if(!r||r?.run_type!=="llm")throw new Error("No LLM run to end.");r.end_time=Date.now(),r.error=e.message,await this.onLLMError?.(r),await this._endTrace(r)}async handleChainStart(e,t,r,n){let i=this._getExecutionOrder(n),s={id:r,name:e.name,parent_run_id:n,start_time:Date.now(),serialized:e,inputs:t,execution_order:i,child_execution_order:i,run_type:"chain",child_runs:[]};this._startTrace(s),await this.onChainStart?.(s)}async handleChainEnd(e,t){let r=this.runMap.get(t);if(!r||r?.run_type!=="chain")throw new Error("No chain run to end.");r.end_time=Date.now(),r.outputs=e,await this.onChainEnd?.(r),await this._endTrace(r)}async handleChainError(e,t){let r=this.runMap.get(t);if(!r||r?.run_type!=="chain")throw new Error("No chain run to end.");r.end_time=Date.now(),r.error=e.message,await this.onChainError?.(r),await this._endTrace(r)}async handleToolStart(e,t,r,n){let i=this._getExecutionOrder(n),s={id:r,name:e.name,parent_run_id:n,start_time:Date.now(),serialized:e,inputs:{input:t},execution_order:i,child_execution_order:i,run_type:"tool",child_runs:[]};this._startTrace(s),await this.onToolStart?.(s)}async handleToolEnd(e,t){let r=this.runMap.get(t);if(!r||r?.run_type!=="tool")throw new Error("No tool run to end");r.end_time=Date.now(),r.outputs={output:e},await this.onToolEnd?.(r),await this._endTrace(r)}async handleToolError(e,t){let r=this.runMap.get(t);if(!r||r?.run_type!=="tool")throw new Error("No tool run to end");r.end_time=Date.now(),r.error=e.message,await this.onToolError?.(r),await this._endTrace(r)}async handleAgentAction(e,t){let r=this.runMap.get(t);if(!r||r?.run_type!=="chain")return;let n=r;n.actions=n.actions||[],n.actions.push(e),await this.onAgentAction?.(r)}};function u(a,e){return`${a.open}${e}${a.close}`}function b(a,e){try{return JSON.stringify(a,null,2)}catch{return e}}function E(a){if(!a.end_time)return"";let e=a.end_time-a.start_time;return e<1e3?`${e}ms`:`${(e/1e3).toFixed(2)}s`}var{color:h}=le,S=class extends f{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"console_callback_handler"})}persistRun(e){return Promise.resolve()}getParents(e){let t=[],r=e;for(;r.parent_run_id;){let n=this.runMap.get(r.parent_run_id);if(n)t.push(n),r=n;else break}return t}getBreadcrumbs(e){let r=[...this.getParents(e).reverse(),e].map((n,i,s)=>{let o=`${n.execution_order}:${n.run_type}:${n.name}`;return i===s.length-1?u(le.bold,o):o}).join(" > ");return u(h.grey,r)}onChainStart(e){let t=this.getBreadcrumbs(e);console.log(`${u(h.green,"[chain/start]")} [${t}] Entering Chain run with input: ${b(e.inputs,"[inputs]")}`)}onChainEnd(e){let t=this.getBreadcrumbs(e);console.log(`${u(h.cyan,"[chain/end]")} [${t}] [${E(e)}] Exiting Chain run with output: ${b(e.outputs,"[outputs]")}`)}onChainError(e){let t=this.getBreadcrumbs(e);console.log(`${u(h.red,"[chain/error]")} [${t}] [${E(e)}] Chain run errored with error: ${b(e.error,"[error]")}`)}onLLMStart(e){let t=this.getBreadcrumbs(e),r="prompts"in e.inputs?{prompts:e.inputs.prompts.map(n=>n.trim())}:e.inputs;console.log(`${u(h.green,"[llm/start]")} [${t}] Entering LLM run with input: ${b(r,"[inputs]")}`)}onLLMEnd(e){let t=this.getBreadcrumbs(e);console.log(`${u(h.cyan,"[llm/end]")} [${t}] [${E(e)}] Exiting LLM run with output: ${b(e.outputs,"[response]")}`)}onLLMError(e){let t=this.getBreadcrumbs(e);console.log(`${u(h.red,"[llm/error]")} [${t}] [${E(e)}] LLM run errored with error: ${b(e.error,"[error]")}`)}onToolStart(e){let t=this.getBreadcrumbs(e);console.log(`${u(h.green,"[tool/start]")} [${t}] Entering Tool run with input: "${e.inputs.input?.trim()}"`)}onToolEnd(e){let t=this.getBreadcrumbs(e);console.log(`${u(h.cyan,"[tool/end]")} [${t}] [${E(e)}] Exiting Tool run with output: "${e.outputs?.output?.trim()}"`)}onToolError(e){let t=this.getBreadcrumbs(e);console.log(`${u(h.red,"[tool/error]")} [${t}] [${E(e)}] Tool run errored with error: ${b(e.error,"[error]")}`)}onAgentAction(e){let t=e,r=this.getBreadcrumbs(e);console.log(`${u(h.blue,"[agent/action]")} [${r}] Agent selected action: ${b(t.actions[t.actions.length-1],"[action]")}`)}};import _e from"/v135/p-retry@4.6.2/denonext/p-retry.mjs";import J from"/v135/p-queue@6.6.2/denonext/p-queue.mjs";var xe=[400,401,403,404,405,406,407,408,409],w=class{constructor(e){Object.defineProperty(this,"maxConcurrency",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"maxRetries",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"queue",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.maxConcurrency=e.maxConcurrency??1/0,this.maxRetries=e.maxRetries??6;let t="default"in J?J.default:J;this.queue=new t({concurrency:this.maxConcurrency})}call(e,...t){return this.queue.add(()=>_e(()=>e(...t).catch(r=>{throw r instanceof Error?r:new Error(r)}),{onFailedAttempt(r){if(r.message.startsWith("Cancel")||r.message.startsWith("TimeoutError")||r.message.startsWith("AbortError")||r?.code==="ECONNABORTED")throw r;let n=r?.response?.status;if(n&&xe.includes(+n))throw r},retries:this.maxRetries,randomize:!0}),{throwOnTimeout:!0})}callWithOptions(e,t,...r){return e.signal?Promise.race([this.call(t,...r),new Promise((n,i)=>{e.signal?.addEventListener("abort",()=>{i(new Error("AbortError"))})})]):this.call(t,...r)}fetch(...e){return this.call(()=>fetch(...e).then(t=>t.ok?t:Promise.reject(t)))}};var Pe=()=>typeof window<"u"&&typeof window.document<"u",ve=()=>typeof globalThis=="object"&&globalThis.constructor&&globalThis.constructor.name==="DedicatedWorkerGlobalScope",Te=()=>typeof window<"u"&&window.name==="nodejs"||typeof navigator<"u"&&(navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom")),ue=()=>typeof Deno<"u",Ee=()=>typeof __Process$<"u"&&typeof __Process$.versions<"u"&&typeof __Process$.versions.node<"u"&&!ue(),Ce=()=>{let a;return Pe()?a="browser":Ee()?a="node":ve()?a="webworker":Te()?a="jsdom":ue()?a="deno":a="other",a},Y;async function ce(){return Y===void 0&&(Y={library:"langchain-js",runtime:Ce()}),Y}function c(a){try{return typeof __Process$<"u"?__Process$.env?.[a]:void 0}catch{return}}var N=class extends f{constructor({exampleId:e,sessionName:t,callerParams:r,timeout:n}={}){super(),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"langchain_tracer"}),Object.defineProperty(this,"endpoint",{enumerable:!0,configurable:!0,writable:!0,value:c("LANGCHAIN_ENDPOINT")||"http://localhost:1984"}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:{"Content-Type":"application/json"}}),Object.defineProperty(this,"sessionName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"exampleId",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"caller",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"timeout",{enumerable:!0,configurable:!0,writable:!0,value:5e3});let i=c("LANGCHAIN_API_KEY");i&&(this.headers["x-api-key"]=i),this.sessionName=t??c("LANGCHAIN_SESSION"),this.exampleId=e,this.timeout=n??this.timeout,this.caller=new w(r??{maxRetries:2})}async _convertToCreate(e,t=void 0){let r=e.extra??{};return r.runtime=await ce(),{id:e.id,name:e.name,start_time:e.start_time,end_time:e.end_time,run_type:e.run_type,reference_example_id:e.parent_run_id?void 0:t,extra:r,parent_run_id:e.parent_run_id,execution_order:e.execution_order,serialized:e.serialized,error:e.error,inputs:e.inputs,outputs:e.outputs??{},session_name:this.sessionName,child_runs:[]}}async persistRun(e){}async _persistRunSingle(e){let t=await this._convertToCreate(e,this.exampleId),r=`${this.endpoint}/runs`,n=await this.caller.call(fetch,r,{method:"POST",headers:this.headers,body:JSON.stringify(t),signal:AbortSignal.timeout(this.timeout)}),i=await n.text();if(!n.ok)throw new Error(`Failed to persist run: ${n.status} ${n.statusText} ${i}`)}async _updateRunSingle(e){let t={end_time:e.end_time,error:e.error,outputs:e.outputs,parent_run_id:e.parent_run_id,reference_example_id:e.reference_example_id},r=`${this.endpoint}/runs/${e.id}`,n=await this.caller.call(fetch,r,{method:"PATCH",headers:this.headers,body:JSON.stringify(t),signal:AbortSignal.timeout(this.timeout)}),i=await n.text();if(!n.ok)throw new Error(`Failed to update run: ${n.status} ${n.statusText} ${i}`)}async onLLMStart(e){await this._persistRunSingle(e)}async onLLMEnd(e){await this._updateRunSingle(e)}async onLLMError(e){await this._updateRunSingle(e)}async onChainStart(e){await this._persistRunSingle(e)}async onChainEnd(e){await this._updateRunSingle(e)}async onChainError(e){await this._updateRunSingle(e)}async onToolStart(e){await this._persistRunSingle(e)}async onToolEnd(e){await this._updateRunSingle(e)}async onToolError(e){await this._updateRunSingle(e)}};function $(a,e="Human",t="AI"){let r=[];for(let n of a){let i;if(n._getType()==="human")i=e;else if(n._getType()==="ai")i=t;else if(n._getType()==="system")i="System";else if(n._getType()==="generic")i=n.role;else throw new Error(`Got unsupported message type: ${n}`);r.push(`${i}: ${n.text}`)}return r.join(`
`)}var K=class extends f{constructor(){super(),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"langchain_tracer"}),Object.defineProperty(this,"endpoint",{enumerable:!0,configurable:!0,writable:!0,value:c("LANGCHAIN_ENDPOINT")||"http://localhost:1984"}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:{"Content-Type":"application/json"}}),Object.defineProperty(this,"session",{enumerable:!0,configurable:!0,writable:!0,value:void 0});let e=c("LANGCHAIN_API_KEY");e&&(this.headers["x-api-key"]=e)}async newSession(e){let t={start_time:Date.now(),name:e},r=await this.persistSession(t);return this.session=r,r}async loadSession(e){let t=`${this.endpoint}/sessions?name=${e}`;return this._handleSessionResponse(t)}async loadDefaultSession(){let e=`${this.endpoint}/sessions?name=default`;return this._handleSessionResponse(e)}async convertV2RunToRun(e){let t=this.session??await this.loadDefaultSession(),r=e.serialized,n;if(e.run_type==="llm"){let i=e.inputs.prompts?e.inputs.prompts:e.inputs.messages.map(o=>$(o));n={uuid:e.id,start_time:e.start_time,end_time:e.end_time,execution_order:e.execution_order,child_execution_order:e.child_execution_order,serialized:r,type:e.run_type,session_id:t.id,prompts:i,response:e.outputs}}else if(e.run_type==="chain"){let i=await Promise.all(e.child_runs.map(o=>this.convertV2RunToRun(o)));n={uuid:e.id,start_time:e.start_time,end_time:e.end_time,execution_order:e.execution_order,child_execution_order:e.child_execution_order,serialized:r,type:e.run_type,session_id:t.id,inputs:e.inputs,outputs:e.outputs,child_llm_runs:i.filter(o=>o.type==="llm"),child_chain_runs:i.filter(o=>o.type==="chain"),child_tool_runs:i.filter(o=>o.type==="tool")}}else if(e.run_type==="tool"){let i=await Promise.all(e.child_runs.map(o=>this.convertV2RunToRun(o)));n={uuid:e.id,start_time:e.start_time,end_time:e.end_time,execution_order:e.execution_order,child_execution_order:e.child_execution_order,serialized:r,type:e.run_type,session_id:t.id,tool_input:e.inputs.input,output:e.outputs?.output,action:JSON.stringify(r),child_llm_runs:i.filter(o=>o.type==="llm"),child_chain_runs:i.filter(o=>o.type==="chain"),child_tool_runs:i.filter(o=>o.type==="tool")}}else throw new Error(`Unknown run type: ${e.run_type}`);return n}async persistRun(e){let t,r;e.run_type!==void 0?r=await this.convertV2RunToRun(e):r=e,r.type==="llm"?t=`${this.endpoint}/llm-runs`:r.type==="chain"?t=`${this.endpoint}/chain-runs`:t=`${this.endpoint}/tool-runs`;let n=await fetch(t,{method:"POST",headers:this.headers,body:JSON.stringify(r)});n.ok||console.error(`Failed to persist run: ${n.status} ${n.statusText}`)}async persistSession(e){let t=`${this.endpoint}/sessions`,r=await fetch(t,{method:"POST",headers:this.headers,body:JSON.stringify(e)});return r.ok?{id:(await r.json()).id,...e}:(console.error(`Failed to persist session: ${r.status} ${r.statusText}, using default session.`),{id:1,...e})}async _handleSessionResponse(e){let t=await fetch(e,{method:"GET",headers:this.headers}),r;if(!t.ok)return console.error(`Failed to load session: ${t.status} ${t.statusText}`),r={id:1,start_time:Date.now()},this.session=r,r;let n=await t.json();return n.length===0?(r={id:1,start_time:Date.now()},this.session=r,r):([r]=n,this.session=r,r)}};async function pe(a){let e=new K;return a?await e.loadSession(a):await e.loadDefaultSession(),e}async function he(){return new N}var X=class{setHandler(e){return this.setHandlers([e])}},j=class{constructor(e,t,r,n){Object.defineProperty(this,"runId",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"handlers",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"inheritableHandlers",{enumerable:!0,configurable:!0,writable:!0,value:r}),Object.defineProperty(this,"_parentRunId",{enumerable:!0,configurable:!0,writable:!0,value:n})}async handleText(e){await Promise.all(this.handlers.map(async t=>{try{await t.handleText?.(e,this.runId,this._parentRunId)}catch(r){console.error(`Error in handler ${t.constructor.name}, handleText: ${r}`)}}))}},D=class extends j{async handleLLMNewToken(e){await Promise.all(this.handlers.map(async t=>{if(!t.ignoreLLM)try{await t.handleLLMNewToken?.(e,this.runId,this._parentRunId)}catch(r){console.error(`Error in handler ${t.constructor.name}, handleLLMNewToken: ${r}`)}}))}async handleLLMError(e){await Promise.all(this.handlers.map(async t=>{if(!t.ignoreLLM)try{await t.handleLLMError?.(e,this.runId,this._parentRunId)}catch(r){console.error(`Error in handler ${t.constructor.name}, handleLLMError: ${r}`)}}))}async handleLLMEnd(e){await Promise.all(this.handlers.map(async t=>{if(!t.ignoreLLM)try{await t.handleLLMEnd?.(e,this.runId,this._parentRunId)}catch(r){console.error(`Error in handler ${t.constructor.name}, handleLLMEnd: ${r}`)}}))}},Z=class extends j{getChild(){let e=new C(this.runId);return e.setHandlers(this.inheritableHandlers),e}async handleChainError(e){await Promise.all(this.handlers.map(async t=>{if(!t.ignoreChain)try{await t.handleChainError?.(e,this.runId,this._parentRunId)}catch(r){console.error(`Error in handler ${t.constructor.name}, handleChainError: ${r}`)}}))}async handleChainEnd(e){await Promise.all(this.handlers.map(async t=>{if(!t.ignoreChain)try{await t.handleChainEnd?.(e,this.runId,this._parentRunId)}catch(r){console.error(`Error in handler ${t.constructor.name}, handleChainEnd: ${r}`)}}))}async handleAgentAction(e){await Promise.all(this.handlers.map(async t=>{if(!t.ignoreAgent)try{await t.handleAgentAction?.(e,this.runId,this._parentRunId)}catch(r){console.error(`Error in handler ${t.constructor.name}, handleAgentAction: ${r}`)}}))}async handleAgentEnd(e){await Promise.all(this.handlers.map(async t=>{if(!t.ignoreAgent)try{await t.handleAgentEnd?.(e,this.runId,this._parentRunId)}catch(r){console.error(`Error in handler ${t.constructor.name}, handleAgentEnd: ${r}`)}}))}},ee=class extends j{getChild(){let e=new C(this.runId);return e.setHandlers(this.inheritableHandlers),e}async handleToolError(e){await Promise.all(this.handlers.map(async t=>{if(!t.ignoreAgent)try{await t.handleToolError?.(e,this.runId,this._parentRunId)}catch(r){console.error(`Error in handler ${t.constructor.name}, handleToolError: ${r}`)}}))}async handleToolEnd(e){await Promise.all(this.handlers.map(async t=>{if(!t.ignoreAgent)try{await t.handleToolEnd?.(e,this.runId,this._parentRunId)}catch(r){console.error(`Error in handler ${t.constructor.name}, handleToolEnd: ${r}`)}}))}},C=class a extends X{constructor(e){super(),Object.defineProperty(this,"handlers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"inheritableHandlers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"callback_manager"}),Object.defineProperty(this,"_parentRunId",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.handlers=[],this.inheritableHandlers=[],this._parentRunId=e}async handleLLMStart(e,t,r=L(),n=void 0,i=void 0){return await Promise.all(this.handlers.map(async s=>{if(!s.ignoreLLM)try{await s.handleLLMStart?.(e,t,r,this._parentRunId,i)}catch(o){console.error(`Error in handler ${s.constructor.name}, handleLLMStart: ${o}`)}})),new D(r,this.handlers,this.inheritableHandlers,this._parentRunId)}async handleChatModelStart(e,t,r=L(),n=void 0,i=void 0){let s;return await Promise.all(this.handlers.map(async o=>{if(!o.ignoreLLM)try{o.handleChatModelStart?await o.handleChatModelStart?.(e,t,r,this._parentRunId,i):o.handleLLMStart&&(s=t.map(l=>$(l)),await o.handleLLMStart?.(e,s,r,this._parentRunId,i))}catch(l){console.error(`Error in handler ${o.constructor.name}, handleLLMStart: ${l}`)}})),new D(r,this.handlers,this.inheritableHandlers,this._parentRunId)}async handleChainStart(e,t,r=L()){return await Promise.all(this.handlers.map(async n=>{if(!n.ignoreChain)try{await n.handleChainStart?.(e,t,r,this._parentRunId)}catch(i){console.error(`Error in handler ${n.constructor.name}, handleChainStart: ${i}`)}})),new Z(r,this.handlers,this.inheritableHandlers,this._parentRunId)}async handleToolStart(e,t,r=L()){return await Promise.all(this.handlers.map(async n=>{if(!n.ignoreAgent)try{await n.handleToolStart?.(e,t,r,this._parentRunId)}catch(i){console.error(`Error in handler ${n.constructor.name}, handleToolStart: ${i}`)}})),new ee(r,this.handlers,this.inheritableHandlers,this._parentRunId)}addHandler(e,t=!0){this.handlers.push(e),t&&this.inheritableHandlers.push(e)}removeHandler(e){this.handlers=this.handlers.filter(t=>t!==e),this.inheritableHandlers=this.inheritableHandlers.filter(t=>t!==e)}setHandlers(e,t=!0){this.handlers=[],this.inheritableHandlers=[];for(let r of e)this.addHandler(r,t)}copy(e=[],t=!0){let r=new a(this._parentRunId);for(let n of this.handlers){let i=this.inheritableHandlers.includes(n);r.addHandler(n,i)}for(let n of e)r.handlers.filter(i=>i.name==="console_callback_handler").some(i=>i.name===n.name)||r.addHandler(n,t);return r}static fromHandlers(e){class t extends g{constructor(){super(),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:L()}),Object.assign(this,e)}}let r=new this;return r.addHandler(new t),r}static async configure(e,t,r){let n;(e||t)&&(Array.isArray(e)||!e?(n=new a,n.setHandlers(e?.map(me)??[],!0)):n=e,n=n.copy(Array.isArray(t)?t.map(me):t?.handlers,!1));let i=c("LANGCHAIN_VERBOSE")||r?.verbose,s=c("LANGCHAIN_TRACING_V2")??!1,o=s||(c("LANGCHAIN_TRACING")??!1);if(i||o){if(n||(n=new a),i&&!n.handlers.some(l=>l.name===S.prototype.name)){let l=new S;n.addHandler(l,!0)}if(o&&!n.handlers.some(l=>l.name==="langchain_tracer"))if(s)n.addHandler(await he(),!0);else{let l=c("LANGCHAIN_SESSION");n.addHandler(await pe(l),!0)}}return n}};function me(a){return"name"in a?a:g.fromMethods(a)}import{Tiktoken as Oe,getEncodingNameForModel as Me}from"/v135/js-tiktoken@1.0.8/denonext/lite.js";var z={},Se=new w({});async function Le(a,e){return a in z||(z[a]=Se.fetch(`https://tiktoken.pages.dev/js/${a}.json`,{signal:e?.signal}).then(t=>t.json()).catch(t=>{throw delete z[a],t})),new Oe(await z[a],e?.extendedSpecialTokens)}async function te(a,e){return Le(Me(a),e)}var de=a=>a.startsWith("gpt-3.5-turbo-")?"gpt-3.5-turbo":a.startsWith("gpt-4-32k-")?"gpt-4-32k":a.startsWith("gpt-4-")?"gpt-4":a;var je=()=>!1,I=class{constructor(e){Object.defineProperty(this,"verbose",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"callbacks",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.verbose=e.verbose??je(),this.callbacks=e.callbacks}},H=class extends I{get callKeys(){return["stop","timeout","signal"]}constructor(e){super({verbose:e.verbose,callbacks:e.callbacks??e.callbackManager}),Object.defineProperty(this,"caller",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_encoding",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.caller=new w(e??{})}async getNumTokens(e){let t=Math.ceil(e.length/4);if(!this._encoding)try{this._encoding=await te("modelName"in this?de(this.modelName):"gpt2")}catch(r){console.warn("Failed to calculate number of tokens, falling back to approximate count",r)}return this._encoding&&(t=this._encoding.encode(e).length),t}_identifyingParams(){return{}}serialize(){return{...this._identifyingParams(),_type:this._llmType(),_model:this._modelType()}}static async deserialize(e){let{_type:t,_model:r,...n}=e;if(r&&r!=="base_chat_model")throw new Error(`Cannot load LLM with model ${r}`);let i={openai:(await import("/v135/langchain@0.0.92/denonext/dist/chat_models/openai.js")).ChatOpenAI}[t];if(i===void 0)throw new Error(`Cannot load  LLM with type ${t}`);return new i(n)}};var m=class extends I{constructor(e,t,r){if(arguments.length===1&&typeof e=="object"&&!("saveContext"in e)){let{memory:n,callbackManager:i,...s}=e;super({...s,callbacks:i??s.callbacks}),this.memory=n}else super({verbose:t,callbacks:r}),this.memory=e}serialize(){throw new Error("Method not implemented.")}async run(e,t){if(!(this.inputKeys.length<=1))throw new Error(`Chain ${this._chainType()} expects multiple inputs, cannot use 'run' `);let n=this.inputKeys.length?{[this.inputKeys[0]]:e}:{},i=await this.call(n,t),s=Object.keys(i);if(s.length===1)return i[s[0]];throw new Error("return values have multiple keys, `run` only supported when one key currently")}async call(e,t){let r={...e};if(this.memory!=null){let o=await this.memory.loadMemoryVariables(e);for(let[l,ge]of Object.entries(o))r[l]=ge}let i=await(await C.configure(t,this.callbacks,{verbose:this.verbose}))?.handleChainStart({name:this._chainType()},r),s;try{s=await this._call(r,i)}catch(o){throw await i?.handleChainError(o),o}return this.memory!=null&&await this.memory.saveContext(e,s),await i?.handleChainEnd(s),Object.defineProperty(s,se,{value:i?{runId:i?.runId}:void 0,configurable:!0}),s}async apply(e,t){return Promise.all(e.map(async(r,n)=>this.call(r,t?.[n])))}static async deserialize(e,t={}){switch(e._type){case"llm_chain":{let{LLMChain:r}=await import("/v135/langchain@0.0.92/denonext/dist/chains/llm_chain.js");return r.deserialize(e)}case"sequential_chain":{let{SequentialChain:r}=await import("/v135/langchain@0.0.92/denonext/dist/chains/sequential_chain.js");return r.deserialize(e)}case"simple_sequential_chain":{let{SimpleSequentialChain:r}=await import("/v135/langchain@0.0.92/denonext/dist/chains/sequential_chain.js");return r.deserialize(e)}case"stuff_documents_chain":{let{StuffDocumentsChain:r}=await import("/v135/langchain@0.0.92/denonext/dist/chains/combine_docs_chain.js");return r.deserialize(e)}case"map_reduce_documents_chain":{let{MapReduceDocumentsChain:r}=await import("/v135/langchain@0.0.92/denonext/dist/chains/combine_docs_chain.js");return r.deserialize(e)}case"refine_documents_chain":{let{RefineDocumentsChain:r}=await import("/v135/langchain@0.0.92/denonext/dist/chains/combine_docs_chain.js");return r.deserialize(e)}case"vector_db_qa":{let{VectorDBQAChain:r}=await import("/v135/langchain@0.0.92/denonext/dist/chains/vector_db_qa.js");return r.deserialize(e,t)}case"api_chain":{let{APIChain:r}=await import("/v135/langchain@0.0.92/denonext/dist/chains/api/api_chain.js");return r.deserialize(e)}default:throw new Error(`Invalid prompt type in config: ${e._type}`)}}};var F=class extends T{constructor(e){super(),Object.defineProperty(this,"value",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.value=e}toString(){return this.value}toChatMessages(){return[new v(this.value)]}},d=class{constructor(e){Object.defineProperty(this,"inputVariables",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"outputParser",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"partialVariables",{enumerable:!0,configurable:!0,writable:!0,value:void 0});let{inputVariables:t}=e;if(t.includes("stop"))throw new Error("Cannot have an input variable named 'stop', as it is used internally, please rename.");Object.assign(this,e)}async mergePartialAndUserVariables(e){let t=this.partialVariables??{},r={};for(let[i,s]of Object.entries(t))typeof s=="string"?r[i]=s:r[i]=await s();return{...r,...e}}static async deserialize(e){switch(e._type){case"prompt":{let{PromptTemplate:t}=await import("/v135/langchain@0.0.92/denonext/dist/prompts/prompt.js");return t.deserialize(e)}case void 0:{let{PromptTemplate:t}=await import("/v135/langchain@0.0.92/denonext/dist/prompts/prompt.js");return t.deserialize({...e,_type:"prompt"})}case"few_shot":{let{FewShotPromptTemplate:t}=await import("/v135/langchain@0.0.92/denonext/dist/prompts/few_shot.js");return t.deserialize(e)}default:throw new Error(`Invalid prompt type in config: ${e._type}`)}}},O=class extends d{async formatPromptValue(e){let t=await this.format(e);return new F(t)}};var M=class a extends m{get inputKeys(){return this.prompt.inputVariables}get outputKeys(){return[this.outputKey]}constructor(e){if(super(e),Object.defineProperty(this,"prompt",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"llm",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"outputKey",{enumerable:!0,configurable:!0,writable:!0,value:"text"}),Object.defineProperty(this,"outputParser",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.prompt=e.prompt,this.llm=e.llm,this.outputKey=e.outputKey??this.outputKey,this.outputParser=e.outputParser??this.outputParser,this.prompt.outputParser){if(this.outputParser)throw new Error("Cannot set both outputParser and prompt.outputParser");this.outputParser=this.prompt.outputParser}}async _getFinalOutput(e,t,r){let n=e[0].text,i;return this.outputParser?i=await this.outputParser.parseWithPrompt(n,t,r?.getChild()):i=n,i}call(e,t){return super.call(e,t)}async _call(e,t){let r={...e},n={};for(let o of this.llm.callKeys)o in e&&(n[o]=e[o],delete r[o]);let i=await this.prompt.formatPromptValue(r),{generations:s}=await this.llm.generatePrompt([i],n,t?.getChild());return{[this.outputKey]:await this._getFinalOutput(s[0],i,t)}}async predict(e,t){return(await this.call(e,t))[this.outputKey]}_chainType(){return"llm_chain"}static async deserialize(e){let{llm:t,prompt:r}=e;if(!t)throw new Error("LLMChain must have llm");if(!r)throw new Error("LLMChain must have prompt");return new a({llm:await H.deserialize(t),prompt:await d.deserialize(r)})}serialize(){return{_type:this._chainType(),llm:this.llm.serialize(),prompt:this.prompt.serialize()}}};var fe=a=>{let e=a.split(""),t=[],r=(i,s)=>{for(let o=s;o<e.length;o+=1)if(i.includes(e[o]))return o;return-1},n=0;for(;n<e.length;)if(e[n]==="{"&&n+1<e.length&&e[n+1]==="{")t.push({type:"literal",text:"{"}),n+=2;else if(e[n]==="}"&&n+1<e.length&&e[n+1]==="}")t.push({type:"literal",text:"}"}),n+=2;else if(e[n]==="{"){let i=r("}",n);if(i<0)throw new Error("Unclosed '{' in template.");t.push({type:"variable",name:e.slice(n+1,i).join("")}),n=i+1}else{if(e[n]==="}")throw new Error("Single '}' in template.");{let i=r("{}",n),s=(i<0?e.slice(n):e.slice(n,i)).join("");t.push({type:"literal",text:s}),n=i<0?e.length:i}}return t},Ie=(a,e)=>fe(a).reduce((t,r)=>{if(r.type==="variable"){if(r.name in e)return t+e[r.name];throw new Error(`Missing value for input ${r.name}`)}return t+r.text},""),re={"f-string":Ie,jinja2:(a,e)=>""},Ae={"f-string":fe,jinja2:a=>[]},A=(a,e,t)=>re[e](a,t),ne=(a,e)=>Ae[e](a),q=(a,e,t)=>{if(!(e in re)){let r=Object.keys(re);throw new Error(`Invalid template format. Got \`${e}\`;
                         should be one of ${r}`)}try{let r=t.reduce((n,i)=>(n[i]="foo",n),{});A(a,e,r)}catch{throw new Error("Invalid prompt schema.")}};var p=class a extends O{constructor(e){if(super(e),Object.defineProperty(this,"template",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"templateFormat",{enumerable:!0,configurable:!0,writable:!0,value:"f-string"}),Object.defineProperty(this,"validateTemplate",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.assign(this,e),this.validateTemplate){let t=this.inputVariables;this.partialVariables&&(t=t.concat(Object.keys(this.partialVariables))),q(this.template,this.templateFormat,t)}}_getPromptType(){return"prompt"}async format(e){let t=await this.mergePartialAndUserVariables(e);return A(this.template,this.templateFormat,t)}static fromExamples(e,t,r,n=`

`,i=""){let s=[i,...e,t].join(n);return new a({inputVariables:r,template:s})}static fromTemplate(e,{templateFormat:t="f-string",...r}={}){let n=new Set;return ne(e,t).forEach(i=>{i.type==="variable"&&n.add(i.name)}),new a({inputVariables:[...n],templateFormat:t,template:e,...r})}async partial(e){let t={...this};return t.inputVariables=this.inputVariables.filter(r=>!(r in e)),t.partialVariables={...this.partialVariables??{},...e},new a(t)}serialize(){if(this.outputParser!==void 0)throw new Error("Cannot serialize a prompt template with an output parser");return{_type:this._getPromptType(),input_variables:this.inputVariables,template:this.template,template_format:this.templateFormat}}static async deserialize(e){if(!e.template)throw new Error("Prompt template must have a template");return new a({inputVariables:e.input_variables,template:e.template,templateFormat:e.template_format})}};var U=class a extends m{get inputKeys(){return[this.inputKey,...this.llmChain.inputKeys]}get outputKeys(){return this.llmChain.outputKeys}constructor(e){super(e),Object.defineProperty(this,"llmChain",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"inputKey",{enumerable:!0,configurable:!0,writable:!0,value:"input_documents"}),Object.defineProperty(this,"documentVariableName",{enumerable:!0,configurable:!0,writable:!0,value:"context"}),this.llmChain=e.llmChain,this.documentVariableName=e.documentVariableName??this.documentVariableName,this.inputKey=e.inputKey??this.inputKey}async _call(e,t){if(!(this.inputKey in e))throw new Error(`Document key ${this.inputKey} not found.`);let{[this.inputKey]:r,...n}=e,s=r.map(({pageContent:l})=>l).join(`

`);return await this.llmChain.call({...n,[this.documentVariableName]:s},t?.getChild())}_chainType(){return"stuff_documents_chain"}static async deserialize(e){if(!e.llm_chain)throw new Error("Missing llm_chain");return new a({llmChain:await M.deserialize(e.llm_chain)})}serialize(){return{_type:this._chainType(),llm_chain:this.llmChain.serialize()}}};var ie=class{serialize(){return{_type:this.constructor.name,...JSON.parse(JSON.stringify(this))}}},ae=class extends T{constructor(e){super(),Object.defineProperty(this,"messages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.messages=e}toString(){return JSON.stringify(this.messages)}toChatMessages(){return this.messages}};var B=class extends ie{constructor(e){super(),Object.defineProperty(this,"prompt",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.prompt=e}get inputVariables(){return this.prompt.inputVariables}async formatMessages(e){return[await this.format(e)]}},G=class extends d{constructor(e){super(e)}async format(e){return(await this.formatPromptValue(e)).toString()}async formatPromptValue(e){let t=await this.formatMessages(e);return new ae(t)}};var _=class extends B{async format(e){return new v(await this.prompt.format(e))}constructor(e){super(e)}static fromTemplate(e){return new this(p.fromTemplate(e))}};var x=class extends B{async format(e){return new V(await this.prompt.format(e))}constructor(e){super(e)}static fromTemplate(e){return new this(p.fromTemplate(e))}},y=class a extends G{constructor(e){if(super(e),Object.defineProperty(this,"promptMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"validateTemplate",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.assign(this,e),this.validateTemplate){let t=new Set;for(let s of this.promptMessages)for(let o of s.inputVariables)t.add(o);let r=new Set(this.partialVariables?this.inputVariables.concat(Object.keys(this.partialVariables)):this.inputVariables),n=new Set([...r].filter(s=>!t.has(s)));if(n.size>0)throw new Error(`Input variables \`${[...n]}\` are not used in any of the prompt messages.`);let i=new Set([...t].filter(s=>!r.has(s)));if(i.size>0)throw new Error(`Input variables \`${[...i]}\` are used in prompt messages but not in the prompt template.`)}}_getPromptType(){return"chat"}async formatMessages(e){let t=await this.mergePartialAndUserVariables(e),r=[];for(let n of this.promptMessages){let i=n.inputVariables.reduce((o,l)=>{if(!(l in t))throw new Error(`Missing value for input variable \`${l}\``);return o[l]=t[l],o},{}),s=await n.formatMessages(i);r=r.concat(s)}return r}serialize(){if(this.outputParser!==void 0)throw new Error("ChatPromptTemplate cannot be serialized if outputParser is set");return{input_variables:this.inputVariables,prompt_messages:this.promptMessages.map(e=>e.serialize())}}async partial(e){let t={...this};return t.inputVariables=this.inputVariables.filter(r=>!(r in e)),t.partialVariables={...this.partialVariables??{},...e},new a(t)}static fromPromptMessages(e){let t=e.reduce((i,s)=>i.concat(s instanceof a?s.promptMessages:[s]),[]),r=e.reduce((i,s)=>s instanceof a?Object.assign(i,s.partialVariables):i,Object.create(null)),n=new Set;for(let i of t)for(let s of i.inputVariables)s in r||n.add(s);return new a({inputVariables:[...n],promptMessages:t,partialVariables:r})}};var W=class{async getPromptAsync(e,t){return this.getPrompt(e).partial(t?.partialVariables??{})}},P=class extends W{constructor(e,t=[]){super(),Object.defineProperty(this,"defaultPrompt",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"conditionals",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.defaultPrompt=e,this.conditionals=t}getPrompt(e){for(let[t,r]of this.conditionals)if(t(e))return r;return this.defaultPrompt}};function k(a){return a._modelType()==="base_chat_model"}var ke=new p({template:`Use the following pieces of context to answer the question at the end. If you don't know the answer, just say that you don't know, don't try to make up an answer.

{context}

Question: {question}
Helpful Answer:`,inputVariables:["context","question"]}),Re=`Use the following pieces of context to answer the users question. 
If you don't know the answer, just say that you don't know, don't try to make up an answer.
----------------
{context}`,Ve=[x.fromTemplate(Re),_.fromTemplate("{question}")],Ne=y.fromPromptMessages(Ve),be=new P(ke,[[k,Ne]]);function we(a,e={}){let{prompt:t=be.getPrompt(a),verbose:r}=e,n=new M({prompt:t,llm:a,verbose:r});return new U({llmChain:n,verbose:r})}var ye=class a extends m{get inputKeys(){return[this.inputKey]}get outputKeys(){return this.combineDocumentsChain.outputKeys.concat(this.returnSourceDocuments?["sourceDocuments"]:[])}constructor(e){super(e),Object.defineProperty(this,"k",{enumerable:!0,configurable:!0,writable:!0,value:4}),Object.defineProperty(this,"inputKey",{enumerable:!0,configurable:!0,writable:!0,value:"query"}),Object.defineProperty(this,"vectorstore",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"combineDocumentsChain",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"returnSourceDocuments",{enumerable:!0,configurable:!0,writable:!0,value:!1}),this.vectorstore=e.vectorstore,this.combineDocumentsChain=e.combineDocumentsChain,this.inputKey=e.inputKey??this.inputKey,this.k=e.k??this.k,this.returnSourceDocuments=e.returnSourceDocuments??this.returnSourceDocuments}async _call(e,t){if(!(this.inputKey in e))throw new Error(`Question key ${this.inputKey} not found.`);let r=e[this.inputKey],n=await this.vectorstore.similaritySearch(r,this.k,e.filter),i={question:r,input_documents:n},s=await this.combineDocumentsChain.call(i,t?.getChild());return this.returnSourceDocuments?{...s,sourceDocuments:n}:s}_chainType(){return"vector_db_qa"}static async deserialize(e,t){if(!("vectorstore"in t))throw new Error("Need to pass in a vectorstore to deserialize VectorDBQAChain");let{vectorstore:r}=t;if(!e.combine_documents_chain)throw new Error("VectorDBQAChain must have combine_documents_chain in serialized data");return new a({combineDocumentsChain:await m.deserialize(e.combine_documents_chain),k:e.k,vectorstore:r})}serialize(){return{_type:this._chainType(),combine_documents_chain:this.combineDocumentsChain.serialize(),k:this.k}}static fromLLM(e,t,r){let n=we(e);return new this({vectorstore:t,combineDocumentsChain:n,...r})}};export{ye as VectorDBQAChain};
//# sourceMappingURL=vector_db_qa.js.map