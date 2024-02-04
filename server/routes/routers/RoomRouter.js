"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Request_1 = require("../../controllers/Utils/Request");
const ErrorHandler_1 = require("../../controllers/error/ErrorHandler");
const RoomController_1 = require("../../controllers/RoomController");
const roomRouter = (0, express_1.Router)();
roomRouter.post("/assign", (req, res) => {
    // TODO: Agregar restriccion para operadores que solo pueden crear
    (0, RoomController_1.assignRoomToClient)((0, Request_1.getBody)(req))
        .then(result => res.send(result))
        .catch(error => (0, ErrorHandler_1.ErrorHandler)({ req, res, error, status: error.status || 500 }));
});
exports.default = roomRouter;
//# sourceMappingURL=RoomRouter.js.map