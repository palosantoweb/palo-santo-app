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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getById = exports.getAll = exports.saveUpdate = void 0;
const ErrorHandler_1 = require("./error/ErrorHandler");
const Client_1 = require("../database/entities/Client");
const ClientConverter_1 = require("../converters/ClientConverter");
const sequelize_1 = require("sequelize");
function saveUpdate(client, clientId) {
    return __awaiter(this, void 0, void 0, function* () {
        // Valido datos del cliente
        if (!client.birthDate)
            throw new ErrorHandler_1.RequestError("Debe enviar la fecha de nacimiento del cliente.", 419);
        if (!client.email)
            throw new ErrorHandler_1.RequestError("Debe enviar el email.", 419);
        if (!client.name)
            throw new ErrorHandler_1.RequestError("Debe enviar el nombre del cliente.", 419);
        if (!client.nationality)
            throw new ErrorHandler_1.RequestError("Debe enviar la nacionalidad del cliente.", 419);
        if (!client.phoneNumber)
            throw new ErrorHandler_1.RequestError("Debe enviar el numero de telefono del cliente.", 419);
        // Instancio y creo el cliente en la base
        let dbClient = null;
        if (clientId) {
            dbClient = yield Client_1.Client.findByPk(clientId);
            if (!dbClient)
                throw new ErrorHandler_1.RequestError("No se encontró el cliente a modificar.", 419);
        }
        dbClient = (0, ClientConverter_1.unconvertClient)(client, dbClient);
        if (clientId) {
            yield Client_1.Client.update(dbClient.dataValues, { where: { id: clientId } });
        }
        else {
            dbClient = yield Client_1.Client.create(dbClient.dataValues);
        }
        return (0, ClientConverter_1.convertClient)(dbClient);
    });
}
exports.saveUpdate = saveUpdate;
function getAll(pageNumber, id, email, name, nationality, phoneNumber, birthDate) {
    return __awaiter(this, void 0, void 0, function* () {
        const whereOptions = {};
        const size = 10;
        if (id)
            whereOptions.id = id;
        if (email)
            whereOptions.email = { [sequelize_1.Op.like]: `%${email}%` };
        if (name)
            whereOptions.name = { [sequelize_1.Op.like]: `%${name}%` };
        if (nationality)
            whereOptions.nationality = { [sequelize_1.Op.like]: `%${nationality}%` };
        if (phoneNumber)
            whereOptions.phoneNumber = phoneNumber;
        if (birthDate)
            whereOptions.birthDate = birthDate;
        let findOptions = {
            where: whereOptions,
            order: [["name", "DESC"]]
        };
        if (pageNumber) {
            findOptions = Object.assign(Object.assign({}, findOptions), { limit: size, offset: size * pageNumber });
        }
        const clients = yield Client_1.Client.findAll(findOptions);
        const totalElements = (yield Client_1.Client.count({ where: whereOptions }));
        const result = {
            content: clients.map(client => (0, ClientConverter_1.convertClient)(client)),
            totalPages: Math.ceil(totalElements / size),
            totalElements: totalElements
        };
        return result;
    });
}
exports.getAll = getAll;
function getById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const dbClient = yield Client_1.Client.findByPk(id);
        if (!dbClient)
            throw new ErrorHandler_1.RequestError(`No se encontró el cliente con identficacion >${id}<.`, 419);
        return (0, ClientConverter_1.convertClient)(dbClient);
    });
}
exports.getById = getById;
//# sourceMappingURL=ClientController.js.map