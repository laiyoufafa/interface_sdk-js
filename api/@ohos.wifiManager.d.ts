/*
 * Copyright (C) 2022-2023 Huawei Device Co., Ltd.
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

import { AsyncCallback, Callback } from './@ohos.base';

/**
 * Provides methods to operate or manage Wi-Fi.
 * @namespace wifiManager
 * @since 9
 */
declare namespace wifiManager {
  /**
   * Enable Wi-Fi.
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501003 - Failed for wifi is closing.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function enableWifi(): void;

  /**
   * Disable Wi-Fi.
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501004 - Failed for wifi is opening.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function disableWifi(): void;

  /**
   * Query the Wi-Fi status
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns Returns {@code true} if the Wi-Fi is active, returns {@code false} otherwise.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9
   */
  function isWifiActive(): boolean;

  /**
   * Scan Wi-Fi hotspot, This API works in asynchronous mode.
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9
   */
  function scan(): void;

  /**
   * Obtain the scanned sta list.
   * @permission ohos.permission.GET_WIFI_INFO and (ohos.permission.GET_WIFI_PEERS_MAC or (ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION))
   * @returns Returns information about scanned Wi-Fi hotspot if any.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9
   */
  function getScanInfoList(): Array<WifiScanInfo>;

  /**
   * Add Wi-Fi connection configuration to the device. The configuration will be updated when the configuration is added.</p>
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.SET_WIFI_CONFIG
   * @param config Indicates the device configuration for connection to the Wi-Fi network.
   * @returns Returns {@code networkId} if the configuration is added; returns {@code -1} otherwise.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function addDeviceConfig(config: WifiDeviceConfig): Promise<number>;
  function addDeviceConfig(config: WifiDeviceConfig, callback: AsyncCallback<number>): void;

  /**
  * Add a specified candidate hotspot configuration and returns the networkId.
  * This method adds one configuration at a time. After this configuration is added,
  *     your device will determine whether to connect to the hotspot.
  * @permission ohos.permission.SET_WIFI_INFO
  * @param { WifiDeviceConfig } config - candidate config.
  * @returns Returns {@code networkId} if the configuration is added; returns {@code -1} otherwise.
  * @throws {BusinessError} 201 - Permission denied.
  * @throws {BusinessError} 401 - Invalid parameters.
  * @throws {BusinessError} 801 - Capability not supported.
  * @throws {BusinessError} 2501000 - Operation failed.
  * @syscap SystemCapability.Communication.WiFi.STA
  * @since 9
  */
  function addCandidateConfig(config: WifiDeviceConfig): Promise<number>;
  function addCandidateConfig(config: WifiDeviceConfig, callback: AsyncCallback<number>): void;

  /**
   * Remove a specified candidate hotspot configuration, only the configuration which is added by ourself is allowed
   * to be removed.
   * @permission ohos.permission.SET_WIFI_INFO
   * @param networkId - Network ID which will be removed.
   * @returns {@code true} if the candidate hotspot configuration is removed, returns {@code false} otherwise.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9
   */
  function removeCandidateConfig(networkId: number): Promise<void>;
  function removeCandidateConfig(networkId: number, callback: AsyncCallback<void>): void;

  /**
   * Obtain the list of all existed candidate Wi-Fi configurations which added by ourself.
   * You can obtain only the Wi-Fi configurations you created on your own application.
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @returns Returns the list of all existed Wi-Fi configurations you created on your application.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9
   */
  function getCandidateConfigs(): Array<WifiDeviceConfig>;

  /**
   * Connect to a specified candidate hotspot by networkId, only the configuration which is added by ourself
   * is allowed to be connected. This method connect to a configuration at a time.
   * @permission ohos.permission.SET_WIFI_INFO
   * @param { number } networkId - Network ID which will be connected.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wifi is closed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9
   */
  function connectToCandidateConfig(networkId: number): void;

  /**
   * Connect to Wi-Fi hotspot by networkId.
   * @permission ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { number } networkId - ID of the connected network.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wifi is closed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function connectToNetwork(networkId: number): void;

  /**
   * Connect to Wi-Fi hotspot by WifiDeviceConfig.

   * @param config Indicates the device configuration for connection to the Wi-Fi hotspot.
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.SET_WIFI_CONFIG and
   * ohos.permission.MANAGE_WIFI_CONNECTION
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wifi is closed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function connectToDevice(config: WifiDeviceConfig): void;

  /**
   * Disconnect connection between sta and Wi-Fi hotspot.
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function disconnect(): void;

  /**
   * Calculate the Wi-Fi signal level based on the Wi-Fi RSSI and frequency band.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { number } rssi - Indicates the Wi-Fi RSSI.
   * @param { number } band - Indicates the Wi-Fi frequency band.
   * @returns Returns Wi-Fi signal level ranging from 0 to 4.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9
   */
  function getSignalLevel(rssi: number, band: number): number;

  /**
   * Obtain connection information about the Wi-Fi connection.
   * @permission ohos.permission.GET_WIFI_INFO
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wifi is closed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9
   */
  function getLinkedInfo(): Promise<WifiLinkedInfo>;
  function getLinkedInfo(callback: AsyncCallback<WifiLinkedInfo>): void;

