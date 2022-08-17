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

/**
 * interface of formError.
 *
 * @name formError
 * @since 8
 * @syscap SystemCapability.Ability.Form
 */
declare namespace formError {
    /**
     * Error of form.
     *
     * @name FormError
     * @since 8
     * @syscap SystemCapability.Ability.Form
     */
    enum FormError {
        /**
         * A common internal error occurs during form processing.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        ERR_COMMON = 1,

        /**
         * The application does not have permission to use forms.
         * Ensure that the application is granted with the ohos.permission.REQUIRE_FORM
         * and ohos.permission.GET_BUNDLE_INFO_PRIVILEGED permissions.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        ERR_PERMISSION_DENY = 2,

        /**
         * Failed to obtain the configuration information about the form specified by the
         * request parameters. Ensure that the parameters of the form to be added are
         * consistent with those provided by the form provider.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        ERR_GET_INFO_FAILED = 4,

        /**
         * Failed to obtain the bundle to which the form belongs based on the request parameters.
         * Ensure that the bundle to which the form to be added belongs is available.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        ERR_GET_BUNDLE_FAILED = 5,

        /**
         * Failed to initialize the form layout based on the request parameters.
         * Ensure that the grid style of the form is supported by the form provider.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        ERR_GET_LAYOUT_FAILED = 6,

        /**
         * Invalid input parameter during form operation. Ensure that all input
         * parameters are valid.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        ERR_ADD_INVALID_PARAM = 7,

        /**
         * The form configuration to be obtained using an existing form ID is
         * different from that obtained for the first time.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        ERR_CFG_NOT_MATCH_ID = 8,

        /**
         * The ID of the form to be operated does not exist in the Form Manager Service.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        ERR_NOT_EXIST_ID = 9,

        /**
         * Failed to bind the Form Manager Service to the provider service.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        ERR_BIND_PROVIDER_FAILED = 10,

        /**
         * The total number of added forms exceeds the maximum allowed by the system.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        ERR_MAX_SYSTEM_FORMS = 11,

        /**
         * The number of form instances generated using the same form configuration
         * exceeds the maximum allowed by the system.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        ERR_MAX_INSTANCES_PER_FORM = 12,

        /**
         * The form being requested was added by other applications and cannot be
         * operated by the current application.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        ERR_OPERATION_FORM_NOT_SELF = 13,

        /**
         * The Form Manager Service failed to instruct the form provider to delete the form.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        ERR_PROVIDER_DEL_FAIL = 14,

        /**
         * The total number of added forms exceeds the maximum per client.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        ERR_MAX_FORMS_PER_CLIENT = 15,

        /**
         * The total number of added temp forms exceeds the maximum in system.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        ERR_MAX_SYSTEM_TEMP_FORMS = 16,

        /**
         * The module can not be find in system.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        ERR_FORM_NO_SUCH_MODULE = 17,

        /**
         * The ability can not be find in system.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        ERR_FORM_NO_SUCH_ABILITY = 18,

        /**
         * The dimension is not exist in the form.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        ERR_FORM_NO_SUCH_DIMENSION = 19,

        /**
         * The ability is not installed.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        ERR_FORM_FA_NOT_INSTALLED = 20,

        /**
         * Failed to obtain the RPC object of the Form Manager Service because
         * the service is not started.Please try again after the service is started.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        ERR_SYSTEM_RESPONSES_FAILED = 30,

        /**
         * Failed to obtain the form requested by the client because another form
         * with the same form ID is in use. Forms in use cannot have the same ID.
         * To obtain and display a form that has the same configuration as an in-use
         * form in the same application, you are advised to set the form ID to 0 in
         * the request parameters.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        ERR_FORM_DUPLICATE_ADDED = 31,

        /**
         * The form is being restored. Perform operations on the form only after
         * the restoration is complete.
         *
         * @since 8
         * @syscap SystemCapability.Ability.Form
         */
        ERR_IN_RECOVERY = 36,

        /**
         * Distributed scheduling failed
         *
         * @since 9
         * @syscap SystemCapability.Ability.Form
         * @systemapi hide for inner use.
         */
        ERR_DISTRIBUTED_SCHEDULE_FAILED = 37
    }
}
export default formError;