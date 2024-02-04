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
exports.login = void 0;
const UserConverter_1 = require("../converters/UserConverter");
const User_1 = require("../database/entities/User");
const ErrorHandler_1 = require("./error/ErrorHandler");
function login(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const dbUser = yield User_1.User.findOne({ where: { email } });
        if (!dbUser)
            throw new ErrorHandler_1.RequestError(`El usuario de email >${email}< no se encuentra registrado en el sistema.`, 415);
        return (0, UserConverter_1.convertUser)(dbUser);
    });
}
exports.login = login;
//# sourceMappingURL=userController.js.map