  /**
   * Check whether the Wi-Fi connection has been set up.
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns Returns {@code true} if a Wi-Fi connection has been set up, returns {@code false} otherwise.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9
   */
  function isConnected(): boolean;

  /**
   * Obtain the features supported by the device.
   * To check whether this device supports a specified feature.
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns Returns the features supported by this device.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2401000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function getSupportedFeatures(): number;

  /**
   * Check whether the device supports a specified feature.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { number } featureId Indicates the ID of the feature.
   * @returns Returns {@code true} if this device supports the specified feature, returns {@code false} otherwise.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2401000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.Core
   * @since 9
   */
  function isFeatureSupported(featureId: number): boolean;

  /**
   * Obtain the MAC address of a Wi-Fi device. Wi-Fi must be enabled.
   * The MAC address is unique and cannot be changed.
   * @permission ohos.permission.GET_WIFI_LOCAL_MAC and ohos.permission.GET_WIFI_INFO
   * @returns Returns the MAC address of the Wi-Fi device.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wifi is closed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function getDeviceMacAddress(): string[];

  /**
   * Obtain the IP information of the Wi-Fi connection.
   * The IP information includes the host IP address, gateway address, and DNS information.
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns Returns the IP information of the Wi-Fi connection.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9
   */
  function getIpInfo(): IpInfo;

  /**
   * Obtain the country code of the device.
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns Returns the country code of this device.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2401000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.Core
   * @since 9
   */
  function getCountryCode(): string;

  /**
   * Re-associate to current network.
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wifi is closed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function reassociate(): void;

  /**
   * Re-connect to current network.
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @throws {BusinessError} 2501001 - Wifi is closed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function reconnect(): void;

  /**
   * Obtain the list of all existed Wi-Fi configurations.
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION and ohos.permission.GET_WIFI_CONFIG
   * @returns Returns the list of all existing Wi-Fi configurations you created on your application.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function getDeviceConfigs(): Array<WifiDeviceConfig>;

  /**
   * Update the specified Wi-Fi configuration.
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.SET_WIFI_CONFIG
   * @param { WifiDeviceConfig } config Indicates the Wi-Fi configuration to update.
   * @returns Returns the network ID in the updated Wi-Fi configuration if the update is successful;
   *     returns {@code -1} if the specified Wi-Fi configuration is not contained in the list.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function updateDeviceConfig(config: WifiDeviceConfig): number;

  /**
   * Disable the specified DeviceConfig by networkId.
   * The disabled DeviceConfig will not be associated with again.
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @param networkId Identifies the network to disable.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function disableDeviceConfig(networkId: number): void;

  /**
   * Remove all the saved Wi-Fi configurations.
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function removeAllDeviceConfigs(): void;

  /**
   * Remove a Wi-Fi DeviceConfig with networkId.
   * After a Wi-Fi DeviceConfig is removed, its configuration will be deleted from the list of Wi-Fi configurations.
   * If the Wi-Fi DeviceConfig is being connected, the connection will be interrupted.
   * The application can only delete Wi-Fi DeviceConfig it has created.
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { number } networkId - Indicate the ID of the Wi-Fi DeviceConfig,
   *     which can be obtained using the {@link #addDeviceConfig} or {@link #getLinkedInfo} method.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function removeDeviceConfig(networkId: number): void;

  /**
   * Check whether the current device supports the specified band.
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns Returns {@code true} if the specified band is supported, returns {@code false} otherwise.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 10
   */
  function isBandTypeSupported(bandType: WifiBandType): boolean;

  /**
   * Obtain the supported 5G channel list of the device.
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG
   * @returns Returns 5G channel list.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function get5GChannelList(): Array<number>;

  /**
   * Obtain the latest disconnected reason.
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG
   * @returns Returns the latest disconnected reason.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  function getDisconnectedReason(): DisconnectedReason;

  /**
   * Enable Wi-Fi hotspot function.
   * This method is asynchronous. After the Wi-Fi hotspot is enabled, Wi-Fi may be disabled.
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function enableHotspot(): void;

  /**
   * Disable Wi-Fi hotspot function.
   * This method is asynchronous. If Wi-Fi is enabled after the Wi-Fi hotspot is disabled, Wi-Fi may be re-enabled.
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT
   * @returns Returns {@code true} if this method is called successfully, returns {@code false} otherwise.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function disableHotspot(): void;

  /**
   * Check whether a device serving as a Wi-Fi hotspot supports both the 2.4 GHz and 5 GHz Wi-Fi.
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.MANAGE_WIFI_HOTSPOT
   * @returns Returns {@code true} if the method is called successfully, returns {@code false} otherwise.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function isHotspotDualBandSupported(): boolean;

  /**
   * Check whether Wi-Fi hotspot is active on a device.
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns Returns {@code true} if Wi-Fi hotspot is enabled, returns {@code false} otherwise.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function isHotspotActive(): boolean;

  /**
   * Set the hotspot configuration for the device.
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG
   * @param { HotspotConfig } config - Indicates the Wi-Fi hotspot configuration.
   *     The SSID and {@code securityType} must be available and correct.
   *     If {@code securityType} is not {@code open}, {@code preSharedKey} must be available and correct.
   * @returns Returns {@code true} if the method is called successfully, returns {@code false} otherwise.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function setHotspotConfig(config: HotspotConfig): void;

  /**
   * Obtain the Wi-Fi hotspot configuration.
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG
   * @returns Returns the configuration of an existed or enabled Wi-Fi hotspot.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function getHotspotConfig(): HotspotConfig;

  /**
   * Obtain the list of stations that are connected to the Wi-Fi hotspot.
   * This method can only be used on a device that serves as a Wi-Fi hotspot.
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION and ohos.permission.MANAGE_WIFI_HOTSPOT
   * @returns Returns the list of clients that are connected to the Wi-Fi hotspot.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function getHotspotStations(): Array<StationInfo>;

  /**
   * Obtain information about the P2P connection.
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns Returns the P2P connection information.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9
   */
  function getP2pLinkedInfo(): Promise<WifiP2pLinkedInfo>;
  function getP2pLinkedInfo(callback: AsyncCallback<WifiP2pLinkedInfo>): void;

