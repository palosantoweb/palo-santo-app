import { saveUpdate } from "../../../controllers/ClientController";
import { getBody, handleResponse } from "../../../controllers/Utils/Request";

export async function POST(req) {
    return handleResponse(req, saveUpdate(await getBody(req)))
}