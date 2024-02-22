import { NextRequest } from "next/server";
import { saveUpdate } from "../../../controllers/ClientController";
import { NextContext, getBody, handleResponse } from "../../../controllers/Utils/Request";
import { ClientModel } from "../../../models/ClientModel";

export async function POST(req: NextRequest, context: NextContext) {
    return handleResponse(req, saveUpdate(await getBody<ClientModel>(req)))
}