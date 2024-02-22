
import { Sequelize } from "sequelize";
import { dbConfig } from "./db.config";

let sequelize =
    process.env.NODE_ENV === 'production'
        ? new Sequelize({
            database: dbConfig.DB,
            dialect: 'postgres',
            host: dbConfig.dbOptions.HOST,
            port: 5432,
            username: dbConfig.USER,
            password: dbConfig.PASSWORD,
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
        : new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
            dialect: 'postgres',
            ...dbConfig.dbOptions,
        });

const connection = sequelize;

export default connection;