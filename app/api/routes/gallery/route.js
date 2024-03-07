import { galleryDirPrefix, handleResponse } from "../../controllers/Utils/Request";
import { getAllImages } from "../../controllers/FileController";
import { revalidatePath } from "next/cache";

export async function GET(req) {
    revalidatePath("/")
    return handleResponse(req, getAllImages(galleryDirPrefix))
}