import express, { Application } from "express";
import BirdRoute from "./Routes/BirdsRoute";
import BirdsMiddleField from "./Middlefields/BirdsMiddleField";
import Routes from "./Routes";

class App {
  private express: Application;

  constructor() {
    this.express = express();
    this.Middlewares();
    this.MiddleField();
    this.LoadRoutes();
  }

  private Middlewares() {
    this.express.use(express.json({ limit: "50mb" }));
    this.express.use(express.urlencoded({ extended: true }));
  }

  private MiddleField() {
    BirdsMiddleField.applyControllers();
  }

  private LoadRoutes() {
    Routes.load(this.express);
  }

  init() {
    return this.express;
  }
}

export default new App().init();
