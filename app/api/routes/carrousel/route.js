import { carrouselDirPrefix, handleResponse } from "../../controllers/Utils/Request";
import { getAllImages } from "../../controllers/FileController";

export async function GET(req) {
    return handleResponse(req, getAllImages(carrouselDirPrefix))
}