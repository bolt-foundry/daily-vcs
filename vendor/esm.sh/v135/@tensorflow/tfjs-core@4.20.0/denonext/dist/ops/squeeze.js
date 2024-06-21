/* esm.sh - esbuild bundle(@tensorflow/tfjs-core@4.20.0/dist/ops/squeeze) denonext production */
import{convertToTensor as t}from"/v135/@tensorflow/tfjs-core@4.20.0/denonext/dist/tensor_util_env.js";import{squeezeShape as n}from"/v135/@tensorflow/tfjs-core@4.20.0/denonext/dist/util.js";import{op as p}from"/v135/@tensorflow/tfjs-core@4.20.0/denonext/dist/ops/operation.js";import{reshape as s}from"/v135/@tensorflow/tfjs-core@4.20.0/denonext/dist/ops/reshape.js";function m(o,r){let e=t(o,"x","squeeze","string_or_numeric");return s(e,n(e.shape,r).newShape)}var a=p({squeeze_:m});export{a as squeeze};
/*! Bundled license information:

@tensorflow/tfjs-core/dist/ops/squeeze.js:
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
//# sourceMappingURL=squeeze.js.map