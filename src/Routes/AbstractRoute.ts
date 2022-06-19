import { NextFunction, Request, Response, Router } from "express";
import { ICOntroller } from "../type";


export interface IAbstractRoute {
  getAll(controller: ICOntroller): void

  getOne(controller: ICOntroller): void

  create(controller: ICOntroller): void

  update(controller: ICOntroller): void

  delete(controller: ICOntroller): void
}

export default class AbstractRouter {
  public pathName: string | RegExp = "";
  private router: any = Router()

  constructor(
    middleware: any,
    pathName: string | RegExp,
  ) {
    this.router.use(...middleware)
    this.pathName = pathName;
  }

  private addRoute(
    method: "get" | "post" | "put" | "delete",
    pathName: string | RegExp,
    controller: ICOntroller
  ) {
    this.router[method](`/${pathName}`, (req: Request, res: Response, next:NextFunction) => {
      controller(req, res, next)
    }
    );
  }

  getAll = (controller: ICOntroller) => {
    this.addRoute("get", this.pathName, controller);
  }

  getOne = (controller: ICOntroller) => {
    this.addRoute("get", `${this.pathName}/:id`, controller);
  }

  create = (controller: ICOntroller) => {
    this.addRoute("post", this.pathName, controller);
  }

  update = (controller: ICOntroller) => {
    this.addRoute("put", this.pathName, controller);
  }

  delete = (controller: ICOntroller) => {
    this.addRoute("delete", this.pathName, controller);
  }

  initIn(appOut: any) {
    return appOut.use(this.router);
  }
}
