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
 * Declare the type of status button
 * @since 8
 */
/**
 * Declare the type of status button
 * @form
 * @since 9
 */
declare enum ToggleType {
  /**
   * Checkbox
   * @since 8
   */
  /**
   * Checkbox
   * @form
   * @since 9
   */
  Checkbox,

  /**
   * Switch
   * @since 8
   */
  /**
   * Switch
   * @form
   * @since 9
   */
  Switch,

  /**
   * Button
   * @since 8
   */
  /**
   * Button
   * @form
   * @since 9
   */
  Button,
}

/**
 * Defines the toggle interface.
 * @since 8
 */
/**
 * Defines the toggle interface.
 * @form
 * @since 9
 */
interface ToggleInterface {
  /**
   * Set parameters to obtain the toggle.
   * @since 8
   */
  /**
   * Set parameters to obtain the toggle.
   * @form
   * @since 9
   */
  (options: { type: ToggleType; isOn?: boolean }): ToggleAttribute;
}

/**
 * Defines the toggle attribute functions
 * @since 8
 */
/**
 * Defines the toggle attribute functions
 * @form
 * @since 9
 */
declare class ToggleAttribute extends CommonMethod<ToggleAttribute> {
  /**
   * Called when the selected state of the component changes.
   * @since 8
   */
  /**
   * Called when the selected state of the component changes.
   * @form
   * @since 9
   */
  onChange(callback: (isOn: boolean) => void): ToggleAttribute;

  /**
   * Called when the color of the selected button is set.
   * @since 8
   */
  /**
   * Called when the color of the selected button is set.
   * @form
   * @since 9
   */
  selectedColor(value: ResourceColor): ToggleAttribute;

  /**
   * Called when the color of the selected button is set.
   * @since 8
   */
  /**
   * Called when the color of the selected button is set.
   * @form
   * @since 9
   */
  switchPointColor(color: ResourceColor): ToggleAttribute;
}

declare const Toggle: ToggleInterface;
declare const ToggleInstance: ToggleAttribute;
