/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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

/**
 * the constant for action and entity in the want
 * @namespace wantConstant
 * @syscap SystemCapability.Ability.AbilityBase
 * @since 9
 */
declare namespace wantConstant {
  /**
   * the constant for action of the want
   * @enum { string }
   * @syscap SystemCapability.Ability.AbilityBase
   * @since 9
   */
  export enum Action {
    /**
     * Indicates the action of backing home.
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    ACTION_HOME = "ohos.want.action.home",

    /**
     * Indicates the action of starting a Page ability that displays a keypad.
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    ACTION_DIAL = "ohos.want.action.dial",

    /**
     * Indicates the action of starting a Page ability for search.
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    ACTION_SEARCH = "ohos.want.action.search",

    /**
     * Indicates the action of starting a Page ability that provides wireless network settings, for example,
     * Wi-Fi options.
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    ACTION_WIRELESS_SETTINGS = "ohos.settings.wireless",

    /**
     * Indicates the action of starting a Page ability that manages installed applications.
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    ACTION_MANAGE_APPLICATIONS_SETTINGS = "ohos.settings.manage.applications",

    /**
     * Indicates the action of starting a Page ability that displays details of a specified application.
     *
     * <p>You must specify the application bundle name in the {@code package} attribute of the {@code Intent}
     * containing this action.
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    ACTION_APPLICATION_DETAILS_SETTINGS = "ohos.settings.application.details",

    /**
     * Indicates the action of starting a Page ability for setting an alarm clock.
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    ACTION_SET_ALARM = "ohos.want.action.setAlarm",

    /**
     * Indicates the action of starting a Page ability that displays all alarm
     * clocks.
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    ACTION_SHOW_ALARMS = "ohos.want.action.showAlarms",

    /**
     * Indicates the action of starting a Page ability for snoozing an alarm clock.
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    ACTION_SNOOZE_ALARM = "ohos.want.action.snoozeAlarm",

    /**
     * Indicates the action of starting a Page ability for deleting an alarm clock.
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    ACTION_DISMISS_ALARM = "ohos.want.action.dismissAlarm",

    /**
     * Indicates the action of starting a Page ability for dismissing a timer.
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    ACTION_DISMISS_TIMER = "ohos.want.action.dismissTimer",

    /**
     * Indicates the action of starting a Page ability for sending a sms.
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    ACTION_SEND_SMS = "ohos.want.action.sendSms",

    /**
     * Indicates the action of starting a Page ability for opening contacts or pictures.
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    ACTION_CHOOSE = "ohos.want.action.choose",

    /**
     * Indicates the action of starting a Page ability for take a picture.
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    ACTION_IMAGE_CAPTURE = "ohos.want.action.imageCapture",

    /**
     * Indicates the action of starting a Page ability for Take a video.
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    ACTION_VIDEO_CAPTURE = "ohos.want.action.videoCapture",

    /**
     * Indicates the action of showing the application selection dialog box.
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    ACTION_SELECT = "ohos.want.action.select",

    /**
     * Indicates the action of sending a single data record.
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    ACTION_SEND_DATA = "ohos.want.action.sendData",

    /**
     * Indicates the action of sending multiple data records.
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    ACTION_SEND_MULTIPLE_DATA = "ohos.want.action.sendMultipleData",

    /**
     * Indicates the action of requesting the media scanner to scan files and adding the files to the media library.
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    ACTION_SCAN_MEDIA_FILE = "ohos.want.action.scanMediaFile",

    /**
     * Indicates the action of viewing data.
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    ACTION_VIEW_DATA = "ohos.want.action.viewData",

    /**
     * Indicates the action of editing data.
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    ACTION_EDIT_DATA = "ohos.want.action.editData",

    /**
     * Indicates the choices you will show with {@link #ACTION_PICKER}.
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    INTENT_PARAMS_INTENT = "ability.want.params.INTENT",

    /**
     * Indicates the CharSequence dialog title when used with a {@link #ACTION_PICKER}.
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    INTENT_PARAMS_TITLE = "ability.want.params.TITLE",

    /**
     * Indicates the action of select file.
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    ACTION_FILE_SELECT = "ohos.action.fileSelect",

    /**
     * Indicates the URI holding a stream of data associated with the Intent when used with a {@link #ACTION_SEND_DATA}.
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    PARAMS_STREAM = "ability.params.stream",

    /**
     * Indicates the action of providing the application account auth service.
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    ACTION_APP_ACCOUNT_AUTH = "ohos.appAccount.action.auth",

    /**
     * Indicates the action of an application downloaded from the application market.
     * @syscap SystemCapability.Ability.AbilityBase
     * @systemapi
     * @since 9
     */
    ACTION_MARKET_DOWNLOAD = "ohos.want.action.marketDownload",

    /**
     * Indicates the action of an application crowdtested from the application market.
     * @syscap SystemCapability.Ability.AbilityBase
     * @systemapi
     * @since 9
     */
    ACTION_MARKET_CROWDTEST = "ohos.want.action.marketCrowdTest",

    /**
     * Indicates the param of sandbox flag.
     * @syscap SystemCapability.Ability.AbilityBase
     * @systemapi
     * @since 9
     */
    DLP_PARAMS_SANDBOX = "ohos.dlp.params.sandbox",

    /**
     * Indicates the param of dlp bundle name.
     * @syscap SystemCapability.Ability.AbilityBase
     * @systemapi
     * @since 9
     */
    DLP_PARAMS_BUNDLE_NAME = "ohos.dlp.params.bundleName",

    /**
     * Indicates the param of dlp module name.
     * @syscap SystemCapability.Ability.AbilityBase
     * @systemapi
     * @since 9
     */
    DLP_PARAMS_MODULE_NAME = "ohos.dlp.params.moduleName",

    /**
     * Indicates the param of dlp ability name.
     * @syscap SystemCapability.Ability.AbilityBase
     * @systemapi
     * @since 9
     */
    DLP_PARAMS_ABILITY_NAME = "ohos.dlp.params.abilityName",

    /**
     * Indicates the param of dlp bundle index.
     * @syscap SystemCapability.Ability.AbilityBase
     * @systemapi
     * @since 9
     */
    DLP_PARAMS_INDEX = "ohos.dlp.params.index"
  }

  /**
   * the constant for Entity of the want
   * @enum { string }
   * @name Entity
   * @syscap SystemCapability.Ability.AbilityBase
   * @since 9
   */
  export enum Entity {
    /**
     * Indicates the default entity, which is used if the entity is not specified.
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    ENTITY_DEFAULT = "entity.system.default",

    /**
     * Indicates the home screen entity.
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    ENTITY_HOME = "entity.system.home",

    /**
     * Indicates the voice interaction entity.
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    ENTITY_VOICE = "entity.system.voice",

    /**
     * Indicates the browser category.
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    ENTITY_BROWSABLE = "entity.system.browsable",

    /**
     * Indicates the video category.
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    ENTITY_VIDEO = "entity.system.video"
  }

  export enum Flags {
    /**
     * Indicates the grant to perform read operations on the URI.
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    FLAG_AUTH_READ_URI_PERMISSION = 0x00000001,

    /**
     * Indicates the grant to perform write operations on the URI.
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    FLAG_AUTH_WRITE_URI_PERMISSION = 0x00000002,

    /**
     * Install the specified ability if it's not installed.
     * @syscap SystemCapability.Ability.AbilityBase
     * @since 9
     */
    FLAG_INSTALL_ON_DEMAND = 0x00000800,
  }
}

export default wantConstant;
