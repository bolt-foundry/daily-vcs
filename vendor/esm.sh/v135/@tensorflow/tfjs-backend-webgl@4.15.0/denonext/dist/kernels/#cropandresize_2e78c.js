/* esm.sh - esbuild bundle(@tensorflow/tfjs-backend-webgl@4.15.0/dist/kernels/CropAndResize) denonext production */
import{CropAndResize as d}from"/v135/@tensorflow/tfjs-core@4.15.0/denonext/tfjs-core.mjs";import{CropAndResizeProgram as b}from"/v135/@tensorflow/tfjs-backend-webgl@4.15.0/denonext/dist/crop_and_resize_gpu.js";var g=r=>{let{inputs:n,backend:t,attrs:a}=r,{image:e,boxes:o,boxInd:s}=n,{cropSize:p,method:c,extrapolationValue:i}=a,m=new b(e.shape,o.shape,p,c,i);return t.runWebGLProgram(m,[e,o,s],"float32")},x={kernelName:d,backendName:"webgl",kernelFunc:g};export{g as cropAndResize,x as cropAndResizeConfig};
/*! Bundled license information:

@tensorflow/tfjs-backend-webgl/dist/kernels/CropAndResize.js:
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
//# sourceMappingURL=CropAndResize.js.map