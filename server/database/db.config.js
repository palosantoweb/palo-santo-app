"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.populateDB = exports.dbConfig = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const User_1 = require("./entities/User");
// Se inicia el enviroment
dotenv_1.default.config();
// Variables de entorno
const { HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;
exports.dbConfig = {
    DB: DB_NAME,
    USER: DB_USER,
    PASSWORD: DB_PASSWORD,
    dbOptions: {
        host: HOST,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
};
// Funcion para popular base de datos
function populateDB() {
    return __awaiter(this, void 0, void 0, function* () {
        const allowedUsers = [
            { email: "palosantoapptest@gmail.com", canView: true, canEdit: false },
            { email: "Marianella.gomezluna@gmail.com", canView: true, canEdit: true },
            { email: "gonzalogdv@gmail.com", canView: true, canEdit: true },
            { email: "patriciogabrielcolella@gmail.com", canView: true, canEdit: true }
        ];
        return yield User_1.User.bulkCreate(allowedUsers);
    });
}
exports.populateDB = populateDB;
//# sourceMappingURL=db.config.js.map