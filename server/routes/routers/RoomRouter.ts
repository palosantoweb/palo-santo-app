import { Request, Response, Router } from 'express';
import { getBody } from '../../controllers/Utils/Request';
import { ErrorHandler, ErrorOptions } from '../../controllers/error/ErrorHandler';
import { assignRoomToClient } from '../../controllers/RoomController';
import { RoomHasClientModel } from '../../models/RoomHasClientModel';

const roomRouter = Router();

roomRouter.post("/assign", (req: Request, res: Response) => {
    // TODO: Agregar restriccion para operadores que solo pueden crear
    assignRoomToClient(getBody<RoomHasClientModel>(req))
        .then(result => res.send(result))
        .catch(error => ErrorHandler({ req, res, error, status: error.status || 500 } as ErrorOptions));
});

export default roomRouter