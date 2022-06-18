import { NextFunction, Request, Response } from "express";
import { ParsedQs } from "qs";
import { ParamsDictionary } from "express-serve-static-core/index";

type MiddlewareMatrix = (req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>, next: NextFunction) => void
 
 interface ICOntroller {
    (req: Request, res: Response, next: NextFunction): Promise<void>
 }

 export interface IAbstractRouter {
   pathName: string | RegExp;
   addRoute(pathName: string | RegExp, controller: ICOntroller): void
 
   getAll(controller: any): void
   post(controller: any): void
   delete(controller: any): void
   put(controller: any): void
   getOne(controller: any): void
 
 
   initIn(appOut: any): void
 }
 