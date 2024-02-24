import { convertUser } from "../converters/UserConverter";
import { RequestError } from "./error/ErrorHandler";
import User from '../database/models/User'

export async function login(email) {
    const dbUser = await User.findOne({ where: { email } })

    if (!dbUser)
        throw new RequestError(new Error(), `El usuario de email >${email}< no se encuentra registrado en el sistema.`, 415)

    return convertUser(dbUser);
}