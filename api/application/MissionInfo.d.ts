/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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

import Want from "../@ohos.app.ability.Want";

/**
 * Mission information corresponding to ability.
 *
 * @since 8
 * @syscap SystemCapability.Ability.AbilityRuntime.Mission
 * @systemapi hide for inner use.
 */
export interface MissionInfo {
  /**
   * Indicates mission id.
   *
   * @since 8
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   */
  missionId: number;

  /**
   * Indicates running state.
   *
   * @since 8
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   */
  runningState: number;

  /**
   * Indicates locked state.
   *
   * @since 8
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   */
  lockedState: boolean;

  /**
   * Indicates the recent created or updated time of the mission.
   *
   * @since 8
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   */
  timestamp: string;

  /**
   * Indicates want of the mission.
   *
   * @since 8
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   */
  want: Want;

  /**
   * Indicates label of the mission.
   *
   * @since 8
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   */
  label: string;

  /**
   * Indicates icon path of the mission.
   *
   * @since 8
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   */
  iconPath: string;

  /**
   * Indicates whether the mission is continuable.
   *
   * @since 8
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   */
  continuable: boolean;

  /**
   * Indicates the ability state of this mission.
   *
   * @since 10
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   */
  abilityState: number;

  /**
   * Indicates whether the mission is unclearable.
   *
   * @type { boolean }
   * @syscap SystemCapability.Ability.AbilityRuntime.Mission
   * @systemapi
   * @since 10
   */
  unclearable: boolean;
}