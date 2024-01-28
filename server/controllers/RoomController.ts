import { convertRoomHasClient, unconvertRoomHasClient } from "../converters/RoomHasClientConverter";
import { RoomHasClient } from "../database/entities/RoomHasClient";
import { RoomHasClientModel } from "../models/RoomHasClientModel";
import { RequestError } from "./error/ErrorHandler";

export async function assignRoomToClient(rhc: RoomHasClientModel): Promise<RoomHasClientModel> {
    // Valido datos
    if (!rhc.client) {
        throw new RequestError("Debe enviar los datos del cliente.", 409)
    }
    if (!rhc.room || !rhc.room.id) {
        throw new RequestError("Debe enviar los datos de la habitacion.", 409)
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
        throw new RequestError("La habitacion se encuentra ocupada.", 409)

    // Convierto y persisto la entidad
    dbRhc = unconvertRoomHasClient(rhc)
    dbRhc = await RoomHasClient.create(dbRhc.dataValues)

    return convertRoomHasClient(dbRhc);
}