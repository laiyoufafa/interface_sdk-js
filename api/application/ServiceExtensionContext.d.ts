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

import { AsyncCallback } from "../basic";
import { ConnectOptions } from "../ability/connectOptions";
import Caller from '../@ohos.application.Ability';
import ExtensionContext from "./ExtensionContext";
import Want from "../@ohos.application.Want";
import StartOptions from "../@ohos.application.StartOptions";

/**
 * The context of service extension. It allows access to
 * serviceExtension-specific resources.
 *
 * @since 9
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi hide for inner use.
 * @permission N/A
 * @StageModelOnly
 * @deprecated since 9
 * @useinstead @ohos.app.ability.ServiceExtensionContext
 */
export default class ServiceExtensionContext extends ExtensionContext {
    /**
     * Service extension uses this method to start a specific ability.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @param want Indicates the ability to start.
     * @param options Indicates the start options.
     * @systemapi hide for inner use.
     * @return -
     * @StageModelOnly
     */
    startAbility(want: Want, callback: AsyncCallback<void>): void;
    startAbility(want: Want, options: StartOptions, callback: AsyncCallback<void>): void;
    startAbility(want: Want, options?: StartOptions): Promise<void>;

    /**
     * Service extension uses this method to start a specific ability with account.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @param want Indicates the ability to start.
     * @param accountId Indicates the accountId to start.
     * @param options Indicates the start options.
     * @systemapi hide for inner use.
     * @return -
     * @StageModelOnly
     */
    startAbilityWithAccount(want: Want, accountId: number, callback: AsyncCallback<void>): void;
    startAbilityWithAccount(want: Want, accountId: number, options: StartOptions, callback: AsyncCallback<void>): void;
    startAbilityWithAccount(want: Want, accountId: number, options?: StartOptions): Promise<void>;

    /**
     * Starts a new service extension ability.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @param want Indicates the want info to start.
     * @systemapi hide for inner use.
     * @return -
     * @StageModelOnly
     */
    startServiceExtensionAbility(want: Want, callback: AsyncCallback<void>): void;
    startServiceExtensionAbility(want: Want): Promise<void>;

    /**
     * Starts a new service extension ability with account.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @param want Indicates the want info to start.
     * @param accountId Indicates the account to start.
     * @systemapi hide for inner use.
     * @return -
     * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS.
     * @StageModelOnly
     */
    startServiceExtensionAbilityWithAccount(want: Want, accountId: number, callback: AsyncCallback<void>): void;
    startServiceExtensionAbilityWithAccount(want: Want, accountId: number): Promise<void>;

    /**
     * Stops a service within the same application.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @param want Indicates the want info to start.
     * @systemapi hide for inner use.
     * @return -
     * @StageModelOnly
     */
    stopServiceExtensionAbility(want: Want, callback: AsyncCallback<void>): void;
    stopServiceExtensionAbility(want: Want): Promise<void>;

    /**
     * Stops a service within the same application with account.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @param want Indicates the want info to start.
     * @param accountId Indicates the accountId to start.
     * @systemapi hide for inner use.
     * @return -
     * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS.
     * @StageModelOnly
     */
    stopServiceExtensionAbilityWithAccount(want: Want, accountId: number, callback: AsyncCallback<void>): void;
    stopServiceExtensionAbilityWithAccount(want: Want, accountId: number): Promise<void>;

    /**
     * Destroys this service extension.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi hide for inner use.
     * @return -
     * @StageModelOnly
     */
    terminateSelf(callback: AsyncCallback<void>): void;
    terminateSelf(): Promise<void>;

    /**
     * Connects an ability to a Service extension.
     *
     * <p>This method can be called by an ability or service extension, but the destination of the connection must be a
     * service extension. You must implement the {@link ConnectOptions} interface to obtain the proxy of the target
     * service extension when the Service extension is connected.</p>
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @param want Indicates the service extension to connect.
     * @param options Indicates the callback of connection.
     * @systemapi hide for inner use.
     * @return connection id, int value.
     * @StageModelOnly
     */
    connectAbility(want: Want, options: ConnectOptions): number;

    /**
     * Connects an ability to a Service extension with account.
     *
     * <p>This method can be called by an ability or service extension, but the destination of the connection must be a
     * service extension. You must implement the {@link ConnectOptions} interface to obtain the proxy of the target
     * service extension when the Service extension is connected.</p>
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @param want Indicates the service extension to connect.
     * @param accountId Indicates the account to connect.
     * @param options Indicates the callback of connection.
     * @systemapi hide for inner use.
     * @return connection id, int value.
     * @StageModelOnly
     */
    connectAbilityWithAccount(want: Want, accountId: number, options: ConnectOptions): number;

    /**
     * Disconnects an ability to a service extension, in contrast to
     * {@link connectAbility}.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @param connection the connection id returned from connectAbility api.
     * @systemapi hide for inner use.
     * @return -
     * @StageModelOnly
     */
    disconnectAbility(connection: number, callback:AsyncCallback<void>): void;
    disconnectAbility(connection: number): Promise<void>;

    /**
     * Get the caller object of the startup capability
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @param want Indicates the ability to start.
     * @return Returns to the Caller interface on success Returns empty or undefined on failure
     * @StageModelOnly
     */
     startAbilityByCall(want: Want): Promise<Caller>;
}