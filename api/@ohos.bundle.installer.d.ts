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

import { AsyncCallback } from './@ohos.base';

/**
 * Support install, upgrade, remove and recover bundles on the devices.
 *
 * @namespace installer
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @systemapi
 * @since 9
 */
declare namespace installer {
  /**
   * Obtains the interface used to install bundle.
   *
   * @param { AsyncCallback<BundleInstaller> } callback - The callback of BundleInstaller object.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Input parameters check failed.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9
   */
  function getBundleInstaller(callback: AsyncCallback<BundleInstaller>): void;

  /**
   * Obtains the interface used to install bundle.
   *
   * @returns { Promise<BundleInstaller> } BundleInstaller object.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9
   */
  function getBundleInstaller(): Promise<BundleInstaller>;

  /**
   * Bundle installer interface, include install uninstall recover.
   *
   * @interface BundleInstaller
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9
   */
  interface BundleInstaller {
    /**
     * Install haps for an application.
     *
     * @permission ohos.permission.INSTALL_BUNDLE
     * @param { Array<string> } hapFilePaths - Indicates the path where the hap of the application is stored.
     * @param { InstallParam } installParam - Indicates other parameters required for the installation.
     * @param { AsyncCallback<void> } callback - The callback of installing haps result.
     * @throws { BusinessError } 201 - Calling interface without permission 'ohos.permission.INSTALL_BUNDLE'.
     * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
     * @throws { BusinessError } 401 - Input parameters check failed.
     * @throws { BusinessError } 17700004 - The specified user ID is not found.
     * @throws { BusinessError } 17700010 - Failed to install the HAP because the HAP fails to be parsed.
     * @throws { BusinessError } 17700011 - Failed to install the HAP because the HAP signature fails to be verified.
     * @throws { BusinessError } 17700012 - Failed to install the HAP because the HAP path is invalid or the HAP is too large.
     * @throws { BusinessError } 17700015 - Failed to install the HAPs because they have different configuration information.
     * @throws { BusinessError } 17700016 - Failed to install the HAP because of insufficient system disk space.
     * @throws { BusinessError } 17700017 - Failed to install the HAP since the version of the HAP to install is too early.
     * @throws { BusinessError } 17700018 - Failed to install because the dependent module does not exist.
     * @throws { BusinessError } 17700031 - Failed to install the HAP because the overlay check of the HAP is failed.
     * @throws { BusinessError } 17700036 - Failed to install the HSP because lacks appropriate permissions.
     * @throws { BusinessError } 17700039 - Failed to install because disallow install a shared bundle by hapFilePaths.
     * @throws { BusinessError } 17700041 - Failed to install because enterprise device management disallow install.
     * @throws { BusinessError } 17700044 - Failed to install the HAP because the isolationMode configured is not supported.
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 9
     */
    install(hapFilePaths: Array<string>, installParam: InstallParam, callback: AsyncCallback<void>): void;

    /**
     * Install haps for an application.
     *
     * @permission ohos.permission.INSTALL_BUNDLE
     * @param { Array<string> } hapFilePaths - Indicates the path where the hap of the application is stored.
     * @param { AsyncCallback<void> } callback - The callback of installing haps result.
     * @throws { BusinessError } 201 - Calling interface without permission 'ohos.permission.INSTALL_BUNDLE'.
     * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
     * @throws { BusinessError } 401 - Input parameters check failed.
     * @throws { BusinessError } 17700010 - Failed to install the HAP because the HAP fails to be parsed.
     * @throws { BusinessError } 17700011 - Failed to install the HAP because the HAP signature fails to be verified.
     * @throws { BusinessError } 17700012 - Failed to install the HAP because the HAP path is invalid or the HAP is too large.
     * @throws { BusinessError } 17700015 - Failed to install the HAPs because they have different configuration information.
     * @throws { BusinessError } 17700016 - Failed to install the HAP because of insufficient system disk space.
     * @throws { BusinessError } 17700017 - Failed to install the HAP since the version of the HAP to install is too early.
     * @throws { BusinessError } 17700018 - Failed to install because the dependent module does not exist.
     * @throws { BusinessError } 17700031 - Failed to install the HAP because the overlay check of the HAP is failed.
     * @throws { BusinessError } 17700036 - Failed to install the HSP because lacks appropriate permissions.
     * @throws { BusinessError } 17700039 - Failed to install because disallow install a shared bundle by hapFilePaths.
     * @throws { BusinessError } 17700041 - Failed to install because enterprise device management disallow install.
     * @throws { BusinessError } 17700044 - Failed to install the HAP because the isolationMode configured is not supported.
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 9
     */
    install(hapFilePaths: Array<string>, callback: AsyncCallback<void>): void;

