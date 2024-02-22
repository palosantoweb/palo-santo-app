/* eslint-disable no-unused-vars */
import { Model, InferAttributes, Sequelize, DataTypes, CreationOptional, InferCreationAttributes } from 'sequelize';
import connection from '../connection';

const initUser = (sequelize: Sequelize) => {
  class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    declare id: CreationOptional<number>;
    declare email: CreationOptional<string>;
    declare canEdit: CreationOptional<boolean>;
    declare canView: CreationOptional<boolean>;
  }

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
};

export default initUser(connection);