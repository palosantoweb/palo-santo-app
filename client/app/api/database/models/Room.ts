import { Model, InferAttributes, Sequelize, DataTypes, CreationOptional, InferCreationAttributes } from 'sequelize';
import connection from '../connection';

const InitiRoom = (sequelize: Sequelize) => {
    class Room extends Model<InferAttributes<Room>, InferCreationAttributes<Room>> {
        declare id: CreationOptional<number>;
    }

    Room.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
    }, { sequelize, tableName: "room" })
    return Room;
}
export default InitiRoom(connection);