/*
* Copyright (c) 2021 Huawei Device Co., Ltd.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
import { AsyncCallback, Callback } from './basic' ;
import { Context } from  './app/context';
import { ContenStorage } from './@internal/component/ets/stateManagement'
/**
 * Window manager.
 * @syscap SystemCapability.WindowManager.WindowManager.Core
*/
declare namespace window {
  /**
   * The type of a window.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   */
  enum WindowType {
    /**
     * App.
     */
    TYPE_APP,
    /**
     * System alert.
     */
    TYPE_SYSTEM_ALERT
  }

  /**
   * Describes the type of avoid area
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 7
   */
  enum AvoidAreaType {
    /**
     * Default area of the system
     */
    TYPE_SYSTEM,

    /**
     * Notch
     */
    TYPE_CUTOUT
  }
  /**
   * Describes the window mode of an application
   * @systemapi Hide this for inner system use.
   * @since 7
   */
  enum WindowMode {
    UNDEFINED = 1,
    FULLSCREEN,
    PRIMARY,
    SECONDARY,
    FLOATING
  }

  /**
   * Create a system window with a specific id and type.
   * @param ctx Indicates the context on which the window depends
   * @param id Indicates window id.
   * @param type Indicates window type.
   * @systemapi Hide this for inner system use.
   * @since 8
   */
  function create(ctx: Context, id: string, type: WindowType): Promise<Window>;

  /**
   * Find the window by id.
   * @param id Indicates window id.
   * @since 7
   */
  function find(id: string, callback: AsyncCallback<Window>): void;

  /**
   * Find the window by id.
   * @param id Indicates window id.
   * @since 7
   */
  function find(id: string): Promise<Window>;

  /**
   * Get the final show window.
   * @param id Indicates window id.
   * @since 6
   */
  function getTopWindow(callback: AsyncCallback<Window>): void;

  /**
   * Get the final show window.
   * @since 6
   */
  function getTopWindow(): Promise<Window>;

  /**
   * Get the final show window.
   * @param ctx Indicates the context on which the window depends
   * @since 8
   */
  function getTopWindow(ctx: Context): Promise<Window>;

  /**
   * Get the final show window.
   * @param ctx Indicates the context on which the window depends
   * @since 8
   */
  function getTopWindow(ctx: Context, callback: AsyncCallback<Window>): void;

  /**
   * register the callback of systemBarTintChange
   * @param type: 'systemBarTintChange'
   * @systemapi Hide this for inner system use.
   * @since 8
   */
  function on(type: 'systemBarTintChange', callback: Callback<SystemBarTintState>): void;

  /**
  * unregister the callback of systemBarTintChange
  * @param type: 'systemBarTintChange'
  * @systemapi Hide this for inner system use.
  * @since 8
  */
  function off(type: 'systemBarTintChange', callback?: Callback<SystemBarTintState>): void;

  /**
   * Properties of status bar and navigation bar, it couldn't update automatically
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 6
   */
  interface SystemBarProperties {
    /**
     * the color of the status bar.
     * @since 6
     */
    statusBarColor?: string;

    /**
     * the light icon of the status bar.
     * @since 7
     */
    isStatusBarLightIcon?: boolean;

    /**
     * the content color of the status bar
     * @since 8
     */
    statusBarContentColor?: string;

    /**
     * the color of the navigation bar.
     * @since 6
     */
    navigationBarColor?: string;

    /**
     * the light icon of the navigation bar.
     * @since 7
     */
    isNavigationBarLightIcon?: boolean;

    /**
     * the content color of the navigation bar
     * @since 8
     */
     navigationBarContentColor?: string;
  }

  /**
   * system bar tint of region
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 8
   */
  interface SystemBarRegionTint {
    /**
     * system bar type
     */
    type: WindowType;

    /**
     * the visibility of system bar
     */
    isEnable?: boolean;

    /**
     * the region of system bar
     */
    region?: Rect;

    /**
     * the background color of the system bar.
     */
    backgroundColor?: string;

    /**
     * the content color of the system bar.
     */
    contentColor?: string
  }

  /**
   * system bar tint state for systemui
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 8
   */
  interface SystemBarTintState {
    /**
     * id of display
     */
    displayId: number;
    /**
     * region tint of systembar
     */
    regionTint: Array<SystemBarRegionTint>;
  }

  /**
   * Rectangle
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 7
   */
  interface Rect {
    left: number;

    top: number;

    width: number;

    height: number;
  }

