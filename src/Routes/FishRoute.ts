import Middleware from "../Middleware/Middleware";
import AbstractRouter from "./AbstractRoute";

class FishRoute extends AbstractRouter {}

export default new FishRoute(Middleware.middlewares ,'fish');
