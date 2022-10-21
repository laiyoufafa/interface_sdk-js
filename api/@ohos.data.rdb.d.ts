/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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

import {AsyncCallback, Callback} from './basic';
import { ResultSet as _ResultSet } from './data/rdb/resultSet';
import Context from "./application/BaseContext";
import dataSharePredicates from './@ohos.data.dataSharePredicates';

/**
 * Provides methods for rdbStore create and delete.
 *
 * @since 7
 * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
 * @import import data_rdb from '@ohos.data.rdb';
 */
declare namespace rdb {
    /**
     * Obtains an RDB store.
     *
     * You can set parameters of the RDB store as required. In general, this method is recommended
     * to obtain a rdb store.
     *
     * @since 7
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @param context Indicates the context of application or capability.
     * @param config Indicates the configuration of the database related to this RDB store. The configurations include
     * the database path, storage mode, and whether the database is read-only.
     * @param version Indicates the database version for upgrade or downgrade.
     * @return Returns an RDB store {@link ohos.data.rdb.RdbStore}.
     */
    function getRdbStore(context: Context, config: StoreConfig, version: number, callback: AsyncCallback<RdbStore>): void;
    function getRdbStore(context: Context, config: StoreConfig, version: number): Promise<RdbStore>;

    /**
     * Obtains an RDB store.
     *
     * You can set parameters of the RDB store as required. In general, this method is recommended
     * to obtain a rdb store.
     *
     * @param {Context} context - Indicates the context of application or capability.
     * @param {StoreConfig} config - Indicates the {@link StoreConfig} configuration of the database related to this RDB store.
     * @param {number} version - Indicates the database version for upgrade or downgrade.
     * @param {AsyncCallback<RdbStoreV9>} callback - the RDB store {@link RdbStoreV9}.
     * @throws {BusinessError} 401 - if the parameter type is incorrect.
     * @throws {BusinessError} 14800010 - if failed open database by invalid database name
     * @throws {BusinessError} 14800011 - if failed open database by database corrupted
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    function getRdbStoreV9(context: Context, config: StoreConfigV9, version: number, callback: AsyncCallback<RdbStoreV9>): void;

    /**
     * Obtains an RDB store.
     *
     * You can set parameters of the RDB store as required. In general, this method is recommended
     * to obtain a rdb store.
     *
     * @param {Context} context - Indicates the context of application or capability.
     * @param {StoreConfig} config - Indicates the {@link StoreConfig} configuration of the database related to this RDB store.
     * @param {number} version - Indicates the database version for upgrade or downgrade.
     * @returns {Promise<RdbStoreV9>} the RDB store {@link RdbStoreV9}.
     * @throws {BusinessError} 401 - if the parameter type is incorrect.
     * @throws {BusinessError} 14800010 - if failed open database by invalid database name
     * @throws {BusinessError} 14800011 - if failed open database by database corrupted
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    function getRdbStoreV9(context: Context, config: StoreConfigV9, version: number): Promise<RdbStoreV9>;

    /**
     * Deletes the database with a specified name.
     *
     * @since 7
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @param context Indicates the context of application or capability.
     * @param name Indicates the database name.
     * @return Returns true if the database is deleted; returns false otherwise.
     */
    function deleteRdbStore(context: Context, name: string, callback: AsyncCallback<void>): void;
    function deleteRdbStore(context: Context, name: string): Promise<void>;

    /**
     * Indicates the database synchronization mode.
     *
     * @since 8
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     */
    enum SyncMode {
        /**
         * Indicates the data is pushed to remote device from local device.
         *
         * @since 8
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         */
        SYNC_MODE_PUSH = 0,

        /**
         * Indicates the data is pulled from remote device to local device.
         *
         * @since 8
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         */
        SYNC_MODE_PULL = 1,
    }

    /**
     * Describes the subscription type.
     *
     * @since 8
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     */
    enum SubscribeType {
        /**
         * Subscription to remote data changes
         * @since 8
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         */
        SUBSCRIBE_TYPE_REMOTE = 0,
    }

    /**
     * Describes the {@code RdbStoreV9} type.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    enum SecurityLevel {
        /**
         * S1: mains the db is low level security
         * There are some low impact, when the data is leaked.
         *
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        S1 = 1,

        /**
         * S2: mains the db is middle level security
         * There are some major impact, when the data is leaked.
         *
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        S2 = 2,

        /**
         * S3: mains the db is high level security
         * There are some severity impact, when the data is leaked.
         *
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        S3 = 3,

        /**
         * S4: mains the db is critical level security
         * There are some critical impact, when the data is leaked.
         *
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        S4 = 4,
    }

    /**
     * Provides methods for managing the relational database (RDB).
     *
     * This class provides methods for creating, querying, updating, and deleting RDBs.
     *
     * @since 7
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @import import data_rdb from '@ohos.data.rdb';
     */
    interface RdbStore {
        /**
         * Inserts a row of data into the target table.
         *
         * @since 7
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @param table Indicates the target table.
         * @param values Indicates the row of data to be inserted into the table.
         * @return Returns the row ID if the operation is successful; returns -1 otherwise.
         */
        insert(table: string, values: ValuesBucket, callback: AsyncCallback<number>): void;
        insert(table: string, values: ValuesBucket): Promise<number>;

