/* esm.sh - esbuild bundle(@tensorflow/tfjs-backend-webgl@4.15.0/dist/kernels/Sin) denonext production */
import{Sin as n}from"/v135/@tensorflow/tfjs-core@4.15.0/denonext/tfjs-core.mjs";import{CHECK_NAN_SNIPPET_PACKED as e}from"/v135/@tensorflow/tfjs-backend-webgl@4.15.0/denonext/dist/binaryop_packed_gpu.js";import{CHECK_NAN_SNIPPET_UNARY as r,unaryKernelFunc as t}from"/v135/@tensorflow/tfjs-backend-webgl@4.15.0/denonext/dist/kernel_utils/kernel_funcs_utils.js";var o=r+`
  return sin(x);
`,i=`
  vec4 result = sin(x);
  bvec4 isNaN = isnan(x);
  ${e}
  return result;
`,N=t({opSnippet:o,packedOpSnippet:i}),m={kernelName:n,backendName:"webgl",kernelFunc:N};export{N as sin,m as sinConfig};
/*! Bundled license information:

@tensorflow/tfjs-backend-webgl/dist/kernels/Sin.js:
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
//# sourceMappingURL=Sin.js.map