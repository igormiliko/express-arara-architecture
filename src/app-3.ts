import express, { Application, NextFunction } from "express";
import BirdRoute from "./Routes/Birds";
import BirdRoutes from "./Routes/Birds";
import BirdsMiddleField from "./Middlefields/BirdsMiddleField";
import BirdMiddleware from "./Middleware/BirdMiddleware";

class App {
  private express: Application;
  private BirdRoute: BirdRoutes;

  constructor() {
    this.express = express();
    this.BirdRoute = new BirdRoute("bird", BirdMiddleware.middlewares);
    this.MiddleField();
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
