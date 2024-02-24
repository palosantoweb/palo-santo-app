
import { Sequelize } from "sequelize";
import pg from 'pg'
import dotenv from 'dotenv';
// Se inicia el enviroment
dotenv.config();

// Variables de entorno
const { HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

let sequelize =
    process.env.NODE_ENV === 'production'
        ? new Sequelize({
            database: DB_NAME,
            dialect: 'postgres',
            host: HOST,
            port: 5432,
            username: DB_USER,
            password: DB_PASSWORD,
            dialectModule: pg,
            pool: {
                max: 3,
                min: 1,
                idle: 10000,
            },
            dialectOptions: {
                ssl: {
                    require: true,
                    // Ref.: https://github.com/brianc/node-postgres/issues/2009
                    rejectUnauthorized: false,
                },
                keepAlive: true,
            },
            ssl: true,
        })
        : new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
            dialect: 'postgres',
            dialectModule: pg,
            host: HOST,
            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000,
            },
        });

const connection = sequelize;

export default connection;