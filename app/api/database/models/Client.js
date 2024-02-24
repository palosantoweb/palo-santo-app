/* eslint-disable no-unused-vars */
import { Model, DataTypes } from 'sequelize';
import connection from '../connection';

const InitClient = (sequelize) => {
    class Client extends Model {
        id;
        birthDate
        email;
        name;
        nationality;
        phoneNumber;
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
            type: DataTypes.STRING,
            allowNull: false
        }
    }, { sequelize, tableName: "client" })
    return Client
}
export default InitClient(connection);