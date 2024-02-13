import { Sequelize } from "sequelize";
import { dbConfig } from "./db.config"
import { InitUser } from "./entities/User";
import { InitClient } from "./entities/Client";
import { InitRoom } from "./entities/Room";
import { InitRoomHasClient } from "./entities/RoomHasClient";

// Se inicializa El entorno de SEQUELIZE con los datos de la base
let sequelize =
    // process.env.NODE_ENV === "production"
        // ? 
        new Sequelize({
            database: "palo_santo",
            dialect: "postgres",
            host: "127.0.0.1",
            port: 5432,
            username: "postgres",
            password: "DCI185327set",
            pool: {
                max: 3,
                min: 1,
                idle: 10000,
            },
            dialectOptions: {
                ssl: {
                    require: true,
                    // Ref.: https://github.com/brianc/node-postgres/issues/2009
                    rejectUnauthorized: false,
                },
                keepAlive: true,
            },
            ssl: true,
        })
        // : new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
        //     dialect: "postgres",
        //     ...dbConfig.dbOptions
        // })

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