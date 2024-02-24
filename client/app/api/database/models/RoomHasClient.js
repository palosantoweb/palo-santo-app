/* eslint-disable no-unused-vars */
import { Model, DataTypes } from 'sequelize';
import connection from '../connection';
import Room from './Room'
import Client from './Room'

const InitRoomHasClient = (sequelize) => {
    class RoomHasClient extends Model {
        id;
        room;
        client;
        status;
    }

    RoomHasClient.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        room: {
            field: "room_id",
            type: DataTypes.INTEGER,
            references: {
                model: Room,
                key: "id",
            },
        },
        client: {
            field: "client_id",
            type: DataTypes.INTEGER,
            references: {
                model: Client,
                key: "id"
            }
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, { sequelize, tableName: "room_has_client" })
    return RoomHasClient;
}
export default InitRoomHasClient(connection);