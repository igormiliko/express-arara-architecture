import { NextFunction, Request, Response } from "express";
import AbstractResolver from "../Resolver/AbstractResolver";
import ResolverFactory from "../Resolver/ResolverFactory";
import AbstractController from "./AbstractController";

class BirdController implements AbstractController {
  builder: any = {};
  resolver: AbstractResolver;

  constructor(entityName: string) {
    this.resolver = ResolverFactory[entityName]();
  }

  async getAll(req: Request, res: Response, Next: NextFunction) {
    const response = await this.resolver.getAll();
    return res.send(response);
  }

  async getOne(req: Request, res: Response, Next: NextFunction) {
    const { id } = req.params;
    const where = {
      id_bird: Number(id),
    };
    const response = await this.resolver.getOne(where);
    return res.send(response);
  }

  async delete(req: Request, res: Response, Next: NextFunction) {
    const { id } = req.body;

    const where = {
      id_bird: Number(id),
    };

    const response = await this.resolver.delete(where);
    return res.send(response);
  }

  async create(req: Request, res: Response, Next: NextFunction) {
    const { bird } = req.body;
    const response = await this.resolver.create(bird);
    return res.send(response);
  }

  async update(req: Request, res: Response, Next: NextFunction) {
    const { bird, id } = req.body;
    const where = {
      id_bird: Number(id),
    };
    const response = await this.resolver.update(where, bird);
    return res.send(response);
  }
}

export default new BirdController("birds");
