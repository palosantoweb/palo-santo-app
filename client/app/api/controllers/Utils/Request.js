import { ErrorHandler, RequestError } from "../error/ErrorHandler";
import { NextResponse } from "next/server";

/* REQUEST */
export async function getBody(req) {
    try {
        return (await req.json())
    } catch (error) {
        throw new RequestError(error, "Error al obtener los datos del body.", 409)
    }
}

// EJ: /:query (query="23") => 23
export function getParamValue(req, key) {
    try {
        return req.params[key]
    } catch (error) {
        throw new RequestError(error, "Error al obtener los datos de params.", 409)
    }
}

// EJ: ?query="23" => 23
export function getQueryValue(req, key) {
    try {
        return req.nextUrl.searchParams.get(key)
    } catch (error) {
        throw new RequestError(error, "Error al obtener los datos de query.", 409)
    }
}

/* RESPONSE */

export async function handleResponse(req, res) {
    try {
        return NextResponse.json(await res)
    } catch (error) {
        return ErrorHandler({ req, error: error })
    }
}

/* PREFIX */
export const galleryDirPrefix = "/gallery"
export const carrouselDirPrefix = "/carrousel"