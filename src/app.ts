import express, { Application } from "express";
import Middlefields from "./Middlefields";
import Routes from "./Routes";

class App {
  private express: Application;

  constructor() {
    this.express = express();
    this.Middlewares();
    this.RunMiddleField();
    this.LoadRoutes();
  }

  private Middlewares() {
    this.express.use(express.json({ limit: "50mb" }));
    this.express.use(express.urlencoded({ extended: true }));
  }

  private RunMiddleField() {
    Middlefields.run()
  }

  private LoadRoutes() {
    Routes.load(this.express);
  }

  init() {
    return this.express;
  }
}

export default new App().init();