        /**
         * Inserts a batch of data into the target table.
         *
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @param table Indicates the target table.
         * @param values Indicates the rows of data to be inserted into the table.
         * @return Returns the number of values that were inserted if the operation is successful; returns -1 otherwise.
         */
        batchInsert(table: string, values: Array<ValuesBucket>, callback: AsyncCallback<number>): void;
        batchInsert(table: string, values: Array<ValuesBucket>): Promise<number>;

        /**
         * Updates data in the database based on a a specified instance object of rdbPredicates.
         *
         * @since 7
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @param values Indicates the row of data to be updated in the database.The key-value pairs are associated with column names of the database table.
         * @param predicates Indicates the specified update condition by the instance object of RdbPredicates.
         * @return Returns the number of affected rows.
         */
        update(values: ValuesBucket, predicates: RdbPredicates, callback: AsyncCallback<number>): void;
        update(values: ValuesBucket, predicates: RdbPredicates): Promise<number>;

        /**
         * Updates data in the database based on a a specified instance object of DataSharePredicates.
         *
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @systemapi
         * @param table Indicates the target table.
         * @param values Indicates the row of data to be updated in the database.The key-value pairs are associated with column names of the database table.
         * @param predicates Indicates the specified update condition by the instance object of DataSharePredicates.
         * @return Returns the number of affected rows.
         */
        update(table: string, values: ValuesBucket, predicates: dataSharePredicates.DataSharePredicates, callback: AsyncCallback<number>): void;
        update(table: string, values: ValuesBucket, predicates: dataSharePredicates.DataSharePredicates): Promise<number>;
 
        /**
         * Deletes data from the database based on a specified instance object of rdbPredicates.
         *
         * @since 7
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @param predicates Indicates the specified delete condition by the instance object of RdbPredicates.
         * @return Returns the number of affected rows.
         */
        delete(predicates: RdbPredicates, callback: AsyncCallback<number>): void;
        delete(predicates: RdbPredicates): Promise<number>;

        /**
         * Deletes data from the database based on a specified instance object of DataSharePredicates.
         *
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @systemapi
         * @param table Indicates the target table.
         * @param predicates Indicates the specified delete condition by the instance object of DataSharePredicates.
         * @return Returns the number of affected rows.
         */
        delete(table: string, predicates: dataSharePredicates.DataSharePredicates, callback: AsyncCallback<number>): void;
        delete(table: string, predicates: dataSharePredicates.DataSharePredicates): Promise<number>;

        /**
         * Queries data in the database based on specified conditions.
         *
         * @since 7
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @param predicates Indicates the specified query condition by the instance object of RdbPredicates.
         * @param columns Indicates the columns to query. If the value is null, the query applies to all columns.
         * @return Returns a ResultSet object if the operation is successful;
         */
        query(predicates: RdbPredicates, columns: Array<string>, callback: AsyncCallback<ResultSet>): void;
        query(predicates: RdbPredicates, columns?: Array<string>): Promise<ResultSet>;

        /**
         * Queries data in the database based on specified conditions.
         *
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @systemapi
         * @param table Indicates the target table.
         * @param predicates Indicates the specified query condition by the instance object of DataSharePredicates.
         * @param columns Indicates the columns to query. If the value is null, the query applies to all columns.
         * @return Returns a ResultSet object if the operation is successful;
         */
        query(table: string, predicates: dataSharePredicates.DataSharePredicates, columns: Array<string>, callback: AsyncCallback<ResultSet>): void;
        query(table: string, predicates: dataSharePredicates.DataSharePredicates, columns?: Array<string>): Promise<ResultSet>;
		
		/**
         * Queries remote data in the database based on specified conditions before Synchronizing Data.
         *
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @param device Indicates specified remote device.
         * @param table Indicates the target table.
         * @param predicates Indicates the specified remote query condition by the instance object of RdbPredicates.
         * @param columns Indicates the columns to remote query. If the value is null, the remote query applies to all columns.
         * @return Returns a ResultSet object if the operation is successful;
         */
        remoteQuery(device: string, table: string, predicates: RdbPredicates, columns: Array<string>, callback: AsyncCallback<ResultSet>): void;
        remoteQuery(device: string, table: string, predicates: RdbPredicates, columns: Array<string>): Promise<ResultSet>;


        /**
         * Queries data in the database based on SQL statement.
         *
         * @since 8
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @param sql Indicates the SQL statement to execute.
         * @param bindArgs Indicates the values of the parameters in the SQL statement. The values are strings.
         * @return Returns a ResultSet object if the operation is successful;
         */
        querySql(sql: string, bindArgs: Array<ValueType>, callback: AsyncCallback<ResultSet>): void;
        querySql(sql: string, bindArgs?: Array<ValueType>): Promise<ResultSet>;

