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

/**
 * Want is the basic communication component of the system.
 *
 * @syscap SystemCapability.Ability.AbilityBase
 * @since 8
 * @deprecated since 9
 * @useinstead ohos.app.ability.Want
 */
export default class Want {
  /**
   * device id
   *
   * @syscap SystemCapability.Ability.AbilityBase
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.Want#deviceId
   */
  deviceId?: string;

  /**
   * bundle name
   *
   * @syscap SystemCapability.Ability.AbilityBase
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.Want#bundleName
   */
  bundleName?: string;

  /**
   * ability name
   *
   * @syscap SystemCapability.Ability.AbilityBase
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.Want#abilityName
   */
  abilityName?: string;

  /**
   * The description of a URI in a Want.
   *
   * @syscap SystemCapability.Ability.AbilityBase
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.Want#uri
   */
  uri?: string;

  /**
   * The description of the type in this Want.
   *
   * @syscap SystemCapability.Ability.AbilityBase
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.Want#type
   */
  type?: string;

  /**
   * The options of the flags in this Want.
   *
   * @syscap SystemCapability.Ability.AbilityBase
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.Want#flags
   */
  flags?: number;

  /**
   * The description of an action in an want.
   *
   * @syscap SystemCapability.Ability.AbilityBase
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.Want#action
   */
  action?: string;

  /**
   * The description of the WantParams object in an Want
   *
   * @syscap SystemCapability.Ability.AbilityBase
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.Want#parameters
   */
  parameters?: { [key: string]: any };

  /**
   * The description of a entities in a Want.
   *
   * @syscap SystemCapability.Ability.AbilityBase
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.Want#entities
   */
  entities?: Array<string>;
}
