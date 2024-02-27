import { login } from "../../../../controllers/userController";
import { getParamValue, handleResponse } from "../../../../controllers/Utils/Request";
export const dynamic = 'force-dynamic'


export async function GET(req, context) {
    return handleResponse(req, login(getParamValue(context, "email")))
}