import { RequestBody, Responses, Schema } from "swagger-jsdoc";
import { ClientScheme } from "./ClientSchema";
import { RoomScheme } from "./RoomSchema";

export const RoomHasClientScheme: Schema = {
    type: "object",
    properties: {
        client: ClientScheme,
        room: RoomScheme
    }
}