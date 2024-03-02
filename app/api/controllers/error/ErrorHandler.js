import { NextResponse } from "next/server"

export function ErrorHandler(options) {
    let message = "[ERROR HANDLER]"
    message += options.req ? ` URL=>${options.req.url}` : ""
    let errorMessage = options.error ? options.error.message : "RUTA DESCONOCIDA"
    message += `:\n${errorMessage}`
    console.log(message)
    console.log(options.error?.stack)
    return NextResponse.status(400).json({
        message: errorMessage,
        error: options.error.stack,
    })
}