        /**
         * Executes an SQL statement that contains specified parameters but returns no value.
         *
         * @since 7
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @param sql Indicates the SQL statement to execute.
         * @param bindArgs Indicates the values of the parameters in the SQL statement. The values are strings.
         */
        executeSql(sql: string, bindArgs: Array<ValueType>, callback: AsyncCallback<void>): void;
        executeSql(sql: string, bindArgs?: Array<ValueType>): Promise<void>;

        /**
         * beginTransaction before excute your sql
         *
         * @since 8
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         */
        beginTransaction():void;

        /**
         * commit the the sql you have executed.
         *
         * @since 8
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         */
        commit():void;

        /**
         * roll back the sql you have already executed
         *
         * @since 8
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         */
        rollBack():void;

        /**
         * Backs up a database in a specified name.
         *
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @param destName Indicates the name that saves the database backup.
         */
        backup(destName:string, callback: AsyncCallback<void>):void;
        backup(destName:string): Promise<void>;

        /**
         * Restores a database from a specified database file.
         *
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @param srcName Indicates the name that saves the database file.
         */
        restore(srcName:string, callback: AsyncCallback<void>):void;
        restore(srcName:string): Promise<void>;

        /**
         * Set table to be distributed table.
         *
         * @since 8
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @param tables the tables name you want to set
         * @permission ohos.permission.DISTRIBUTED_DATASYNC
         */
        setDistributedTables(tables: Array<string>, callback: AsyncCallback<void>): void;
        setDistributedTables(tables: Array<string>): Promise<void>;

        /**
         * Obtain distributed table name of specified remote device according to local table name.
         * When query remote device database, distributed table name is needed.
         *
         * @since 8
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @param device Indicates the remote device.
         * @param table Indicates the local table name.
         * @permission ohos.permission.DISTRIBUTED_DATASYNC
         * @return the distributed table name.
         */
        obtainDistributedTableName(device: string, table: string, callback: AsyncCallback<string>): void;
        obtainDistributedTableName(device: string, table: string): Promise<string>;

        /**
         * Sync data between devices
         *
         * @since 8
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @param mode Indicates the synchronization mode. The value can be PUSH, PULL.
         * @param predicates Constraint synchronized data and devices.
         * @param callback Indicates the callback used to send the synchronization result to the caller.
         * @permission ohos.permission.DISTRIBUTED_DATASYNC
         */
        sync(mode: SyncMode, predicates: RdbPredicates, callback: AsyncCallback<Array<[string, number]>>): void;
        sync(mode: SyncMode, predicates: RdbPredicates): Promise<Array<[string, number]>>;

        /**
         * Registers an observer for the database. When data in the distributed database changes,
         * the callback will be invoked.
         *
         * @since 8
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @param type Indicates the subscription type, which is defined in {@code SubscribeType}.
         * @param observer Indicates the observer of data change events in the distributed database.
         * @permission ohos.permission.DISTRIBUTED_DATASYNC
         */
        on(event: 'dataChange', type: SubscribeType, observer: Callback<Array<string>>): void;

        /**
         * Remove specified observer of specified type from the database.
         *
         * @since 8
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @param type Indicates the subscription type, which is defined in {@code SubscribeType}.
         * @param observer Indicates the data change observer already registered.
         * @permission ohos.permission.DISTRIBUTED_DATASYNC
         */
        off(event:'dataChange', type: SubscribeType, observer: Callback<Array<string>>): void;
    }

