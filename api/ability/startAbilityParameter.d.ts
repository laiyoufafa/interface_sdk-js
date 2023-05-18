/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Want from '../@ohos.app.ability.Want';

/**
 * @typedef StartAbilityParameter
 * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
 * @since 6
 */
export interface StartAbilityParameter {
  /**
   * Indicates the Want containing information about the target ability to start.
   *
   * @default -
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @FAModelOnly
   * @since 6
   */
  want: Want;

  /**
   * Indicates the special start setting used in starting ability.
   *
   * @default -
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @FAModelOnly
   * @since 6
   */
  abilityStartSetting?: { [key: string]: any };
}
