import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './routes';
import { sequelize } from './database';
import { ErrorHandler } from './controllers/error/ErrorHandler';
import { populateDB } from './database/db.config';

// Se inicia el enviroment
dotenv.config();
// Variables de entorno
const { PORT, HOST, ALLOWED_ORIGIN } = process.env;

// Se inicializa el app
const app: Express = express();
// Opciones de CORS
const corsOptions = { origin: ALLOWED_ORIGIN };
app.use(cors(corsOptions));
// Parseo de requests en formato JSON
app.use(express.json({limit: '500mb'}));
// Parse de requests en formato URL
app.use(express.urlencoded({ extended: true, limit: "500mb" }));

// Prefijo de todas las rutas
app.use('/api/', router);
// Control de Errores
app.use(ErrorHandler);


sequelize
  .sync({ force: true })
  .then(() => {
    console.log('Synced db!');
    populateDB().then(res => {
      console.log('DB populated!')
      app.listen(PORT, () => {
        console.log(`⚡️[server]: Server is running at http://${HOST}:${PORT}`);
      });
    });
  })
  .catch((err: Error) => {
    console.log('Failed to sync db: ' + err);
  });
