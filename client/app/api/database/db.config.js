import dotenv from 'dotenv';
// Se inicia el enviroment
dotenv.config();

// Variables de entorno
const { HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

export const dbConfig = {
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