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
exports.assignRoomToClient = void 0;
const RoomHasClientConverter_1 = require("../converters/RoomHasClientConverter");
const RoomHasClient_1 = require("../database/entities/RoomHasClient");
const ErrorHandler_1 = require("./error/ErrorHandler");
function assignRoomToClient(rhc) {
    return __awaiter(this, void 0, void 0, function* () {
        // Valido datos
        if (!rhc.client) {
            throw new ErrorHandler_1.RequestError("Debe enviar los datos del cliente.", 409);
        }
        if (!rhc.room || !rhc.room.id) {
            throw new ErrorHandler_1.RequestError("Debe enviar los datos de la habitacion.", 409);
        }
        // Corroboro que la habitacion no se encuentre ocupada
        let dbRhc = yield RoomHasClient_1.RoomHasClient.findOne({
            where: {
                status: "OCCUPIED",
                room: {
                    id: rhc.room.id
                }
            }
        });
        if (dbRhc)
            throw new ErrorHandler_1.RequestError("La habitacion se encuentra ocupada.", 409);
        // Convierto y persisto la entidad
        dbRhc = (0, RoomHasClientConverter_1.unconvertRoomHasClient)(rhc);
        dbRhc = yield RoomHasClient_1.RoomHasClient.create(dbRhc.dataValues);
        return (0, RoomHasClientConverter_1.convertRoomHasClient)(dbRhc);
    });
}
exports.assignRoomToClient = assignRoomToClient;
//# sourceMappingURL=RoomController.js.map