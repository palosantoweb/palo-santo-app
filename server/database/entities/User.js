"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitUser = exports.User = void 0;
const sequelize_1 = require("sequelize");
class User extends sequelize_1.Model {
}
exports.User = User;
function InitUser(sequelize) {
    User.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: sequelize_1.DataTypes.STRING(128),
            allowNull: false
        },
        canEdit: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false
        },
        canView: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false
        },
    }, { sequelize, tableName: "user" });
    return User;
}
exports.InitUser = InitUser;
//# sourceMappingURL=User.js.map