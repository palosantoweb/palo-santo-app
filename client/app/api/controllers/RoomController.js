import { convertRoomHasClient, unconvertRoomHasClient } from "../converters/RoomHasClientConverter";
import { RoomHasClient } from "../database/entities/RoomHasClient";
import { RequestError } from "./error/ErrorHandler";

export async function assignRoomToClient(rhc) {
    // Valido datos
    if (!rhc.client) {
        throw new RequestError(new Error(), "Debe enviar los datos del cliente.", 409)
    }
    if (!rhc.room || !rhc.room.id) {
        throw new RequestError(new Error(), "Debe enviar los datos de la habitacion.", 409)
    }

    // Corroboro que la habitacion no se encuentre ocupada
    let dbRhc = await RoomHasClient.findOne({
        where: {
            status: "OCCUPIED",
            room: {
                id: rhc.room.id
            }
        }
    })
    if (dbRhc)
        throw new RequestError(new Error(), "La habitacion se encuentra ocupada.", 409)

    // Convierto y persisto la entidad
    dbRhc = unconvertRoomHasClient(rhc)
    dbRhc = await RoomHasClient.create(dbRhc)

    return convertRoomHasClient(dbRhc);
}