import { getById } from "../../../controllers/ClientController";
import { getParamValue, handleResponse } from "../../../controllers/Utils/Request";

export async function GET(req, context) {
    return handleResponse(req, getById(getParamValue(context, "id")))
}