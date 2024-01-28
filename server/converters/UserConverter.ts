import { User } from "../database/entities/User";
import { UserModel } from "../models/UserModel";

export function convertUser(dbUser: User, user?: UserModel): UserModel {
    if (!user)
        user = new UserModel()
    user.id = dbUser.id
    user.email = dbUser.email
    user.canEdit = dbUser.canEdit
    user.canView = dbUser.canView
    return user
}