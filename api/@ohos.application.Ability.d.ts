/*
 * Copyright (c) 2021-2022 Huawei Device Co., Ltd.
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

import AbilityConstant from "./@ohos.application.AbilityConstant";
import AbilityContext from "./application/AbilityContext";
import Want from './@ohos.application.Want';
import window from './@ohos.window';
import { Configuration } from './@ohos.application.Configuration';
import rpc from '/@ohos.rpc';

/**
 * The interface of a Caller.
 *
 * @since 9
 * @sysCap AAFwk
 * @devices phone, tablet, tv, wearable, car
 * @permission N/A
 * @StageModelOnly
 */
 interface Caller {
     /**
     * Notify the server of Sequenceable type data.
     *
     * @since 9
     * @sysCap AAFwk
     * @StageModelOnly
     */
     call(method: string, data: rpc.Sequenceable): Promise<void>;

    /**
     * Notify the server of Sequenceable type data and return the notification result.
     *
     * @since 9
     * @sysCap AAFwk
     * return Sequenceable data
     * @StageModelOnly
     */
     callWithResult(method: string, data: rpc.Sequenceable): Promise<rpc.MessageParcel>;

    /**
     * Clear service records.
     *
     * @since 9
     * @sysCap AAFwk
     * return Sequenceable data
     * @StageModelOnly
     */
     release(): void;

    /**
     * Register death listener notification callback.
     *
     * @since 9
     * @sysCap AAFwk
     * return Sequenceable data
     * @StageModelOnly
     */
     onRelease(callback: function): void;
 }

 /**
 * The interface of a Callee.
 *
 * @since 9
 * @sysCap AAFwk
 * @devices phone, tablet, tv, wearable, car
 * @permission N/A
 * @StageModelOnly
 */
 interface Callee {

     /**
     * Register data listener callback.
     *
     * @since 9
     * @sysCap AAFwk
     * @StageModelOnly
     */
     on(method: string, callback: function): void;

     /**
     * Unregister data listener callback.
     *
     * @since 9
     * @sysCap AAFwk
     * @StageModelOnly
     */
     off(method: string): void;
 }

/**
 * The class of an ability.
 *
 * @since 9
 * @sysCap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @permission N/A
 * @StageModelOnly
 */
export default class Ability {
    /**
     * Indicates configuration information about an ability context.
     *
     * @since 9
     * @sysCap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @StageModelOnly
     */
    context: AbilityContext;

    /**
     * Indicates ability launch want.
     *
     * @since 9
     * @sysCap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @StageModelOnly
     */
    launchWant: Want;

    /**
     * Indicates ability last request want.
     *
     * @since 9
     * @sysCap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @StageModelOnly
     */
    lastRequestWant: Want;

    /**
     * Call Service Stub Object.
     *
     * @since 9
     * @sysCap AAFwk
     * @StageModelOnly
     */
     callee: Callee;

    /**
     * Called back when an ability is started for initialization.
     *
     * @since 9
     * @sysCap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @return -
     * @StageModelOnly
     */
    onCreate(want: Want, param: AbilityConstant.LaunchParam): void;

    /**
     * Called back when an ability window stage is created.
     *
     * @since 9
     * @sysCap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @return -
     * @StageModelOnly
     */
    onWindowStageCreate(windowStage: window.WindowStage): void;

    /**
     * Called back when an ability window stage is destroyed.
     *
     * @since 9
     * @sysCap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @return -
     * @StageModelOnly
     */
    onWindowStageDestroy(): void;

    /**
     * Called back before an ability is destroyed.
     *
     * @since 9
     * @sysCap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @return -
     * @StageModelOnly
     */
    onDestroy(): void;

    /**
     * Called back when the state of an ability changes to foreground.
     *
     * @since 9
     * @sysCap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @return -
     * @StageModelOnly
     */
    onForeground(): void;

    /**
     * Called back when the state of an ability changes to background.
     *
     * @since 9
     * @sysCap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @return -
     * @StageModelOnly
     */
    onBackground(): void;

    /**
     * Called back when an ability prepares to migrate.
     *
     * @since 9
     * @sysCap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @return true if ability agrees to migrate and saves data successfully, otherwise false.
     * @StageModelOnly
     */
     onContinue(wantParam : {[key: string]: any}): boolean;

    /**
     * Called when the launch mode of an ability is set to singleton.
     * This happens when you re-launch an ability that has been at the top of the ability stack.
     *
     * @devices phone, tablet, tv, wearable, car
     * @since 9
     * @sysCap AAFwk
     * @return -
     * @StageModelOnly
     */
    onNewWant(want: Want): void;

     /**
      * Called when the system configuration is updated.
      *
      * @devices phone, tablet, tv, wearable, car
      * @since 9
      * @sysCap AAFwk
      * @return -
      * @StageModelOnly
      */
    onConfigurationUpdated(config: Configuration): void;
}
