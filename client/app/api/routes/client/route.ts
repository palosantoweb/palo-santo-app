import { NextRequest } from "next/server";
import { getAll } from "../../controllers/ClientController";
import { getQueryValue, handleResponse } from "../../controllers/Utils/Request";
import { Client } from "../../database/entities/Client";

export async function GET(req: NextRequest) {
    await Client.sync()
    return handleResponse(req, getAll(
        getQueryValue<number>(req, "pageNumber"),
        getQueryValue<number>(req, "id"),
        getQueryValue<string>(req, "email"),
        getQueryValue<string>(req, "name"),
        getQueryValue<string>(req, "nationality"),
        getQueryValue<number>(req, "phoneNumber"),
        getQueryValue<Date>(req, "birthDate"),
    ))
}