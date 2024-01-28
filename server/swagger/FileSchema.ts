import { Schema } from "swagger-jsdoc";

export const FileScheme: Schema = {
    type: "object",
    properties: {
        name: {
            type: "string"
        },
        base64: {
            type: "string"
        }
    }
}