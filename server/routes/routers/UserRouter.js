"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Request_1 = require("../../controllers/Utils/Request");
const ErrorHandler_1 = require("../../controllers/error/ErrorHandler");
const userController_1 = require("../../controllers/userController");
const userRouter = (0, express_1.Router)();
userRouter.get("/login/:email", (req, res) => {
    (0, userController_1.login)((0, Request_1.getParamValue)(req, "email"))
        .then(result => res.send(result))
        .catch(error => (0, ErrorHandler_1.ErrorHandler)({ req, res, error, status: error.status || 500 }));
});
exports.default = userRouter;
//# sourceMappingURL=UserRouter.js.map