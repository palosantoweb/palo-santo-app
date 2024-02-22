import { Model, InferAttributes, InferCreationAttributes, CreationOptional, Sequelize, DataTypes, ForeignKey } from 'sequelize';
import { Room } from './Room';
import { Client } from './Client';

export class RoomHasClient extends Model<InferAttributes<RoomHasClient>, InferCreationAttributes<RoomHasClient>> {
    declare id: CreationOptional<number>;
    declare room: Room;
    declare client: Client;
    declare status: CreationOptional<string>;
}

export function InitRoomHasClient(sequelize: Sequelize) {
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