    /**
     * Provides methods for managing the relational database (RDB).
     *
     * This class provides methods for creating, querying, updating, and deleting RDBs.
     *
     * @import import data_rdb from '@ohos.data.rdb';
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    interface RdbStoreV9 {
        /**
         * Inserts a row of data into the target table.
         *
         * @param {string} table - Indicates the row of data to be inserted into the table.
         * @param {ValuesBucket} values - Indicates the row of data {@link ValuesBucket} to be inserted into the table.
         * @param {AsyncCallback<number>} callback - the row ID if the operation is successful. returns -1 otherwise.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        insert(table: string, values: ValuesBucket, callback: AsyncCallback<number>): void;

        /**
         * Inserts a row of data into the target table.
         *
         * @param {string} table - Indicates the row of data to be inserted into the table.
         * @param {ValuesBucket} values - Indicates the row of data {@link ValuesBucket} to be inserted into the table.
         * @returns {Promise<void>} return the row ID if the operation is successful. return -1 otherwise.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        insert(table: string, values: ValuesBucket): Promise<number>;

        /**
         * Inserts a batch of data into the target table.
         *
         * @param {string} table - Indicates the target table.
         * @param {Array<ValuesBucket>} values - Indicates the rows of data {@link ValuesBucket} to be inserted into the table.
         * @param {AsyncCallback<number>} callback - the number of values that were inserted if the operation is successful. returns -1 otherwise.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        batchInsert(table: string, values: Array<ValuesBucket>, callback: AsyncCallback<number>): void;

        /**
         * Inserts a batch of data into the target table.
         *
         * @param {string} table - Indicates the target table.
         * @param {Array<ValuesBucket>} values - Indicates the rows of data {@link ValuesBucket} to be inserted into the table.
         * @returns {Promise<void>} return the number of values that were inserted if the operation is successful. returns -1 otherwise.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        batchInsert(table: string, values: Array<ValuesBucket>): Promise<number>;

        /**
         * Updates data in the database based on a a specified instance object of RdbPredicatesV9.
         *
         * @param {ValuesBucket} values - Indicates Indicates the row of data to be updated in the database.The key-value pairs are associated with column names of the database table.
         * @param {RdbPredicatesV9} predicates - Indicates the specified update condition by the instance object of  {@link RdbPredicatesV9}.
         * @param {AsyncCallback<number>} callback - the number of affected rows.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        update(values: ValuesBucket, predicates: RdbPredicatesV9, callback: AsyncCallback<number>): void;

        /**
         * Updates data in the database based on a a specified instance object of RdbPredicatesV9.
         *
         * @param {ValuesBucket} values - Indicates Indicates the row of data to be updated in the database.The key-value pairs are associated with column names of the database table.
         * @param {RdbPredicatesV9} predicates - Indicates the specified update condition by the instance object of  {@link RdbPredicatesV9}.
         * @returns {Promise<number>} return the number of affected rows.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        update(values: ValuesBucket, predicates: RdbPredicatesV9): Promise<number>;

        /**
         * Updates data in the database based on a a specified instance object of RdbPredicatesV9.
         *
         * @param {string} table - Indicates the target table.
         * @param {ValuesBucket} values - Indicates the row of data to be updated in the database.The key-value pairs are associated with column names of the database table.
         * @param {DataSharePredicates} predicates - Indicates the specified update condition by the instance object of {@link dataSharePredicates.DataSharePredicates}.
         * @param {AsyncCallback<number>} callback - the number of affected rows.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        update(table: string, values: ValuesBucket, predicates: dataSharePredicates.DataSharePredicates, callback: AsyncCallback<number>): void;

        /**
         * Updates data in the database based on a a specified instance object of RdbPredicatesV9.
         *
         * @param {string} table - Indicates the target table.
         * @param {ValuesBucket} values - Indicates the row of data to be updated in the database.The key-value pairs are associated with column names of the database table.
         * @param {DataSharePredicates} predicates - Indicates the specified update condition by the instance object of {@link dataSharePredicates.DataSharePredicates}.
         * @returns {Promise<number>} return the number of affected rows.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        update(table: string, values: ValuesBucket, predicates: dataSharePredicates.DataSharePredicates): Promise<number>;

        /**
         * Deletes data from the database based on a specified instance object of RdbPredicatesV9.
         *
         * @param {RdbPredicatesV9} predicates - the specified delete condition by the instance object of {@link RdbPredicatesV9}.
         * @param {AsyncCallback<number>} callback - the number of affected rows.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        delete(predicates: RdbPredicatesV9, callback: AsyncCallback<number>): void;

        /**
         * Deletes data from the database based on a specified instance object of RdbPredicatesV9.
         *
         * @param {RdbPredicatesV9} predicates - the specified delete condition by the instance object of {@link RdbPredicatesV9}.
         * @returns {Promise<number>} return the number of affected rows.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        delete(predicates: RdbPredicatesV9): Promise<number>;

        /**
         * Deletes data from the database based on a specified instance object of RdbPredicatesV9.
         *
         * @param {string} table - Indicates the target table.
         * @param {DataSharePredicates} predicates - the specified delete condition by the instance object of {@link dataSharePredicates.DataSharePredicates}.
         * @param {AsyncCallback<number>} callback - the number of affected rows.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        delete(table: string, predicates: dataSharePredicates.DataSharePredicates, callback: AsyncCallback<number>): void;

        /**
         * Deletes data from the database based on a specified instance object of RdbPredicatesV9.
         *
         * @param {string} table - Indicates the target table.
         * @param {DataSharePredicates} predicates - the specified delete condition by the instance object of {@link dataSharePredicates.DataSharePredicates}.
         * @param {AsyncCallback<number>} callback - the number of affected rows.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        delete(table: string, predicates: dataSharePredicates.DataSharePredicates): Promise<number>;

        /**
         * Queries data in the database based on specified conditions.
         *
         * @param {RdbPredicatesV9} predicates - the specified query condition by the instance object of {@link RdbPredicatesV9}.
         * @param {Array<string>} columns - the columns to query. If the value is empty array, the query applies to all columns.
         * @param {AsyncCallback<ResultSetV9>} callback - the {@link ResultSetV9} object if the operation is successful.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        query(predicates: RdbPredicatesV9, columns: Array<string>, callback: AsyncCallback<ResultSetV9>): void;

        /**
         * Queries data in the database based on specified conditions.
         *
         * @param {RdbPredicatesV9} predicates - the specified query condition by the instance object of {@link RdbPredicatesV9}.
         * @param {Array<string>} columns - the columns to query. If the value is null, the query applies to all columns.
         * @returns {Promise<ResultSetV9>} return the {@link ResultSetV9} object if the operation is successful.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        query(predicates: RdbPredicatesV9, columns?: Array<string>): Promise<ResultSetV9>;

        /**
         * Queries data in the database based on specified conditions.
         *
         * @param {string} table - Indicates the target table.
         * @param {dataSharePredicates.DataSharePredicates} predicates - the specified query condition by the instance object of {@link dataSharePredicates.DataSharePredicates}.
         * @param {Array<string>} columns - the columns to query. If the value is empty array, the query applies to all columns.
         * @param {AsyncCallback<ResultSetV9>} callback - the {@link ResultSetV9} object if the operation is successful.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        query(table: string, predicates: dataSharePredicates.DataSharePredicates, columns: Array<string>, callback: AsyncCallback<ResultSetV9>): void;

        /**
         * Queries data in the database based on specified conditions.
         *
         * @param {string} table - Indicates the target table.
         * @param {dataSharePredicates.DataSharePredicates} predicates - the specified query condition by the instance object of {@link dataSharePredicates.DataSharePredicates}.
         * @param {Array<string>} columns - the columns to query. If the value is null, the query applies to all columns.
         * @returns {Promise<ResultSetV9>} return the {@link ResultSetV9} object if the operation is successful.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        query(table: string, predicates: dataSharePredicates.DataSharePredicates, columns?: Array<string>): Promise<ResultSetV9>;

        /**
         * Queries remote data in the database based on specified conditions before Synchronizing Data.
         *
         * @param {string} device - Indicates specified remote device.
         * @param {string} table - Indicates the target table.
         * @param {RdbPredicatesV9} predicates - the specified remote remote query condition by the instance object of {@link RdbPredicatesV9}.
         * @param {Array<string>} columns - the columns to remote query. If the value is empty array, the remote query applies to all columns.
         * @param {AsyncCallback<ResultSetV9>} callback - the {@link ResultSetV9} object if the operation is successful.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        remoteQuery(device: string, table: string, predicates: RdbPredicatesV9, columns: Array<string>, callback: AsyncCallback<ResultSetV9>): void;

        /**
         * Queries remote data in the database based on specified conditions before Synchronizing Data.
         *
         * @param {string} device - Indicates specified remote device.
         * @param {string} table - Indicates the target table.
         * @param {RdbPredicatesV9} predicates - the specified remote remote query condition by the instance object of {@link RdbPredicatesV9}.
         * @param {Array<string>} columns - the columns to remote query. If the value is empty array, the remote query applies to all columns.
         * @returns {Promise<ResultSetV9>} return the {@link ResultSetV9} object if the operation is successful.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        remoteQuery(device: string, table: string, predicates: RdbPredicatesV9, columns: Array<string>): Promise<ResultSetV9>;

        /**
         * Queries data in the database based on SQL statement.
         *
         * @param {string} sql - Indicates the SQL statement to execute.
         * @param {Array<ValueType>} bindArgs - Indicates the {@link ValueType} values of the parameters in the SQL statement. The values are strings.
         * @param {AsyncCallback<ResultSetV9>} callback - the {@link ResultSetV9} object if the operation is successful.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        querySql(sql: string, bindArgs: Array<ValueType>, callback: AsyncCallback<ResultSetV9>): void;

        /**
         * Deletes data from the database based on a specified instance object of RdbPredicatesV9.
         *
         * @param {string} sql - Indicates the SQL statement to execute.
         * @param {Array<ValueType>} bindArgs - Indicates the {@link ValueType} values of the parameters in the SQL statement. The values are strings.
         * @returns {Promise<ResultSetV9>} return the {@link ResultSetV9} object if the operation is successful.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        querySql(sql: string, bindArgs?: Array<ValueType>): Promise<ResultSetV9>;

        /**
         * Executes an SQL statement that contains specified parameters but returns no value.
         *
         * @param {string} sql - Indicates the SQL statement to execute.
         * @param {Array<ValueType>} bindArgs - Indicates the {@link ValueType} values of the parameters in the SQL statement. The values are strings.
         * @param {AsyncCallback<void>} callback - the callback of executeSql.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        executeSql(sql: string, bindArgs: Array<ValueType>, callback: AsyncCallback<void>): void;

        /**
         * Executes an SQL statement that contains specified parameters but returns no value.
         *
         * @param {string} sql - Indicates the SQL statement to execute.
         * @param {Array<ValueType>} bindArgs - Indicates the {@link ValueType} values of the parameters in the SQL statement. The values are strings.
         * @returns {Promise<void>} the promise returned by the function.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        executeSql(sql: string, bindArgs?: Array<ValueType>): Promise<void>;

        /**
         * BeginTransaction before excute your sql.
         *
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        beginTransaction():void;

        /**
         * Commit the the sql you have executed.
         *
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        commit():void;

        /**
         * Roll back the sql you have already executed.
         *
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        rollBack():void;

        /**
         * Backs up a database in a specified name.
         *
         * @param {string} destName - Indicates the name that saves the database backup.
         * @param {AsyncCallback<void>} callback - the callback of backup.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        backup(destName:string, callback: AsyncCallback<void>):void;

        /**
         * Backs up a database in a specified name.
         *
         * @param {string} destName - Indicates the name that saves the database backup.
         * @returns {Promise<void>} the promise returned by the function.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        backup(destName:string): Promise<void>;

        /**
         * Restores a database from a specified database file.
         *
         * @param {string} srcName - Indicates the name that saves the database file.
         * @param {AsyncCallback<void>} callback - the callback of restore.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        restore(srcName:string, callback: AsyncCallback<void>):void;

        /**
         * Restores a database from a specified database file.
         *
         * @param {string} srcName - Indicates the name that saves the database file.
         * @returns {Promise<void>} the promise returned by the function.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        restore(srcName:string): Promise<void>;

        /**
         * Set table to be distributed table.
         *
         * @permission ohos.permission.DISTRIBUTED_DATASYNC
         * @param {Array<string>} tables - Indicates the tables name you want to set.
         * @param {AsyncCallback<void>} callback - the callback of setDistributedTables.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        setDistributedTables(tables: Array<string>, callback: AsyncCallback<void>): void;

        /**
         * Set table to be distributed table.
         *
         * @permission ohos.permission.DISTRIBUTED_DATASYNC
         * @param {Array<string>} tables - Indicates the tables name you want to set.
         * @returns {Promise<void>} the promise returned by the function.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        setDistributedTables(tables: Array<string>): Promise<void>;

        /**
         * Obtain distributed table name of specified remote device according to local table name.
         * When query remote device database, distributed table name is needed.
         *
         * @permission ohos.permission.DISTRIBUTED_DATASYNC
         * @param {string} device - Indicates the remote device.
         * @param {AsyncCallback<string>} callback - {string}: the distributed table name.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        obtainDistributedTableName(device: string, table: string, callback: AsyncCallback<string>): void;

        /**
         * Obtain distributed table name of specified remote device according to local table name.
         * When query remote device database, distributed table name is needed.
         *
         * @permission ohos.permission.DISTRIBUTED_DATASYNC
         * @param {string} device - Indicates the remote device.
         * @returns {Promise<string>} {string}: the distributed table name.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        obtainDistributedTableName(device: string, table: string): Promise<string>;

        /**
         * Sync data between devices.
         *
         * @permission ohos.permission.DISTRIBUTED_DATASYNC
         * @param {string} device - Indicates the remote device.
         * @param {AsyncCallback<Array<[string, number]>>} callback - {Array<[string, number]>}: devices sync status array, {string}: device id, {number}: device sync status.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        sync(mode: SyncMode, predicates: RdbPredicatesV9, callback: AsyncCallback<Array<[string, number]>>): void;

        /**
         * Sync data between devices.
         *
         * @permission ohos.permission.DISTRIBUTED_DATASYNC
         * @param {string} device - Indicates the remote device.
         * @returns {Promise<Array<[string, number]>>} {Array<[string, number]>}: devices sync status array, {string}: device id, {number}: device sync status.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        sync(mode: SyncMode, predicates: RdbPredicatesV9): Promise<Array<[string, number]>>;

        /**
         * Registers an observer for the database. When data in the distributed database changes,
         * the callback will be invoked.
         *
         * @param {string} event - Indicates the event must be string 'dataChange'.
         * @param {SubscribeType} type - Indicates the subscription type, which is defined in {@link SubscribeType}.
         * @param {AsyncCallback<Array<string>>} observer - {Array<string>}: the observer of data change events in the distributed database.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        on(event: 'dataChange', type: SubscribeType, observer: Callback<Array<string>>): void;

        /**
         * Remove specified observer of specified type from the database.
         *
         * @param {string} event - Indicates the event must be string 'dataChange'.
         * @param {SubscribeType} type - Indicates the subscription type, which is defined in {@link SubscribeType}.
         * @param {AsyncCallback<Array<string>>} observer - {Array<string>}: the data change observer already registered.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        off(event:'dataChange', type: SubscribeType, observer: Callback<Array<string>>): void;
    }

    /**
     * Indicates possible value types
     *
     * @since 7
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @import import data_rdb from '@ohos.data.rdb';
     */
    type ValueType = number | string | boolean;

