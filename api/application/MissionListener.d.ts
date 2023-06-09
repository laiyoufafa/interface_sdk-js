/*
 * Copyright (c) 2021-2022 Huawei Device Co., Ltd.
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

import image from "../@ohos.multimedia.image";

/**
 * MissionListener registered by app.
 *
 * @name MissionListener
 * @since 8
 * @syscap SystemCapability.Ability.AbilityRuntime.Mission
 * @permission N/A
 * @systemapi hide for inner use.
 */
 export interface MissionListener {
    /**
     * Called by system when mission created.
     *
     * @since 8
     * @syscap SystemCapability.Ability.AbilityRuntime.Mission
     * @param mission Indicates the id of created mission.
     * @return -
     */
    onMissionCreated(mission: number): void;

    /**
     * Called by system when mission destroyed.
     *
     * @since 8
     * @syscap SystemCapability.Ability.AbilityRuntime.Mission
     * @param mission Indicates the id of destroyed mission.
     * @return -
     */
    onMissionDestroyed(mission: number): void;

    /**
     * Called by system when mission shapshot changed.
     *
     * @since 8
     * @syscap SystemCapability.Ability.AbilityRuntime.Mission
     * @param mission Indicates the id of the mission which the snapshot changes
     * @return -
     */
    onMissionSnapshotChanged(mission: number): void;

    /**
     * Called by system when mission moved to fornt.
     *
     * @since 8
     * @syscap SystemCapability.Ability.AbilityRuntime.Mission
     * @param mission Indicates the id of the mission being moved to the foreground.
     * @return -
     */
    onMissionMovedToFront(mission: number): void;

    /**
     * Called by system when mission icon has changed.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Mission
     * @param mission Indicates the id of the mission whose icon has changed.
     * @param icon Indicates the icon of the mission whose icon has changed.
     * @return -
     */
     onMissionIconUpdated(mission: number, icon: image.PixelMap): void;
}