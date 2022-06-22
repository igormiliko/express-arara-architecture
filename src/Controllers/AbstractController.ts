import { NextFunction, Request, Response } from "express";
import ResolverFactory from "../Resolver/ResolverFactory";

export default abstract class AbstractController {
  builder: any;
  resolver: any;
  constructor(entityName: string) {
    this.resolver = ResolverFactory[entityName]();
  }
  abstract getAll(req: Request, res: Response, Next: NextFunction): any;

  abstract getOne(req: Request, res: Response, Next: NextFunction): any; 

  abstract delete(req: Request, res: Response, Next: NextFunction): any; 

  abstract create(req: Request, res: Response, Next: NextFunction): any; 

  abstract update(req: Request, res: Response, Next: NextFunction): any; 
}
