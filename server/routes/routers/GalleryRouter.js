"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Request_1 = require("../../controllers/Utils/Request");
const ErrorHandler_1 = require("../../controllers/error/ErrorHandler");
const FileController_1 = require("../../controllers/FileController");
const galleryRouter = (0, express_1.Router)();
const dirPrefix = "/gallery";
galleryRouter.post("/upload", (req, res) => {
    (0, FileController_1.saveUpdate)((0, Request_1.getBody)(req), dirPrefix)
        .then(result => res.send(result))
        .catch(error => (0, ErrorHandler_1.ErrorHandler)({ req, res, error, status: error.status || 500 }));
});
galleryRouter.get("/", (req, res) => {
    (0, FileController_1.getAllImages)(dirPrefix)
        .then(result => res.send(result))
        .catch(error => (0, ErrorHandler_1.ErrorHandler)({ req, res, error, status: error.status || 500 }));
});
galleryRouter.delete("/:name", (req, res) => {
    (0, FileController_1.remove)((0, Request_1.getParamValue)(req, "name"), dirPrefix)
        .then(result => res.send(result))
        .catch(error => (0, ErrorHandler_1.ErrorHandler)({ req, res, error, status: error.status || 500 }));
});
exports.default = galleryRouter;
//# sourceMappingURL=GalleryRouter.js.map