import { NextRequest } from "next/server";
import { NextContext, getBody, handleResponse } from "../../../controllers/Utils/Request";
import { assignRoomToClient } from "../../../controllers/RoomController";
import { RoomHasClientModel } from "../../../models/RoomHasClientModel";

export async function POST(req: NextRequest) {
    return handleResponse(req, assignRoomToClient(await getBody<RoomHasClientModel>(req)))
}