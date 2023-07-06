/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * Provides the path drawing interface.
 *
 * @interface PathInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Provides the path drawing interface.
 *
 * @interface PathInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @form
 */
/**
 * Provides the path drawing interface.
 *
 * @interface PathInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @form
 */
interface PathInterface {
  /**
   * Use new to create Path.
   * @since 7
   */
  /**
   * Use new to create Path.
   * @form
   * @since 9
   */
  /**
   * Use new to create Path.
   * @form
   * @crossplatform
   * @since 10
   */
  new (value?: { width?: number | string; height?: number | string; commands?: string }): PathAttribute;

  /**
   * Called when drawing path.
   *
   * @param { ?({ width?: number | string; height?: number | string; commands?: string }) } value
   * @returns { PathAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when drawing path.
   *
   * @param { ?({ width?: number | string; height?: number | string; commands?: string }) } value
   * @returns { PathAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Called when drawing path.
   *
   * @param { ?({ width?: number | string; height?: number | string; commands?: string }) } value
   * @returns { PathAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  (value?: { width?: number | string; height?: number | string; commands?: string }): PathAttribute;
}

/**
 * Provides methods for attribute path component.
 *
 * @extends CommonShapeMethod
 * @since 7
 */
/**
 * Provides methods for attribute path component.
 *
 * @extends CommonShapeMethod
 * @since 9
 * @form
 */
/**
 * Provides methods for attribute path component.
 *
 * @extends CommonShapeMethod
 * @crossplatform
 * @since 10
 * @form
 */
declare class PathAttribute extends CommonShapeMethod<PathAttribute> {
  /**
   * Called when the command string drawn by the path is set.
   *
   * @param { string } value
   * @returns { PathAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7
   */
  /**
   * Called when the command string drawn by the path is set.
   *
   * @param { string } value
   * @returns { PathAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 9
   * @form
   */
  /**
   * Called when the command string drawn by the path is set.
   *
   * @param { string } value
   * @returns { PathAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   * @form
   */
  commands(value: string): PathAttribute;
}

/**
 * Defines Path Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines Path Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @form
 */
/**
 * Defines Path Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @form
 */
declare const Path: PathInterface;

/**
 * Defines Path Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines Path Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @form
 */
/**
 * Defines Path Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @form
 */
declare const PathInstance: PathAttribute;
