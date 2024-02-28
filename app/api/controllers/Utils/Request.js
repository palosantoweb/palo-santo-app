export const dynamic = 'force-dynamic'
import { NextResponse } from "next/server"
import { ErrorHandler } from "../error/ErrorHandler"

/* REQUEST */
export async function getBody(req) {
    try {
        return (await req.json())
    } catch (error) {
        throw new Error(error, "Error al obtener los datos del body.")
    }
}

// EJ: /:query (query="23") => 23
export function getParamValue(req, key) {
    try {
        return req.params[key]
    } catch (error) {
        throw new Error("Error al obtener los datos de params.")
    }
}

// EJ: ?query="23" => 23
export function getQueryValue(req, key) {
    try {        
        const { url } = req;
        const urlSearchParams = new URL(url);
        console.log(urlSearchParams)
        const params = Object.fromEntries(urlSearchParams.searchParams.entries());
        return params[key]
    } catch (error) {
        console.log("[ERROR]",error)
        throw new Error("Error al obtener los datos de query.")
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