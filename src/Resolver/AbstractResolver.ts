import { PrismaClient } from "@prisma/client";

export type entities = "fish" | "birds"

export default class AbstractResolver {
  prisma: PrismaClient = new PrismaClient();
  entity: entities;
  constructor(entity: entities) {
    this.entity = entity;
  }
  async getAll() {
    return new Promise<any[]>(async (resolve, reject) => {
      try {
        const res: any[] = await this.prisma[this.entity as any].findMany();
        return resolve(res);
      } catch (error) {
        return reject(error);
      }
    });
  }

  async create(entity: any) {
    return new Promise<any>(async (resolve, reject) => {
      try {
        const res: any = await this.prisma[this.entity as any].create({
          data: entity,
        });
        return resolve(res);
      } catch (error) {
        return reject(error);
      }
    });
  }
  async getOne(where: any) {
    return new Promise<any | string>(async (resolve, reject) => {
      try {
        const res: any = await this.prisma[this.entity as any].findUnique({
          where: where,
        });
        return resolve(res);
      } catch (error) {
        return reject(error);
      }
    });
  }
  async delete(where: any) {
    return new Promise<any>(async (resolve, reject) => {
      try {
        const res: any = await this.prisma[this.entity as any].delete({
          where: where,
        });
        return resolve(res);
      } catch (error) {
        return reject(error);
      }
    });
  }
  async update(where: any, data: any) {
    return new Promise<any>(async (resolve, reject) => {
      try {
        const res: any = await this.prisma[this.entity as any].update({
          where: where,
          data: data,
        });
        return resolve(res);
      } catch (error) {
        return reject(error);
      }
    });
  }
}
