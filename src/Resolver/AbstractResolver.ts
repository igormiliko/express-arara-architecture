import { birds, PrismaClient } from "@prisma/client";

export default class AbstractResolver {
  prisma: PrismaClient = new PrismaClient();
  entity: "birds";
  constructor(entity: "birds") {
    this.entity = entity;
  }
  async getAll() {
    return new Promise<any[]>(async (resolve, reject) => {
      try {
        const res: any[] = await this.prisma[this.entity].findMany();
        return resolve(res);
      } catch (error) {
        return reject(error);
      }
    });
  }

  async create(entity: any) {
    return new Promise<any>(async (resolve, reject) => {
      try {
        const res: any = await this.prisma[this.entity].create({
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
        const res: any = await this.prisma[this.entity].findUnique({
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
        const res: any = await this.prisma[this.entity].delete({
          where: where,
        });
        return resolve(res);
      } catch (error) {
        return reject(error);
      }
    });
  }
  async update(where: any, data: any) {
    return new Promise<any>((resolve, reject) => {
      try {
        const res: any = this.prisma[this.entity].update({
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
