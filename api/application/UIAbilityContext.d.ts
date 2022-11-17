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

/// <reference path="../../component/common_ts_ets_api.d.ts"/>

import { AbilityInfo } from "../bundleManager/abilityInfo";
import { AbilityResult } from "../ability/abilityResult";
import { AsyncCallback } from "../basic";
import { ConnectOptions } from "../ability/connectOptions";
import { HapModuleInfo } from "../bundleManager/hapModuleInfo";
import Context from "./Context";
import Want from "../@ohos.application.Want";
import StartOptions from "../@ohos.app.ability.StartOptions";
import PermissionRequestResult from "./PermissionRequestResult";
import { Configuration } from '../@ohos.app.ability.Configuration';
import { Caller } from '../@ohos.app.ability.UIAbility';
import { LocalStorage } from 'StateManagement';
import image from '../@ohos.multimedia.image';

/**
 * The context of an ability. It allows access to ability-specific resources.
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @StageModelOnly
 * @since 9
 */
export default class UIAbilityContext extends Context {
    /**
     * Indicates configuration information about an ability.
     * @type { AbilityInfo }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    abilityInfo: AbilityInfo;

    /**
     * Indicates configuration information about the module.
     * @type { HapModuleInfo }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    currentHapModuleInfo: HapModuleInfo;

    /**
     * Indicates configuration information.
     * @type { Configuration }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    config: Configuration;

    /**
     * Starts a new ability.
     * @param want { Want } - Indicates the ability to start.
     * @param { AsyncCallback<void> } callback - The callback of startAbility.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    startAbility(want: Want, callback: AsyncCallback<void>): void;

    /**
     * Starts a new ability.
     * @param { Want } want - Indicates the ability to start.
     * @param { StartOptions } options - Indicates the start options.
     * @param { AsyncCallback<void> } callback - The callback of startAbility.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    startAbility(want: Want, options: StartOptions, callback: AsyncCallback<void>): void;

    /**
     * Starts a new ability.
     * @param { Want } want - Indicates the ability to start.
     * @param { StartOptions } options - Indicates the start options.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    startAbility(want: Want, options?: StartOptions): Promise<void>;

    /**
     * Get the caller object of the startup capability
     * @param { Want } want - Indicates the ability to start.
     * @returns { Promise<Caller> } Returns the Caller interface.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @StageModelOnly
     * @since 9
     */
    startAbilityByCall(want: Want): Promise<Caller>;

    /**
     * Starts a new ability with account.
     * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
     * @param { Want } want - Indicates the want info to start.
     * @param { number } accountId - Indicates the account to start.
     * @param { AsyncCallback<void> } callback - The callback of startAbilityWithAccount.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @StageModelOnly
     * @since 9
     */
    startAbilityWithAccount(want: Want, accountId: number, callback: AsyncCallback<void>): void;

    /**
     * Starts a new ability with account.
     * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
     * @param { Want } want - Indicates the want info to start.
     * @param { number } accountId - Indicates the account to start.
     * @param { StartOptions } options - Indicates the start options.
     * @param { AsyncCallback<void> } callback - The callback of startAbilityWithAccount.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @StageModelOnly
     * @since 9
     */
    startAbilityWithAccount(want: Want, accountId: number, options: StartOptions, callback: AsyncCallback<void>): void;

    /**
     * Starts a new ability with account.
     * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
     * @param { Want } want - Indicates the want info to start.
     * @param { number } accountId - Indicates the account to start.
     * @param { StartOptions } options - Indicates the start options.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @StageModelOnly
     * @since 9
     */
    startAbilityWithAccount(want: Want, accountId: number, options?: StartOptions): Promise<void>;

