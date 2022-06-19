import { NextFunction, Request, Response } from "express";

export default interface AbstractController {
  builder: any;
  resolver: any;
  getAll(req: Request, res: Response, Next: NextFunction): any;

  getOne(req: Request, res: Response, Next: NextFunction): any; 

  delete(req: Request, res: Response, Next: NextFunction): any; 

  create(req: Request, res: Response, Next: NextFunction): any; 

  update(req: Request, res: Response, Next: NextFunction): any; 
}
