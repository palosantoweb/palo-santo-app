import { NextRequest } from "next/server";
import { NextContext, galleryDirPrefix, getParamValue, handleResponse } from "../../../controllers/Utils/Request";
import { remove } from "../../../controllers/FileController";

export async function DELETE(req: NextRequest, context: NextContext) {
    return handleResponse(req, remove(getParamValue<string>(context, "name"), galleryDirPrefix))
}