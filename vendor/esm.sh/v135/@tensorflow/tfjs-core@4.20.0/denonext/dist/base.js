/* esm.sh - esbuild bundle(@tensorflow/tfjs-core@4.20.0/dist/base) denonext production */
import*as r from"/v135/@tensorflow/tfjs-core@4.20.0/denonext/dist/io/io.js";import*as o from"/v135/@tensorflow/tfjs-core@4.20.0/denonext/dist/math.js";import*as t from"/v135/@tensorflow/tfjs-core@4.20.0/denonext/dist/ops/broadcast_util.js";import*as m from"/v135/@tensorflow/tfjs-core@4.20.0/denonext/dist/ops/browser.js";import*as e from"/v135/@tensorflow/tfjs-core@4.20.0/denonext/dist/ops/gather_nd_util.js";import*as i from"/v135/@tensorflow/tfjs-core@4.20.0/denonext/dist/ops/scatter_nd_util.js";import*as p from"/v135/@tensorflow/tfjs-core@4.20.0/denonext/dist/ops/slice_util.js";import*as a from"/v135/@tensorflow/tfjs-core@4.20.0/denonext/dist/serialization.js";import*as f from"/v135/@tensorflow/tfjs-core@4.20.0/denonext/dist/tensor_util.js";import*as s from"/v135/@tensorflow/tfjs-core@4.20.0/denonext/dist/test_util.js";import*as x from"/v135/@tensorflow/tfjs-core@4.20.0/denonext/dist/util.js";import{version as d}from"/v135/@tensorflow/tfjs-core@4.20.0/denonext/dist/version.js";import{AdadeltaOptimizer as _}from"/v135/@tensorflow/tfjs-core@4.20.0/denonext/dist/optimizers/adadelta_optimizer.js";import{AdagradOptimizer as A}from"/v135/@tensorflow/tfjs-core@4.20.0/denonext/dist/optimizers/adagrad_optimizer.js";import{AdamOptimizer as g}from"/v135/@tensorflow/tfjs-core@4.20.0/denonext/dist/optimizers/adam_optimizer.js";import{AdamaxOptimizer as k}from"/v135/@tensorflow/tfjs-core@4.20.0/denonext/dist/optimizers/adamax_optimizer.js";import{MomentumOptimizer as R}from"/v135/@tensorflow/tfjs-core@4.20.0/denonext/dist/optimizers/momentum_optimizer.js";import{Optimizer as h}from"/v135/@tensorflow/tfjs-core@4.20.0/denonext/dist/optimizers/optimizer.js";import{OptimizerConstructors as B}from"/v135/@tensorflow/tfjs-core@4.20.0/denonext/dist/optimizers/optimizer_constructors.js";import{RMSPropOptimizer as E}from"/v135/@tensorflow/tfjs-core@4.20.0/denonext/dist/optimizers/rmsprop_optimizer.js";import{SGDOptimizer as V}from"/v135/@tensorflow/tfjs-core@4.20.0/denonext/dist/optimizers/sgd_optimizer.js";import{Tensor as C,TensorBuffer as F,Variable as K}from"/v135/@tensorflow/tfjs-core@4.20.0/denonext/dist/tensor.js";import{Rank as P,sumOutType as j,upcastType as q}from"/v135/@tensorflow/tfjs-core@4.20.0/denonext/dist/types.js";export*from"/v135/@tensorflow/tfjs-core@4.20.0/denonext/dist/ops/ops.js";import{Reduction as J}from"/v135/@tensorflow/tfjs-core@4.20.0/denonext/dist/ops/loss_ops_utils.js";export*from"/v135/@tensorflow/tfjs-core@4.20.0/denonext/dist/train.js";export*from"/v135/@tensorflow/tfjs-core@4.20.0/denonext/dist/globals.js";export*from"/v135/@tensorflow/tfjs-core@4.20.0/denonext/dist/kernel_registry.js";import{customGrad as X,grad as Y,grads as Z,valueAndGrad as $,valueAndGrads as rr,variableGrads as or}from"/v135/@tensorflow/tfjs-core@4.20.0/denonext/dist/gradients.js";import{Environment as mr,env as er,ENV as ir}from"/v135/@tensorflow/tfjs-core@4.20.0/denonext/dist/environment.js";import{nextFrame as ar}from"/v135/@tensorflow/tfjs-core@4.20.0/denonext/dist/browser_util.js";import*as l from"/v135/@tensorflow/tfjs-core@4.20.0/denonext/dist/backends/backend_util.js";import*as u from"/v135/@tensorflow/tfjs-core@4.20.0/denonext/dist/device_util.js";import*as c from"/v135/@tensorflow/tfjs-core@4.20.0/denonext/dist/backends/kernel_impls.js";import{KernelBackend as sr,DataStorage as xr}from"/v135/@tensorflow/tfjs-core@4.20.0/denonext/dist/backends/backend.js";export*from"/v135/@tensorflow/tfjs-core@4.20.0/denonext/dist/kernel_names.js";export{_ as AdadeltaOptimizer,A as AdagradOptimizer,g as AdamOptimizer,k as AdamaxOptimizer,xr as DataStorage,ir as ENV,mr as Environment,sr as KernelBackend,R as MomentumOptimizer,h as Optimizer,B as OptimizerConstructors,E as RMSPropOptimizer,P as Rank,J as Reduction,V as SGDOptimizer,C as Tensor,F as TensorBuffer,K as Variable,l as backend_util,t as broadcast_util,m as browser,X as customGrad,u as device_util,er as env,e as gather_util,Y as grad,Z as grads,r as io,c as kernel_impls,o as math,ar as nextFrame,i as scatter_util,a as serialization,p as slice_util,j as sumOutType,f as tensor_util,s as test_util,q as upcastType,x as util,$ as valueAndGrad,rr as valueAndGrads,or as variableGrads,d as version_core};
/*! Bundled license information:

@tensorflow/tfjs-core/dist/base.js:
  (**
   * @license
   * Copyright 2020 Google Inc. All Rights Reserved.
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
//# sourceMappingURL=base.js.map