    /**
     * Install haps for an application.
     *
     * @permission ohos.permission.INSTALL_BUNDLE
     * @param { Array<string> } hapFilePaths - Indicates the path where the hap of the application is stored.
     * @param { InstallParam } installParam - Indicates other parameters required for the installation.
     * @returns { Promise<void> }
     * @throws { BusinessError } 201 - Calling interface without permission 'ohos.permission.INSTALL_BUNDLE'.
     * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
     * @throws { BusinessError } 401 - Input parameters check failed.
     * @throws { BusinessError } 17700004 - The specified user ID is not found.
     * @throws { BusinessError } 17700010 - Failed to install the HAP because the HAP fails to be parsed.
     * @throws { BusinessError } 17700011 - Failed to install the HAP because the HAP signature fails to be verified.
     * @throws { BusinessError } 17700012 - Failed to install the HAP because the HAP path is invalid or the HAP is too large.
     * @throws { BusinessError } 17700015 - Failed to install the HAPs because they have different configuration information.
     * @throws { BusinessError } 17700016 - Failed to install the HAP because of insufficient system disk space.
     * @throws { BusinessError } 17700017 - Failed to install the HAP since the version of the HAP to install is too early.
     * @throws { BusinessError } 17700018 - Failed to install because the dependent module does not exist.
     * @throws { BusinessError } 17700031 - Failed to install the HAP because the overlay check of the HAP is failed.
     * @throws { BusinessError } 17700036 - Failed to install the HSP because lacks appropriate permissions.
     * @throws { BusinessError } 17700039 - Failed to install because disallow install a shared bundle by hapFilePaths.
     * @throws { BusinessError } 17700041 - Failed to install because enterprise device management disallow install.
     * @throws { BusinessError } 17700044 - Failed to install the HAP because the isolationMode configured is not supported.
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 9
     */
    install(hapFilePaths: Array<string>, installParam?: InstallParam): Promise<void>;

    /**
     * Uninstall an application.
     *
     * @permission ohos.permission.INSTALL_BUNDLE
     * @param { string } bundleName - Indicates the bundle name of the application to be uninstalled.
     * @param { InstallParam } installParam - Indicates other parameters required for the uninstall.
     * @param { AsyncCallback<void> } callback - The callback of uninstalling application result.
     * @throws { BusinessError } 201 - Calling interface without permission 'ohos.permission.INSTALL_BUNDLE'.
     * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
     * @throws { BusinessError } 401 - Input parameters check failed.
     * @throws { BusinessError } 17700001 - The specified bundle name is not found.
     * @throws { BusinessError } 17700004 - The specified user ID is not found.
     * @throws { BusinessError } 17700020 - The specified bundle is pre-installed bundle which cannot be uninstalled.
     * @throws { BusinessError } 17700040 - The specified bundle is a shared bundle which cannot be uninstalled.
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 9
     */
    uninstall(bundleName: string, installParam: InstallParam, callback: AsyncCallback<void>): void;

    /**
     * Uninstall an application.
     *
     * @permission ohos.permission.INSTALL_BUNDLE
     * @param { string } bundleName - Indicates the bundle name of the application to be uninstalled.
     * @param { AsyncCallback<void> } callback - The callback of uninstalling application result.
     * @throws { BusinessError } 201 - Calling interface without permission 'ohos.permission.INSTALL_BUNDLE'.
     * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
     * @throws { BusinessError } 401 - Input parameters check failed.
     * @throws { BusinessError } 17700001 - The specified bundle name is not found.
     * @throws { BusinessError } 17700020 - The specified bundle is pre-installed bundle which cannot be uninstalled.
     * @throws { BusinessError } 17700040 - The specified bundle is a shared bundle which cannot be uninstalled.
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 9
     */
    uninstall(bundleName: string, callback: AsyncCallback<void>): void;

    /**
     * Uninstall an application.
     *
     * @permission ohos.permission.INSTALL_BUNDLE
     * @param { string } bundleName - Indicates the bundle name of the application to be uninstalled.
     * @param { InstallParam } installParam - Indicates other parameters required for the uninstall.
     * @returns { Promise<void> }
     * @throws { BusinessError } 201 - Calling interface without permission 'ohos.permission.INSTALL_BUNDLE'.
     * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
     * @throws { BusinessError } 401 - Input parameters check failed.
     * @throws { BusinessError } 17700001 - The specified bundle name is not found.
     * @throws { BusinessError } 17700004 - The specified user ID is not found.
     * @throws { BusinessError } 17700020 - The specified bundle is pre-installed bundle which cannot be uninstalled.
     * @throws { BusinessError } 17700040 - The specified bundle is a shared bundle which cannot be uninstalled.
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 9
     */
    uninstall(bundleName: string, installParam?: InstallParam): Promise<void>;

