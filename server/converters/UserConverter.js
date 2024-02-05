"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertUser = void 0;
const UserModel_1 = require("../models/UserModel");
function convertUser(dbUser, user) {
    if (!user)
        user = new UserModel_1.UserModel();
    user.id = dbUser.id;
    user.email = dbUser.email;
    user.canEdit = dbUser.canEdit;
    user.canView = dbUser.canView;
    return user;
}
exports.convertUser = convertUser;
//# sourceMappingURL=UserConverter.js.map