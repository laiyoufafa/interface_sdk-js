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

/**
 * Defines delete text direction.
 * @enum {number}
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare enum RichEditorDeleteDirection {
  /**
   * Delete backward.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  BACKWARD,

  /**
   * Delete forward.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  FORWARD,
}

/**
 * Defines the span position.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface RichEditorSpanPosition {
  /**
   * Define the index of span.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  spanIndex: number;

  /**
   * The range of span.
   * @type { [number, number] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  spanRange: [number, number];
}

/**
 * Defines the span text style.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface RichEditorTextStyle {
  /**
   * font color.
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  fontColor?: ResourceColor;

  /**
   * font size.
   * @type { ?(Length | number) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  fontSize?: Length | number;

  /**
   * font style.
   * @type { ?FontStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  fontStyle?: FontStyle;

  /**
   * font weight.
   * @type { ?(number | FontWeight | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  fontWeight?: number | FontWeight | string;

  /**
   * font family.
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  fontFamily?: ResourceStr;

  /**
   * font decoration.
   * @type { ?( type: TextDecorationType; color ?: ResourceColor; ) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  decoration?: { type: TextDecorationType; color?: ResourceColor; };
}

/**
 * Defines the text span.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface RichEditorTextSpan {
  /**
   * The position of the text span.
   * @type { RichEditorSpanPosition }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  spanPosition: RichEditorSpanPosition;

  /**
   * The content of the text span.
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  value: string;

  /**
   * text style.
   * @type { ?RichEditorTextStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  textStyle?: RichEditorTextStyle;
}

/**
 * Defines the span image style.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface RichEditorImageSpanStyle {
  /**
   * image size.
   * @type { ?[Dimension; Dimension;] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  size?: [Dimension, Dimension];

  /**
   * image vertical align.
   * @type { ?ImageSpanAlignment }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  verticalAlign?: ImageSpanAlignment;

  /**
   * image fit.
   * @type { ?ImageFit }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  objectFit?: ImageFit;
}

/**
 * Defines the text style result.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface RichEditorTextStyleResult {
  /**
   * font color.
   * @type { ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  fontColor: ResourceColor;

  /**
   * font size.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  fontSize: number;

  /**
   * font style.
   * @type { FontStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  fontStyle: FontStyle;

  /**
   * font weight.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  fontWeight: number;

  /**
   * font family.
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  fontFamily: string;

  /**
   * font decoration.
   * @type { { type: TextDecorationType; color: ResourceColor; } }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  decoration: { type: TextDecorationType; color: ResourceColor; };
}

/**
 * Defines the text span result.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface RichEditorTextSpanResult {
  /**
   * The position of the text span.
   * @type { RichEditorSpanPosition }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  spanPosition: RichEditorSpanPosition;

  /**
   * The content of the text span.
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  value: string;

  /**
   * text style.
   * @type { RichEditorTextStyleResult }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  textStyle: RichEditorTextStyleResult;

  /**
   * get offset in span.
   * @type { [number, number] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  offsetInSpan: [number, number];
}

/**
 * Defines the span image style result.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface RichEditorImageSpanStyleResult {
  /**
   * image size.
   * @type { [number, number] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  size: [number, number];

  /**
   * image vertical align.
   * @type { ImageSpanAlignment }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  verticalAlign: ImageSpanAlignment;

  /**
   * image fit.
   * @type { ImageFit }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  objectFit: ImageFit;
}

/**
 * Defines the image span.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface RichEditorImageSpanResult {
  /**
   * The position of the image span.
   * @type { RichEditorSpanPosition }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  spanPosition: RichEditorSpanPosition;

  /**
   * The pixel map of the image span.
   * @type { ?PixelMap }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  valuePixelMap?: PixelMap;

  /**
   * The resource string of the image span.
   * @type { ?ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  valueResourceStr?: ResourceStr;

  /**
   * image attribute.
   * @type { RichEditorImageSpanStyleResult }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  imageStyle: RichEditorImageSpanStyleResult;

  /**
   * get offset in span.
   * @type { [number, number] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  offsetInSpan: [number, number];
}

/**
 * Defines the image span.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface RichEditorImageSpan {
  /**
   * The position of the image span.
   * @type { RichEditorSpanPosition }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  spanPosition: RichEditorSpanPosition;

  /**
   * The content of the image span.
   * @type { PixelMap | ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  value: PixelMap | ResourceStr;

  /**
   * image style.
   * @type { ?RichEditorImageSpanStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  imageStyle?: RichEditorImageSpanStyle;
}

/**
 * Defines range of RichEditor.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface RichEditorRange {
  /**
   * start offset.
   * @type { ?number }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  start?: number;

  /**
   * end offset.
   * @type { ?number }
   * @default text length
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  end?: number;
}

/**
 * Defines the span options of RichEditor.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface RichEditorTextSpanOptions {
  /**
   * the offset that add a text span at.
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  offset?: number;

  /**
   * text style.
   * @type { ?RichEditorTextStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  style?: RichEditorTextStyle;
}

/**
 * Defines the image span options of RichEditor.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface RichEditorImageSpanOptions {
  /**
   * the offset that add image span at.
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  offset?: number;

  /**
   * image style.
   * @type { ?RichEditorImageSpanStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  imageStyle?: RichEditorImageSpanStyle;
}

/**
 * Defines span style option of RichEditor.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface RichEditorSpanStyleOptions extends RichEditorRange {}

/**
 * Defines text span style option of RichEditor.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface RichEditorUpdateTextSpanStyleOptions extends RichEditorSpanStyleOptions {

  /**
   * text style.
   * @type { RichEditorTextStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  textStyle: RichEditorTextStyle;
}

/**
 * Defines image span style option of RichEditor.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface RichEditorUpdateImageSpanStyleOptions extends RichEditorSpanStyleOptions {
  /**
   * image style.
   * @type { RichEditorImageSpanStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  imageStyle: RichEditorImageSpanStyle;
}

/**
 * Defines the text information for editing.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface RichEditorSelection {
  /**
   * The location info.
   * @type { [number, number] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  selection: [number, number];

  /**
   * The selected text content.
   * @type { Array<RichEditorTextSpanResult | RichEditorImageSpanResult> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  spans: Array<RichEditorTextSpanResult | RichEditorImageSpanResult>;
}

/**
 * Defines the inserted text value info.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface RichEditorInsertValue {
  /**
   * The location info where the value will be inserted.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  insertOffset: number;

  /**
   * The inserted value.
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  insertValue: string;
}

/**
 * Provides an interface for deleting value from text.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface RichEditorDeleteValue {
  /**
   * The offset of deleting.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  offset: number;

  /**
   * The deleted direction.
   * @type { RichEditorDeleteDirection }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  direction: RichEditorDeleteDirection;

  /**
   * The deleted text length.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  length: number;

  /**
   * The deleted span object.
   * @type { Array<RichEditorTextSpanResult | RichEditorImageSpanResult> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  richEditorDeleteSpans: Array<RichEditorTextSpanResult | RichEditorImageSpanResult>;
}
/**
 * Defines the options of RichEditor.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare interface RichEditorOptions {
  /**
   * RichEditor controller.
   * @type { RichEditorController }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  controller: RichEditorController;
}
declare class RichEditorController {
  /**
   * Get caret offset from controller.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @returns { number }
   * @since 10
   */
  getCaretOffset(): number;

  /**
   * Set caret offset.
   * @param { number } offset - caret offset.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @returns { boolean }
   * @since 10
   */
  setCaretOffset(offset: number): boolean;

  /**
   * Add a text span.
   * @param { string } value - text value.
   * @param { RichEditorTextSpanOptions } text span info.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @returns { number } span index
   * @since 10
   */
  addTextSpan(value: string, options?: RichEditorTextSpanOptions): number;

  /**
   * Add a image span.
   * @param { PixelMap| ResourceStr } value - image value.
   * @param { RichEditorImageSpanOptions } image span info.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @returns { number } span index
   * @since 10
   */
  addImageSpan(value: PixelMap | ResourceStr, options?: RichEditorImageSpanOptions): number;

  /**
   * Modify span style.
   * @param { RichEditorUpdateTextSpanStyleOptions | RichEditorUpdateImageSpanStyleOptions } .
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  updateSpanStyle(value: RichEditorUpdateTextSpanStyleOptions | RichEditorUpdateImageSpanStyleOptions): void;

  /**
   * Delete span.
   * @param { ?RichEditorRange } range for deleting.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  deleteSpans(value?: RichEditorRange): void;

  /**
   * Get span content.
   * @param { ?RichEditorRange } range for getting span info.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @returns { Array<RichEditorImageSpanResult | RichEditorTextSpanResult> }
   * @since 10
   */
  getSpans(value?: RichEditorRange): Array<RichEditorImageSpanResult | RichEditorTextSpanResult>;
}

