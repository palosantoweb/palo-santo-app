"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomHasClientScheme = void 0;
const ClientSchema_1 = require("./ClientSchema");
const RoomSchema_1 = require("./RoomSchema");
exports.RoomHasClientScheme = {
    type: "object",
    properties: {
        client: ClientSchema_1.ClientScheme,
        room: RoomSchema_1.RoomScheme
    }
};
//# sourceMappingURL=RoomHasClientSchema.js.map