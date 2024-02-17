import dotenv from 'dotenv';
import { UserModel } from '../models/UserModel';
import { Optional } from 'sequelize';
import { User } from './entities/User';
// Se inicia el enviroment
dotenv.config();

// Variables de entorno
const { HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

export const dbConfig: any = {
  DB: DB_NAME,
  USER: DB_USER,
  PASSWORD: DB_PASSWORD,
  dbOptions: {
    host: HOST,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
};

// Funcion para popular base de datos
export async function populateDB(): Promise<User[]> {
  const allowedUsers: UserModel[] = [
    { email: 'palosantoapptest@gmail.com', canView: true, canEdit: false },
    { email: 'Marianella.gomezluna@gmail.com', canView: true, canEdit: true },
    { email: 'gonzalogdv@gmail.com', canView: true, canEdit: true },
    { email: 'patriciogabrielcolella@gmail.com', canView: true, canEdit: true },
  ];
  return await User.bulkCreate(allowedUsers);
}
