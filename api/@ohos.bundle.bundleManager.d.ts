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

import { AsyncCallback } from './basic';
import { ApplicationInfo as _ApplicationInfo } from './bundleManager/applicationInfo';
import { Metadata as _Metadata } from './bundleManager/metadata';
import { HapModuleInfo as _HapModuleInfo } from './bundleManager/hapModuleInfo';
import { PermissionDef as _PermissionDef } from  './bundleManager/permissionDef';
import { ElementName as _ElementName }  from './bundleManager/elementName';
import Want from './@ohos.application.Want';
import image from './@ohos.multimedia.image';
import * as _AbilityInfo from './bundleManager/abilityInfo';
import * as _BundleInfo from './bundleManager/bundleInfo';
import * as _ExtensionAbilityInfo from './bundleManager/extensionAbilityInfo';

/**
 * This module is used to obtain package information of various applications installed on the current device.
 * @namespace bundleManager
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @since 9
 */
 declare namespace bundleManager {
    /**
     * Used to query the enumeration value of bundleInfo. Multiple values can be passed in the form.
     * @enum { number }
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    enum BundleFlag {
      /**
       * Used to obtain the default bundleInfo. The obtained bundleInfo does not contain information of
       * signatureInfo, applicationInfo, hapModuleInfo, ability, extensionAbility and permission.
       * @syscap SystemCapability.BundleManager.BundleFramework.Core
       * @since 9
       */
      GET_BUNDLE_INFO_DEFAULT = 0x00000000,
      /**
       * Used to obtain the bundleInfo containing applicationInfo. The obtained bundleInfo does not
       * contain the information of signatureInfo, hapModuleInfo, ability, extensionAbility and permission.
       * @syscap SystemCapability.BundleManager.BundleFramework.Core
       * @since 9
       */
      GET_BUNDLE_INFO_WITH_APPLICATION = 0x00000001,
      /**
       * Used to obtain the bundleInfo containing hapModuleInfo. The obtained bundleInfo does not
       * contain the information of signatureInfo, applicationInfo, ability, extensionAbility and permission.
       * @syscap SystemCapability.BundleManager.BundleFramework.Core
       * @since 9
       */
      GET_BUNDLE_INFO_WITH_HAP_MODULE = 0x00000002,
      /**
       * Used to obtain the bundleInfo containing ability. The obtained bundleInfo does not
       * contain the information of signatureInfo, applicationInfo, extensionAbility and permission.
       * It can't be used alone, it needs to be used with GET_BUNDLE_INFO_WITH_HAP_MODULE.
       * @syscap SystemCapability.BundleManager.BundleFramework.Core
       * @since 9
       */
      GET_BUNDLE_INFO_WITH_ABILITY = 0x00000004,
      /**
       * Used to obtain the bundleInfo containing extensionAbility. The obtained bundleInfo does not
       * contain the information of signatureInfo, applicationInfo, ability and permission.
       * It can't be used alone, it needs to be used with GET_BUNDLE_INFO_WITH_HAP_MODULE.
       * @syscap SystemCapability.BundleManager.BundleFramework.Core
       * @since 9
       */
      GET_BUNDLE_INFO_WITH_EXTENSION_ABILITY = 0x00000008,
      /**
       * Used to obtain the bundleInfo containing permission. The obtained bundleInfo does not
       * contain the information of signatureInfo, applicationInfo, hapModuleInfo, extensionAbility and ability.
       * @syscap SystemCapability.BundleManager.BundleFramework.Core
       * @since 9
       */
      GET_BUNDLE_INFO_WITH_REQUESTED_PERMISSION = 0x00000010,
      /**
       * Used to obtain the metadata contained in applicationInfo, moduleInfo and abilityInfo.
       * It can't be used alone, it needs to be used with GET_BUNDLE_INFO_WITH_APPLICATION,
       * GET_BUNDLE_INFO_WITH_HAP_MODULE, GET_BUNDLE_INFO_WITH_ABILITIES, GET_BUNDLE_INFO_WITH_EXTENSION_ABILITY.
       * @syscap SystemCapability.BundleManager.BundleFramework.Core
       * @since 9
       */
      GET_BUNDLE_INFO_WITH_METADATA = 0x00000020,
      /**
       * Used to obtain the default bundleInfo containing disabled application and ability.
       * The obtained bundleInfo does not contain information of signatureInfo, applicationInfo,
       * hapModuleInfo, ability, extensionAbility and permission.
       * @syscap SystemCapability.BundleManager.BundleFramework.Core
       * @since 9
       */
      GET_BUNDLE_INFO_WITH_DISABLE = 0x00000040,
      /**
       * Used to obtain the bundleInfo containing signatureInfo. The obtained bundleInfo does not
       * contain the information of applicationInfo, hapModuleInfo, extensionAbility, ability and permission.
       * @syscap SystemCapability.BundleManager.BundleFramework.Core
       * @since 9
       */
      GET_BUNDLE_INFO_WITH_SIGNATURE_INFO = 0x00000080,
    }

    /**
     * Used to query the enumeration value of applicationInfo. Multiple values can be passed in the form.
     * @enum { number }
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 9
     */
    enum ApplicationFlag {
      /**
       * Used to obtain the default applicationInfo. The obtained applicationInfo does not contain the information of
       * permission and metadata.
       * @syscap SystemCapability.BundleManager.BundleFramework.Core
       * @since 9
       */
      GET_APPLICATION_INFO_DEFAULT = 0x00000000,
      /**
       * Used to obtain the applicationInfo containing permission.
       * @syscap SystemCapability.BundleManager.BundleFramework.Core
       * @since 9
       */
      GET_APPLICATION_INFO_WITH_PERMISSION = 0x00000001,
      /**
       * Used to obtain the applicationInfo containing metadata.
       * @syscap SystemCapability.BundleManager.BundleFramework.Core
       * @since 9
       */
      GET_APPLICATION_INFO_WITH_METADATA = 0x00000002,
      /**
       * Used to obtain the applicationInfo containing disabled application.
       * @syscap SystemCapability.BundleManager.BundleFramework.Core
       * @since 9
       */
      GET_APPLICATION_INFO_WITH_DISABLE = 0x00000004,
    }

