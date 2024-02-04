"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const UserSchema_1 = require("./UserSchema");
const dotenv_1 = __importDefault(require("dotenv"));
const ClientSchema_1 = require("./ClientSchema");
const RoomSchema_1 = require("./RoomSchema");
const RoomHasClientSchema_1 = require("./RoomHasClientSchema");
const FileSchema_1 = require("./FileSchema");
// Se inicia el enviroment
dotenv_1.default.config();
// Variables de entorno
const { PORT, HOST } = process.env;
// Sufijos
const API_SUFFIX = "/api";
// Configuraciones
const ClientConfig = {
    SUFFIX: API_SUFFIX + "/client",
    register: "/register",
    modify: "/modify/{clientId}",
    getAll: "/",
    getById: "/{id}"
};
const UserConfig = {
    SUFFIX: API_SUFFIX + "/user",
    login: "/login/{email}"
};
const RoomConfig = {
    SUFFIX: API_SUFFIX + "/room",
    assign: "/api/room/assign"
};
const GalleryConfig = {
    SUFFIX: API_SUFFIX + "/carrousel",
    upload: "/upload",
    getAll: "/",
    remove: "/{name}"
};
const CarrouselConfig = {
    SUFFIX: API_SUFFIX + "/gallery",
    upload: "/upload",
    getAll: "/",
    remove: "/{name}"
};
// Tags
const CLIENT_TAG = "Client";
const ROOM_TAG = "Room";
const USER_TAG = "User";
const FILE_TAG = "File";
// Adapters
function adaptBody(schema) {
    return {
        required: true,
        content: {
            "application/json": {
                schema: schema
            }
        }
    };
}
function adaptResponse(schema, description) {
    return {
        default: {
            description: description,
            content: {
                "application/json": {
                    schema: schema
                }
            }
        }
    };
}
function adaptParameter(location, name, required, description, schema) {
    return {
        in: location,
        name: name,
        required: required,
        description: description,
        schema: schema
    };
}
const StringSchema = { type: "string" };
const NumberSchema = { type: "number" };
const BooleanSchema = { type: "boolean" };
function ArraySchema(schema) {
    return {
        type: "array",
        items: schema
    };
}
function instanceSwaggerRequestHandler() {
    const options = {
        definition: {
            openapi: '3.0.0',
            info: {
                title: 'Endpoints Palo-Santo-Server',
                version: '1.0.0'
            },
            servers: [{ url: `http://${HOST}:${PORT}` }],
            components: {
                schemas: {
                    "UserModel": UserSchema_1.UserScheme,
                    "ClientModel": ClientSchema_1.ClientScheme,
                    "RoomModel": RoomSchema_1.RoomScheme,
                    "RoomHasClientModel": RoomHasClientSchema_1.RoomHasClientScheme,
                }
            },
            paths: {
                [ClientConfig.SUFFIX + ClientConfig.register]: {
                    post: {
                        tags: [CLIENT_TAG],
                        requestBody: adaptBody(ClientSchema_1.ClientScheme),
                        responses: adaptResponse(ClientSchema_1.ClientScheme, "Cliente guardado"),
                    }
                },
                [ClientConfig.SUFFIX + ClientConfig.modify]: {
                    put: {
                        tags: [CLIENT_TAG],
                        requestBody: adaptBody(ClientSchema_1.ClientScheme),
                        responses: adaptResponse(ClientSchema_1.ClientScheme, "Cliente modificado."),
                    }
                },
                [ClientConfig.SUFFIX + ClientConfig.getAll]: {
                    get: {
                        tags: [CLIENT_TAG],
                        parameters: [
                            adaptParameter("query", "pageNumber", false, "Numero de pagina", NumberSchema),
                            adaptParameter("query", "id", false, "Identificador Unico", NumberSchema),
                            adaptParameter("query", "email", false, "Email", StringSchema),
                            adaptParameter("query", "name", false, "Nombre", StringSchema),
                            adaptParameter("query", "nationality", false, "Nacionalidad", StringSchema),
                            adaptParameter("query", "phoneNumber", false, "Numero de telefono", NumberSchema)
                        ],
                        responses: adaptResponse(ArraySchema(ClientSchema_1.ClientScheme), "Clientes Cargados en el sistema."),
                    }
                },
                [ClientConfig.SUFFIX + ClientConfig.getById]: {
                    get: {
                        tags: [CLIENT_TAG],
                        parameters: [
                            adaptParameter("path", "id", true, "Identificador Unico", NumberSchema),
                        ],
                        responses: adaptResponse(ClientSchema_1.ClientScheme, "Cliente por identificador."),
                    }
                },
                [RoomConfig.SUFFIX + RoomConfig.assign]: {
                    post: {
                        tags: [ROOM_TAG],
                        requestBody: adaptBody(RoomHasClientSchema_1.RoomHasClientScheme),
                        responses: adaptResponse(RoomHasClientSchema_1.RoomHasClientScheme, "Habitacion asignada"),
                    }
                },
                [UserConfig.SUFFIX + UserConfig.login]: {
                    get: {
                        tags: [USER_TAG],
                        parameters: [
                            adaptParameter("path", "email", true, "Email del usuario.", StringSchema)
                        ],
                        responses: adaptResponse(UserSchema_1.UserScheme, "Usuario logueado"),
                    }
                },
                [GalleryConfig.SUFFIX + GalleryConfig.upload]: {
                    post: {
                        tags: [FILE_TAG],
                        requestBody: adaptBody(ArraySchema(FileSchema_1.FileScheme)),
                        responses: adaptResponse(ArraySchema(FileSchema_1.FileScheme), "Archivos agregados a la galeria."),
                    }
                },
                [GalleryConfig.SUFFIX + GalleryConfig.getAll]: {
                    get: {
                        tags: [FILE_TAG],
                        responses: adaptResponse(ArraySchema(FileSchema_1.FileScheme), "Archivos existentes en la galeria."),
                    }
                },
                [GalleryConfig.SUFFIX + GalleryConfig.remove]: {
                    delete: {
                        tags: [FILE_TAG],
                        parameters: [
                            adaptParameter("path", "name", true, "Nombre del archivo.", StringSchema)
                        ],
                        responses: adaptResponse(ArraySchema(FileSchema_1.FileScheme), "Archivo eliminado."),
                    }
                },
                [CarrouselConfig.SUFFIX + CarrouselConfig.upload]: {
                    post: {
                        tags: [FILE_TAG],
                        requestBody: adaptBody(ArraySchema(FileSchema_1.FileScheme)),
                        responses: adaptResponse(ArraySchema(FileSchema_1.FileScheme), "Archivos agregados a el carrusel."),
                    }
                },
                [CarrouselConfig.SUFFIX + CarrouselConfig.getAll]: {
                    get: {
                        tags: [FILE_TAG],
                        responses: adaptResponse(ArraySchema(FileSchema_1.FileScheme), "Archivos existentes en el carrusel."),
                    }
                },
                [CarrouselConfig.SUFFIX + CarrouselConfig.remove]: {
                    delete: {
                        tags: [FILE_TAG],
                        parameters: [
                            adaptParameter("path", "name", true, "Nombre del archivo.", StringSchema)
                        ],
                        responses: adaptResponse(ArraySchema(FileSchema_1.FileScheme), "Archivo eliminado."),
                    }
                },
            }
        },
        apis: [
            `${path_1.default.join(__dirname, "../routes/routers/*.ts")}`,
        ],
    };
    return swagger_ui_express_1.default.setup((0, swagger_jsdoc_1.default)(options));
}
exports.default = instanceSwaggerRequestHandler;
//# sourceMappingURL=config.js.map