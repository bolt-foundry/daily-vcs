/* esm.sh - esbuild bundle(@tensorflow/tfjs-core@4.20.0/dist/ops/is_finite) denonext production */
import{ENGINE as t}from"/v135/@tensorflow/tfjs-core@4.20.0/denonext/dist/engine.js";import{IsFinite as n}from"/v135/@tensorflow/tfjs-core@4.20.0/denonext/dist/kernel_names.js";import{convertToTensor as r}from"/v135/@tensorflow/tfjs-core@4.20.0/denonext/dist/tensor_util_env.js";import{op as e}from"/v135/@tensorflow/tfjs-core@4.20.0/denonext/dist/ops/operation.js";function s(i){let o={x:r(i,"x","isFinite")};return t.runKernel(n,o)}var u=e({isFinite_:s});export{u as isFinite};
/*! Bundled license information:

@tensorflow/tfjs-core/dist/ops/is_finite.js:
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
//# sourceMappingURL=is_finite.js.map