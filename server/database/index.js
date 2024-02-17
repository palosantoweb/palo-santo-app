"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const db_config_1 = require("./db.config");
const User_1 = require("./entities/User");
const Client_1 = require("./entities/Client");
const Room_1 = require("./entities/Room");
const RoomHasClient_1 = require("./entities/RoomHasClient");
// Se inicializa El entorno de SEQUELIZE con los datos de la base
let sequelize = 
// process.env.NODE_ENV === "production"
// ?
new sequelize_1.Sequelize({
    database: db_config_1.dbConfig.DB,
    dialect: 'postgres',
    host: db_config_1.dbConfig.dbOptions.HOST,
    port: 5432,
    username: db_config_1.dbConfig.USER,
    password: db_config_1.dbConfig.PASSWORD,
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
});
exports.sequelize = sequelize;
// : new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
//     dialect: "postgres",
//     ...dbConfig.dbOptions
// })
// Entidades
const USER = (0, User_1.InitUser)(sequelize);
const CLIENT = (0, Client_1.InitClient)(sequelize);
const ROOM = (0, Room_1.InitRoom)(sequelize);
const RoomHasClient = (0, RoomHasClient_1.InitRoomHasClient)(sequelize);
CLIENT.belongsToMany(ROOM, {
    through: RoomHasClient,
    foreignKey: { name: 'client_id' },
});
ROOM.belongsToMany(CLIENT, {
    through: RoomHasClient,
    foreignKey: { name: 'room_id' },
});
//# sourceMappingURL=index.js.map