import { Sequelize } from "sequelize";
import { dbConfig } from "./db.config"
import { InitUser } from "./entities/User";
import { InitClient } from "./entities/Client";
import { InitRoom } from "./entities/Room";
import { InitRoomHasClient } from "./entities/RoomHasClient";

// Se inicializa El entorno de SEQUELIZE con los datos de la base
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    dialect: "postgres",
    ...dbConfig.dbOptions
})

// Entidades
const USER = InitUser(sequelize)
const CLIENT = InitClient(sequelize)
const ROOM = InitRoom(sequelize)
const RoomHasClient = InitRoomHasClient(sequelize)

CLIENT.belongsToMany(ROOM, {
    through: RoomHasClient,
    foreignKey: { name: "client_id" }
})
ROOM.belongsToMany(CLIENT, {
    through: RoomHasClient,
    foreignKey: { name: "room_id" }
})

export {
    sequelize,
}