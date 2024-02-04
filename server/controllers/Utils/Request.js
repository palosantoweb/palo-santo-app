"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQueryValue = exports.getParamValue = exports.getBody = void 0;
const ErrorHandler_1 = require("../error/ErrorHandler");
/* REQUEST */
function getBody(req) {
    try {
        const body = req.body;
        return body;
    }
    catch (error) {
        throw new ErrorHandler_1.RequestError("Error al obtener los datos del body.", 409);
    }
}
exports.getBody = getBody;
function getParamValue(req, key) {
    try {
        return req.params[key];
    }
    catch (error) {
        throw new ErrorHandler_1.RequestError("Error al obtener los datos de params.", 409);
    }
}
exports.getParamValue = getParamValue;
function getQueryValue(req, key) {
    try {
        return req.query[key];
    }
    catch (error) {
        throw new ErrorHandler_1.RequestError("Error al obtener los datos de query.", 409);
    }
}
exports.getQueryValue = getQueryValue;
//# sourceMappingURL=Request.js.map