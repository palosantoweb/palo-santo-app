"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitClient = exports.Client = void 0;
const sequelize_1 = require("sequelize");
class Client extends sequelize_1.Model {
}
exports.Client = Client;
function InitClient(sequelize) {
    Client.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        birthDate: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false
        },
        email: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        nationality: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        phoneNumber: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false
        }
    }, { sequelize, tableName: "client" });
    return Client;
}
exports.InitClient = InitClient;
//# sourceMappingURL=Client.js.map