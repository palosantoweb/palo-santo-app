import Room from "../database/models/Room";
import { RoomModel } from "../models/RoomModel";

export function convertRoom(dbRoom: any, room?: RoomModel): RoomModel {
    if (!room)
        room = new RoomModel()
    room.id = dbRoom.id
    return room;
}

export function unconvertRoom(room: RoomModel): any {
    let dbRoom = new Room()
    if (room.id)
        dbRoom.id = room.id
    return dbRoom;
}