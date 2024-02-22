import { Model, InferAttributes, InferCreationAttributes, CreationOptional, Sequelize, DataTypes } from 'sequelize';

export class Client extends Model<InferAttributes<Client>, InferCreationAttributes<Client>> {
    declare id: CreationOptional<number>;
    declare birthDate: CreationOptional<Date>;
    declare email: CreationOptional<string>;
    declare name: CreationOptional<string>;
    declare nationality: CreationOptional<string>;
    declare phoneNumber: CreationOptional<number>;
}

export function InitClient(sequelize: Sequelize) {
    Client.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        birthDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nationality: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phoneNumber: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, { sequelize, tableName: "client" })
    return Client
}