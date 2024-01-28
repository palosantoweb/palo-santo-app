import { Request, Response } from "express"


// Clase para controlar error de peticion
export class RequestError extends Error {
    public status: number

    constructor(message: string, status: number) {
        super(message)
        this.status = status
    }
}

// 409 => conflicto, error controlado
// 415 => falla de autorizacion servicio externo
// 500 => error de conexion con base de datos

export interface ErrorOptions {
    req: Request,
    res: Response,
    error?: Error,
    status: number
}

export function ErrorHandler(options: ErrorOptions) {
    let message = "[ERROR HANDLER]"
    message += options.req ? ` URL=>${options.req.url}` : ""
    let errorMessage = options.error ? options.error.message : "RUTA DESCONOCIDA"
    message += `:\n${errorMessage}`
    console.log(message)
    console.log(options.error?.stack)
    options.res.status(options.status || 404).send({ message: errorMessage })
}