    /**
     * Starts an ability and returns the execution result when the ability is destroyed.
     * @param { Want } want - Indicates the ability to start.
     * @param { AsyncCallback<AbilityResult> } callback - The callback is used to return the result of startAbility.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    startAbilityForResult(want: Want, callback: AsyncCallback<AbilityResult>): void;

    /**
     * Starts an ability and returns the execution result when the ability is destroyed.
     * @param { Want } want - Indicates the ability to start.
     * @param { StartOptions } options - Indicates the start options.
     * @param { AsyncCallback<AbilityResult> } callback - The callback is used to return the result of startAbility.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    startAbilityForResult(want: Want, options: StartOptions, callback: AsyncCallback<AbilityResult>): void;

    /**
     * Starts an ability and returns the execution result when the ability is destroyed.
     * @param { Want } want - Indicates the ability to start.
     * @param { StartOptions } options - Indicates the start options.
     * @returns { Promise<AbilityResult> } Returns the result of startAbility.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    startAbilityForResult(want: Want, options?: StartOptions): Promise<AbilityResult>;

    /**
     * Starts an ability and returns the execution result when the ability is destroyed with account.
     * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
     * @param { Want } want - Indicates the want info to start.
     * @param { number } accountId - Indicates the account to start.
     * @param { AsyncCallback<AbilityResult> } callback - The callback is used to return the result of startAbility.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @StageModelOnly
     * @since 9
     */
    startAbilityForResultWithAccount(want: Want, accountId: number, callback: AsyncCallback<AbilityResult>): void;

    /**
     * Starts an ability and returns the execution result when the ability is destroyed with account.
     * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
     * @param { Want } want - Indicates the want info to start.
     * @param { number } accountId - Indicates the account to start.
     * @param { StartOptions } options - Indicates the start options.
     * @param { AsyncCallback<AbilityResult> } callback - The callback is used to return the result of startAbility.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @StageModelOnly
     * @since 9
     */
    startAbilityForResultWithAccount(want: Want, accountId: number, options: StartOptions, callback: AsyncCallback<void>): void;

    /**
     * Starts an ability and returns the execution result when the ability is destroyed with account.
     * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
     * @param { Want } want - Indicates the want info to start.
     * @param { number } accountId - Indicates the account to start.
     * @param { StartOptions } options - Indicates the start options.
     * @returns { Promise<AbilityResult> } Returns the result of startAbility.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @StageModelOnly
     * @since 9
     */
    startAbilityForResultWithAccount(want: Want, accountId: number, options?: StartOptions): Promise<AbilityResult>;

    /**
     * Starts a new service extension ability.
     * @param { Want } want - Indicates the want info to start.
     * @param { AsyncCallback<void> } callback - The callback of startServiceExtensionAbility.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @StageModelOnly
     * @since 9
     */
    startServiceExtensionAbility(want: Want, callback: AsyncCallback<void>): void;

    /**
     * Starts a new service extension ability.
     * @param { Want } want - Indicates the want info to start.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @StageModelOnly
     * @since 9
     */
    startServiceExtensionAbility(want: Want): Promise<void>;

    /**
     * Starts a new service extension ability with account.
     * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
     * @param { Want } want - Indicates the want info to start.
     * @param { number } accountId - Indicates the account to start.
     * @param { AsyncCallback<void> } callback - The callback of startServiceExtensionAbilityWithAccount.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @StageModelOnly
     * @since 9
     */
    startServiceExtensionAbilityWithAccount(want: Want, accountId: number, callback: AsyncCallback<void>): void;

    /**
     * Starts a new service extension ability with account.
     * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
     * @param { Want } want - Indicates the want info to start.
     * @param { number } accountId - Indicates the account to start.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @StageModelOnly
     * @since 9
     */
    startServiceExtensionAbilityWithAccount(want: Want, accountId: number): Promise<void>;

    /**
     * Stops a service within the same application.
     * @param { Want } want - Indicates the want info to start.
     * @param { AsyncCallback<void> } callback - The callback of stopServiceExtensionAbility.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @StageModelOnly
     * @since 9
     */
    stopServiceExtensionAbility(want: Want, callback: AsyncCallback<void>): void;

    /**
     * Stops a service within the same application.
     * @param { Want } want - Indicates the want info to start.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @StageModelOnly
     * @since 9
     */
    stopServiceExtensionAbility(want: Want): Promise<void>;

    /**
     * Stops a service within the same application with account.
     * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
     * @param { Want } want - Indicates the want info to start.
     * @param { number } accountId - Indicates the accountId to start.
     * @param { AsyncCallback<void> } callback - The callback of stopServiceExtensionAbilityWithAccount.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @StageModelOnly
     * @since 9
     */
    stopServiceExtensionAbilityWithAccount(want: Want, accountId: number, callback: AsyncCallback<void>): void;

    /**
     * Stops a service within the same application with account.
     * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
     * @param { Want } want - Indicates the want info to start.
     * @param { number } accountId - Indicates the accountId to start.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @StageModelOnly
     * @since 9
     */
    stopServiceExtensionAbilityWithAccount(want: Want, accountId: number): Promise<void>;

