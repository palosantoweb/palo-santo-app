import { NextRequest } from "next/server";
import { saveUpdate } from "../../../../controllers/ClientController";
import { NextContext, getBody, getParamValue, handleResponse } from "../../../../controllers/Utils/Request";
import { ClientModel } from "../../../../models/ClientModel";

export async function PUT(req: NextRequest, context: NextContext) {
    return handleResponse(req, saveUpdate(await getBody<ClientModel>(req), getParamValue<number>(context, "clientId")))
}