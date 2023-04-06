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
import type * as _BusinessAbilityInfo from './bundleManager/BusinessAbilityInfo';

/**
 * This module is used to obtain business ability information of various applications installed on the current device.
 *
 * @namespace businessAbilityRouter
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @systemapi
 * @since 10
 */
declare namespace businessAbilityRouter {
  /**
   * This enumeration value is used to identify various types of business ability info
   *
   * @enum { number }
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10
   */
  export enum BusinessType {
    /**
     * Indicates business ability info with type of share
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 10
     */
    SHARE = 0,

    /**
     * Indicates business ability info with type of unspecified
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 10
     */
    UNSPECIFIED = 255,
  }

  /**
   * This filter value is used to filter business ability info
   *
   * @name BusinessAbilityFilter
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10
   */
  export declare interface BusinessAbilityFilter {
    /**
     * Indicates the type of business ability info
     *
     * @type { businessAbilityRouter.BusinessType }
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 10
     */
    businessType: BusinessType,

    /**
     * Indicates the supported mime type of business ability info
     *
     * @type { ?string }
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 10
     */
    mimeType?: string,

    /**
     * Indicates the supported uri of business ability info
     *
     * @type { ?string }
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @systemapi
     * @since 10
     */
    uri?: string,
  }

  /**
   * Query the business ability info of by the given filter. ohos.permission.GET_BUNDLE_INFO_PRIVILEGED is required for cross user access.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { BusinessAbilityFilter } filter - Indicates the filter containing the business ability info to be queried.
   * @param { AsyncCallback<Array<BusinessAbilityInfo>> } callback - The callback of querying business ability info result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10
   */
  function queryBusinessAbilityInfo(filter: BusinessAbilityFilter, callback: AsyncCallback<Array<BusinessAbilityInfo>>): void;

  /**
   * Query the business ability info of by the given filter. ohos.permission.GET_BUNDLE_INFO_PRIVILEGED is required for cross user access.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { BusinessAbilityFilter } filter - Indicates the filter containing the business ability info to be queried.
   * @returns { Promise<Array<BusinessAbilityInfo>> } Returns a list of business ability info objects.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10
   */
  function queryBusinessAbilityInfo(filter: BusinessAbilityFilter): Promise<Array<BusinessAbilityInfo>>;

  /**
   * Obtains business ability info.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10
   */
  export type BusinessAbilityInfo = _BusinessAbilityInfo.BusinessAbilityInfo;
}

export default businessAbilityRouter;