    /**
     * Destroys this Page ability.
     * @param { AsyncCallback<void> } callback - The callback of terminateSelf.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    terminateSelf(callback: AsyncCallback<void>): void;

    /**
     * Destroys this Page ability.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    terminateSelf(): Promise<void>;

    /**
     * Sets the result code and data to be returned by this Page ability to the caller
     * and destroys this Page ability.
     * @param { AbilityResult } parameter - Indicates the result to return.
     * @param { AsyncCallback<void> } callback - The callback of terminateSelfWithResult.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>): void;

    /**
     * Sets the result code and data to be returned by this Page ability to the caller
     * and destroys this Page ability.
     * @param { AbilityResult } parameter - Indicates the result to return.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    terminateSelfWithResult(parameter: AbilityResult): Promise<void>;

    /**
     * Connects the current ability to an ability using the AbilityInfo.AbilityType.SERVICE template.
     * @param { Want } want - The element name of the service ability
     * @param { ConnectOptions } options - The remote object instance
     * @returns { number } Returns the number code of the ability connected
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    connectServiceExtensionAbility(want: Want, options: ConnectOptions): number;

    /**
     * Connects the current ability to an ability using the AbilityInfo.AbilityType.SERVICE template with account.
     * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
     * @param { Want } want - The element name of the service ability
     * @param { number } accountId - The account to connect
     * @param { ConnectOptions } options - The remote object instance
     * @returns { number } Returns the number code of the ability connected
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @StageModelOnly
     * @since 9
     */
    connectServiceExtensionAbilityWithAccount(want: Want, accountId: number, options: ConnectOptions): number;

    /**
     * The callback interface is connected successfully.
     * @param { number } connection - The number code of the ability connected
     * @param { AsyncCallback<void> } callback - The callback of disconnectAbility.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    disconnectServiceExtensionAbility(connection: number, callback: AsyncCallback<void>): void;

    /**
     * The callback interface is connected successfully.
     * @param { number } connection - The number code of the ability connected
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    disconnectServiceExtensionAbility(connection: number): Promise<void>;

    /**
     * Set mission label of current ability.
     * @param { string } label - The label of ability that showed in recent missions.
     * @param { AsyncCallback<void> } callback - The callback of setMissionLabel.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    setMissionLabel(label: string, callback: AsyncCallback<void>): void;

    /**
     * Set mission label of current ability.
     * @param { string } label - The label of ability that showed in recent missions.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    setMissionLabel(label: string): Promise<void>;

    /**
     * Set mission icon of current ability.
     * @param { image.PixelMap } icon - The icon of ability that showed in recent missions.
     * @param { AsyncCallback<void> } callback - The callback of setMissionIcon.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @StageModelOnly
     * @since 9
     */
    setMissionIcon(icon: image.PixelMap, callback: AsyncCallback<void>): void;

    /**
     * Set mission icon of current ability.
     * @param { image.PixelMap } icon - The icon of ability that showed in recent missions.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @StageModelOnly
     * @since 9
     */
    setMissionIcon(icon: image.PixelMap): Promise<void>;

    /**
     * Requests certain permissions from the system.
     * @param { Array<string> } permissions - Indicates the list of permissions to be requested. This parameter
     *                                        cannot be null or empty.
     * @param { AsyncCallback<PermissionRequestResult> } requestCallback - The callback is used to return the permission
     *                                                                     request result.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    requestPermissionsFromUser(permissions: Array<string>, requestCallback: AsyncCallback<PermissionRequestResult>): void;

    /**
     * Requests certain permissions from the system.
     * @param { Array<string> } permissions - Indicates the list of permissions to be requested. This parameter
     *                                        cannot be null or empty.
     * @returns { Promise<PermissionRequestResult> } Returns the permission request result.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    requestPermissionsFromUser(permissions: Array<string>): Promise<PermissionRequestResult>;

    /**
     * Restore window stage data in ability continuation
     * @param { LocalStorage } localStorage - the storage data used to restore window stage
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    restoreWindowStage(localStorage: LocalStorage): void;

    /**
     * Check to see ability is in terminating state.
     * @returns { boolean } Returns true when ability is in terminating state, else returns false.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @StageModelOnly
     * @since 9
     */
    isTerminating(): boolean;
}