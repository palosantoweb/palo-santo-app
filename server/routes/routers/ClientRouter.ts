import { Request, Response, Router } from 'express';
import { getBody, getParamValue, getQueryValue } from '../../controllers/Utils/Request';
import { ErrorHandler, ErrorOptions } from '../../controllers/error/ErrorHandler';
import { ClientModel } from '../../models/ClientModel';
import { getAll, getById, saveUpdate } from '../../controllers/ClientController';

const clientRouter = Router();

clientRouter.post("/register", (req: Request, res: Response) => {
    // TODO: Agregar restriccion para operadores que solo pueden crear
    saveUpdate(getBody<ClientModel>(req))
        .then(result => res.send(result))
        .catch(error => ErrorHandler({ req, res, error, status: error.status || 500 } as ErrorOptions));
});

clientRouter.put("/modify/:clientId", (req: Request, res: Response) => {
    // TODO: Agregar restriccion para operadores que solo pueden crear
    saveUpdate(getBody<ClientModel>(req), getParamValue<number>(req, "clientId"))
        .then(result => res.send(result))
        .catch(error => ErrorHandler({ req, res, error, status: error.status || 500 } as ErrorOptions));
});

clientRouter.get("/", (req: Request, res: Response) => {
    // TODO: Agregar restriccion para operadores que solo pueden ver
    getAll(
        getQueryValue<number>(req, "pageNumber"),
        getQueryValue<number>(req, "id"),
        getQueryValue<string>(req, "email"),
        getQueryValue<string>(req, "name"),
        getQueryValue<string>(req, "nationality"),
        getQueryValue<number>(req, "phoneNumber"),
        getQueryValue<Date>(req, "birthDate"),
    )
        .then(result => res.send(result))
        .catch(error => ErrorHandler({ req, res, error, status: error.status || 500 } as ErrorOptions));
});

clientRouter.get("/:id", (req: Request, res: Response) => {
    // TODO: Agregar restriccion para operadores que solo pueden ver
    getById(getParamValue<number>(req, "id"))
        .then(result => res.send(result))
        .catch(error => ErrorHandler({ req, res, error, status: error.status || 500 } as ErrorOptions));
});

export default clientRouter