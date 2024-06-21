/* esm.sh - esbuild bundle(@tensorflow/tfjs-core@4.20.0/dist/ops/sparse/sparse_segment_sum) denonext production */
import{ENGINE as i}from"/v135/@tensorflow/tfjs-core@4.20.0/denonext/dist/engine.js";import{SparseSegmentSum as d}from"/v135/@tensorflow/tfjs-core@4.20.0/denonext/dist/kernel_names.js";import{convertToTensor as s}from"/v135/@tensorflow/tfjs-core@4.20.0/denonext/dist/tensor_util_env.js";import{op as p}from"/v135/@tensorflow/tfjs-core@4.20.0/denonext/dist/ops/operation.js";function u(t,o,a){let n=s(t,"data","sparseSegmentSum"),e=s(o,"indices","sparseSegmentSum","int32"),r=s(a,"segmentIds","sparseSegmentSum","int32");if(n.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(e.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
         ${e.shape}`);if(r.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
         ${r.shape}`);let m={data:n,indices:e,segmentIds:r};return i.runKernel(d,m)}var f=p({sparseSegmentSum_:u});export{f as sparseSegmentSum};
/*! Bundled license information:

@tensorflow/tfjs-core/dist/ops/sparse/sparse_segment_sum.js:
  (**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)
*/
//# sourceMappingURL=sparse_segment_sum.js.map