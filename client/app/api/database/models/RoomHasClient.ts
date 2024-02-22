/* eslint-disable no-unused-vars */
import { Model, InferAttributes, Sequelize, DataTypes, CreationOptional, InferCreationAttributes } from 'sequelize';
import connection from '../connection';
import { Client } from '../entities/Client';
import { Room } from '../entities/Room';

const InitRoomHasClient = (sequelize: Sequelize) => {
    class RoomHasClient extends Model<InferAttributes<RoomHasClient>, InferCreationAttributes<RoomHasClient>> {
        declare id: CreationOptional<number>;
        declare room: Room;
        declare client: Client;
        declare status: CreationOptional<string>;
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