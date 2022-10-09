/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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

import { AsyncCallback, Callback } from "./basic";
import { DeviceSettingsManager as _DeviceSettingsManager } from "./enterpriseDeviceManager/DeviceSettingsManager";
import Want from "./@ohos.application.Want";

/**
 * enterprise device manager.
 * @name enterpriseDeviceManager
 * @since 9
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 */
declare namespace enterpriseDeviceManager {

  /**
   * @name EnterpriseInfo
   * @since 9
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   */
  export interface EnterpriseInfo {
    name: string;
    description: string;
  }

  /**
   * @name DeviceSettingsManager
   * @since 9
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   */
  export type DeviceSettingsManager = _DeviceSettingsManager

  /**
   * @name AdminType
   * @since 9
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   */
  export enum AdminType {
    ADMIN_TYPE_NORMAL = 0x00,
    ADMIN_TYPE_SUPER = 0x01
  }

  /**
   * Enables the given ability as a administrator of the device.
   * Only apps with the ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN permission or the shell uid can call this method.
   * @permission ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { EnterpriseInfo } enterpriseInfo - enterpriseInfo indicates the enterprise information of the calling application.
   * @param { AdminType } type - type indicates the type of administrator to set.
   * @param { AsyncCallback<void> } callback - the callback of enableAdmin.
   * @throws { BusinessError } 9200003 - the administrator ability component is invalid.
   * @throws { BusinessError } 9200004 - failed to enable the adminstrator application of the device.
   * @throws { BusinessError } 9200007 - the system ability work abnormally.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function enableAdmin(admin: Want, enterpriseInfo: EnterpriseInfo, type: AdminType, callback: AsyncCallback<void>): void;

  /**
   * Enables the given ability as a administrator of the device.
   * Only apps with the ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN permission or the shell uid can call this method.
   * @permission ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { EnterpriseInfo } enterpriseInfo - enterpriseInfo indicates the enterprise information of the calling application.
   * @param { AdminType } type - type indicates the type of administrator to set.
   * @param { number } userId - userId indicates the user ID.
   * @param { AsyncCallback<void> } callback - the callback of enableAdmin.
   * @throws { BusinessError } 9200003 - the administrator ability component is invalid.
   * @throws { BusinessError } 9200004 - failed to enable the adminstrator application of the device.
   * @throws { BusinessError } 9200007 - the system ability work abnormally.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function enableAdmin(admin: Want, enterpriseInfo: EnterpriseInfo, type: AdminType, userId: number, callback: AsyncCallback<void>): void;

  /**
   * Enables the given ability as a administrator of the device.
   * Only apps with the ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN permission or the shell uid can call this method.
   * @permission ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { EnterpriseInfo } enterpriseInfo - enterpriseInfo indicates the enterprise information of the calling application.
   * @param { AdminType } type - type indicates the type of administrator to set.
   * @param { number } [userId] - userId indicates the user ID or do not pass user ID.
   * @returns { Promise<void> } the promise returned by the enableAdmin.
   * @throws { BusinessError } 9200003 - the administrator ability component is invalid.
   * @throws { BusinessError } 9200004 - failed to enable the adminstrator application of the device.
   * @throws { BusinessError } 9200007 - the system ability work abnormally.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function enableAdmin(admin: Want, enterpriseInfo: EnterpriseInfo, type: AdminType, userId?: number): Promise<void>;

  /**
   * Disables a current normal administrator ability.
   * Only apps with the ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN permission or the shell uid can call this method.
   * @permission ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { AsyncCallback<void> } callback - the callback of disableAdmin.
   * @throws { BusinessError } 9200005 - failed to disable the administrator application of the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function disableAdmin(admin: Want, callback: AsyncCallback<void>): void;

  /**
   * Disables a current normal administrator ability.
   * Only apps with the ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN permission or the shell uid can call this method.
   * @permission ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { number } userId - userId indicates the user ID.
   * @param { AsyncCallback<void> } callback - the callback of disableAdmin.
   * @throws { BusinessError } 9200005 - failed to disable the administrator application of the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function disableAdmin(admin: Want, userId: number, callback: AsyncCallback<void>): void;

  /**
   * Disables a current normal administrator ability.
   * Only apps with the ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN permission or the shell uid can call this method.
   * @permission ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { number } [userId] - userId indicates the user ID or do not pass user ID.
   * @returns { Promise<void> } the promise returned by the disableAdmin.
   * @throws { BusinessError } 9200005 - failed to disable the administrator application of the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function disableAdmin(admin: Want, userId?: number): Promise<void>;

  /**
   * Disables a current super administrator ability.
   * Only the administrator app or apps with the shell uid can call this method.
   * @permission ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN
   * @param { string } bundleName - bundleName indicates the administrator bundle information.
   * @param { AsyncCallback<void> } callback - the callback of disableSuperAdmin.
   * @throws { BusinessError } 9200005 - failed to disable the administrator application of the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function disableSuperAdmin(bundleName: String, callback: AsyncCallback<void>): void;

  /**
   * Disables a current super administrator ability.
   * Only the administrator app or apps with the shell uid can call this method.
   * @permission ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN
   * @param { string } bundleName - bundleName indicates the administrator bundle information.
   * @returns { Promise<void> } the promise returned by the disableSuperAdmin.
   * @throws { BusinessError } 9200005 - failed to disable the administrator application of the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function disableSuperAdmin(bundleName: String): Promise<void>;

  /**
   * Get whether the ability is enabled as device administrator.
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { AsyncCallback<boolean> } callback - callback contained true if the administrator is enabled.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function isAdminEnabled(admin: Want, callback: AsyncCallback<boolean>): void;

  /**
   * Get whether the ability is enabled as device administrator.
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { number } userId - userId indicates the user ID.
   * @param { AsyncCallback<boolean> } callback - callback contained true if the administrator is enabled.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function isAdminEnabled(admin: Want, userId: number, callback: AsyncCallback<boolean>): void;

  /**
   * Get whether the ability is enabled as device administrator.
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { number } [userId] - userId indicates the user ID or do not pass user ID.
   * @returns { Promise<boolean> } promise contained true if the administrator is enabled.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function isAdminEnabled(admin: Want, userId?: number): Promise<boolean>;

  /**
   * Get information of the administrator's enterprise.
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { AsyncCallback<EnterpriseInfo> } callback - callback contained the enterprise info of administrator.
   * @throws { BusinessError } 9200001 - the applicayion is not an administrator of the device.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function getEnterpriseInfo(admin: Want, callback: AsyncCallback<EnterpriseInfo>): void;

  /**
   * Get information of the administrator's enterprise.
   * @param { Want } admin - admin indicates the administrator ability information.
   * @returns { Promise<EnterpriseInfo> } promise contained the enterprise info of administrator.
   * @throws { BusinessError } 9200001 - the applicayion is not an administrator of the device.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function getEnterpriseInfo(admin: Want): Promise<EnterpriseInfo>;

  /**
   * Set the information of the administrator's enterprise.
   * Only the administrator app can call this method.
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { EnterpriseInfo } enterpriseInfo - enterpriseInfo indicates the enterprise information of the calling application.
   * @param { AsyncCallback<void> } callback - the callback of setEnterpriseInfo.
   * @throws { BusinessError } 9200001 - the applicayion is not an administrator of the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function setEnterpriseInfo(admin: Want, enterpriseInfo: EnterpriseInfo, callback: AsyncCallback<void>): void;

  /**
   * Set the information of the administrator's enterprise.
   * Only the administrator app can call this method.
   * @permission ohos.permission.SET_ENTERPRISE_INFO
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { EnterpriseInfo } enterpriseInfo - enterpriseInfo indicates the enterprise information of the calling application.
   * @returns { Promise<void> } the promise returned by the setEnterpriseInfo.
   * @throws { BusinessError } 9200001 - the applicayion is not an administrator of the device.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function setEnterpriseInfo(admin: Want, enterpriseInfo: EnterpriseInfo): Promise<void>;

  /**
   * Get whether the ability is enabled as super device administrator.
   * @param { string } bundleName - bundleName indicates the administrator bundle information.
   * @param { AsyncCallback<boolean> } callback - callback contained true if the administrator is super administrator.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function isSuperAdmin(bundleName: String, callback: AsyncCallback<boolean>): void;

  /**
   * Get whether the ability is enabled as super device administrator.
   * @param { string } bundleName - bundleName indicates the administrator bundle information.
   * @returns { Promise<boolean> } promise contained true if the administrator is super administrator.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function isSuperAdmin(bundleName: String): Promise<boolean>;

  /**
   * Obtains the interface used to set device settings policy.
   *
   * @since 9
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @return Returns the DeviceSettingsManager interface.
   */
  function getDeviceSettingsManager(callback: AsyncCallback<DeviceSettingsManager>): void;
  function getDeviceSettingsManager(): Promise<DeviceSettingsManager>;

}

export default enterpriseDeviceManager;