    /**
     * Recover an application.
     *
     * @permission ohos.permission.INSTALL_BUNDLE
     * @param { string } bundleName - Indicates the bundle name of the application to be recovered.
     * @param { InstallParam } installParam - Indicates other parameters required for the recover.
     * @param { AsyncCallback<void> } callback - The callback of recovering application result.
     * @throws { BusinessError } 201 - Calling interface without permission 'ohos.permission.INSTALL_BUNDLE'.
     * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
     * @throws { BusinessError } 401 - Input parameters check failed.
     * @throws { BusinessError } 17700001 - The specified bundle name is not found.
     * @throws { BusinessError } 17700004 - The specified user ID is not found.
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 9
     */
    recover(bundleName: string, installParam: InstallParam, callback: AsyncCallback<void>): void;

    /**
     * Recover an application.
     *
     * @permission ohos.permission.INSTALL_BUNDLE
     * @param { string } bundleName - Indicates the bundle name of the application to be recovered.
     * @param { AsyncCallback<void> } callback - The callback of recovering application result.
     * @throws { BusinessError } 201 - Calling interface without permission 'ohos.permission.INSTALL_BUNDLE'.
     * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
     * @throws { BusinessError } 401 - Input parameters check failed.
     * @throws { BusinessError } 17700001 - The specified bundle name is not found.
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 9
     */
    recover(bundleName: string, callback: AsyncCallback<void>): void;

    /**
     * Recover an application.
     *
     * @permission ohos.permission.INSTALL_BUNDLE
     * @param { string } bundleName - Indicates the bundle name of the application to be recovered.
     * @param { InstallParam } installParam - Indicates other parameters required for the recover.
     * @returns { Promise<void> }
     * @throws { BusinessError } 201 - Calling interface without permission 'ohos.permission.INSTALL_BUNDLE'.
     * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
     * @throws { BusinessError } 401 - Input parameters check failed.
     * @throws { BusinessError } 17700001 - The specified bundle name is not found.
     * @throws { BusinessError } 17700004 - The specified user ID is not found.
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 9
     */
    recover(bundleName: string, installParam?: InstallParam): Promise<void>;

    /**
     * Uninstall a shared bundle.
     *
     * @permission ohos.permission.INSTALL_BUNDLE
     * @param { UninstallParam } uninstallParam - Indicates parameters required for the uninstall.
     * @param { AsyncCallback<void> } callback - The callback of uninstalling shared bundle result.
     * @throws { BusinessError } 201 - Calling interface without permission 'ohos.permission.INSTALL_BUNDLE'.
     * @throws { BusinessError } 401 - Input parameters check failed.
     * @throws { BusinessError } 17700020 - The specified bundle is pre-installed bundle which cannot be uninstalled.
     * @throws { BusinessError } 17700037 - The version of shared bundle is dependent on other applications.
     * @throws { BusinessError } 17700038 - The specified shared bundle does not exist.
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 10
     */
    uninstall(uninstallParam: UninstallParam, callback: AsyncCallback<void>): void;

    /**
     * Uninstall a shared bundle.
     *
     * @permission ohos.permission.INSTALL_BUNDLE
     * @param { UninstallParam } uninstallParam - Indicates parameters required for the uninstall.
     * @returns { Promise<void> }
     * @throws { BusinessError } 201 - Calling interface without permission 'ohos.permission.INSTALL_BUNDLE'.
     * @throws { BusinessError } 401 - Input parameters check failed.
     * @throws { BusinessError } 17700020 - The specified bundle is pre-installed bundle which cannot be uninstalled.
     * @throws { BusinessError } 17700037 - The version of shared bundle is dependent on other applications.
     * @throws { BusinessError } 17700038 - The specified shared bundle does not exist.
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 10
     */
    uninstall(uninstallParam: UninstallParam): Promise<void>;
  }

  /**
   * Provides parameters required for hashParam.
   *
   * @typedef HashParam
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9
   */
  export interface HashParam {
    /**
     * Indicates the moduleName
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 9
     */
    moduleName: string;

    /**
     * Indicates the hash value
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 9
     */
    hashValue: string;
  }

  /**
   * Provides parameters required for installing or uninstalling an application.
   *
   * @typedef InstallParam
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 9
   */
  export interface InstallParam {
    /**
     * Indicates the user id
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 9
     */
    userId?: number;

    /**
     * Indicates the install flag, which 0x00 for normal, 0x10 for freeInstall
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 9
     */
    installFlag?: number;

    /**
     * Indicates whether the param has data
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 9
     */
    isKeepData?: boolean;

    /**
     * Indicates the hash params
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 9
     */
    hashParams?: Array<HashParam>;

    /**
     * Indicates the deadline of the crowdtesting bundle
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 9
     */
    crowdtestDeadline?: number;

    /**
     * Indicates the shared bundle dir paths.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 10
     */
    sharedBundleDirPaths?: Array<String>;
  }

  /**
   * Provides parameters required for uninstalling shared bundle.
   *
   * @typedef UninstallParam
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10
   */
  export interface UninstallParam {
    /**
     * Indicates the shared bundle name
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 10
     */
    bundleName: string;

    /**
     * Indicates the shared version code. If default, indicates that all version sharing bundles are uninstalled
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 10
     */
    versionCode?: number;
  }
}

export default installer;