  /**
   * avoid area
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 7
   */
  interface AvoidArea {
    /**
     * Rectangle on the left of the screen
     */
    leftRect: Rect;

    /**
     * Rectangle on the top of the screen
     */
    topRect: Rect;

    /**
     * Rectangle on the right of the screen
     */
    rightRect: Rect;

    /**
     * Rectangle on the bottom of the screen
     */
    bottomRect: Rect;
  }

  /**
   * window size
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 7
   */
  interface Size {
    /**
     * the width of the window.
     */
    width: number;

    /**
     * the height of the window.
     */
    height: number;
  }

  /**
   * Properties of window, it couldn't update automatically
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 6
   */
  interface WindowProperties {
    /**
     * the position and size of the window
     * @since 7
     */
    windowRect: Rect;

    /**
     * window type
     * @since 7
     */
    type: WindowType;

    /**
     * Whether the window is displayed in full screen mode. The default value is false.
     * @since 6
     */
    isFullScreen: boolean

    /**
     * Whether the window layout is in full screen mode(whether the window is immersive). The default value is false.
     * @since 6
     */
    isLayoutFullScreen: boolean

    /**
     * Whether the window can gain focus. The default value is true
     * @since 7
     */
    focusable: boolean

    /**
     * Whether the window is touchable. The default value is false
     * @since 6
     */
    isFullScreen: boolean
  }

  interface Window {
    /**
     * hide sub window.
     * @systemapi Hide this for inner system use.
     * @since 7
     */
    hide (callback: AsyncCallback<void>): void;

    /**
      * hide sub window.
      * @systemapi Hide this for inner system use.
      * @since 7
      */
    hide(): Promise<void>;

    /**
      * show sub window.
      * @since 7
      */
    show(callback: AsyncCallback<void>): void;

    /**
      * show sub window.
      * @since 7
      */
    show(): Promise<void>;

    /**
     * Destroy the sub window.
     * @since 7
     */
    destroy(callback: AsyncCallback<void>): void;

    /**
      * Destroy the sub window.
      * @since 7
      */
    destroy(): Promise<void>;

    /**
     * Set the position of a window.
     * @param x Indicate the X-coordinate of the window.
     * @param y Indicate the Y-coordinate of the window.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    moveTo(x: number, y: number): Promise<void>;

    /**
     * Set the position of a window.
     * @param x Indicate the X-coordinate of the window.
     * @param y Indicate the Y-coordinate of the window.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    moveTo(x: number, y: number, callback: AsyncCallback<void>): void;

    /**
     * Set the size of a window .
     * @param width Indicates the width of the window.
     * @param height Indicates the height of the window.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    resetSize(width: number, height: number): Promise<void>;

    /**
     * Set the size of a window .
     * @param width Indicates the width of the window.
     * @param height Indicates the height of the window.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    resetSize(width: number, height: number, callback: AsyncCallback<void>): void;

    /**
     * Set the type of a window.
     * @param windowType Indicate the type of a window.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 7
     */
    setWindowType(windowType: WindowType): Promise<void>;

    /**
     * Set the type of a window.
     * @param windowType Indicate the type of a window.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 7
     */
    setWindowType(windowType: WindowType, callback: AsyncCallback<void>): void;

    /**
     * get the properties of current window
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6
     */
    getProperties(callback: AsyncCallback<WindowProperties>): void;

     /**
      * get the properties of current window
      * @syscap SystemCapability.WindowManager.WindowManager.Core
      * @since 6
      */
    getProperties(): Promise<WindowProperties>;

    /**
     * get the avoid area
     * @param type Type of the area
     * @since 7
     */
    getAvoidArea(type: AvoidAreaType, callback: AsyncCallback<AvoidArea>): void;

    /**
     * get the avoid area
     * @param type Type of the area
     * @since 7
     */
    getAvoidArea(type: AvoidAreaType): Promise<AvoidArea>;

    /**
     * set the flag of the window is shown full screen
     * @param isFullScreen the flag of the window is shown full screen
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6
     */
    setFullScreen(isFullScreen: boolean, callback: AsyncCallback<void>): void;

    /**
     * set the flag of the window is shown full screen
     * @param isFullScreen the flag of the window is shown full screen
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6
     */
    setFullScreen(isFullScreen: boolean): Promise<void>;