  /**
   * Obtain information about the current p2p group.
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @returns Returns the current group information.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9
   */
  function getCurrentP2pGroup(): Promise<WifiP2pGroupInfo>;
  function getCurrentP2pGroup(callback: AsyncCallback<WifiP2pGroupInfo>): void;

  /**
   * Obtain the information about the found devices.
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @returns Returns the found devices list.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9
   */
  function getP2pPeerDevices(): Promise<WifiP2pDevice[]>;
  function getP2pPeerDevices(callback: AsyncCallback<WifiP2pDevice[]>): void;

  /**
   * Obtain the information about own device information. 
   * DeviceAddress in the returned WifiP2pDevice will be set "00:00:00:00:00:00",
   * if ohos.permission.GET_WIFI_LOCAL_MAC is not granted.
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.GET_WIFI_CONFIG
   * @returns Returns the information about own device info.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9
   */
  function getP2pLocalDevice(): Promise<WifiP2pDevice>;
  function getP2pLocalDevice(callback: AsyncCallback<WifiP2pDevice>): void;

  /**
   * Create a P2P group.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { WifiP2PConfig } config - Indicates the configuration for a group.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9
   */
  function createP2pGroup(config: WifiP2PConfig): void;

  /**
   * Remove a P2P group.
   * @permission ohos.permission.GET_WIFI_INFO
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9
   */
  function removeP2pGroup(): void;

  /**
   * Initiate a P2P connection to a device with the specified configuration.
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { WifiP2PConfig } config - Indicates the configuration for connecting to a specific group.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9
   */
  function p2pConnect(config: WifiP2PConfig): void;

  /**
   * Stop an ongoing p2p connection that is being established.
   * @permission ohos.permission.GET_WIFI_INFO
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9
   */
  function p2pCancelConnect(): void;

  /**
   * Start discover Wi-Fi P2P devices.
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9
   */
  function startDiscoverP2pDevices(): void;

  /**
   * Stop discover Wi-Fi P2P devices.
   * @permission ohos.permission.GET_WIFI_INFO
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9
   */
  function stopDiscoverP2pDevices(): void;

  /**
   * Delete the persistent P2P group with the specified network ID.
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { number } netId - Indicates the network ID of the group to be deleted.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function deletePersistentP2pGroup(netId: number): void;

  /**
   * Obtain information about the groups.
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @returns Returns the groups information.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function getP2pGroups(): Promise<Array<WifiP2pGroupInfo>>;
  function getP2pGroups(callback: AsyncCallback<Array<WifiP2pGroupInfo>>): void;

  /**
   * Set the name of the Wi-Fi P2P device.
   * @permission ohos.permission.SET_WIFI_INFO and ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { string } devName - Indicate the name to be set.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function setP2pDeviceName(devName: string): void;

  /**
   * Subscribe Wi-Fi status change events.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<number> } callback - the callback of on, 0: inactive, 1: active, 2: activating, 3: de-activating
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9
   */
  function on(type: "wifiStateChange", callback: Callback<number>): void;

  /**
   * Unsubscribe Wi-Fi status change events.
   *
   * <p>All callback functions will be deregistered If there is no specific callback parameter.</p>
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<number> } callback - the callback of off
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9
   */
  function off(type: "wifiStateChange", callback?: Callback<number>): void;

  /**
   * Subscribe Wi-Fi connection change events.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<number> } callback - the callback of on, 0: disconnected, 1: connected
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9
   */
  function on(type: "wifiConnectionChange", callback: Callback<number>): void;

  /**
   * Unsubscribe Wi-Fi connection change events.
   * All callback functions will be deregistered If there is no specific callback parameter.</p>
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<number> } callback - the callback of off
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9
   */
  function off(type: "wifiConnectionChange", callback?: Callback<number>): void;

  /**
   * Subscribe Wi-Fi scan status change events.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<number> } callback - the callback of on, 0: scan fail, 1: scan success
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9
   */
  function on(type: "wifiScanStateChange", callback: Callback<number>): void;

  /**
   * Unsubscribe Wi-Fi scan status change events.
   * All callback functions will be deregistered If there is no specific callback parameter.</p>
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<number> } callback - the callback of off
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9
   */
  function off(type: "wifiScanStateChange", callback?: Callback<number>): void;

