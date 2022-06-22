import { NextFunction, Request, Response } from "express";
import AbstractResolver, { entities } from "../Resolver/AbstractResolver";

export default abstract class AbstractController {
  builder: any;
  resolver: any;
  constructor(entityName: entities) {
    this.resolver = new AbstractResolver(entityName);
  }
  abstract getAll(req: Request, res: Response, Next: NextFunction): any;

  abstract getOne(req: Request, res: Response, Next: NextFunction): any; 

  abstract delete(req: Request, res: Response, Next: NextFunction): any; 

  abstract create(req: Request, res: Response, Next: NextFunction): any; 

  abstract update(req: Request, res: Response, Next: NextFunction): any; 
}