/**
 * Provides attribute for RichEditor.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare class RichEditorAttribute extends CommonMethod<RichEditorAttribute> {
  /**
   * Called when on ready.
   * @param { () => void } The triggered function when rich editor is ready.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @returns { RichEditorAttribute }
   * @since 10
   */
  onReady(callback: () => void): RichEditorAttribute;

  /**
   * Called when the content is selected.
   * @param { (value: RichEditorSelection) => void } The triggered function when select text.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @returns { RichEditorAttribute }
   * @since 10
   */
  onSelect(callback: (value: RichEditorSelection) => void): RichEditorAttribute;

  /**
   * Get text value information when about to input.
   * @param { (value: RichEditorInsertValue) => boolean) } The triggered function when text content is about to insert.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @returns { RichEditorAttribute }
   * @since 10
   */
  aboutToIMEInput(callback: (value: RichEditorInsertValue) => boolean): RichEditorAttribute;

  /**
   * Get text value information when completed input.
   * @param { (value: RichEditorTextSpanResult) => void } The triggered function when text content has been inserted.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @returns { RichEditorAttribute }
   * @since 10
   */
  onIMEInputComplete(callback: (value: RichEditorTextSpanResult) => void): RichEditorAttribute;

  /**
   * Get text value information when about to delete.
   * @param { (value: RichEditorDeleteValue) => boolean } The triggered function when text content is about to delete.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @returns { RichEditorAttribute }
   * @since 10
   */
  aboutToDelete(callback: (value: RichEditorDeleteValue) => boolean): RichEditorAttribute;

  /**
   * Notify that the deletion has been completed 
   * @param { () => void } The triggered function when text content has been deleted.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @returns { RichEditorAttribute }
   * @since 10
   */
  onDeleteComplete(callback: () => void): RichEditorAttribute;
}

/**
 * Provides an interface for writing texts.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
interface RichEditorInterface {
  /**
   * Called when create RichEditor.
   * @type { RichEditorOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 10
   */
  (value: RichEditorOptions): RichEditorAttribute;
}

/**
 * Defines RichEditor Component instance.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare const RichEditorInstance: RichEditorAttribute;

/**
 * Defines RichEditor Component.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
declare const RichEditor: RichEditorInterface;