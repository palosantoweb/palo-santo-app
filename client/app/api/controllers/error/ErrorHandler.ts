import { NextRequest, NextResponse } from "next/server"

// Clase para controlar error de peticion
export class RequestError extends Error {
    public status: number

    constructor(error: Error, message: string, status: number) {
        super(message)
        this.status = status
        this.stack = error.stack
        this.cause = error.cause
    }
}

// 409 => conflicto, error controlado
// 415 => falla de autorizacion servicio externo
// 500 => error de conexion con base de datos

export interface ErrorOptions {
    req: NextRequest,
    error: RequestError
}

export interface ErrorResponse {
    message: string
    error: string
    status: number
}

export function ErrorHandler(options: ErrorOptions) {
    let message = "[ERROR HANDLER]"
    message += options.req ? ` URL=>${options.req.url}` : ""
    let errorMessage = options.error ? options.error.message : "RUTA DESCONOCIDA"
    message += `:\n${errorMessage}`
    console.log(message)
    console.log(options.error?.stack)
    return NextResponse.json({
        message: errorMessage,
        error: options.error.stack,
        status: options.error.status
    })
}