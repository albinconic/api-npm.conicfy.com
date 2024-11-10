import {Hono} from 'hono'
import {getImage} from "../controllers/imageController";
import methodNotAllowedMiddleware from "../middlewares/methodNotAllowedMiddleware";

const imageRoutes = new Hono();

imageRoutes.get('/get-image/:width?/:height?', getImage, methodNotAllowedMiddleware);
//imageRoutes.get('/get-image/:width{[0-9]+}?/:height?', getImage, methodNotAllowedMiddleware);
//imageRoutes.get('/get-image', getImage, methodNotAllowedMiddleware);

export default imageRoutes;