/* esm.sh - esbuild bundle(@tensorflow/tfjs-core@4.20.0/dist/ops/batchnorm_util) denonext production */
import{reshape as a}from"/v135/@tensorflow/tfjs-core@4.20.0/denonext/dist/ops/reshape.js";function p(e){let s;return e.rank===0||e.rank===1?s=a(e,[1,1,1,e.size]):e.rank===2?s=a(e,[1,1,e.shape[0],e.shape[1]]):e.rank===3?s=a(e,[1,e.shape[0],e.shape[1],e.shape[2]]):s=e,s}export{p as xAs4D};
//# sourceMappingURL=batchnorm_util.js.map