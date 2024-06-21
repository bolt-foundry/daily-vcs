/* esm.sh - esbuild bundle(@tensorflow/tfjs-core@4.15.0/dist/ops/pad) denonext production */
import{ENGINE as s}from"/v135/@tensorflow/tfjs-core@4.15.0/denonext/dist/engine.js";import{PadV2 as e}from"/v135/@tensorflow/tfjs-core@4.15.0/denonext/dist/kernel_names.js";import{convertToTensor as i}from"/v135/@tensorflow/tfjs-core@4.15.0/denonext/dist/tensor_util_env.js";import{op as c}from"/v135/@tensorflow/tfjs-core@4.15.0/denonext/dist/ops/operation.js";function d(r,n,t=0){let o=i(r,"x","pad");if(o.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");let a={paddings:n,constantValue:t},p={x:o};return s.runKernel(e,p,a)}var l=c({pad_:d});export{l as pad};
/*! Bundled license information:

@tensorflow/tfjs-core/dist/ops/pad.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
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
//# sourceMappingURL=pad.js.map