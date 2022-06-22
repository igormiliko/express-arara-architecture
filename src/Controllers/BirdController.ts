import { NextFunction, Request, Response } from "express";
import AbstractResolver, { entities } from "../Resolver/AbstractResolver";
import AbstractController from "./AbstractController";

class BirdController extends AbstractController {
  builder: any = {};
  resolver: AbstractResolver;

  constructor(entityName: entities) {
    super(entityName)
  }

  getAll = async (req: Request, res: Response, Next: NextFunction) => {
    try {
      const response = await this.resolver.getAll();
      return res.send(response);
    } catch (error: any) {
      res.send(error.meta.cause)
    }
  }

  getOne = async (req: Request, res: Response, Next: NextFunction) => {
    try {
      const { id } = req.params;
      const where = {
        id_bird: Number(id),
      };
      const response = await this.resolver.getOne(where);
      return res.send(response);
    } catch (error: any) {
      res.send(error.meta.cause)
    }
  }

  delete = async (req: Request, res: Response, Next: NextFunction) => {
    try {
      const { id } = req.body;
      const where = {
        id_bird: Number(id),
      };
      const response = await this.resolver.delete(where);
      return res.send(response);
    } catch (error: any) {
      res.send(error.meta.cause)
    }
  }

  create = async (req: Request, res: Response, Next: NextFunction) => {
    try {
      const { bird } = req.body;
      const response = await this.resolver.create(bird);
      return res.send(response);
    } catch (error: any) {
      res.send(error.meta.cause)
    }
  }

  update = async (req: Request, res: Response, Next: NextFunction) => {
    try {
      const { bird, id } = req.body;
      const where = {
        id_bird: Number(id),
      };
      const response = await this.resolver.update(where, bird);
      return res.send(response);
    } catch (error: any) {
      res.send(error.meta.cause)
    }
  }
}

export default new BirdController("birds");
