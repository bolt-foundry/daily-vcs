/* esm.sh - esbuild bundle(@tensorflow/tfjs-core@4.20.0/dist/ops/step) denonext production */
import{ENGINE as p}from"/v135/@tensorflow/tfjs-core@4.20.0/denonext/dist/engine.js";import{Step as e}from"/v135/@tensorflow/tfjs-core@4.20.0/denonext/dist/kernel_names.js";import{convertToTensor as s}from"/v135/@tensorflow/tfjs-core@4.20.0/denonext/dist/tensor_util_env.js";import{op as m}from"/v135/@tensorflow/tfjs-core@4.20.0/denonext/dist/ops/operation.js";function c(t,o=0){let r={x:s(t,"x","step")},n={alpha:o};return p.runKernel(e,r,n)}var N=m({step_:c});export{N as step};
/*! Bundled license information:

@tensorflow/tfjs-core/dist/ops/step.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
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
//# sourceMappingURL=step.js.map