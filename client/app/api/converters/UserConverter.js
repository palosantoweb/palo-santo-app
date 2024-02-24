export function convertUser(dbUser, user) {
    if (!user)
        user = {}
    user.id = dbUser.id
    user.email = dbUser.email
    user.canEdit = dbUser.canEdit
    user.canView = dbUser.canView
    return user
}