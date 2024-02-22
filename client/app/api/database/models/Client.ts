/* eslint-disable no-unused-vars */
import { Model, InferAttributes, Sequelize, DataTypes, CreationOptional, InferCreationAttributes } from 'sequelize';
import connection from '../connection';

const InitClient = (sequelize: Sequelize) => {
    class Client extends Model<InferAttributes<Client>, InferCreationAttributes<Client>> {
        declare id: CreationOptional<number>;
        declare birthDate: CreationOptional<Date>;
        declare email: CreationOptional<string>;
        declare name: CreationOptional<string>;
        declare nationality: CreationOptional<string>;
        declare phoneNumber: CreationOptional<number>;
    }
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
export default InitClient(connection);