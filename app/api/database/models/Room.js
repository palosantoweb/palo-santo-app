import { Model, DataTypes } from 'sequelize';
import connection from '../connection';

const InitiRoom = (sequelize) => {
    class Room extends Model {
        id;
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