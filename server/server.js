"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import dotenv from 'dotenv';
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const database_1 = require("./database");
const ErrorHandler_1 = require("./controllers/error/ErrorHandler");
const db_config_1 = require("./database/db.config");
// Se inicia el enviroment
// dotenv.config();
// Variables de entorno
// const { PORT, HOST, ALLOWED_ORIGIN } = process.env;
// Se inicializa el app
const app = (0, express_1.default)();
// Opciones de CORS
const corsOptions = { origin: "*" };
app.use((0, cors_1.default)(corsOptions));
// Parseo de requests en formato JSON
app.use(express_1.default.json({ limit: '500mb' }));
// Parse de requests en formato URL
app.use(express_1.default.urlencoded({ extended: true, limit: "500mb" }));
// Prefijo de todas las rutas
app.use('/api/', routes_1.default);
// Control de Errores
app.use(ErrorHandler_1.ErrorHandler);
database_1.sequelize
    .sync({ force: true })
    .then(() => {
    console.log('Synced db!');
    (0, db_config_1.populateDB)().then(res => {
        console.log('DB populated!!');
        app.listen("8000", () => {
            console.log(`⚡️[server]: Server is running at host:port/api`);
        });
    });
})
    .catch((err) => {
    console.log('Failed to sync db: ' + err);
});
//# sourceMappingURL=server.js.map