  /**
   * Subscribe Wi-Fi rssi change events.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<number> } callback - the callback of on
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9
   */
  function on(type: "wifiRssiChange", callback: Callback<number>): void;

  /**
   * Unsubscribe Wi-Fi rssi change events.
   * All callback functions will be deregistered If there is no specific callback parameter.</p>
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<number> } callback - the callback of off
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9
   */
  function off(type: "wifiRssiChange", callback?: Callback<number>): void;

  /**
   * Subscribe Wi-Fi stream change events.
   * @permission ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { Callback<number> } callback - the callback of on, 1: stream down, 2: stream up, 3: stream bidirectional
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function on(type: "streamChange", callback: Callback<number>): void;

  /**
   * Unsubscribe Wi-Fi stream change events.
   * All callback functions will be deregistered If there is no specific callback parameter.</p>
   * @permission ohos.permission.MANAGE_WIFI_CONNECTION
   * @param { Callback<number> } callback - the callback of off
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function off(type: "streamChange", callback?: Callback<number>): void;

  /**
   * Subscribe Wi-Fi device config change events.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<number> } callback - the callback of on, 0: config is added, 1: config is changed, 2: config is removed.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function on(type: "deviceConfigChange", callback: Callback<number>): void;

  /**
   * Subscribe Wi-Fi device config change events.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<number> } callback - the callback of off, 0: config is added, 1: config is changed, 2: config is removed.
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2501000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function off(type: "deviceConfigChange", callback?: Callback<number>): void;

  /**
   * Subscribe Wi-Fi hotspot state change events.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<number> } callback - the callback of on, 0: inactive, 1: active, 2: activating, 3: de-activating
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @since 9
   */
  function on(type: "hotspotStateChange", callback: Callback<number>): void;

  /**
   * Unsubscribe Wi-Fi hotspot state change events.
   * All callback functions will be deregistered If there is no specific callback parameter.</p>
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<number> } callback - the callback of off
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @since 9
   */
  function off(type: "hotspotStateChange", callback?: Callback<number>): void;

  /**
   * Subscribe Wi-Fi hotspot sta join events.
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT
   * @param { Callback<StationInfo> } callback - the callback of on
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function on(type: "hotspotStaJoin", callback: Callback<StationInfo>): void;

  /**
   * Unsubscribe Wi-Fi hotspot sta join events.
   * All callback functions will be deregistered If there is no specific callback parameter.</p>
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT
   * @param { Callback<StationInfo> } callback - the callback of off
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function off(type: "hotspotStaJoin", callback?: Callback<StationInfo>): void;

  /**
   * Subscribe Wi-Fi hotspot sta leave events.
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT
   * @param { Callback<StationInfo> } callback - the callback of on
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core

   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function on(type: "hotspotStaLeave", callback: Callback<StationInfo>): void;

  /**
   * Unsubscribe Wi-Fi hotspot sta leave events.
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT
   * @param { Callback<StationInfo> } callback - the callback of off
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 202 - System API is not allowed called by Non-system application.
   * @throws {BusinessError} 401 - Invalid parameters.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2601000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function off(type: "hotspotStaLeave", callback?: Callback<StationInfo>): void;

  /**
   * Subscribe P2P status change events.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<number> } callback - the callback of on, 1: idle, 2: starting, 3:started, 4: closing, 5: closed
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9
   */
  function on(type: "p2pStateChange", callback: Callback<number>): void;

  /**
   * Unsubscribe P2P status change events.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<number> } callback - the callback of off
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9
   */
  function off(type: "p2pStateChange", callback?: Callback<number>): void;

  /**
   * Subscribe P2P connection change events.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<WifiP2pLinkedInfo> } callback - the callback of on
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9
   */
  function on(type: "p2pConnectionChange", callback: Callback<WifiP2pLinkedInfo>): void;

  /**
   * Unsubscribe P2P connection change events.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<WifiP2pLinkedInfo> } callback - the callback of off
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9
   */
  function off(type: "p2pConnectionChange", callback?: Callback<WifiP2pLinkedInfo>): void;

  /**
   * Subscribe P2P local device change events.
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { Callback<WifiP2pDevice> } callback - the callback of on
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9
   */
  function on(type: "p2pDeviceChange", callback: Callback<WifiP2pDevice>): void;

  /**
   * Unsubscribe P2P local device change events.
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { Callback<WifiP2pDevice> } callback - the callback of off
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9
   */
  function off(type: "p2pDeviceChange", callback?: Callback<WifiP2pDevice>): void;

  /**
   * Subscribe P2P peer device change events.
   * @permission ohos.permission.GET_WIFI_INFO and ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { Callback<WifiP2pDevice[]> } callback - the callback of on
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9
   */
  function on(type: "p2pPeerDeviceChange", callback: Callback<WifiP2pDevice[]>): void;

  /**
   * Unsubscribe P2P peer device change events.
   * @permission ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION
   * @param { Callback<WifiP2pDevice[]> } callback - the callback of off
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9
   */
  function off(type: "p2pPeerDeviceChange", callback?: Callback<WifiP2pDevice[]>): void;

  /**
   * Subscribe P2P persistent group change events.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<void> } callback - the callback of on
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9
   */
  function on(type: "p2pPersistentGroupChange", callback: Callback<void>): void;

