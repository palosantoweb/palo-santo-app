import { getAll } from "../../controllers/ClientController";
import { getQueryValue, handleResponse } from "../../controllers/Utils/Request";
export const dynamic = 'force-dynamic'

export async function GET(req) {
    return handleResponse(req, getAll(
        getQueryValue(req, "pageNumber"),
        getQueryValue(req, "id"),
        getQueryValue(req, "email"),
        getQueryValue(req, "name"),
        getQueryValue(req, "nationality"),
        getQueryValue(req, "phoneNumber"),
        getQueryValue(req, "birthDate"),
    ))
}