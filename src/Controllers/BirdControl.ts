import { NextFunction, Request, Response } from "express";
import ResolverFactory from "../Resolver/ResolverFactory";
// import AbstractResolver from "../Resolver/BirdResolver";

export class AbstractController {
  resolver: any
  
  constructor(entityName: string) {
    this.resolver = ResolverFactory[entityName]()
  }

 async getAll(req: Request, res: Response) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.resolver.getAll()
        return res.send(response)
      } catch (error) {
        reject(error)
      }
    })
  }

 async getOne(req: Request, res: Response) {
    return new Promise(async (resolve, reject) => {
      try {
        const {id} = req.params
        const response = await this.resolver.getOne(Number(id))
        return res.send(response)
      } catch (error) {
        reject(error)
      }
    })
  }

 async delete(req: Request, res: Response) {
    return new Promise(async (resolve, reject) => {
      try {
        const { id } = req.body;
        const response = await this.resolver.delete(Number(id));
        return res.send(response);
      } catch (error) {
        reject(error)
      }
    })
  }

 async create(req: Request, res: Response) {
    return new Promise(async (resolve, reject) => {
      try {
        const { bird } = req.body;
        const response = await this.resolver.insert(bird);
        return res.send(response);
      } catch (error) {
        reject(error)
      }
    })
  }

 update(req: Request, res: Response) {
    return new Promise(async (resolve, reject) => {
      try {
        const { bird, id } = req.body;
        const response = await this.resolver.update(Number(id), bird);
        return res.send(response);
      } catch (error) {
        reject(error)
      }
    })
  }
}

class BirdController extends AbstractController {}

export default new BirdController("birds");
