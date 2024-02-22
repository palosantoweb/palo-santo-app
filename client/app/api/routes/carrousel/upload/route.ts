import { NextRequest } from "next/server";
import { saveUpdate } from "../../../controllers/FileController";
import { carrouselDirPrefix, getBody, handleResponse } from "../../../controllers/Utils/Request";
import { FileModel } from "../../../models/FileModel";

export async function POST(req: NextRequest) {
    return handleResponse(req, saveUpdate(await getBody<FileModel[]>(req), carrouselDirPrefix))
}