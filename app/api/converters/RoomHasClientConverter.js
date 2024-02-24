import { convertClient, unconvertClient } from "./ClientConverter";
import { convertRoom, unconvertRoom } from "./RoomConverter";

export function convertRoomHasClient(dbRhc, rhc) {
    if (!rhc)
        rhc = new {}
    rhc.id = dbRhc.id
    rhc.client = convertClient(dbRhc.client)
    rhc.room = convertRoom(dbRhc.room)
    return rhc
}

export function unconvertRoomHasClient(rhc) {
    let dbRhc = {}
    if (rhc.id)
        dbRhc.id = rhc.id
    if (rhc.client)
        dbRhc.client = unconvertClient(rhc.client)
    if (rhc.room)
        dbRhc.room = unconvertRoom(rhc.room)
    return dbRhc
}