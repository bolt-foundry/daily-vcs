/* esm.sh - esbuild bundle(langsmith@0.1.40/singletons/traceable) denonext production */
var o=class{getStore(){}run(n,t){return t()}},r=Symbol.for("ls:tracing_async_local_storage"),l=new o,a=class{getInstance(){return globalThis[r]??l}initializeGlobalInstance(n){globalThis[r]===void 0&&(globalThis[r]=n)}},i=new a,u=()=>{let e=i.getInstance().getStore();if(e===void 0)throw new Error(["Could not get the current run tree.","","Please make sure you are calling this method within a traceable function or the tracing is enabled."].join(`
`));return e};function g(e,n){let t=i.getInstance();return new Promise((s,c)=>{t.run(e,()=>void Promise.resolve(n()).then(s).catch(c))})}var h=Symbol.for("langsmith:traceable:root");function f(e){return typeof e=="function"&&"langsmith:traceable"in e}export{i as AsyncLocalStorageProviderSingleton,h as ROOT,u as getCurrentRunTree,f as isTraceableFunction,g as withRunTree};
//# sourceMappingURL=traceable.js.map