    /**
     * set the property of the window can layout in full screen
     * @param isLayoutFullScreen the window can layout in full screen
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    setLayoutFullScreen(isLayoutFullScreen: boolean, callback: AsyncCallback<void>): void;

    /**
     * set the property of the window can layout in full screen
     * @param isLayoutFullScreen the window can layout in full screen
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    setLayoutFullScreen(isLayoutFullScreen: boolean): Promise<void>;

    /**
     * set the system bar to have visible.
     * @param names the set of system bar
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    setSystemBarEnable(names: Array<'status'|'navigation'>, callback: AsyncCallback<void>): void;

    /**
     * set the system bar to have visible.
     * @param names the set of system bar
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    setSystemBarEnable(names: Array<'status'|'navigation'>): Promise<void>;

    /**
     * set the background color of statusbar
     * @param color the background color of statusbar
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6
     */
    setSystemBarProperties(systemBarProperties: SystemBarProperties, callback: AsyncCallback<void>): void;

    /**
     * set the background color of statusbar
     * @param color the background color of statusbar
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6
     */
    setSystemBarProperties(systemBarProperties: SystemBarProperties): Promise<void>;

    /**
     * Loads content
     * @param path  path Path of the page to which the content will be loaded
     * @param storage storage The data object shared within the content instance loaded by the window
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 8
     */
    loadContent(path: string, storage: ContenStorage, callback: AsyncCallback<void>): void;

    /**
     * Loads content
     * @param path path of the page to which the content will be loaded
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    loadContent(path: string, callback: AsyncCallback<void>): void;

    /**
     * Loads content
     * @param path path of the page to which the content will be loaded
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    loadContent(path: string, storage?: ContenStorage): Promise<void>;

    /**
     * Checks whether the window is displayed
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    isShowing(callback: AsyncCallback<void>): void;

    /**
     * Checks whether the window is displayed
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    isShowing(): Promise<boolean>;

    /**
     * register the callback of windowSizeChange
     * @param type: 'windowSizeChange'
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    on(type: 'windowSizeChange', callback: Callback<Size>): void;

    /**
     * unregister the callback of windowSizeChange
     * @param type: 'windowSizeChange'
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    off(type: 'windowSizeChange', callback?: Callback<Size>): void;

    /**
     * register the callback of systemAvoidAreaChange
     * @param type: 'systemAvoidAreaChange'
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    on(type: 'systemAvoidAreaChange', callback: Callback<AvoidArea>): void;

    /**
     * unregister the callback of systemAvoidAreaChange
     * @param type: 'systemAvoidAreaChange'
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7
     */
    off(type: 'systemAvoidAreaChange', callback?: Callback<AvoidArea>): void;
  }

  enum WindowStageEventType {
    FOREGROUND = 1,
    ACTIVE,
    INACTIVE,
    BACKGROUND,
  }
  /**
   * WindowStage
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   */
  interface WindowStage {
    /**
     * Get main window of the stage.
     * @since 8
     */
    getMainWindow(): Promise<Window>;
    /**
     * Get main window of the stage.
     * @since 8
     */
    getMainWindow(callback: AsyncCallback<Window>): void;
    /**
     * Create sub window of the stage.
     * @param name window name of sub window
     * @since 8
     */
    createSubWindow(name: string): Promise<Window>;
    /**
     * Create sub window of the stage.
     * @param name window name of sub window
     * @since 8
     */
    createSubWindow(name: string, callback: AsyncCallback<Window>): void;
    /**
     * Get sub window of the stage.
     * @since 8
     */
    getSubWindow(): Promise<Array<Window>>;
    /**
     * Get sub window of the stage.
     * @since 8
     */
    getSubWindow(callback: AsyncCallback<Array<Window>>): void;
    /**
     * Loads content
     * @param path  path Path of the page to which the content will be loaded
     * @param storage storage The data object shared within the content instance loaded by the window
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 8
     */
    loadContent(path: string, storage: ContenStorage, callback: AsyncCallback<void>): void;
    /**
     * Loads content
     * @param path path of the page to which the content will be loaded
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 8
     */
    loadContent(path: string, callback: AsyncCallback<void>): void;
    /**
     * Loads content
     * @param path path of the page to which the content will be loaded
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 8
     */
    loadContent(path: string, storage?: ContenStorage): Promise<void>;
    /**
     * window stage event callback on.
     * @since 8
     */
    on(eventType: 'windowStageEvent', callback: Callback<WindowStageEventType>): void;
    /**
     * window stage event callback off.
     * @since 8
     */
    off(eventType: 'windowStageEvent', callback?: Callback<WindowStageEventType>): void;
  }
}

export default window;