/**
   * Used to query the enumeration value of abilityInfo. Multiple values can be passed in the form.
   * @enum { number }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9
   */
 enum AbilityFlag {
    /**
     * Used to obtain the default abilityInfo. The obtained abilityInfo does not contain the information of
     * permission, metadata and disabled abilityInfo.
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    GET_ABILITY_INFO_DEFAULT = 0x00000000,
    /**
     * Used to obtain the abilityInfo containing disabled abilityInfo.
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    GET_ABILITY_INFO_WITH_PERMISSION = 0x00000001,
    /**
     * Used to obtain the abilityInfo containing applicationInfo.
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    GET_ABILITY_INFO_WITH_APPLICATION = 0x00000002,
    /**
     * Used to obtain the abilityInfo containing metadata.
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    GET_ABILITY_INFO_WITH_METADATA = 0x00000004,
    /**
     * Used to obtain the abilityInfo containing disabled abilityInfo.
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    GET_ABILITY_INFO_WITH_DISABLE = 0x00000008,
    /**
     * Used to obtain the abilityInfo only for system app.
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    GET_ABILITY_INFO_ONLY_SYSTEM_APP = 0x00000010,
  }

  /**
   * Used to query the enumeration value of ExtensionAbilityInfo. Multiple values can be passed in the form.
   * @enum { number }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9
   */
  enum ExtensionAbilityFlag {
    /**
     * Used to obtain the default extensionAbilityInfo. The obtained extensionAbilityInfo does not contain the information of
     * permission, metadata and disabled abilityInfo.
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    GET_EXTENSION_ABILITY_INFO_DEFAULT = 0x00000000,
    /**
     * Used to obtain the extensionAbilityInfo containing permission.
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    GET_EXTENSION_ABILITY_INFO_WITH_PERMISSION = 0x00000001,
    /**
     * Used to obtain the extensionAbilityInfo containing applicationInfo.
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    GET_EXTENSION_ABILITY_INFO_WITH_APPLICATION = 0x00000002,
    /**
     * Used to obtain the extensionAbilityInfo containing metadata.
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 9
     */
    GET_EXTENSION_ABILITY_INFO_WITH_METADATA = 0x00000004,
  }

  /**
   * Obtains own bundleInfo.
   * @param { number } bundleFlags - Indicates BundleFlag, the value in bundleFlag can be used in or.
   * @returns { Promise<BundleInfo> } The result of getting the bundle info.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  function getBundleInfoForSelf(bundleFlags: number): Promise<BundleInfo>;

  /**
   * Obtains own bundleInfo.
   * @param { number } bundleFlags - Indicates BundleFlag, the value in bundleFlag can be used in or.
   * @param { AsyncCallback<BundleInfo> } callback - The callback of getting bundle info result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  function getBundleInfoForSelf(bundleFlags: number, callback: AsyncCallback<BundleInfo>): void;

  /**
   * Obtains bundleInfo based on bundleName, bundleFlags and options. ohos.permission.GET_BUNDLE_INFO_PRIVILEGED is required for cross user access.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName - Indicates the application bundle name to be queried.
   * @param { number } bundleFlags - Indicates BundleFlag, the value in bundleFlag can be used in or.
   * @param { number } userId - Indicates the user ID or do not pass user ID.
   * @param { AsyncCallback } callback - The callback of getting bundle info result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700004 - The specified userId is not found.
   * @throws { BusinessError } 17700026 - The specified bundle is disabled.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9
   */
  function getBundleInfo(bundleName: string, bundleFlags: number, callback: AsyncCallback<BundleInfo>): void;
  function getBundleInfo(bundleName: string, bundleFlags: number, userId: number, callback: AsyncCallback<BundleInfo>): void;

  /**
   * Obtains bundleInfo based on bundleName, bundleFlags and options. ohos.permission.GET_BUNDLE_INFO_PRIVILEGED is required for cross user access.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName - Indicates the application bundle name to be queried.
   * @param { number } bundleFlags - Indicates BundleFlag, the value in bundleFlag can be used in or.
   * @param { number } userId - Indicates the user ID or do not pass user ID.
   * @returns { Promise<BundleInfo> } The result of getting the bundle info.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700004 - The specified userId is not found.
   * @throws { BusinessError } 17700026 - The specified bundle is disabled.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9
   */
  function getBundleInfo(bundleName: string, bundleFlags: number, userId?: number): Promise<BundleInfo>;

  /**
   * Obtains application info based on a given bundle name. ohos.permission.GET_BUNDLE_INFO_PRIVILEGED is required for cross user access.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName - Indicates the application bundle name to be queried.
   * @param { number } appFlags - Indicates ApplicationFlag, the value in ApplicationFlag can be used in or.
   * @param { number } userId - Indicates the user ID or do not pass user ID.
   * @param { AsyncCallback<ApplicationInfo> } callback - The callback of getting application info result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700004 - The specified userId is not found.
   * @throws { BusinessError } 17700026 - The specified bundle is disabled.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9
   */
  function getApplicationInfo(bundleName: string, appFlags: number, callback: AsyncCallback<ApplicationInfo>): void;
  function getApplicationInfo(bundleName: string, appFlags: number, userId: number, callback: AsyncCallback<ApplicationInfo>): void;

  /**
   * Obtains application info based on a given bundle name. ohos.permission.GET_BUNDLE_INFO_PRIVILEGED is required for cross user access.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName - Indicates the application bundle name to be queried.
   * @param { number } appFlags - Indicates ApplicationFlag, the value in ApplicationFlag can be used in or.
   * @param { number } userId - Indicates the user ID or do not pass user ID.
   * @returns { Promise<ApplicationInfo> } The result of getting the application info.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700004 - The specified userId is not found.
   * @throws { BusinessError } 17700026 - The specified bundle is disabled.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9
   */
  function getApplicationInfo(bundleName: string, appFlags: number, userId?: number): Promise<ApplicationInfo>;

  /**
   * Obtains BundleInfo of all bundles available in the system.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { number } bundleFlags - Indicates the flag used to specify information contained in the BundleInfo that will be returned.
   * @param { number } userId - Indicates the user id.
   * @param { AsyncCallback } callback - The callback of getting a list of BundleInfo objects.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 17700004 - The specified userId is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9
   */
  function getAllBundleInfo(bundleFlags: number, callback: AsyncCallback<Array<BundleInfo>>): void;
  function getAllBundleInfo(bundleFlags: number, userId: number, callback: AsyncCallback<Array<BundleInfo>>): void;

  /**
   * Obtains BundleInfo of all bundles available in the system.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { number } bundleFlags - Indicates the flag used to specify information contained in the BundleInfo that will be returned.
   * @param { number } userId - Indicates the user id.
   * @returns { Promise<Array<BundleInfo>> } Returns a list of BundleInfo objects.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 17700004 - The specified userId is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9
   */
  function getAllBundleInfo(bundleFlags: number, userId?: number): Promise<Array<BundleInfo>>;

  /**
   * Obtains information about all installed applications of a specified user.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { number } appFlags - Indicates the flag used to specify information contained in the ApplicationInfo objects that will be returned.
   * @param { number } userId - Indicates the user ID or do not pass user ID.
   * @param { AsyncCallback } callback - The callback of getting a list of ApplicationInfo objects.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 17700004 - The specified userId is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9
   */
  function getAllApplicationInfo(appFlags: number, callback: AsyncCallback<Array<ApplicationInfo>>): void;
  function getAllApplicationInfo(appFlags: number, userId: number, callback: AsyncCallback<Array<ApplicationInfo>>): void;

  /**
   * Obtains information about all installed applications of a specified user.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { number } appFlags - Indicates the flag used to specify information contained in the ApplicationInfo objects that will be returned.
   * @param { number } userId - Indicates the user ID or do not pass user ID.
   * @returns { Promise<Array<ApplicationInfo>> } Returns a list of ApplicationInfo objects.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 17700004 - The specified userId is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9
   */
  function getAllApplicationInfo(appFlags: number, userId?: number): Promise<Array<ApplicationInfo>>;

  /**
   * Query the AbilityInfo by the given Want. ohos.permission.GET_BUNDLE_INFO_PRIVILEGED is required for cross user access.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { Want } want - Indicates the Want containing the application bundle name to be queried.
   * @param { number } abilityFlags - Indicates the flag used to specify information contained in the AbilityInfo objects that will be returned.
   * @param { number } userId - userId Indicates the user ID.
   * @param { AsyncCallback<Array<AbilityInfo>> } callback - The callback of querying ability info result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700003 - The specified ability is not found.
   * @throws { BusinessError } 17700004 - The specified userId is invalid.
   * @throws { BusinessError } 17700026 - The specified bundle is disabled.
   * @throws { BusinessError } 17700029 - The specified ability is disabled.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9
   */
  function queryAbilityInfo(want: Want, abilityFlags: number, callback: AsyncCallback<Array<AbilityInfo>>): void;
  function queryAbilityInfo(want: Want, abilityFlags: number, userId: number, callback: AsyncCallback<Array<AbilityInfo>>): void;

  /**
   * Query the AbilityInfo by the given Want. ohos.permission.GET_BUNDLE_INFO_PRIVILEGED is required for cross user access.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { Want } want - Indicates the Want containing the application bundle name to be queried.
   * @param { number } abilityFlags - Indicates the flag used to specify information contained in the AbilityInfo objects that will be returned.
   * @param { number } userId - userId Indicates the user ID.
   * @returns { Promise<Array<AbilityInfo>> } Returns a list of AbilityInfo objects.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700003 - The specified extensionAbility is not found.
   * @throws { BusinessError } 17700004 - The specified userId is invalid.
   * @throws { BusinessError } 17700026 - The specified bundle is disabled.
   * @throws { BusinessError } 17700029 - The specified ability is disabled.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9
   */
  function queryAbilityInfo(want: Want, abilityFlags: number, userId?: number): Promise<Array<AbilityInfo>>;

  /**
   * Query extension info of by utilizing a Want. ohos.permission.GET_BUNDLE_INFO_PRIVILEGED is required for cross user access.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { Want } want - Indicates the Want containing the application bundle name to be queried.
   * @param { ExtensionAbilityType } extensionAbilityType - Indicates ExtensionAbilityType.
   * @param { number } extensionAbilityFlags - Indicates the flag used to specify information contained in the ExtensionInfo objects that will be returned.
   * @param { number } userId - Indicates the user ID.
   * @param { AsyncCallback<Array<ExtensionAbilityInfo>> } callback - The callback of querying extension ability info result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700003 - The specified extensionAbility is not found.
   * @throws { BusinessError } 17700004 - The specified userId is invalid.
   * @throws { BusinessError } 17700026 - The specified bundle is disabled.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9
   */
  function queryExtensionAbilityInfo(want: Want, extensionAbilityType: ExtensionAbilityType, extensionAbilityFlags: number, callback: AsyncCallback<Array<ExtensionAbilityInfo>>): void;
  function queryExtensionAbilityInfo(want: Want, extensionAbilityType: ExtensionAbilityType, extensionAbilityFlags: number, userId: number, callback: AsyncCallback<Array<ExtensionAbilityInfo>>): void;

  /**
   * Query the ExtensionAbilityInfo by the given Want. ohos.permission.GET_BUNDLE_INFO_PRIVILEGED is required for cross user access.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { Want } want - Indicates the Want containing the application bundle name to be queried.
   * @param { ExtensionAbilityType } extensionAbilityType - Indicates ExtensionAbilityType..
   * @param { number } extensionAbilityFlags - Indicates the flag used to specify information contained in the ExtensionAbilityInfo objects that will be returned.
   * @param { number } userId - Indicates the user ID.
   * @returns { Promise<Array<ExtensionAbilityInfo>> } Returns a list of ExtensionAbilityInfo objects.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700003 - The specified extensionAbility is not found.
   * @throws { BusinessError } 17700004 - The specified userId is invalid.
   * @throws { BusinessError } 17700026 - The specified bundle is disabled.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9
   */
  function queryExtensionAbilityInfo(want: Want, extensionAbilityType: ExtensionAbilityType, extensionAbilityFlags: number, userId?: number): Promise<Array<ExtensionAbilityInfo>>;

  /**
   * Obtains bundle name by the given uid.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { number } uid - Indicates the UID of an application.
   * @param { AsyncCallback<string> } callback - The callback of getting bundle name.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 17700021 - The uid is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9
   */
  function getBundleNameByUid(uid: number, callback: AsyncCallback<string>): void

  /**
   * Obtains bundle name by the given uid.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { number } uid - Indicates the UID of an application.
   * @returns { Promise<string> } Returns the bundle name.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 17700021 - The uid is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9
   */
  function getBundleNameByUid(uid: number): Promise<string>;

  /**
   * Obtains information about an application bundle contained in an ohos Ability Package (HAP).
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } hapFilePath - Indicates the path storing the HAP. The path should be the relative path to the data directory of the current application.
   * @param { number } bundleFlags - Indicates the flag used to specify information contained in the BundleInfo object to be returned.
   * @param { AsyncCallback<BundleInfo> } callback - The callback of getting bundle archive info result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 17700022 - The hapFilePath is invalid.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9
   */
  function getBundleArchiveInfo(hapFilePath: string, bundleFlags: number, callback: AsyncCallback<BundleInfo>): void

  /**
   * Obtains information about an application bundle contained in an ohos Ability Package (HAP).
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } hapFilePath - Indicates the path storing the HAP. The path should be the relative path to the data directory of the current application.
   * @param { number } bundleFlags - Indicates the flag used to specify information contained in the BundleInfo object to be returned.
   * @returns { Promise<BundleInfo> } Returns the BundleInfo object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 17700022 - The hapFilePath is invalid.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9
   */
  function getBundleArchiveInfo(hapFilePath: string,  bundleFlags: number): Promise<BundleInfo>;

  /**
   * Clears cache data of a specified application.
   * @permission ohos.permission.REMOVE_CACHE_FILES
   * @param { string } bundleName - Indicates the bundle name of the application whose cache data is to be cleaned.
   * @param { AsyncCallback<void> } callback - The callback of cleaning bundle cache files result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700030 - The specified bundleName does not support cleaning cache files.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9
   */
  function cleanBundleCacheFiles(bundleName: string, callback: AsyncCallback<void>): void;

  /**
   * Clears cache data of a specified application.
   * @permission ohos.permission.REMOVE_CACHE_FILES
   * @param { string } bundleName - Indicates the bundle name of the application whose cache data is to be cleaned.
   * @returns { Promise<void> } Clean bundle cache files result
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9
   */
  function cleanBundleCacheFiles(bundleName: string): Promise<void>;

  /**
   * Sets whether to enable a specified application.
   * @permission ohos.permission.CHANGE_ABILITY_ENABLED_STATE
   * @param { string } bundleName - Indicates the bundle name of the application.
   * @param { boolean } isEnabled - The value true means to enable it, and the value false means to disable it.
   * @param { AsyncCallback<void> } callback - The callback of setting app enabled result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9
   */
  function setApplicationEnabled(bundleName: string, isEnable: boolean, callback: AsyncCallback<void>): void;

  /**
   * Sets whether to enable a specified application.
   * @permission ohos.permission.CHANGE_ABILITY_ENABLED_STATE
   * @param { string } bundleName - Indicates the bundle name of the application.
   * @param { boolean } isEnabled - The value true means to enable it, and the value false means to disable it.
   * @returns { Promise<void> } set app enabled result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9
   */
  function setApplicationEnabled(bundleName: string, isEnable: boolean): Promise<void>;

  /**
   * Sets whether to enable a specified ability.
   * @permission ohos.permission.CHANGE_ABILITY_ENABLED_STATE
   * @param { AbilityInfo } abilityInfo - Indicates information about the ability to set.
   * @param { boolean } isEnabled - The value true means to enable it, and the value false means to disable it.
   * @param { AsyncCallback<void> } callback - The callback of setting ability enabled result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700003 - The specified abilityInfo is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9
   */
  function setAbilityEnabled(info: AbilityInfo, isEnable: boolean, callback: AsyncCallback<void>): void;

  /**
   * Sets whether to enable a specified ability.
   * @permission ohos.permission.CHANGE_ABILITY_ENABLED_STATE
   * @param { AbilityInfo } abilityInfo - Indicates information about the ability to set.
   * @param { boolean } isEnabled - The value true means to enable it, and the value false means to disable it.
   * @returns { Promise<void> } set ability enabled result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700003 - The specified abilityInfo is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9
   */
  function setAbilityEnabled(info: AbilityInfo, isEnable: boolean): Promise<void>;

  /**
   * Checks whether a specified application is enabled.
   * @param { string } bundleName - Indicates the bundle name of the application.
   * @param { AsyncCallback<boolean> } callback - The callback of checking application enabled result. The result is true if enabled, false otherwise.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9
   */
  function isApplicationEnabled(bundleName: string, callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether a specified application is enabled.
   * @param { string } bundleName - Indicates the bundle name of the application.
   * @returns { Promise<boolean> }  Returns true if the application is enabled; returns false otherwise.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9
   */
  function isApplicationEnabled(bundleName: string): Promise<boolean>;

  /**
   * Checks whether a specified ability is enabled.
   * @param { AbilityInfo } info - Indicates information about the ability to check.
   * @param { AsyncCallback<boolean> } callback - The callback of checking ability enabled result. The result is true if enabled, false otherwise.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700003 - The specified abilityName is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9
   */
  function isAbilityEnabled(info: AbilityInfo, callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether a specified ability is enabled.
   * @param { AbilityInfo } info - Indicates information about the ability to check.
   * @returns { Promise<boolean> } Returns true if the ability is enabled; returns false otherwise.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700003 - The specified abilityName is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9
   */
  function isAbilityEnabled(info: AbilityInfo): Promise<boolean>;

   /**
   * Obtains the Want for starting the main ability of an application based on the
   * given bundle name. The main ability of an application is the ability that has the
   * #ACTION_HOME and #ENTITY_HOME Want filters set in the application's <b>config.json</b> or <b>module.json</b> file.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - Indicates the bundle name of the application.
   * @param { number } userId - Indicates the user ID or do not pass user ID.
   * @param { AsyncCallback<Want> } callback - The callback for starting the application's main ability.
   * @throws { BusinessError } 201 - Calling interface without permission 'ohos.permission.GET_BUNDLE_INFO_PRIVILEGED'.
   * @throws { BusinessError } 401 - Input parameters check failed.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700004 - The specified userId is not found.
   * @throws { BusinessError } 17700026 - The specified bundle is disabled.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  function getLaunchWantForBundle(bundleName: string, userId: number, callback: AsyncCallback<Want>): void;

  /**
   * Obtains the Want for starting the main ability of an application based on the
   * given bundle name. The main ability of an application is the ability that has the
   * #ACTION_HOME and #ENTITY_HOME Want filters set in the application's <b>config.json</b> or <b>module.json</b> file.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - Indicates the bundle name of the application.
   * @param { AsyncCallback<Want> } callback - The callback for starting the application's main ability.
   * @throws { BusinessError } 201 - Calling interface without permission 'ohos.permission.GET_BUNDLE_INFO_PRIVILEGED'.
   * @throws { BusinessError } 401 - Input parameters check failed.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700004 - The specified userId is not found.
   * @throws { BusinessError } 17700026 - The specified bundle is disabled.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  function getLaunchWantForBundle(bundleName: string, callback: AsyncCallback<Want>): void;

  /**
   * Obtains the Want for starting the main ability of an application based on the
   * given bundle name. The main ability of an application is the ability that has the
   * #ACTION_HOME and #ENTITY_HOME Want filters set in the application's <b>config.json</b> or <b>module.json</b> file.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - Indicates the bundle name of the application.
   * @param { number } userId - Indicates the user ID or do not pass user ID.
   * @returns { Promise<Want> } the Want for starting the application's main ability.
   * @throws { BusinessError } 201 - Calling interface without permission 'ohos.permission.GET_BUNDLE_INFO_PRIVILEGED'.
   * @throws { BusinessError } 401 - Input parameters check failed.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700004 - The specified userId is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  function getLaunchWantForBundle(bundleName: string, userId?: number): Promise<Want>;

  /**
   * Obtains the profile designated by metadata name, abilityName and moduleName from the current application.
   * @param { string } moduleName - Indicates the moduleName of the application.
   * @param { string } abilityName - Indicates the abilityName of the application.
   * @param { string } metadataName - Indicates the name of metadata in ability.
   * @param { AsyncCallback<Array<string>> } callback - The callback of returning string in json-format of the corresponding config file.
   * @throws { BusinessError } 401 - Input parameters check failed.
   * @throws { BusinessError } 17700002 - The specified moduleName is not existed.
   * @throws { BusinessError } 17700003 - The specified anilityName is not existed.
   * @throws { BusinessError } 17700024 - The specified metadataName is not existed or the profile is not json-format.
   * @throws { BusinessError } 17700026 - The specified bundle is disabled.
   * @throws { BusinessError } 17700029 - The specified ability is disabled.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  function getProfileByAbility(moduleName: string, abilityName: string, metadataName: string, callback: AsyncCallback<Array<string>>): void;

  /**
   * Obtains the profile designated by metadata name, abilityName and moduleName from the current application.
   * @param { string } moduleName - Indicates the moduleName of the application.
   * @param { string } abilityName - Indicates the abilityName of the application.
   * @param { string } metadataName - Indicates the name of metadata in ability.
   * @returns { Promise<Array<string>> } Returns string in json-format of the corresponding config file.
   * @throws { BusinessError } 401 - Input parameters check failed.
   * @throws { BusinessError } 17700002 - The specified moduleName is not existed.
   * @throws { BusinessError } 17700003 - The specified anilityName is not existed.
   * @throws { BusinessError } 17700024 - The specified metadataName is not existed or the profile is not json-format.
   * @throws { BusinessError } 17700026 - The specified bundle is disabled.
   * @throws { BusinessError } 17700029 - The specified ability is disabled.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  function getProfileByAbility(moduleName: string, abilityName: string, metadataName?: string): Promise<Array<string>>;

  /**
   * Obtains the profile designated by metadata name, extensionAbilityName and moduleName from the current application.
   * @param { string } moduleName - Indicates the moduleName of the application.
   * @param { string } extensionAbilityName - Indicates the extensionAbilityName of the application.
   * @param { string } metadataName - Indicates the name of metadata in ability.
   * @param { AsyncCallback } callback - The callback of returning string in json-format of the corresponding config file.
   * @throws { BusinessError } 401 - Input parameters check failed.
   * @throws { BusinessError } 17700002 - The specified moduleName is not existed.
   * @throws { BusinessError } 17700003 - The specified extensionAbilityName not existed.
   * @throws { BusinessError } 17700024 - The specified metadataName is not existed or the profile is not json-format.
   * @throws { BusinessError } 17700026 - The specified bundle is disabled.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  function getProfileByExtensionAbility(moduleName: string, extensionAbilityName: string, metadataName: string, callback: AsyncCallback<Array<string>>): void;

  /**
   * Obtains the profile designated by metadata name, extensionAbilityName and moduleName from the current application.
   * @param { string } moduleName - Indicates the moduleName of the application.
   * @param { string } extensionAbilityName - Indicates the extensionAbilityName of the application.
   * @param { string } metadataName - Indicates the name of metadata in ability.
   * @returns { Promise<Array<string>> } Returns string in json-format of the corresponding config file.
   * @throws { BusinessError } 401 - Input parameters check failed.
   * @throws { BusinessError } 17700002 - The specified moduleName is not existed.
   * @throws { BusinessError } 17700003 - The specified extensionAbilityName not existed.
   * @throws { BusinessError } 17700024 - The specified metadataName is not existed or the profile is not json-format.
   * @throws { BusinessError } 17700026 - The specified bundle is disabled.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  function getProfileByExtensionAbility(moduleName: string, extensionAbilityName: string, metadataName?: string): Promise<Array<string>>;

  /**
   * Get the permission details by permission name.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } permissionName - Indicates permission name.
   * @param { AsyncCallback<PermissionDef> } callback - The callback of get permissionDef object result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Input parameters check failed.
   * @throws { BusinessError } 17700006 - The specified permission is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9
   */
  function getPermissionDef(permissionName: string, callback: AsyncCallback<PermissionDef>): void;

  /**
   * Get the permission details by permission name.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } permissionName - Indicates permission name.
   * @returns { Promise<PermissionDef> } Returns permissionDef object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Input parameters check failed.
   * @throws { BusinessError } 17700006 - The specified permission is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9
   */
  function getPermissionDef(permissionName: string): Promise<PermissionDef>;

  /**
   * Obtains the label of a specified ability.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName - Indicates the bundle name of the application to which the ability belongs.
   * @param { string } moduleName - Indicates the module name.
   * @param { string } abilityName - Indicates the ability name.
   * @param { AsyncCallback<string> } callback - The callback of getting ability label result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700002 - The specified moduleName is not found.
   * @throws { BusinessError } 17700003 - The specified abilityName is not found.
   * @throws { BusinessError } 17700026 - The specified bundle is disabled.
   * @throws { BusinessError } 17700029 - The specified ability is disabled.
   * @syscap SystemCapability.BundleManager.BundleFramework.Resource
   * @systemapi
   * @since 9
   */
  function getAbilityLabel(bundleName: string, moduleName: string, abilityName: string, callback: AsyncCallback<string>): void;

  /**
   * Obtains the label of a specified ability.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName - Indicates the bundle name of the application to which the ability belongs.
   * @param { string } moduleName - Indicates the module name.
   * @param { string } abilityName - Indicates the ability name.
   * @returns { Promise<string> } Returns the label representing the label of the specified ability.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700002 - The specified moduleName is not found.
   * @throws { BusinessError } 17700003 - The specified abilityName is not found.
   * @throws { BusinessError } 17700026 - The specified bundle is disabled.
   * @throws { BusinessError } 17700029 - The specified ability is disabled.
   * @syscap SystemCapability.BundleManager.BundleFramework.Resource
   * @systemapi
   * @since 9
   */
  function getAbilityLabel(bundleName: string, moduleName: string, abilityName: string): Promise<string>;

  /**
   * Obtains the icon of a specified ability.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName - Indicates the bundle name of the application to which the ability belongs.
   * @param { string } moduleName - Indicates the module name.
   * @param { string } abilityName - Indicates the ability name.
   * @param { AsyncCallAsyncCallback<image.PixelMap> } callback - The callback of getting ability icon result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700002 - The specified moduleName is not found.
   * @throws { BusinessError } 17700003 - The specified abilityName is not found.
   * @throws { BusinessError } 17700026 - The specified bundle is disabled.
   * @throws { BusinessError } 17700029 - The specified ability is disabled.
   * @syscap SystemCapability.BundleManager.BundleFramework.Resource
   * @systemapi
   * @since 9
   */
  function getAbilityIcon(bundleName: string, moduleName: string, abilityName: string, callback: AsyncCallback<image.PixelMap>): void;

  /**
   * Obtains the icon of a specified ability.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName - Indicates the bundle name of the application to which the ability belongs.
   * @param { string } moduleName - Indicates the module name.
   * @param { string } abilityName - Indicates the ability name.
   * @returns { Promise<image.PixelMap> } Returns the PixelMap object representing the icon of the specified ability.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700002 - The specified moduleName is not found.
   * @throws { BusinessError } 17700003 - The specified abilityName is not found.
   * @throws { BusinessError } 17700026 - The specified bundle is disabled.
   * @throws { BusinessError } 17700029 - The specified ability is disabled.
   * @syscap SystemCapability.BundleManager.BundleFramework.Resource
   * @systemapi
   * @since 9
   */
  function getAbilityIcon(bundleName: string, moduleName: string, abilityName: string): Promise<image.PixelMap>;

  /**
   * Obtains applicationInfo based on a given bundleName and bundleFlags.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param  { string } bundleName - Indicates the application bundle name to be queried.
   * @param  { number } bundleFlags - Indicates the flag used to specify information contained in the ApplicationInfo object that will be returned.
   * @param { number } userId - Indicates the user ID or do not pass user ID.
   * @returns Returns the ApplicationInfo object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700004 - The specified userId is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9
   */
   function getApplicationInfoSync(bundleName: string, bundleFlags: number, userId: number) : ApplicationInfo;
   function getApplicationInfoSync(bundleName: string, bundleFlags: number) : ApplicationInfo;

  /**
   * Obtains bundleInfo based on bundleName, bundleFlags and options.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO
   * @param { string } bundleName - Indicates the application bundle name to be queried.
   * @param { number } bundleFlags - Indicates the flag used to specify information contained in the BundleInfo object that will be returned.
   * @param { number } userId - Indicates the user ID or do not pass user ID.
   * @returns Returns the BundleInfo object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700004 - The specified userId is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9
   */
   function getBundleInfoSync(bundleName: string, bundleFlags: number, userId: number): BundleInfo;
   function getBundleInfoSync(bundleName: string, bundleFlags: number): BundleInfo;

  /**
   * Obtains configuration information about an application.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  export type ApplicationInfo = _ApplicationInfo;

  /**
   * Indicates the Metadata.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  export type Metadata = _Metadata;

  /**
   * Obtains configuration information about a bundle.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  export type BundleInfo = _BundleInfo.BundleInfo;

  /**
   * The scene which is used.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  export type UsedScene = _BundleInfo.UsedScene;

  /**
   * Indicates the required permissions details defined in file config.json.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  export type ReqPermissionDetail = _BundleInfo.ReqPermissionDetail;

  /**
   * Indicates the PermissionGrantStatus.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  export type PermissionGrantStatus = _BundleInfo.PermissionGrantStatus;

    /**
   * Indicates the SignatureInfo.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  export type SignatureInfo = _BundleInfo.SignatureInfo;

  /**
   * Obtains configuration information about an module.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  export type HapModuleInfo = _HapModuleInfo;

  /**
   * Obtains configuration information about an ability.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  export type AbilityInfo = _AbilityInfo.AbilityInfo;

  /**
   * Contains basic Ability information, which indicates ability type.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
   export type AbilityType = _AbilityInfo.AbilityType;

  /**
   * Contains basic Ability information. Indicates display orientation.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
    export type DisplayOrientation = _AbilityInfo.DisplayOrientation;

  /**
   * Contains basic Ability information. Indicates support window mode.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
    export type SupportWindowMode = _AbilityInfo.SupportWindowMode;

  /**
   * Contains basic Ability information. Indicates the window size..
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  export type WindowSize = _AbilityInfo.WindowSize;

  /**
   * Obtains extension information about a bundle.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  export type ExtensionAbilityInfo = _ExtensionAbilityInfo.ExtensionAbilityInfo;

  /**
   * Indicates extension ability type
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  export type ExtensionAbilityType = _ExtensionAbilityInfo.ExtensionAbilityType;

  /**
   * Indicates the defined permission details in file config.json.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9
   */
  export type PermissionDef = _PermissionDef;

  /**
   * Contains basic Ability information, which uniquely identifies an ability.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 9
   */
  export type ElementName = _ElementName;
}

export default bundleManager;