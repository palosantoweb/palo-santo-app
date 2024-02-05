"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitRoomHasClient = exports.RoomHasClient = void 0;
const sequelize_1 = require("sequelize");
const Room_1 = require("./Room");
const Client_1 = require("./Client");
class RoomHasClient extends sequelize_1.Model {
}
exports.RoomHasClient = RoomHasClient;
function InitRoomHasClient(sequelize) {
    RoomHasClient.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        room: {
            field: "room_id",
            type: sequelize_1.DataTypes.INTEGER,
            references: {
                model: Room_1.Room,
                key: "id",
            },
        },
        client: {
            field: "client_id",
            type: sequelize_1.DataTypes.INTEGER,
            references: {
                model: Client_1.Client,
                key: "id"
            }
        },
        status: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        }
    }, { sequelize, tableName: "room_has_client" });
    return RoomHasClient;
}
exports.InitRoomHasClient = InitRoomHasClient;
//# sourceMappingURL=RoomHasClient.js.map