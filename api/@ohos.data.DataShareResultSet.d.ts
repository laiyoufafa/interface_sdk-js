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
 * Indicates the {@code DataType}.
 *
 * <p>{@code DataType} is obtained based on the value.
 *
 * @since 9
 * @syscap SystemCapability.DistributedDataManager.DataShare.Core
 * @systemapi
 * @StageModelOnly
 */
export enum DataType {
    /**
     * Indicates that the data type is null.
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @StageModelOnly
     */
    TYPE_NULL = 0,

    /**
     * Indicates that the data type is long.
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @StageModelOnly
     */
    TYPE_LONG = 1,

    /**
     * Indicates that the data type is double.
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @StageModelOnly
     */
    TYPE_DOUBLE = 2,

    /**
     * Indicates that the data type is byte string.
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @StageModelOnly
     * */
    TYPE_STRING = 3,

    /**
     * Indicates that the data type is blob.
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @StageModelOnly
     * */
    TYPE_BLOB = 4
}

/**
 * Provides methods for accessing a datashare result set generated by querying the database.
 *
 * @since 9
 * @syscap SystemCapability.DistributedDataManager.DataShare.Core
 * @systemapi
 * @StageModelOnly
 */
export default interface DataShareResultSet {
    /**
     * Obtains the names of all columns or keys in a result set.
     * The column or key names are returned as a string array, in which the strings are in the same order
     * as the columns or keys in the result set.
     *
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @StageModelOnly
     */
    columnNames: Array<string>;

    /**
     * Obtains the number of columns or keys in the result set.
     * The returned number is equal to the length of the string array returned by the columnCount method.
     *
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @StageModelOnly
     */
    columnCount: number;

    /**
     * Obtains the number of rows in the result set.
     *
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @StageModelOnly
     */
    rowCount: number;

    /**
     * Checks whether the current result set is closed.
     *
     * If the result set is closed by calling the close method, true will be returned.
     *
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @StageModelOnly
     */
    isClosed: boolean;

    /**
     * Go to the first row of the result set.
     *
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @StageModelOnly
     * @returns Returns true if the result set is moved successfully;
     * returns false otherwise, for example, if the result set is empty.
     */
    goToFirstRow(): boolean;

    /**
     * Go to the last row of the result set.
     *
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @StageModelOnly
     * @returns Returns true if the result set is moved successfully;
     * returns false otherwise, for example, if the result set is empty.
     */
    goToLastRow(): boolean;

    /**
     * Go to the next row of the result set.
     *
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @StageModelOnly
     * @returns Returns true if the result set is moved successfully;
     * returns false otherwise, for example, if the result set is already in the last row.
     */
    goToNextRow(): boolean;

    /**
     * Go to the previous row of the result set.
     *
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @StageModelOnly
     * @returns Returns true if the result set is moved successfully;
     * returns false otherwise, for example, if the result set is already in the first row.
     */
    goToPreviousRow(): boolean;

    /**
     * Go to the specified row of the result set forwards or backwards by an offset relative to its current position.
     * A positive offset indicates moving backwards, and a negative offset indicates moving forwards.
     *
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @StageModelOnly
     * @param offset Indicates the offset relative to the current position.
     * @returns Returns true if the result set is moved successfully and does not go beyond the range;
     * returns false otherwise.
     */
    goTo(offset: number): boolean;

    /**
     * Go to the specified row of the result set.
     *
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @StageModelOnly
     * @param position Indicates the index of the specified row, which starts from 1.
     * @returns Returns true if the result set is moved successfully; returns false otherwise.
     */
    goToRow(position: number): boolean;

    /**
     * Obtains the value of the specified column or key in the current row as a byte array.
     * The implementation class determines whether to throw an exception if the value of the specified
     *
     * column or key in the current row is null or the specified column or key is not of the Blob type.
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @StageModelOnly
     * @param columnIndex Indicates the specified column index or key index, which starts from 0.
     * @returns Returns the value of the specified column or key as a byte array.
     */
    getBlob(columnIndex: number): Uint8Array;

    /**
     * Obtains the value of the specified column or key in the current row as string.
     * The implementation class determines whether to throw an exception if the value of the specified
     *
     * column or key in the current row is null or the specified column or key is not of the string type.
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @StageModelOnly
     * @param columnIndex Indicates the specified column index or key index, which starts from 0.
     * @returns Returns the value of the specified column or key as a string.
     */
    getString(columnIndex: number): string;

    /**
     * Obtains the value of the specified column or key in the current row as long.
     * The implementation class determines whether to throw an exception if the value of the specified
     * column or key in the current row is null, the specified column or key is not of the long type.
     *
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @StageModelOnly
     * @param columnIndex Indicates the specified column index or key index, which starts from 0.
     * @returns Returns the value of the specified column or key as a long.
     */
    getLong(columnIndex: number): number;

    /**
     * Obtains the value of the specified column or key in the current row as double.
     * The implementation class determines whether to throw an exception if the value of the specified
     *
     * column or key in the current row is null, the specified column or key is not of the double type.
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @StageModelOnly
     * @param columnIndex Indicates the specified column index or key index, which starts from 0.
     * @returns Returns the value of the specified column or key as a double.
     */
    getDouble(columnIndex: number): number;

    /**
     * Closes the result set.
     * Calling this method on the result set will release all of its resources and makes it ineffective.
     *
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @StageModelOnly
     * @returns Returns true if the result set is closed; returns false otherwise.
     */
    close(): void;

    /**
     * Obtains the column index or key index based on the specified column name or key name.
     * The column name or key name is passed as an input parameter.
     *
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @StageModelOnly
     * @param columnName Indicates the name of the specified column or key in the result set.
     * @returns Returns the index of the specified column or key.
     */
    getColumnIndex(columnName: string): number;

    /**
     * Obtains the column name or key name based on the specified column index or key index.
     * The column index or key index is passed as an input parameter.
     *
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @StageModelOnly
     * @param columnIndex Indicates the index of the specified column or key in the result set.
     * @returns Returns the name of the specified column or key.
     */
    getColumnName(columnIndex: number): string;

    /**
     * Obtains the dataType of the specified column or key.
     * The implementation class determines whether to throw an exception if the value of the specified
     * column or key in the current row is null, the specified column or key is not in the data type.
     *
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @StageModelOnly
     * @param columnIndex Indicates the specified column index or key index, which starts from 0.
     * @returns Returns the dataType of the specified column or key.
     */
    getDataType(columnIndex: number): DataType;
}