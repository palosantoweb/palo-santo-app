import { Request, Response, Router } from 'express';
import { getParamValue } from '../../controllers/Utils/Request';
import { ErrorHandler, ErrorOptions } from '../../controllers/error/ErrorHandler';
import { login } from '../../controllers/userController';

const userRouter = Router();

userRouter.get("/login/:email", (req: Request, res: Response) => {
    login(getParamValue<string>(req, "email"))
        .then(result => res.send(result))
        .catch(error => ErrorHandler({ req, res, error, status: error.status || 500 } as ErrorOptions));
});

export default userRouter