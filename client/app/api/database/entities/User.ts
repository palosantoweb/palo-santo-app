import { Model, InferAttributes, InferCreationAttributes, CreationOptional, Sequelize, DataTypes } from 'sequelize';

export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    declare id: CreationOptional<number>;
    declare email: CreationOptional<string>;
    declare canEdit: CreationOptional<boolean>;
    declare canView: CreationOptional<boolean>;
}

export function InitUser(sequelize: Sequelize) {
    User.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING(128),
            allowNull: false
        },
        canEdit: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        canView: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
    }, { sequelize, tableName: "user" })
    return User;
}