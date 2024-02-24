import { saveUpdate } from "../../../controllers/FileController";
import { galleryDirPrefix, getBody, handleResponse } from "../../../controllers/Utils/Request";

export async function POST(req) {
    return handleResponse(req, saveUpdate(await getBody(req), galleryDirPrefix))
}