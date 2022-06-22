import { NextFunction, Request, Response } from "express";
import AbstractResolver, { entities } from "../Resolver/AbstractResolver";
import AbstractController from "./AbstractController";

class FishController extends AbstractController {
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
      res.send(error)
    }
  }

  getOne = async (req: Request, res: Response, Next: NextFunction) => {
    try {
      const { id } = req.params;
      const where = {
        fish_id: Number(id),
      };
      const response = await this.resolver.getOne(where);
      return res.send(response);
    } catch (error: any) {
      res.send(error)
    }
  }

  delete = async (req: Request, res: Response, Next: NextFunction) => {
    try {
      const { id } = req.body;
      const where = {
        fish_id: Number(id),
      };
      const response = await this.resolver.delete(where);
      return res.send(response);
    } catch (error: any) {
      res.send(error)
    }
  }

  create = async (req: Request, res: Response, Next: NextFunction) => {
    try {
      const { fish } = req.body;
      const response = await this.resolver.create(fish);
      return res.send(response);
    } catch (error: any) {
      res.send(error)
    }
  }

  update = async (req: Request, res: Response, Next: NextFunction) => {
    try {
      const { fish, id } = req.body;
      const where = {
        fish_id: Number(id),
      };
      const response = await this.resolver.update(where, fish);
      return res.send(response);
    } catch (error: any) {
      res.send(error)
    }
  }
}

export default new FishController("fish");
