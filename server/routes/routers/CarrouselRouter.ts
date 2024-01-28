import { Request, Response, Router } from 'express';
import { getBody, getParamValue } from '../../controllers/Utils/Request';
import { ErrorHandler, ErrorOptions } from '../../controllers/error/ErrorHandler';
import { getAllImages, remove, saveUpdate } from '../../controllers/FileController';
import { FileModel } from '../../models/FileModel';

const carrouselRouter = Router();
const dirPrefix = "/carrousel"

carrouselRouter.post("/upload", (req: Request, res: Response) => {
    saveUpdate(getBody<FileModel[]>(req), dirPrefix)
        .then(result => res.send(result))
        .catch(error => ErrorHandler({ req, res, error, status: error.status || 500 } as ErrorOptions));
});

carrouselRouter.get("/", (req: Request, res: Response) => {
    getAllImages(dirPrefix)
        .then(result => res.send(result))
        .catch(error => ErrorHandler({ req, res, error, status: error.status || 500 } as ErrorOptions));
});

carrouselRouter.delete("/:name", (req: Request, res: Response) => {
    remove(getParamValue<string>(req, "name"), dirPrefix)
        .then(result => res.send(result))
        .catch(error => ErrorHandler({ req, res, error, status: error.status || 500 } as ErrorOptions));
});

export default carrouselRouter