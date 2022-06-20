import BirdMiddleware from "../Middleware/Middleware";
import AbstractRouter from "./AbstractRoute";

class BirdRoute extends AbstractRouter {}

export default new BirdRoute(BirdMiddleware.middlewares ,'birds');
