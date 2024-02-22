import { NextRequest } from "next/server";
import { galleryDirPrefix, handleResponse } from "../../controllers/Utils/Request";
import { getAllImages } from "../../controllers/FileController";

export async function GET(req: NextRequest) {
    return handleResponse(req, getAllImages(galleryDirPrefix))
}