    /**
     * Values in buckets are stored in key-value pairs
     *
     * @since 7
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @import import data_rdb from '@ohos.data.rdb';
     */
    type ValuesBucket = {
        [key: string]: ValueType | Uint8Array | null;
    }

    /**
     * Manages relational database configurations.
     *
     * @since 7
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @import import data_rdb from '@ohos.data.rdb';
     */
    interface StoreConfig {
        name: string;

        /**
         * Specifies whether the database is encrypted.
         *
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @import import data_rdb from '@ohos.data.rdb';
         */    
        encrypt?: boolean;
    }

    /**
     * Manages relational database configurations.
     *
     * @import import data_rdb from '@ohos.data.rdb';
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    interface StoreConfigV9 {
        /**
         * The database name.
         *
         * @import import data_rdb from '@ohos.data.rdb';
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        name: string;

        /**
         * Specifies whether the database is encrypted.
         *
         * @import import data_rdb from '@ohos.data.rdb';
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        securityLevel: SecurityLevel;

        /**
         * Specifies whether the database is encrypted.
         *
         * @import import data_rdb from '@ohos.data.rdb';
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        encrypt?: boolean;
    }

    /**
     * Manages relational database configurations.
     *
     * @since 7
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @import import data_rdb from '@ohos.data.rdb';
     */
    class RdbPredicates {
        /**
         * A parameterized constructor used to create an RdbPredicates instance.
         * name Indicates the table name of the database.
         *
         * @since 7
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         */
        constructor(name: string)

