import path from 'path';
import swaggerJSDoc, { OAS3Options, Parameter, RequestBody, Responses, Schema } from 'swagger-jsdoc';
import swaggerUi from "swagger-ui-express"
import { UserScheme } from './UserSchema';
import { Router } from 'express';
import dotenv from 'dotenv';
import { ClientScheme } from './ClientSchema';
import { RoomScheme } from './RoomSchema';
import { RoomHasClientScheme } from './RoomHasClientSchema';
import { FileScheme } from './FileSchema';

// Se inicia el enviroment
dotenv.config();
// Variables de entorno
const { PORT, HOST } = process.env;

// Sufijos
const API_SUFFIX = "/api"

// Configuraciones
const ClientConfig = {
    SUFFIX: API_SUFFIX + "/client",
    register: "/register",
    modify: "/modify/{clientId}",
    getAll: "/",
    getById: "/{id}"
}
const UserConfig = {
    SUFFIX: API_SUFFIX + "/user",
    login: "/login/{email}"
}
const RoomConfig = {
    SUFFIX: API_SUFFIX + "/room",
    assign: "/api/room/assign"
}
const GalleryConfig = {
    SUFFIX: API_SUFFIX + "/carrousel",
    upload: "/upload",
    getAll: "/",
    remove: "/{name}"
}
const CarrouselConfig = {
    SUFFIX: API_SUFFIX + "/gallery",
    upload: "/upload",
    getAll: "/",
    remove: "/{name}"
}

// Tags
const CLIENT_TAG = "Client"
const ROOM_TAG = "Room"
const USER_TAG = "User"
const FILE_TAG = "File"

// Adapters
function adaptBody(schema: Schema): RequestBody {
    return {
        required: true,
        content: {
            "application/json": {
                schema: schema
            }
        }
    }
}

function adaptResponse(schema: Schema, description: string): Responses {
    return {
        default: {
            description: description,
            content: {
                "application/json": {
                    schema: schema
                }
            }
        }
    }
}

function adaptParameter(
    location: "path" | "query",
    name: string,
    required: boolean,
    description: string,
    schema: Schema): Parameter {

    return {
        in: location,
        name: name,
        required: required,
        description: description,
        schema: schema
    }
}

const StringSchema: Schema = { type: "string" }
const NumberSchema: Schema = { type: "number" }
const BooleanSchema: Schema = { type: "boolean" }

function ArraySchema(schema: Schema): Schema {
    return {
        type: "array",
        items: schema
    }
}

export default function instanceSwaggerRequestHandler() {
    const options: OAS3Options = {
        definition: {
            openapi: '3.0.0',
            info: {
                title: 'Endpoints Palo-Santo-Server',
                version: '1.0.0'
            },
            servers: [{ url: `http://${HOST}:${PORT}` }],
            components: {
                schemas: {
                    "UserModel": UserScheme,
                    "ClientModel": ClientScheme,
                    "RoomModel": RoomScheme,
                    "RoomHasClientModel": RoomHasClientScheme,
                }
            },
            paths: {
                [ClientConfig.SUFFIX + ClientConfig.register]: {
                    post: {
                        tags: [CLIENT_TAG],
                        requestBody: adaptBody(ClientScheme),
                        responses: adaptResponse(ClientScheme, "Cliente guardado"),
                    }
                },
                [ClientConfig.SUFFIX + ClientConfig.modify]: {
                    put: {
                        tags: [CLIENT_TAG],
                        requestBody: adaptBody(ClientScheme),
                        responses: adaptResponse(ClientScheme, "Cliente modificado."),
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
                        responses: adaptResponse(ArraySchema(ClientScheme), "Clientes Cargados en el sistema."),
                    }
                },
                [ClientConfig.SUFFIX + ClientConfig.getById]: {
                    get: {
                        tags: [CLIENT_TAG],
                        parameters: [
                            adaptParameter("path", "id", true, "Identificador Unico", NumberSchema),
                        ],
                        responses: adaptResponse(ClientScheme, "Cliente por identificador."),
                    }
                },
                [RoomConfig.SUFFIX + RoomConfig.assign]: {
                    post: {
                        tags: [ROOM_TAG],
                        requestBody: adaptBody(RoomHasClientScheme),
                        responses: adaptResponse(RoomHasClientScheme, "Habitacion asignada"),
                    }
                },
                [UserConfig.SUFFIX + UserConfig.login]: {
                    get: {
                        tags: [USER_TAG],
                        parameters: [
                            adaptParameter("path", "email", true, "Email del usuario.", StringSchema)
                        ],
                        responses: adaptResponse(UserScheme, "Usuario logueado"),
                    }
                },
                [GalleryConfig.SUFFIX + GalleryConfig.upload]: {
                    post: {
                        tags: [FILE_TAG],
                        requestBody: adaptBody(ArraySchema(FileScheme)),
                        responses: adaptResponse(ArraySchema(FileScheme), "Archivos agregados a la galeria."),
                    }
                },
                [GalleryConfig.SUFFIX + GalleryConfig.getAll]: {
                    get: {
                        tags: [FILE_TAG],
                        responses: adaptResponse(ArraySchema(FileScheme), "Archivos existentes en la galeria."),
                    }
                },
                [GalleryConfig.SUFFIX + GalleryConfig.remove]: {
                    delete: {
                        tags: [FILE_TAG],
                        parameters: [
                            adaptParameter("path", "name", true, "Nombre del archivo.", StringSchema)
                        ],
                        responses: adaptResponse(ArraySchema(FileScheme), "Archivo eliminado."),
                    }
                },
                [CarrouselConfig.SUFFIX + CarrouselConfig.upload]: {
                    post: {
                        tags: [FILE_TAG],
                        requestBody: adaptBody(ArraySchema(FileScheme)),
                        responses: adaptResponse(ArraySchema(FileScheme), "Archivos agregados a el carrusel."),
                    }
                },
                [CarrouselConfig.SUFFIX + CarrouselConfig.getAll]: {
                    get: {
                        tags: [FILE_TAG],
                        responses: adaptResponse(ArraySchema(FileScheme), "Archivos existentes en el carrusel."),
                    }
                },
                [CarrouselConfig.SUFFIX + CarrouselConfig.remove]: {
                    delete: {
                        tags: [FILE_TAG],
                        parameters: [
                            adaptParameter("path", "name", true, "Nombre del archivo.", StringSchema)
                        ],
                        responses: adaptResponse(ArraySchema(FileScheme), "Archivo eliminado."),
                    }
                },
            }
        },
        apis: [
            `${path.join(__dirname, "../routes/routers/*.ts")}`,
        ],
    }
    return swaggerUi.setup(swaggerJSDoc(options))
}