  /**
   * Unsubscribe P2P persistent group change events.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<void> } callback - the callback of off
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9
   */
  function off(type: "p2pPersistentGroupChange", callback?: Callback<void>): void;

  /**
   * Subscribe P2P discovery events.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<number> } callback - the callback of on
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9
   */
  function on(type: "p2pDiscoveryChange", callback: Callback<number>): void;

  /**
   * Unsubscribe P2P discovery events.
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { Callback<number> } callback - the callback of off
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 401 - Invalid parameters.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2801000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9
   */
  function off(type: "p2pDiscoveryChange", callback?: Callback<number>): void;

  /**
   * Wi-Fi EAP method.
   * @enum { number }
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  enum EapMethod {
    /**
     * EAP NONE
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    EAP_NONE,
    /**
     * EAP PEAP
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    EAP_PEAP,
    /**
     * EAP TLS
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    EAP_TLS,
    /**
     * EAP TTLS
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    EAP_TTLS,
    /**
     * EAP PWD
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    EAP_PWD,
    /**
     * EAP SIM
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    EAP_SIM,
    /**
     * EAP AKA
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    EAP_AKA,
    /**
     * EAP AKA PRIME
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    EAP_AKA_PRIME,
    /**
     * EAP UNAUTH TLS
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    EAP_UNAUTH_TLS
  }

  /**
   * Wi-Fi phase 2 method.
   * @enum { number }
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  enum Phase2Method {
    /**
     * Phase2 NONE
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    PHASE2_NONE,
    /**
     * Phase2 PAP
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    PHASE2_PAP,
    /**
     * Phase2 MSCHAP
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    PHASE2_MSCHAP,
    /**
     * Phase2 MSCHAPV2
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    PHASE2_MSCHAPV2,
    /**
     * Phase2 GTC
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    PHASE2_GTC,
    /**
     * Phase2 SIM
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    PHASE2_SIM,
    /**
     * Phase2 AKA
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    PHASE2_AKA,
    /**
     * Phase2 AKA+
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    PHASE2_AKA_PRIME
  }

  /**
   * Wi-Fi disconnected reason.
   * @enum { number }
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 10
   */
  enum DisconnectedReason {
    /**
     * Default reason
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    DISC_REASON_DEFAULT = 0,

    /**
     * Password is wrong
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    DISC_REASON_WRONG_PWD = 1,

    /**
     * The number of router's connection reaches the maximum number limit
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    DISC_REASON_CONNECTION_FULL = 2
  }

  /**
   * Wi-Fi EAP config.
   * @typedef WifiEapConfig
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  interface WifiEapConfig {
    /** 
     * EAP authentication method 
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    eapMethod: EapMethod;

    /** 
     * Phase 2 authentication method
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    phase2Method: Phase2Method;

    /** 
     * The identity
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    identity: string;

    /** 
     * Anonymous identity
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    anonymousIdentity: string;

    /** 
     * Password
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    password: string;

    /** 
     * CA certificate alias
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    caCertAliases: string;

    /** 
     * CA certificate path
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    caPath: string;

    /** 
     * Client certificate alias
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    clientCertAliases: string;

    /** 
     * content of user's certificate
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    certEntry: Uint8Array;

    /** 
     * Password of user's certificate
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    certPassword: string;

    /** 
     * Alternate subject match
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    altSubjectMatch: string;

    /** 
     * Domain suffix match
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    domainSuffixMatch: string;

    /** 
     * Realm for Passpoint credential
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    realm: string;

    /** 
     * Public Land Mobile Network of the provider of Passpoint credential
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    plmn: string;

    /** 
     * Sub ID of the SIM card
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    eapSubId: number;
  }

  /**
   * Wi-Fi device configuration information.
   * @typedef WifiDeviceConfig
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9
   */
  interface WifiDeviceConfig {
    /** 
     * Wi-Fi SSID: the maximum length is 32.
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    ssid: string;

    /**
     * Wi-Fi bssid(MAC): the length is 6.
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    bssid?: string;

    /**
     * Wi-Fi key: maximum length is 64.
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    preSharedKey: string;

    /**
     * Hide SSID or not, false(default): not hide
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    isHiddenSsid?: boolean;

    /**
     * Security type: reference definition of WifiSecurityType
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    securityType: WifiSecurityType;

    /**
     * The UID of the Wi-Fi configuration creator.
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    creatorUid?: number;

    /**
     * Disable reason
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    disableReason?: number;

    /**
     * Allocated networkId
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    netId?: number;

    /**
     * Random mac type
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    randomMacType?: number;

    /**
     * Random mac address, the length is 6.
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    randomMacAddr?: string;

    /**
     * IP Type
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    ipType?: IpType;

    /**
     * IP config of static
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    staticIp?: IpConfig;

    /**
     * EAP config info.
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    eapConfig?: WifiEapConfig;
  }

  /**
   * Wi-Fi IP configuration information.
   * @typedef IpConfig
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  interface IpConfig {
    /**
     * IP address.
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    ipAddress: number;

    /**
     * Gate way.
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    gateway: number;

    /**
     * Prefix length.
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    prefixLength: number;

    /**
     * DNS servers.
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    dnsServers: number[];

    /**
     * Domains.
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    domains: Array<string>;
  }

  /**
   * Wi-Fi information elements.
   * @typedef WifiInfoElem
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9
   */
  interface WifiInfoElem {
    /**
     * Element id
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    eid: number;

    /**
     * Element content
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    content: Uint8Array;
  }

  /**
   * Describes the wifi channel width.
   * @enum { number }
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9
   */
  enum WifiChannelWidth {
    /**
     * 20MHz.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    WIDTH_20MHZ = 0,

    /**
     * 40MHz.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    WIDTH_40MHZ = 1,

    /**
     * 80MHz.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    WIDTH_80MHZ = 2,

    /**
     * 160MHz.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    WIDTH_160MHZ = 3,

    /**
     * 80MHz plus.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    WIDTH_80MHZ_PLUS = 4,

    /**
     * Invalid.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    WIDTH_INVALID
  }

  /**
   * Describes the scanned Wi-Fi information.
   * @typedef WifiScanInfo
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9
   */
  interface WifiScanInfo {
    /**
     * Wi-Fi SSID: the maximum length is 32 
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    ssid: string;

    /**
     * Wi-Fi bssid(MAC): the length is 6
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    bssid: string;

    /**
     * Hotspot capability
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    capabilities: string;

    /**
     * Security type: reference definition of WifiSecurityType
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    securityType: WifiSecurityType;

    /**
     * Received signal strength indicator (RSSI)
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    rssi: number;

    /**
     * Frequency band, 1: 2.4G, 2: 5G
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    band: number;

    /**
     * Frequency
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    frequency: number;

    /**
     * Channel width
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    channelWidth: number;

    /**
     * Center frequency 0.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    centerFrequency0: number;

    /**
     * Center frequency 1.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    centerFrequency1: number;

    /**
     * Information elements.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    infoElems: Array<WifiInfoElem>;

    /**
     * Time stamp
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    timestamp: number;
  }

  /**
   * Describes the wifi security type.
   * @enum { number }
   * @syscap SystemCapability.Communication.WiFi.Core
   * @since 9
   */
  enum WifiSecurityType {
    /**
     * Invalid security type
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 9
     */
    WIFI_SEC_TYPE_INVALID = 0,