        /**
         * Specify remote devices when syncing distributed database.
         *
         * @note When query database, this function should not be called.
         * @since 8
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @param devices Indicates specified remote devices.
         * @return Returns the RdbPredicates self.
         */
        inDevices(devices: Array<string>): RdbPredicates;

        /**
         * Specify all remote devices which connect to local device when syncing distributed database.
         *
         * @note When query database, this function should not be called.
         * @since 8
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @return Returns the RdbPredicates self.
         */
        inAllDevices(): RdbPredicates;

        /**
         * Configures the RdbPredicates to match the field whose data type is ValueType and value is equal
         * to a specified value.
         *
         * @note This method is similar to = of the SQL statement.
         * @since 7
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @param field Indicates the column name in the database table.
         * @param value Indicates the value to match with the RdbPredicates.
         * @return Returns the RdbPredicates that match the specified field.
         */
        equalTo(field: string, value: ValueType): RdbPredicates;

        /**
         * Configures the RdbPredicates to match the field whose data type is ValueType and value is unequal to
         * a specified value.
         *
         * @note This method is similar to != of the SQL statement.
         * @since 7
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @param field Indicates the column name in the database table.
         * @param value Indicates the value to match with the RdbPredicates.
         * @return Returns the RdbPredicates that match the specified field.
         */
        notEqualTo(field: string, value: ValueType): RdbPredicates;

