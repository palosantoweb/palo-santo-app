"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const RoomRouter_1 = __importDefault(require("./routers/RoomRouter"));
const ClientRouter_1 = __importDefault(require("./routers/ClientRouter"));
const swagger_ui_express_1 = require("swagger-ui-express");
const config_1 = __importDefault(require("../swagger/config"));
const UserRouter_1 = __importDefault(require("./routers/UserRouter"));
const GalleryRouter_1 = __importDefault(require("./routers/GalleryRouter"));
const CarrouselRouter_1 = __importDefault(require("./routers/CarrouselRouter"));
const router = (0, express_1.Router)();
router.use('/user', UserRouter_1.default);
router.use('/client', ClientRouter_1.default);
router.use('/room', RoomRouter_1.default);
router.use('/gallery', GalleryRouter_1.default);
router.use('/carrousel', CarrouselRouter_1.default);
router.use("/api-doc", swagger_ui_express_1.serve, (0, config_1.default)());
router.get('/', (req, res) => res.send("<div style='color: blue'>Server is responding!<div>"));
exports.default = router;
//# sourceMappingURL=index.js.map