/**
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
 */
/// <amd-module name="@tensorflow/tfjs-core/dist/ops/one_hot" />
import { Tensor } from '../tensor.d.ts';
import { DataType, TensorLike } from '../types.d.ts';
/**
 * Creates a one-hot `tf.Tensor`. The locations represented by `indices` take
 * value `onValue` (defaults to 1), while all other locations take value
 * `offValue` (defaults to 0). If `indices` is rank `R`, the output has rank
 * `R+1` with the last axis of size `depth`.
 * `indices` used to encode prediction class must start from 0. For example,
 *  if you have 3 classes of data, class 1 should be encoded as 0, class 2
 *  should be 1, and class 3 should be 2.
 *
 * ```js
 * tf.oneHot(tf.tensor1d([0, 1], 'int32'), 3).print();
 * ```
 *
 * @param indices `tf.Tensor` of indices with dtype `int32`. Indices must
 * start from 0.
 * @param depth The depth of the one hot dimension.
 * @param onValue A number used to fill in the output when the index matches
 * the location.
 * @param offValue A number used to fill in the output when the index does
 *     not match the location.
 * @param dtype The dtype of the output tensor, default to 'int32'.
 *
 * @doc {heading: 'Tensors', subheading: 'Creation'}
 */
declare function oneHot_(indices: Tensor | TensorLike, depth: number, onValue?: number, offValue?: number, dtype?: DataType): Tensor;
export declare const oneHot: typeof oneHot_;
export {};