    /**
     * Open
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 9
     */
    WIFI_SEC_TYPE_OPEN = 1,

    /** 
     * Wired Equivalent Privacy (WEP)
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 9
     */
    WIFI_SEC_TYPE_WEP = 2,

    /**
     * Pre-shared key (PSK)
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 9
     */
    WIFI_SEC_TYPE_PSK = 3,

    /**
     * Simultaneous Authentication of Equals (SAE)
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 9
     */
    WIFI_SEC_TYPE_SAE = 4,

    /**
     * EAP authentication.
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 9
     */
    WIFI_SEC_TYPE_EAP = 5,

    /**
     * SUITE_B_192 192 bit level.
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 9
     */
    WIFI_SEC_TYPE_EAP_SUITE_B = 6,

    /**
     * Opportunistic Wireless Encryption.
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 9
     */
    WIFI_SEC_TYPE_OWE = 7,

    /**
     * WAPI certificate to be specified.
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 9
     */
    WIFI_SEC_TYPE_WAPI_CERT = 8,

    /**
     * WAPI pre-shared key to be specified.
     *
     * @syscap SystemCapability.Communication.WiFi.Core
     * @since 9
     */
    WIFI_SEC_TYPE_WAPI_PSK = 9
  }

  /**
   * Wi-Fi band type.
   * @enum { number }
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 10
   */
  enum WifiBandType {
    /**
     * Default.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10
     */
    WIFI_BAND_NONE,

    /**
     * Band 2.4G.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10
     */
    WIFI_BAND_2G,

    /**
     * Band 5G.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10
     */
    WIFI_BAND_5G,

    /**
     * Band 6G.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10
     */
    WIFI_BAND_6G,

    /**
     * Band 60G.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10
     */
    WIFI_BAND_60G
  }

  /**
   * Wi-Fi standard.
   * @enum { number }
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 10
   */
  enum WifiStandard {
    /**
     * Undefined
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10
     */
    WIFI_STANDARD_UNDEFINED,

    /**
     * Wifi 802.11a
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10
     */
    WIFI_STANDARD_11A,

    /**
     * Wifi 802.11b
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10
     */
    WIFI_STANDARD_11B,

    /**
     * Wifi 802.11g
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10
     */
    WIFI_STANDARD_11G,

    /**
     * Wifi 802.11n
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10
     */
    WIFI_STANDARD_11N,

    /**
     * Wifi 802.11ac
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10
     */
    WIFI_STANDARD_11AC,

    /**
     * Wifi 802.11ax
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10
     */
    WIFI_STANDARD_11AX,

    /**
     * Wifi 802.11ad 
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10
     */
    WIFI_STANDARD_11AD
  }

