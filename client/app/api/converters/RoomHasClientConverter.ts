import { Client } from "../database/entities/Client";
import { Room } from "../database/entities/Room";
import { RoomHasClient } from "../database/entities/RoomHasClient";
import { User } from "../database/entities/User";
import { RoomHasClientModel } from "../models/RoomHasClientModel";
import { UserModel } from "../models/UserModel";
import { convertClient, unconvertClient } from "./ClientConverter";
import { convertRoom, unconvertRoom } from "./RoomConverter";

export function convertRoomHasClient(dbRhc: RoomHasClient, rhc?: RoomHasClientModel): RoomHasClientModel {
    if (!rhc)
        rhc = new RoomHasClientModel()
    rhc.id = dbRhc.id
    rhc.client = convertClient(dbRhc.client)
    rhc.room = convertRoom(dbRhc.room)
    return rhc
}

export function unconvertRoomHasClient(rhc: RoomHasClientModel): RoomHasClient {
    let dbRhc = new RoomHasClient()
    if (rhc.id)
        dbRhc.id = rhc.id
    if (rhc.client)
        dbRhc.client = unconvertClient(rhc.client)
    if (rhc.room)
        dbRhc.room = unconvertRoom(rhc.room)
    return dbRhc
}