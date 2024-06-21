/* esm.sh - esbuild bundle(@tensorflow/tfjs-backend-webgl@4.15.0/dist/kernels/LessEqual) denonext production */
import{LessEqual as e}from"/v135/@tensorflow/tfjs-core@4.15.0/denonext/tfjs-core.mjs";import{binaryKernelFunc as o}from"/v135/@tensorflow/tfjs-backend-webgl@4.15.0/denonext/dist/kernel_utils/kernel_funcs_utils.js";import{lessEqualImplCPU as r}from"/v135/@tensorflow/tfjs-backend-webgl@4.15.0/denonext/dist/kernel_utils/shared.js";var l="return float(a <= b);",n=`
  return vec4(lessThanEqual(a, b));
`,p=o({opSnippet:l,packedOpSnippet:n,cpuKernelImpl:r,dtype:"bool"}),c={kernelName:e,backendName:"webgl",kernelFunc:p};export{l as LESS_EQUAL,n as LESS_EQUAL_PACKED,p as lessEqual,c as lessEqualConfig};
/*! Bundled license information:

@tensorflow/tfjs-backend-webgl/dist/kernels/LessEqual.js:
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
//# sourceMappingURL=LessEqual.js.map