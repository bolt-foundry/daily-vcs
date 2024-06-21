/* esm.sh - esbuild bundle(@tensorflow/tfjs-backend-webgl@4.15.0/dist/kernels/Maximum) denonext production */
import{Maximum as N}from"/v135/@tensorflow/tfjs-core@4.15.0/denonext/tfjs-core.mjs";import{CHECK_NAN_SNIPPET as a}from"/v135/@tensorflow/tfjs-backend-webgl@4.15.0/denonext/dist/binaryop_gpu.js";import{CHECK_NAN_SNIPPET_PACKED as e}from"/v135/@tensorflow/tfjs-backend-webgl@4.15.0/denonext/dist/binaryop_packed_gpu.js";import{binaryKernelFunc as m}from"/v135/@tensorflow/tfjs-backend-webgl@4.15.0/denonext/dist/kernel_utils/kernel_funcs_utils.js";import{maximumImplCPU as i}from"/v135/@tensorflow/tfjs-backend-webgl@4.15.0/denonext/dist/kernel_utils/shared.js";var r=a+`
  return max(a, b);
`,n=`
  vec4 result = vec4(max(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+e+`
  return result;
`,s=m({opSnippet:r,packedOpSnippet:n,cpuKernelImpl:i}),A={kernelName:N,backendName:"webgl",kernelFunc:s};export{s as maximum,A as maximumConfig};
/*! Bundled license information:

@tensorflow/tfjs-backend-webgl/dist/kernels/Maximum.js:
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
//# sourceMappingURL=Maximum.js.map