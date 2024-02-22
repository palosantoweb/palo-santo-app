import { NextRequest } from "next/server";
import { carrouselDirPrefix, handleResponse } from "../../controllers/Utils/Request";
import { getAllImages } from "../../controllers/FileController";

export async function GET(req: NextRequest) {
    return handleResponse(req, getAllImages(carrouselDirPrefix))
}