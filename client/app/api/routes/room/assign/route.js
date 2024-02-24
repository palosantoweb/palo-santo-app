import { getBody, handleResponse } from "../../../controllers/Utils/Request";
import { assignRoomToClient } from "../../../controllers/RoomController";

export async function POST(req) {
    return handleResponse(req, assignRoomToClient(await getBody(req)))
}