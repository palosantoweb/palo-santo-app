"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitRoom = exports.Room = void 0;
const sequelize_1 = require("sequelize");
class Room extends sequelize_1.Model {
}
exports.Room = Room;
function InitRoom(sequelize) {
    Room.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
    }, { sequelize, tableName: "room" });
    return Room;
}
exports.InitRoom = InitRoom;
//# sourceMappingURL=Room.js.map