import { Request } from "express"
import { ErrorHandler, ErrorResponse, RequestError } from "../error/ErrorHandler";
import { NextRequest, NextResponse } from "next/server";

/* REQUEST */
export type NextContext = {
    params: {
        [key: string]: undefined | string | string[] | NextContext | NextContext[];
    }
}

export async function getBody<T>(req: NextRequest): Promise<T> {
    try {
        return (await req.json()) as T
    } catch (error: any) {
        throw new RequestError(error, "Error al obtener los datos del body.", 409)
    }
}

// EJ: /:query (query="23") => 23
export function getParamValue<T>(req: NextContext, key: string): T {
    try {
        return req.params[key] as T
    } catch (error: any) {
        throw new RequestError(error, "Error al obtener los datos de params.", 409)
    }
}

// EJ: ?query="23" => 23
export function getQueryValue<T>(req: NextRequest, key: string): T {
    try {
        return req.nextUrl.searchParams.get(key) as T
    } catch (error: any) {
        throw new RequestError(error, "Error al obtener los datos de query.", 409)
    }
}

/* RESPONSE */

export async function handleResponse<T>(req: NextRequest, res: Promise<T>): Promise<NextResponse<T | ErrorResponse>> {
    try {
        return NextResponse.json(await res)
    } catch (error) {
        return ErrorHandler({ req, error: error })
    }
}

/* PREFIX */
export const galleryDirPrefix = "/gallery"
export const carrouselDirPrefix = "/carrousel"