import { NextFunction, Request, Response, Router } from "express";
import { ICOntroller } from "../type";
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

  getAll(controller: ICOntroller) {
    this.addRoute("get", this.pathName, controller);
  }

  getOne(controller: ICOntroller) {
    this.addRoute("get", `${this.pathName}/:id`, controller);
  }

  post(controller: ICOntroller) {
    this.addRoute("post", this.pathName, controller);
  }

  put(controller: ICOntroller) {
    this.addRoute("put", this.pathName, controller);
  }

  delete(controller: ICOntroller) {
    this.addRoute("delete", this.pathName, controller);
  }

  initIn(appOut: any) {
    return appOut.use(this.router);
  }
}