        /**
         * Adds a left parenthesis to the RdbPredicates.
         *
         * @note This method is similar to ( of the SQL statement and needs to be used together with endWrap().
         * @since 7
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @return Returns the RdbPredicates with the left parenthesis.
         */
        beginWrap(): RdbPredicates;

        /**
         * Adds a right parenthesis to the RdbPredicates.
         *
         * @note This method is similar to ) of the SQL statement and needs to be used together
         * with beginWrap().
         * @since 7
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @return Returns the RdbPredicates with the right parenthesis.
         */
        endWrap(): RdbPredicates;

        /**
         * Adds an or condition to the RdbPredicates.
         *
         * @note This method is similar to or of the SQL statement.
         * @since 7
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @return Returns the RdbPredicates with the or condition.
         */
        or(): RdbPredicates;

        /**
         * Adds an and condition to the RdbPredicates.
         *
         * @note This method is similar to and of the SQL statement.
         * @since 7
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @return Returns the RdbPredicates with the and condition.
         */
        and(): RdbPredicates;

        /**
         * Configures the RdbPredicates to match the field whose data type is string and value
         * contains a specified value.
         *
         * @note This method is similar to contains of the SQL statement.
         * @since 7
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @param field Indicates the column name in the database table.
         * @param value Indicates the value to match with the RdbPredicates.
         * @return Returns the RdbPredicates that match the specified field.
         */
        contains(field: string, value: string): RdbPredicates;

        /**
         * Configures the RdbPredicates to match the field whose data type is string and value starts
         * with a specified string.
         *
         * @note This method is similar to value% of the SQL statement.
         * @since 7
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @param field Indicates the column name in the database table.
         * @param value Indicates the value to match with the RdbPredicates.
         * @return Returns the RdbPredicates that match the specified field.
         */
        beginsWith(field: string, value: string): RdbPredicates;

        /**
         * Configures the RdbPredicates to match the field whose data type is string and value
         * ends with a specified string.
         *
         * @note This method is similar to %value of the SQL statement.
         * @since 7
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @param field Indicates the column name in the database table.
         * @param value Indicates the value to match with the RdbPredicates.
         * @return Returns the RdbPredicates that match the specified field.
         */
        endsWith(field: string, value: string): RdbPredicates;

        /**
         * Configures the RdbPredicates to match the fields whose value is null.
         *
         * @note This method is similar to is null of the SQL statement.
         * @since 7
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @param field Indicates the column name in the database table.
         * @return Returns the RdbPredicates that match the specified field.
         */
        isNull(field: string): RdbPredicates;

        /**
         * Configures the RdbPredicates to match the specified fields whose value is not null.
         *
         * @note This method is similar to is not null of the SQL statement.
         * @since 7
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @param field Indicates the column name in the database table.
         * @return Returns the RdbPredicates that match the specified field.
         */
        isNotNull(field: string): RdbPredicates;

        /**
         * Configures the RdbPredicates to match the fields whose data type is string and value is
         * similar to a specified string.
         *
         * @note This method is similar to like of the SQL statement.
         * @since 7
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @param field Indicates the column name in the database table.
         * @param value Indicates the value to match with the RdbPredicates. The percent sign (%) in the value
         * is a wildcard (like * in a regular expression).
         * @return Returns the RdbPredicates that match the specified field.
         */
        like(field: string, value: string): RdbPredicates;

