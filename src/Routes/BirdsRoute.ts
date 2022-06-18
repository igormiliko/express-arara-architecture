import BirdMiddleware from "../Middleware/BirdMiddleware";
import AbstractRouter from "./AbstractRoute";

class BirdRoute extends AbstractRouter {}

export default new BirdRoute(BirdMiddleware.middlewares ,'birds');
