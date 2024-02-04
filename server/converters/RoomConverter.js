"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unconvertRoom = exports.convertRoom = void 0;
const Room_1 = require("../database/entities/Room");
const RoomModel_1 = require("../models/RoomModel");
function convertRoom(dbRoom, room) {
    if (!room)
        room = new RoomModel_1.RoomModel();
    room.id = dbRoom.id;
    return room;
}
exports.convertRoom = convertRoom;
function unconvertRoom(room) {
    let dbRoom = new Room_1.Room();
    if (room.id)
        dbRoom.id = room.id;
    return dbRoom;
}
exports.unconvertRoom = unconvertRoom;
//# sourceMappingURL=RoomConverter.js.map