import { convertUser } from "../converters/UserConverter";
import { User } from "../database/entities/User";
import { UserModel } from "../models/UserModel";
import { RequestError } from "./error/ErrorHandler";

export async function login(email: string): Promise<UserModel> {
    const dbUser = await User.findOne({ where: { email } })

    if (!dbUser)
        throw new RequestError(`El usuario de email >${email}< no se encuentra registrado en el sistema.`, 415)

    return convertUser(dbUser);
}