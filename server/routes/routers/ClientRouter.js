"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Request_1 = require("../../controllers/Utils/Request");
const ErrorHandler_1 = require("../../controllers/error/ErrorHandler");
const ClientController_1 = require("../../controllers/ClientController");
const clientRouter = (0, express_1.Router)();
clientRouter.post("/register", (req, res) => {
    // TODO: Agregar restriccion para operadores que solo pueden crear
    (0, ClientController_1.saveUpdate)((0, Request_1.getBody)(req))
        .then(result => res.send(result))
        .catch(error => (0, ErrorHandler_1.ErrorHandler)({ req, res, error, status: error.status || 500 }));
});
clientRouter.put("/modify/:clientId", (req, res) => {
    // TODO: Agregar restriccion para operadores que solo pueden crear
    (0, ClientController_1.saveUpdate)((0, Request_1.getBody)(req), (0, Request_1.getParamValue)(req, "clientId"))
        .then(result => res.send(result))
        .catch(error => (0, ErrorHandler_1.ErrorHandler)({ req, res, error, status: error.status || 500 }));
});
clientRouter.get("/", (req, res) => {
    // TODO: Agregar restriccion para operadores que solo pueden ver
    (0, ClientController_1.getAll)((0, Request_1.getQueryValue)(req, "pageNumber"), (0, Request_1.getQueryValue)(req, "id"), (0, Request_1.getQueryValue)(req, "email"), (0, Request_1.getQueryValue)(req, "name"), (0, Request_1.getQueryValue)(req, "nationality"), (0, Request_1.getQueryValue)(req, "phoneNumber"), (0, Request_1.getQueryValue)(req, "birthDate"))
        .then(result => res.send(result))
        .catch(error => (0, ErrorHandler_1.ErrorHandler)({ req, res, error, status: error.status || 500 }));
});
clientRouter.get("/:id", (req, res) => {
    // TODO: Agregar restriccion para operadores que solo pueden ver
    (0, ClientController_1.getById)((0, Request_1.getParamValue)(req, "id"))
        .then(result => res.send(result))
        .catch(error => (0, ErrorHandler_1.ErrorHandler)({ req, res, error, status: error.status || 500 }));
});
exports.default = clientRouter;
//# sourceMappingURL=ClientRouter.js.map