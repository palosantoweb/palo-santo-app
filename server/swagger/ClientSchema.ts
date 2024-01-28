import { Schema } from "swagger-jsdoc";

export const ClientScheme: Schema = {
    type: "object",
    properties: {
        id: {
            type: "number"
        },
        birthDate: {
            type: "string"
        },
        email: {
            type: "string"
        },
        name: {
            type: "string"
        },
        nationality: {
            type: "string"
        },
        phoneNumber: {
            type: "number"
        },
    }
}