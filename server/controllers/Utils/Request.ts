import { Request } from "express"
import { RequestError } from "../error/ErrorHandler";

/* REQUEST */
export function getBody<T>(req: Request): T {
    try {
        const body: T = req.body as T
        return body
    } catch (error: any) {
        throw new RequestError("Error al obtener los datos del body.", 409)
    }
}

export function getParamValue<T>(req: Request, key: string): T {
    try {
        return req.params[key] as T
    } catch (error: any) {
        throw new RequestError("Error al obtener los datos de params.", 409)
    }
}

export function getQueryValue<T>(req: Request, key: string): T {
    try {
        return req.query[key] as T
    } catch (error: any) {
        throw new RequestError("Error al obtener los datos de query.", 409)
    }
}