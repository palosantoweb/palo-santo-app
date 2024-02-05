"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = exports.RequestError = void 0;
// Clase para controlar error de peticion
class RequestError extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
    }
}
exports.RequestError = RequestError;
function ErrorHandler(options) {
    var _a;
    let message = "[ERROR HANDLER]";
    message += options.req ? ` URL=>${options.req.url}` : "";
    let errorMessage = options.error ? options.error.message : "RUTA DESCONOCIDA";
    message += `:\n${errorMessage}`;
    console.log(message);
    console.log((_a = options.error) === null || _a === void 0 ? void 0 : _a.stack);
    options.res.status(options.status || 404).send({ message: errorMessage });
}
exports.ErrorHandler = ErrorHandler;
//# sourceMappingURL=ErrorHandler.js.map