  /**
   * Wi-Fi connection information.
   * @typedef WifiLinkedInfo
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9
   */
  interface WifiLinkedInfo {
    /**
     * The SSID of the Wi-Fi hotspot 
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    ssid: string;

    /**
     * The BSSID of the Wi-Fi hotspot 
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    bssid: string;

    /**
     * The ID(uniquely identifies) of a Wi-Fi connection. 
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    networkId: number;

    /**
     * The RSSI(dBm) of a Wi-Fi access point.  
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    rssi: number;

    /**
     * The frequency band of a Wi-Fi access point.  
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    band: number;

    /**
     * The speed of a Wi-Fi access point.  
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    linkSpeed: number;

    /**
     * The rx speed of a Wi-Fi access point. 
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10
     */
    rxLinkSpeed: number;

    /**
     * Max tx speed of a Wi-Fi access point. 
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10
     */
    maxSupportedTxLinkSpeed: number;

    /**
     * Max rx speed of a Wi-Fi access point. 
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10
     */
    maxSupportedRxLinkSpeed: number;

    /**
     * The frequency of a Wi-Fi access point.  
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    frequency: number;

    /**
     * Whether the SSID of the access point (AP) of this Wi-Fi connection is hidden. 
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    isHidden: boolean;

    /**
     * Whether this Wi-Fi connection restricts the data volume. 
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    isRestricted: boolean;

    /**
     * The load value of this Wi-Fi connection. A greater value indicates a higher load. 
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    chload: number;

    /**
     * The signal-to-noise ratio (SNR) of this Wi-Fi connection. 
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    snr: number;

    /**
     * Type of macAddress: 0 - real mac, 1 - random mac.
     * @since 9
     * @syscap SystemCapability.Communication.WiFi.STA
     */
    macType: number;

    /**
     * The Wi-Fi MAC address of a device. 
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    macAddress: string;

    /**
     * The IP address of this Wi-Fi connection. 
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    ipAddress: number;

    /**
     * The state of the supplicant of this Wi-Fi connection. 
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    suppState: SuppState;

    /**
     * The state of this Wi-Fi connection. 
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10
     */
    connState: ConnState;

    /**
     * Channel width of the connected hotspot. 
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10
     */
    channelWidth: WifiChannelWidth;

    /**
     * Wifi standard of current connection. 
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 10
     */
    wifiStandard: WifiStandard;
  }

  /**
   * Wi-Fi IP information.
   * @typedef IpInfo
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9
   */
  interface IpInfo {
    /**
     * The IP address of the Wi-Fi connection
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    ipAddress: number;

    /**
     * The gateway of the Wi-Fi connection
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    gateway: number;

    /**
     * The network mask of the Wi-Fi connection
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    netmask: number;

    /**
     * The primary DNS server IP address of the Wi-Fi connection
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    primaryDns: number;

    /**
     * The secondary DNS server IP address of the Wi-Fi connection
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    secondDns: number;

    /**
     * The DHCP server IP address of the Wi-Fi connection
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    serverIp: number;

    /**
     * The IP address lease duration of the Wi-Fi connection
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    leaseDuration: number;
  }

  /**
   * Wi-Fi hotspot configuration information.
   * @typedef HotspotConfig
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  interface HotspotConfig {
    /**
     * The SSID of the Wi-Fi hotspot
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    ssid: string;

    /**
     * The encryption mode of the Wi-Fi hotspot
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    securityType: WifiSecurityType;

    /**
     * The frequency band of the Wi-Fi hotspot
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    band: number;

    /**
     * The channel of the Wi-Fi hotspot.
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    channel: number;

    /**
     * The password of the Wi-Fi hotspot
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    preSharedKey: string;

    /**
     * The maximum number of connections allowed by the Wi-Fi hotspot
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    maxConn: number;

    /**
     * IP address of the dhcp server, it's a string, For example 192.168.43.1
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi Hide this for inner system use.
     * @since 10
     */
    ipAddress: string;
  }

  /**
   * Wi-Fi station information.
   * @typedef StationInfo
   * @syscap SystemCapability.Communication.WiFi.AP.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  interface StationInfo {
    /**
     * The network name of the Wi-Fi client
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    name: string;

    /**
     * The MAC address of the Wi-Fi client
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    macAddress: string;

    /**
     * The IP address of the Wi-Fi client
     * @syscap SystemCapability.Communication.WiFi.AP.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    ipAddress: string;
  }

  /**
   * Wi-Fi IP type enumeration.
   *
   * @enum { number }
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  enum IpType {
    /**
     * Use statically configured IP settings
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    STATIC,

    /**
     * Use dynamically configured IP settings
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    DHCP,

    /**
     * No IP details are assigned
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    UNKNOWN
  }

  /**
   * The state of the supplicant enumeration.
   *
   * @enum { number }
   * @syscap SystemCapability.Communication.WiFi.STA
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  export enum SuppState {
    /**
     * The supplicant is not associated with or is disconnected from the AP.
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    DISCONNECTED,

    /**
     * The network interface is disabled.
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    INTERFACE_DISABLED,

    /**
     * The supplicant is disabled.
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    INACTIVE,

    /**
     * The supplicant is scanning for a Wi-Fi connection.
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    SCANNING,

    /**
     * The supplicant is authenticating with a specified AP.
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    AUTHENTICATING,

    /**
     * The supplicant is associating with a specified AP.
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    ASSOCIATING,

    /**
     * The supplicant is associated with a specified AP.
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    ASSOCIATED,

    /**
     * The four-way handshake is ongoing.
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    FOUR_WAY_HANDSHAKE,

    /**
     * The group handshake is ongoing.
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    GROUP_HANDSHAKE,

    /**
     * All authentication is completed.
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    COMPLETED,

    /**
     * Failed to establish a connection to the supplicant.
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    UNINITIALIZED,

    /**
     * The supplicant is in an unknown or invalid state.
     * @syscap SystemCapability.Communication.WiFi.STA
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    INVALID
  }

  /**
   * The state of Wi-Fi connection enumeration.
   *
   * @enum { number }
   * @syscap SystemCapability.Communication.WiFi.STA
   * @since 9
   */
  export enum ConnState {
    /**
     * The device is searching for an available AP.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    SCANNING,

    /**
     * The Wi-Fi connection is being set up.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    CONNECTING,

    /**
     * The Wi-Fi connection is being authenticated.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    AUTHENTICATING,

    /**
     * The IP address of the Wi-Fi connection is being obtained.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    OBTAINING_IPADDR,

    /**
     * The Wi-Fi connection has been set up.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    CONNECTED,

    /**
     * The Wi-Fi connection is being torn down.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    DISCONNECTING,

    /**
     * The Wi-Fi connection has been torn down.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    DISCONNECTED,

    /**
     * Failed to set up the Wi-Fi connection.
     *
     * @syscap SystemCapability.Communication.WiFi.STA
     * @since 9
     */
    UNKNOWN
  }

