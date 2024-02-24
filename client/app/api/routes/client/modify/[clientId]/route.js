import { saveUpdate } from "../../../../controllers/ClientController";
import { getBody, getParamValue, handleResponse } from "../../../../controllers/Utils/Request";

export async function PUT(req, context) {
    return handleResponse(req, saveUpdate(await getBody(req), getParamValue(context, "clientId")))
}