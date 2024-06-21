/* esm.sh - esbuild bundle(@tensorflow/tfjs-core@4.15.0/dist/ops/scatter_nd_util) denonext production */
import{computeStrides as w,sizeFromShape as p}from"/v135/@tensorflow/tfjs-core@4.15.0/denonext/dist/util.js";function k(a,t,r){let n=t.rank>1?t.shape[t.rank-1]:1,e=t.rank>1?t.rank-1:1,h=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${r.shape}, indices.shape: ${t.shape}, shape: ${a}, sliceDim: ${n}, and batchDim: ${e}.`;if(r.rank<e)throw new Error(h+` update.rank < ${e}. `);if(a.length<n+(r.rank-e))throw new Error(h+` Output shape length < ${n+(r.rank-e)}`);if(r.rank!==e+a.length-n)throw new Error(h+` update.rank != ${e+a.length-n}`);for(let o=0;o<e;++o)if(r.shape[o]!==t.shape[o])throw new Error(h+` updates.shape[${o}] (${r.shape[o]}) != indices.shape[${o}] (${t.shape[o]}).`);for(let o=0;o<r.rank-e;++o)if(r.shape[o+e]!==a[o+n])throw new Error(h+` updates.shape[${o+e}] (${r.shape[o+e]}) != shape[${o+e}] (${a[o+e]})`)}function $(a,t,r){if(t.rank<1)throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${t.rank}.`);if(a.rank<1)throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${a.rank}.`);if(t.dtype!=="int32")throw new Error(`The dtype of 'indices' should be int32, but got dtype: ${t.dtype}`);if(r.length<1)throw new Error(`Output rank must be greater or equal to 1, but got shape: ${r}`);if(r.length===0){if(t.size===0)throw new Error(`Indices specified for empty output. indices shape: ${t.shape}`);if(a.size===0)throw new Error(`Updates specified for empty output. updates shape: ${a.shape}`)}k(r,t,a)}function m(a,t,r){let n=t.shape.length,e=n>1?t.shape[n-1]:1,h=r.length,o=1;for(let s=e;s<h;++s)o*=r[s];let i=e<1?1:e,f=p(t.shape)/i,l=[...w(r.slice(0,e)),1],c=p(r);return{sliceRank:e,numUpdates:f,sliceSize:o,strides:l,outputSize:c}}export{m as calculateShapes,$ as validateInput,k as validateUpdateShape};
//# sourceMappingURL=scatter_nd_util.js.map