  /**
   * P2P device information.
   *
   * @typedef WifiP2pDevice
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9
   */
  interface WifiP2pDevice {
    /**
     * Device name
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9
     */
    deviceName: string;

    /**
     * Device mac address
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9
     */
    deviceAddress: string;

    /**
     * Primary device type
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9
     */
    primaryDeviceType: string;

    /**
     * Device status
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9
     */
    deviceStatus: P2pDeviceStatus;

    /**
     * Device group capabilities
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9
     */
    groupCapabilities: number;
  }

  /**
   * P2P config.
   *
   * @typedef WifiP2PConfig
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9
   */
  interface WifiP2PConfig {
    /** 
     * Device mac address
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9
     */
    deviceAddress: string;

    /**
     * Group network ID. When creating a group, -1 indicates creates a temporary group,
     * -2: indicates creates a persistent group
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9
     */
    netId: number;

    /**
     * The passphrase of this {@code WifiP2pConfig} instance 
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9
     */
    passphrase: string;

    /**
     * Group name 
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9
     */
    groupName: string;

    /**
     * Group owner band
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9
     */
    goBand: GroupOwnerBand;
  }

  /**
   * P2P group information.
   *
   * @typedef WifiP2pGroupInfo
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9
   */
  interface WifiP2pGroupInfo {
    /**
     * Indicates whether it is group owner
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9
     */
    isP2pGo: boolean;

    /**
     * Group owner information
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9
     */
    ownerInfo: WifiP2pDevice;

    /**
     * The group passphrase
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9
     */
    passphrase: string;

    /**
     * Interface name
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9
     */
    interface: string;

    /**
     * Group name
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9
     */
    groupName: string;

    /**
     * Network ID
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9
     */
    networkId: number;

    /**
     * Frequency
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9
     */
    frequency: number;

    /**
     * Client list
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9
     */
    clientDevices: WifiP2pDevice[];

    /**
     * Group owner IP address
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9
     */
    goIpAddress: string;
  }

  /**
   * P2P connection status.
   *
   * @enum { number }
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9
   */
  enum P2pConnectState {
    /**
     * p2p is disconnected 
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9
     */
    DISCONNECTED = 0,

    /**
     * p2p is connected 
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9
     */
    CONNECTED = 1
  }

  /**
   * P2P linked information.
   *
   * @typedef WifiP2pLinkedInfo
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9
   */
  interface WifiP2pLinkedInfo {
    /**
     * Connection status 
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9
     */
    connectState: P2pConnectState;

    /**
     * Indicates whether it is group owner
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9
     */
    isGroupOwner: boolean;

    /**
     * Group owner address
     *
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9
     */
    groupOwnerAddr: string;
  }

  /**
   * P2P device status.
   *
   * @enum { number }
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9
   */
  enum P2pDeviceStatus {
    /** 
     * Indicate p2p device is connected.  
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9
     */
    CONNECTED = 0,

    /** 
     * Indicate p2p device is invited.   
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9
     */
    INVITED = 1,

    /**
     * Indicate p2p device is failed.   
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9
     */
    FAILED = 2,

    /**
     * Indicate p2p device is available.   
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9
     */
    AVAILABLE = 3,

    /** 
     * Indicate p2p device is unavailable.   
     * @syscap SystemCapability.Communication.WiFi.P2P
     * @since 9
     */
    UNAVAILABLE = 4
  }

  /**
   * P2P group owner band.
   *
   * @enum { number }
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9
   */
  enum GroupOwnerBand {
  /**
   * default band.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9
   */
    GO_BAND_AUTO = 0,

  /**
   * 2.4G band.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9
   */
    GO_BAND_2GHZ = 1,

  /**
   * 5G band.
   * @syscap SystemCapability.Communication.WiFi.P2P
   * @since 9
   */
    GO_BAND_5GHZ = 2
  }
}

export default wifiManager;
