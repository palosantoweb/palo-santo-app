import { saveUpdate } from "../../../controllers/FileController";
import { carrouselDirPrefix, getBody, handleResponse } from "../../../controllers/Utils/Request";

export async function POST(req) {
    return handleResponse(req, saveUpdate(await getBody(req), carrouselDirPrefix))
}