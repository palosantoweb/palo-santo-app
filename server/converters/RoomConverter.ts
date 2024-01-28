import { Room } from "../database/entities/Room";
import { RoomModel } from "../models/RoomModel";

export function convertRoom(dbRoom: Room, room?: RoomModel): RoomModel {
    if (!room)
        room = new RoomModel()
    room.id = dbRoom.id
    return room;
}

export function unconvertRoom(room: RoomModel): Room {
    let dbRoom = new Room()
    if (room.id)
        dbRoom.id = room.id
    return dbRoom;
}