import express, { Response, Request, Application, NextFunction } from "express";
import BirdRoute from "./Routes/Birds";
// import BirdRoutes from "./Routes/Birds";
import BirdMiddleware from "./Middleware/BirdMiddleware";
import BirdsMiddleField from "./Middlefields/BirdsMiddleField";

class App {
  private express: Application;
  private BirdRoute: any;

  constructor() {
    this.express = express();
    this.Router()
    this.MiddleField();
  }

  Router() {
    this.BirdRoute = BirdRoute(BirdMiddleware.middlewares)
  }

  MiddleField() {
    BirdsMiddleField.applyControllers(this.BirdRoute);
  }

  init() {
    this.BirdRoute.initIn(this.express);
    return this.express;
  }
}

export default new App().init();
