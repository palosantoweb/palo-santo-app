import { NextRequest } from "next/server";
import { login } from "../../../../controllers/userController";
import { NextContext, getParamValue, handleResponse } from "../../../../controllers/Utils/Request";

export async function GET(req: NextRequest, context: NextContext) {
    return handleResponse(req, login(getParamValue<string>(context, "email")))
}