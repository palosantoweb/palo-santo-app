/* eslint-disable no-unused-vars */
import { Model, DataTypes } from 'sequelize';
import connection from '../connection';

const initUser = (sequelize) => {
  class User extends Model {
    id;
    email;
    canEdit;
    canView;
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