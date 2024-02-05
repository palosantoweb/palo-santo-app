"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unconvertRoomHasClient = exports.convertRoomHasClient = void 0;
const RoomHasClient_1 = require("../database/entities/RoomHasClient");
const RoomHasClientModel_1 = require("../models/RoomHasClientModel");
const ClientConverter_1 = require("./ClientConverter");
const RoomConverter_1 = require("./RoomConverter");
function convertRoomHasClient(dbRhc, rhc) {
    if (!rhc)
        rhc = new RoomHasClientModel_1.RoomHasClientModel();
    rhc.id = dbRhc.id;
    rhc.client = (0, ClientConverter_1.convertClient)(dbRhc.client);
    rhc.room = (0, RoomConverter_1.convertRoom)(dbRhc.room);
    return rhc;
}
exports.convertRoomHasClient = convertRoomHasClient;
function unconvertRoomHasClient(rhc) {
    let dbRhc = new RoomHasClient_1.RoomHasClient();
    if (rhc.id)
        dbRhc.id = rhc.id;
    if (rhc.client)
        dbRhc.client = (0, ClientConverter_1.unconvertClient)(rhc.client);
    if (rhc.room)
        dbRhc.room = (0, RoomConverter_1.unconvertRoom)(rhc.room);
    return dbRhc;
}
exports.unconvertRoomHasClient = unconvertRoomHasClient;
//# sourceMappingURL=RoomHasClientConverter.js.map