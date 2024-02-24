import { galleryDirPrefix, getParamValue, handleResponse } from "../../../controllers/Utils/Request";
import { remove } from "../../../controllers/FileController";

export async function DELETE(req, context) {
    return handleResponse(req, remove(getParamValue(context, "name"), galleryDirPrefix))
}