import { Schema } from "swagger-jsdoc";

export const UserScheme: Schema = {
    type: "object",
    properties: {
        id: {
            type: "number"
        },
        email: {
            type: "string"
        },
        canEdit: {
            type: "boolean"
        },
        canView: {
            type: "boolean"
        },
    }
}