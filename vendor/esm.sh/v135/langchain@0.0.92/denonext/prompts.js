/* esm.sh - esbuild bundle(langchain@0.0.92/prompts) denonext production */
var c=class{constructor(e){Object.defineProperty(this,"text",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.text=e}toJSON(){return{type:this._getType(),data:{content:this.text,role:"role"in this?this.role:void 0}}}},f=class extends c{_getType(){return"human"}},w=class extends c{_getType(){return"ai"}},y=class extends c{_getType(){return"system"}},P=class extends c{constructor(e,t){super(e),Object.defineProperty(this,"role",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.role=t}_getType(){return"generic"}},h=class{};var v=class extends h{constructor(e){super(),Object.defineProperty(this,"value",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.value=e}toString(){return this.value}toChatMessages(){return[new f(this.value)]}},u=class{constructor(e){Object.defineProperty(this,"inputVariables",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"outputParser",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"partialVariables",{enumerable:!0,configurable:!0,writable:!0,value:void 0});let{inputVariables:t}=e;if(t.includes("stop"))throw new Error("Cannot have an input variable named 'stop', as it is used internally, please rename.");Object.assign(this,e)}async mergePartialAndUserVariables(e){let t=this.partialVariables??{},r={};for(let[s,n]of Object.entries(t))typeof n=="string"?r[s]=n:r[s]=await n();return{...r,...e}}static async deserialize(e){switch(e._type){case"prompt":{let{PromptTemplate:t}=await import("/v135/langchain@0.0.92/denonext/dist/prompts/prompt.js");return t.deserialize(e)}case void 0:{let{PromptTemplate:t}=await import("/v135/langchain@0.0.92/denonext/dist/prompts/prompt.js");return t.deserialize({...e,_type:"prompt"})}case"few_shot":{let{FewShotPromptTemplate:t}=await import("/v135/langchain@0.0.92/denonext/dist/prompts/few_shot.js");return t.deserialize(e)}default:throw new Error(`Invalid prompt type in config: ${e._type}`)}}},m=class extends u{async formatPromptValue(e){let t=await this.format(e);return new v(t)}},E=class{};var $=i=>{let e=i.split(""),t=[],r=(s,n)=>{for(let o=n;o<e.length;o+=1)if(s.includes(e[o]))return o;return-1},a=0;for(;a<e.length;)if(e[a]==="{"&&a+1<e.length&&e[a+1]==="{")t.push({type:"literal",text:"{"}),a+=2;else if(e[a]==="}"&&a+1<e.length&&e[a+1]==="}")t.push({type:"literal",text:"}"}),a+=2;else if(e[a]==="{"){let s=r("}",a);if(s<0)throw new Error("Unclosed '{' in template.");t.push({type:"variable",name:e.slice(a+1,s).join("")}),a=s+1}else{if(e[a]==="}")throw new Error("Single '}' in template.");{let s=r("{}",a),n=(s<0?e.slice(a):e.slice(a,s)).join("");t.push({type:"literal",text:n}),a=s<0?e.length:s}}return t},G=(i,e)=>$(i).reduce((t,r)=>{if(r.type==="variable"){if(r.name in e)return t+e[r.name];throw new Error(`Missing value for input ${r.name}`)}return t+r.text},""),S={"f-string":G,jinja2:(i,e)=>""},Y={"f-string":$,jinja2:i=>[]},b=(i,e,t)=>S[e](i,t),_=(i,e)=>Y[e](i),x=(i,e,t)=>{if(!(e in S)){let r=Object.keys(S);throw new Error(`Invalid template format. Got \`${e}\`;
                         should be one of ${r}`)}try{let r=t.reduce((a,s)=>(a[s]="foo",a),{});b(i,e,r)}catch{throw new Error("Invalid prompt schema.")}};var p=class i extends m{constructor(e){if(super(e),Object.defineProperty(this,"template",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"templateFormat",{enumerable:!0,configurable:!0,writable:!0,value:"f-string"}),Object.defineProperty(this,"validateTemplate",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.assign(this,e),this.validateTemplate){let t=this.inputVariables;this.partialVariables&&(t=t.concat(Object.keys(this.partialVariables))),x(this.template,this.templateFormat,t)}}_getPromptType(){return"prompt"}async format(e){let t=await this.mergePartialAndUserVariables(e);return b(this.template,this.templateFormat,t)}static fromExamples(e,t,r,a=`

`,s=""){let n=[s,...e,t].join(a);return new i({inputVariables:r,template:n})}static fromTemplate(e,{templateFormat:t="f-string",...r}={}){let a=new Set;return _(e,t).forEach(s=>{s.type==="variable"&&a.add(s.name)}),new i({inputVariables:[...a],templateFormat:t,template:e,...r})}async partial(e){let t={...this};return t.inputVariables=this.inputVariables.filter(r=>!(r in e)),t.partialVariables={...this.partialVariables??{},...e},new i(t)}serialize(){if(this.outputParser!==void 0)throw new Error("Cannot serialize a prompt template with an output parser");return{_type:this._getPromptType(),input_variables:this.inputVariables,template:this.template,template_format:this.templateFormat}}static async deserialize(e){if(!e.template)throw new Error("Prompt template must have a template");return new i({inputVariables:e.input_variables,template:e.template,templateFormat:e.template_format})}};var V=class{async getPromptAsync(e,t){return this.getPrompt(e).partial(t?.partialVariables??{})}},M=class extends V{constructor(e,t=[]){super(),Object.defineProperty(this,"defaultPrompt",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"conditionals",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.defaultPrompt=e,this.conditionals=t}getPrompt(e){for(let[t,r]of this.conditionals)if(t(e))return r;return this.defaultPrompt}};function Q(i){return i._modelType()==="base_llm"}function W(i){return i._modelType()==="base_chat_model"}function J(i){return i.split(/\n| /).length}var L=class i{constructor(e){Object.defineProperty(this,"examples",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"examplePrompt",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"getTextLength",{enumerable:!0,configurable:!0,writable:!0,value:J}),Object.defineProperty(this,"maxLength",{enumerable:!0,configurable:!0,writable:!0,value:2048}),Object.defineProperty(this,"exampleTextLengths",{enumerable:!0,configurable:!0,writable:!0,value:[]}),this.examplePrompt=e.examplePrompt,this.maxLength=e.maxLength??2048,this.getTextLength=e.getTextLength??J}async addExample(e){this.examples.push(e);let t=await this.examplePrompt.format(e);this.exampleTextLengths.push(this.getTextLength(t))}async calculateExampleTextLengths(e,t){if(e.length>0)return e;let{examples:r,examplePrompt:a}=t;return(await Promise.all(r.map(n=>a.format(n)))).map(n=>this.getTextLength(n))}async selectExamples(e){let t=Object.values(e).join(" "),r=this.maxLength-this.getTextLength(t),a=0,s=[];for(;r>0&&a<this.examples.length;){let n=r-this.exampleTextLengths[a];if(n<0)break;s.push(this.examples[a]),r=n,a+=1}return s}static async fromExamples(e,t){let r=new i(t);return await Promise.all(e.map(a=>r.addExample(a))),r}};var j=class{constructor(e){Object.defineProperty(this,"pageContent",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metadata",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.pageContent=e.pageContent?e.pageContent.toString():this.pageContent,this.metadata=e.metadata??{}}};function K(i){return Object.keys(i).sort().map(e=>i[e])}var z=class i{constructor(e){Object.defineProperty(this,"vectorStore",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"k",{enumerable:!0,configurable:!0,writable:!0,value:4}),Object.defineProperty(this,"exampleKeys",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"inputKeys",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.vectorStore=e.vectorStore,this.k=e.k??4,this.exampleKeys=e.exampleKeys,this.inputKeys=e.inputKeys}async addExample(e){let t=this.inputKeys??Object.keys(e),r=K(t.reduce((a,s)=>({...a,[s]:e[s]}),{})).join(" ");await this.vectorStore.addDocuments([new j({pageContent:r,metadata:{example:e}})])}async selectExamples(e){let t=this.inputKeys??Object.keys(e),r=K(t.reduce((n,o)=>({...n,[o]:e[o]}),{})).join(" "),s=(await this.vectorStore.similaritySearch(r,this.k)).map(n=>n.metadata);return this.exampleKeys?s.map(n=>this.exampleKeys.reduce((o,l)=>({...o,[l]:n[l]}),{})):s}static async fromExamples(e,t,r,a={}){let s=a.inputKeys??null,n=e.map(l=>K(s?s.reduce((q,R)=>({...q,[R]:l[R]}),{}):l).join(" ")),o=await r.fromTexts(n,e,t,a);return new i({vectorStore:o,k:a.k??4,exampleKeys:a.exampleKeys,inputKeys:a.inputKeys})}};var I=class i extends m{constructor(e){if(super(e),Object.defineProperty(this,"examples",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"exampleSelector",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"examplePrompt",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"suffix",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"exampleSeparator",{enumerable:!0,configurable:!0,writable:!0,value:`

`}),Object.defineProperty(this,"prefix",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"templateFormat",{enumerable:!0,configurable:!0,writable:!0,value:"f-string"}),Object.defineProperty(this,"validateTemplate",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.assign(this,e),this.examples!==void 0&&this.exampleSelector!==void 0)throw new Error("Only one of 'examples' and 'example_selector' should be provided");if(this.examples===void 0&&this.exampleSelector===void 0)throw new Error("One of 'examples' and 'example_selector' should be provided");if(this.validateTemplate){let t=this.inputVariables;this.partialVariables&&(t=t.concat(Object.keys(this.partialVariables))),x(this.prefix+this.suffix,this.templateFormat,t)}}_getPromptType(){return"few_shot"}async getExamples(e){if(this.examples!==void 0)return this.examples;if(this.exampleSelector!==void 0)return this.exampleSelector.selectExamples(e);throw new Error("One of 'examples' and 'example_selector' should be provided")}async partial(e){let t={...this};return t.inputVariables=this.inputVariables.filter(r=>!(r in e)),t.partialVariables={...this.partialVariables??{},...e},new i(t)}async format(e){let t=await this.mergePartialAndUserVariables(e),r=await this.getExamples(t),a=await Promise.all(r.map(n=>this.examplePrompt.format(n))),s=[this.prefix,...a,this.suffix].join(this.exampleSeparator);return b(s,this.templateFormat,t)}serialize(){if(this.exampleSelector||!this.examples)throw new Error("Serializing an example selector is not currently supported");if(this.outputParser!==void 0)throw new Error("Serializing an output parser is not currently supported");return{_type:this._getPromptType(),input_variables:this.inputVariables,example_prompt:this.examplePrompt.serialize(),example_separator:this.exampleSeparator,suffix:this.suffix,prefix:this.prefix,template_format:this.templateFormat,examples:this.examples}}static async deserialize(e){let{example_prompt:t}=e;if(!t)throw new Error("Missing example prompt");let r=await p.deserialize(t),a;if(Array.isArray(e.examples))a=e.examples;else throw new Error("Invalid examples format. Only list or string are supported.");return new i({inputVariables:e.input_variables,examplePrompt:r,examples:a,exampleSeparator:e.example_separator,prefix:e.prefix,suffix:e.suffix,templateFormat:e.template_format})}};var O=class{serialize(){return{_type:this.constructor.name,...JSON.parse(JSON.stringify(this))}}},k=class extends h{constructor(e){super(),Object.defineProperty(this,"messages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.messages=e}toString(){return JSON.stringify(this.messages)}toChatMessages(){return this.messages}},A=class extends O{constructor(e){super(),Object.defineProperty(this,"variableName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.variableName=e}get inputVariables(){return[this.variableName]}formatMessages(e){return Promise.resolve(e[this.variableName])}},d=class extends O{constructor(e){super(),Object.defineProperty(this,"prompt",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.prompt=e}get inputVariables(){return this.prompt.inputVariables}async formatMessages(e){return[await this.format(e)]}},T=class extends u{constructor(e){super(e)}async format(e){return(await this.formatPromptValue(e)).toString()}async formatPromptValue(e){let t=await this.formatMessages(e);return new k(t)}},F=class extends d{async format(e){return new P(await this.prompt.format(e),this.role)}constructor(e,t){super(e),Object.defineProperty(this,"role",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.role=t}static fromTemplate(e,t){return new this(p.fromTemplate(e),t)}},N=class extends d{async format(e){return new f(await this.prompt.format(e))}constructor(e){super(e)}static fromTemplate(e){return new this(p.fromTemplate(e))}},C=class extends d{async format(e){return new w(await this.prompt.format(e))}constructor(e){super(e)}static fromTemplate(e){return new this(p.fromTemplate(e))}},D=class extends d{async format(e){return new y(await this.prompt.format(e))}constructor(e){super(e)}static fromTemplate(e){return new this(p.fromTemplate(e))}},g=class i extends T{constructor(e){if(super(e),Object.defineProperty(this,"promptMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"validateTemplate",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.assign(this,e),this.validateTemplate){let t=new Set;for(let n of this.promptMessages)for(let o of n.inputVariables)t.add(o);let r=new Set(this.partialVariables?this.inputVariables.concat(Object.keys(this.partialVariables)):this.inputVariables),a=new Set([...r].filter(n=>!t.has(n)));if(a.size>0)throw new Error(`Input variables \`${[...a]}\` are not used in any of the prompt messages.`);let s=new Set([...t].filter(n=>!r.has(n)));if(s.size>0)throw new Error(`Input variables \`${[...s]}\` are used in prompt messages but not in the prompt template.`)}}_getPromptType(){return"chat"}async formatMessages(e){let t=await this.mergePartialAndUserVariables(e),r=[];for(let a of this.promptMessages){let s=a.inputVariables.reduce((o,l)=>{if(!(l in t))throw new Error(`Missing value for input variable \`${l}\``);return o[l]=t[l],o},{}),n=await a.formatMessages(s);r=r.concat(n)}return r}serialize(){if(this.outputParser!==void 0)throw new Error("ChatPromptTemplate cannot be serialized if outputParser is set");return{input_variables:this.inputVariables,prompt_messages:this.promptMessages.map(e=>e.serialize())}}async partial(e){let t={...this};return t.inputVariables=this.inputVariables.filter(r=>!(r in e)),t.partialVariables={...this.partialVariables??{},...e},new i(t)}static fromPromptMessages(e){let t=e.reduce((s,n)=>s.concat(n instanceof i?n.promptMessages:[n]),[]),r=e.reduce((s,n)=>n instanceof i?Object.assign(s,n.partialVariables):s,Object.create(null)),a=new Set;for(let s of t)for(let n of s.inputVariables)n in r||a.add(n);return new i({inputVariables:[...a],promptMessages:t,partialVariables:r})}};var U=class i extends u{constructor(e){super({...e,inputVariables:[]}),Object.defineProperty(this,"pipelinePrompts",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"finalPrompt",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.pipelinePrompts=e.pipelinePrompts,this.finalPrompt=e.finalPrompt,this.inputVariables=this.computeInputValues()}computeInputValues(){let e=this.pipelinePrompts.map(r=>r.name),t=this.pipelinePrompts.map(r=>r.prompt.inputVariables.filter(a=>!e.includes(a))).flat();return[...new Set(t)]}static extractRequiredInputValues(e,t){return t.reduce((r,a)=>(r[a]=e[a],r),{})}async formatPipelinePrompts(e){let t=await this.mergePartialAndUserVariables(e);for(let{name:r,prompt:a}of this.pipelinePrompts){let s=i.extractRequiredInputValues(t,a.inputVariables);a instanceof g?t[r]=await a.formatMessages(s):t[r]=await a.format(s)}return i.extractRequiredInputValues(t,this.finalPrompt.inputVariables)}async formatPromptValue(e){return this.finalPrompt.formatPromptValue(await this.formatPipelinePrompts(e))}async format(e){return this.finalPrompt.format(await this.formatPipelinePrompts(e))}async partial(e){let t={...this};return t.inputVariables=this.inputVariables.filter(r=>!(r in e)),t.partialVariables={...this.partialVariables??{},...e},new i(t)}serialize(){throw new Error("Not implemented.")}_getPromptType(){return"pipeline"}};export{C as AIMessagePromptTemplate,T as BaseChatPromptTemplate,E as BaseExampleSelector,V as BasePromptSelector,u as BasePromptTemplate,m as BaseStringPromptTemplate,F as ChatMessagePromptTemplate,g as ChatPromptTemplate,M as ConditionalPromptSelector,I as FewShotPromptTemplate,N as HumanMessagePromptTemplate,L as LengthBasedExampleSelector,A as MessagesPlaceholder,U as PipelinePromptTemplate,p as PromptTemplate,z as SemanticSimilarityExampleSelector,v as StringPromptValue,D as SystemMessagePromptTemplate,x as checkValidTemplate,W as isChatModel,Q as isLLM,_ as parseTemplate,b as renderTemplate};
//# sourceMappingURL=prompts.js.map