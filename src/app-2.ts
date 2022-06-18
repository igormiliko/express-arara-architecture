import express, { Application, NextFunction } from "express";
import { Request, Response } from "express";
import BirdRoute from "./Routes/Birds";
import BirdRoutes from "./Routes/Birds";

class App {
  public express: Application;
  private BirdApp: BirdRoutes;

  constructor() {
    this.express = express();
    this.BirdApp = new BirdRoute("bird");
    this.MiddleField();
  }

  BirdController = (req: Request, res: Response) => {
    return res.send("Hello, I'm a arara");
  };

  MiddleField() {
    this.BirdApp.get(this.BirdController);
    this.BirdApp.initIn(this.express);
  }
}

export default new App().express;
