/* esm.sh - esbuild bundle(@tensorflow/tfjs-core@4.20.0/dist/ops/square) denonext production */
import{ENGINE as e}from"/v135/@tensorflow/tfjs-core@4.20.0/denonext/dist/engine.js";import{convertToTensor as n}from"/v135/@tensorflow/tfjs-core@4.20.0/denonext/dist/tensor_util_env.js";import{op as s}from"/v135/@tensorflow/tfjs-core@4.20.0/denonext/dist/ops/operation.js";function u(r){let o=n(r,"x","square"),t={};return e.runKernel("Square",{x:o},t)}var p=s({square_:u});export{p as square};
/*! Bundled license information:

@tensorflow/tfjs-core/dist/ops/square.js:
  (**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
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
//# sourceMappingURL=square.js.map