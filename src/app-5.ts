import express, { Application } from "express";
import BirdRoute from "./Routes/Birds";
import BirdsMiddleField from "./Middlefields/BirdsMiddleField";

class App {
  private express: Application;
  private BirdRoute: any;

  constructor() {
    this.express = express();
    this.middlewares();
    this.Router()
    this.MiddleField();
  }

  private middlewares() {
    this.express.use(express.json({limit: "50mb"}));
    this.express.use(express.urlencoded({extended: true}));
}

  private Router() {
    console.time('Router')
    this.BirdRoute = BirdRoute
    console.timeEnd('Router')
  }

  private MiddleField() {
    console.time('Middlefield');
    BirdsMiddleField.applyControllers(this.BirdRoute);
    console.timeEnd('Middlefield');
  }

  init() {
    this.BirdRoute.initIn(this.express);
    return this.express;
  }
}

export default new App().init();
