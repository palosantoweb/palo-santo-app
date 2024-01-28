import { Request, Response, Router } from "express";
import roomRouter from "./routers/RoomRouter";
import clientRouter from "./routers/ClientRouter";
import { serve } from "swagger-ui-express";
import instanceSwaggerRequestHandler from "../swagger/config";
import userRouter from "./routers/UserRouter";
import galleryRouter from "./routers/GalleryRouter";
import carrouselRouter from "./routers/CarrouselRouter";

const router = Router();

router.use('/user', userRouter);
router.use('/client', clientRouter);
router.use('/room', roomRouter);
router.use('/gallery', galleryRouter);
router.use('/carrousel', carrouselRouter);

router.use("/api-doc", serve, instanceSwaggerRequestHandler());

router.get('/', (req: Request, res: Response) => res.send(
    "<div style='color: blue'>Server is responding!<div>"
))

export default router;