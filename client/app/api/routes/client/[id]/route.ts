import { NextRequest } from "next/server";
import { getById } from "../../../controllers/ClientController";
import { NextContext, getParamValue, handleResponse } from "../../../controllers/Utils/Request";

export async function GET(req: NextRequest, context: NextContext) {
    return handleResponse(req, getById(getParamValue<number>(context, "id")))
}