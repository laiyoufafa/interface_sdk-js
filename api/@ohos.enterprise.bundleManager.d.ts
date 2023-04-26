/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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

import type { AsyncCallback } from './@ohos.base';
import type Want from './@ohos.app.ability.Want';

/**
 * This module provides the capability to manage the bundles of the enterprise devices.
 *
 * @namespace bundleManager
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @systemapi
 * @since 10
 */
declare namespace bundleManager {
  /**
   * Add appid list of bundles that can be installed in the device.
   * Only apps with the ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY permission can call this method.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { Array<string> } appIds - ids of the bundle that can be installed.
   * @param { AsyncCallback<void> } callback - the callback of addAllowedInstallBundles.
   * @throws { BusinessError } 9200003 - the administrator ability component is invalid.
   * @throws { BusinessError } 9200007 - the system ability work abnormally.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  function addAllowedInstallBundles(admin: Want, appIds: Array<string>, callback: AsyncCallback<void>): void;

  /**
   * Add appid list of bundles that can be installed in the device.
   * Only apps with the ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY permission can call this method.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { Array<string> } appIds - ids of the bundle that can be installed.
   * @param { number } userId - userId indicates the user ID.
   * @param { AsyncCallback<void> } callback - the callback of addAllowedInstallBundles.
   * @throws { BusinessError } 9200003 - the administrator ability component is invalid.
   * @throws { BusinessError } 9200007 - the system ability work abnormally.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  function addAllowedInstallBundles(admin: Want, appIds: Array<string>, userId: number, callback: AsyncCallback<void>): void;

  /**
   * Add appid list of bundles that can be installed in the device.
   * Only apps with the ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY permission can call this method.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { Array<string> } appIds - ids of the bundle that can be installed.
   * @param { number } [userId] - userId indicates the user ID or do not pass user ID.
   * @returns { Promise<void> } the promise returned by the addAllowedInstallBundles.
   * @throws { BusinessError } 9200003 - the administrator ability component is invalid.
   * @throws { BusinessError } 9200007 - the system ability work abnormally.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  function addAllowedInstallBundles(admin: Want, appIds: Array<string>, userId?: number): Promise<void>;

  /**
   * Remove appid list of bundles that can be installed in the device.
   * Only apps with the ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY permission can call this method.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { Array<string> } appIds - ids of the bundle that can be installed.
   * @param { AsyncCallback<void> } callback - the callback of removeAllowedInstallBundles.
   * @throws { BusinessError } 9200003 - the administrator ability component is invalid.
   * @throws { BusinessError } 9200007 - the system ability work abnormally.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  function removeAllowedInstallBundles(admin: Want, appIds: Array<string>, callback: AsyncCallback<void>): void;

  /**
   * Remove appid list of bundles that can be installed in the device.
   * Only apps with the ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY permission can call this method.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { Array<string> } appIds - ids of the bundle that can be installed.
   * @param { number } userId - userId indicates the user ID.
   * @param { AsyncCallback<void> } callback - the callback of removeAllowedInstallBundles.
   * @throws { BusinessError } 9200003 - the administrator ability component is invalid.
   * @throws { BusinessError } 9200007 - the system ability work abnormally.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  function removeAllowedInstallBundles(admin: Want, appIds: Array<string>, userId: number, callback: AsyncCallback<void>): void;

  /**
   * Remove appid list of bundles that can be installed in the device.
   * Only apps with the ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY permission can call this method.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { Array<string> } appIds - ids of the bundle that can be installed.
   * @param { number } [userId] - userId indicates the user ID or do not pass user ID.
   * @returns { Promise<void> } the promise returned by the removeAllowedInstallBundles.
   * @throws { BusinessError } 9200003 - the administrator ability component is invalid.
   * @throws { BusinessError } 9200007 - the system ability work abnormally.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  function removeAllowedInstallBundles(admin: Want, appIds: Array<string>, userId?: number): Promise<void>;

  /**
   * Get the appid list of bundles that can be installed in the device.
   * Only apps with the ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY permission can call this method.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { AsyncCallback<Array<string>> } callback - the callback that contains the appid list.
   * @throws { BusinessError } 9200003 - the administrator ability component is invalid.
   * @throws { BusinessError } 9200007 - the system ability work abnormally.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  function getAllowedInstallBundles(admin: Want, callback: AsyncCallback<Array<string>>): void;

  /**
   * Get the appid list of bundles that can be installed in the device.
   * Only apps with the ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY permission can call this method.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { number } userId - userId indicates the user ID.
   * @param { AsyncCallback<Array<string>> } callback - the callback that contains the appid list.
   * @throws { BusinessError } 9200003 - the administrator ability component is invalid.
   * @throws { BusinessError } 9200007 - the system ability work abnormally.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  function getAllowedInstallBundles(admin: Want, userId: number, callback: AsyncCallback<Array<string>>): void;

  /**
   * Get appid list of bundles that can be installed in the device.
   * Only apps with the ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY permission can call this method.
   *
   * @permission ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY
   * @param { Want } admin - admin indicates the administrator ability information.
   * @param { number } [userId] - userId indicates the user ID or do not pass user ID.
   * @returns { Promise<Array<string>> } the promise that contains the appid list.
   * @throws { BusinessError } 9200003 - the administrator ability component is invalid.
   * @throws { BusinessError } 9200007 - the system ability work abnormally.
   * @throws { BusinessError } 201 - the application does not have permission to call this function.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - invalid input parameter.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  function getAllowedInstallBundles(admin: Want, userId?: number): Promise<Array<string>>;
}

export default bundleManager;