        /**
         * Configures RdbPredicates to match the specified field whose data type is string and the value contains
         * a wildcard.
         *
         * @note Different from like, the input parameters of this method are case-sensitive.
         * @since 7
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @param field Indicates the column name in the database table.
         * @param value Indicates the value to match with RdbPredicates.
         * @return Returns the SQL statement with the specified RdbPredicates.
         */
        glob(field: string, value: string): RdbPredicates;

        /**
         * Restricts the value of the field to the range between low value and high value.
         *
         * @since 7
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @param field Indicates the column name.
         * @param low Indicates the minimum value.
         * @param high Indicates the maximum value.
         * @return Returns the SQL query statement with the specified RdbPredicates.
         */
        between(field: string, low: ValueType, high: ValueType): RdbPredicates;

        /**
         * Configures RdbPredicates to match the specified field whose data type is int and value is
         * out of a given range.
         *
         * @since 7
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @param field Indicates the column name in the database table.
         * @param low Indicates the minimum value to match with DataAbilityPredicates.
         * @param high Indicates the maximum value to match with DataAbilityPredicates.
         * @return Returns the SQL query statement with the specified RdbPredicates.
         */
        notBetween(field: string, low: ValueType, high: ValueType): RdbPredicates;

        /**
         * Restricts the value of the field to be greater than the specified value.
         *
         * @since 7
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @param field Indicates the column name.
         * @param value Indicates the String field.
         * @return Returns the SQL query statement with the specified RdbPredicates.
         */
        greaterThan(field: string, value: ValueType): RdbPredicates;

        /**
         * Restricts the value of the field to be smaller than the specified value.
         *
         * @since 7
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @param field Indicates the column name.
         * @param value Indicates the String field.
         * @return Returns the SQL query statement with the specified RdbPredicates.
         */
        lessThan(field: string, value: ValueType): RdbPredicates;

        /**
         * Restricts the value of the field to be greater than or equal to the specified value.
         *
         * @since 7
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @param field Indicates the column name.
         * @param value Indicates the String field.
         * @return Returns the SQL query statement with the specified RdbPredicates.
         */
        greaterThanOrEqualTo(field: string, value: ValueType): RdbPredicates;

        /**
         * Restricts the value of the field to be smaller than or equal to the specified value.
         *
         * @since 7
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @param field Indicates the column name.
         * @param value Indicates the String field.
         * @return Returns the SQL query statement with the specified RdbPredicates.
         */
        lessThanOrEqualTo(field: string, value: ValueType): RdbPredicates;

        /**
         * Restricts the ascending order of the return list. When there are several orders,
         * the one close to the head has the highest priority.
         *
         * @since 7
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @param field Indicates the column name for sorting the return list.
         * @return Returns the SQL query statement with the specified RdbPredicates.
         */
        orderByAsc(field: string): RdbPredicates;

        /**
         * Restricts the descending order of the return list. When there are several orders,
         * the one close to the head has the highest priority.
         *
         * @since 7
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @param field Indicates the column name for sorting the return list.
         * @return Returns the SQL query statement with the specified RdbPredicates.
         */
        orderByDesc(field: string): RdbPredicates;

        /**
         * Restricts each row of the query result to be unique.
         *
         * @since 7
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @return Returns the SQL query statement with the specified RdbPredicates.
         */
        distinct(): RdbPredicates;

        /**
         * Restricts the max number of return records.
         *
         * @since 7
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @param value Indicates the max length of the return list.
         * @return Returns the SQL query statement with the specified RdbPredicates.
         */
        limitAs(value: number): RdbPredicates;

        /**
         * Configures RdbPredicates to specify the start position of the returned result.
         *
         * @note Use this method together with limit(int).
         * @since 7
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @param rowOffset Indicates the start position of the returned result. The value is a positive integer.
         * @return Returns the SQL query statement with the specified AbsPredicates.
         */
        offsetAs(rowOffset: number): RdbPredicates;

        /**
         * Configures RdbPredicates to group query results by specified columns.
         *
         * @since 7
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @param fields Indicates the specified columns by which query results are grouped.
         * @return Returns the RdbPredicates with the specified columns by which query results are grouped.
         */
        groupBy(fields: Array<string>): RdbPredicates;

        /**
         * Configures RdbPredicates to specify the index column.
         *
         * @note Before using this method, you need to create an index column.
         * @since 7
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @param indexName Indicates the name of the index column.
         * @return Returns RdbPredicates with the specified index column.
         */
        indexedBy(field: string): RdbPredicates;

        /**
         * Configures RdbPredicates to match the specified field whose data type is ValueType array and values
         * are within a given range.
         *
         * @since 7
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @param field Indicates the column name in the database table.
         * @param values Indicates the values to match with RdbPredicates.
         * @return Returns RdbPredicates that matches the specified field.
         */
        in(field: string, value: Array<ValueType>): RdbPredicates;

        /**
         * Configures RdbPredicates to match the specified field whose data type is ValueType array and values
         * are out of a given range.
         *
         * @since 7
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @param field Indicates the column name in the database table.
         * @param values Indicates the values to match with RdbPredicates.
         * @return Returns RdbPredicates that matches the specified field.
         */
        notIn(field: string, value: Array<ValueType>): RdbPredicates;
    }

    export type ResultSet = _ResultSet
}

export default rdb;
