/* esm.sh - esbuild bundle(@tensorflow/tfjs-core@4.15.0/dist/ops/sinh) denonext production */
import{ENGINE as r}from"/v135/@tensorflow/tfjs-core@4.15.0/denonext/dist/engine.js";import{Sinh as t}from"/v135/@tensorflow/tfjs-core@4.15.0/denonext/dist/kernel_names.js";import{convertToTensor as i}from"/v135/@tensorflow/tfjs-core@4.15.0/denonext/dist/tensor_util_env.js";import{op as m}from"/v135/@tensorflow/tfjs-core@4.15.0/denonext/dist/ops/operation.js";function s(o){let n={x:i(o,"x","sinh")};return r.runKernel(t,n)}var h=m({sinh_:s});export{h as sinh};
/*! Bundled license information:

@tensorflow/tfjs-core/dist/ops/sinh.js:
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
//# sourceMappingURL=sinh.js.map