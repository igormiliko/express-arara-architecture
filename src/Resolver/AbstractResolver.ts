import { birds, PrismaClient } from "@prisma/client";

export default class AbstractResolver {
   prisma: PrismaClient;
   entity: 'birds';
   constructor(entity: 'birds') {
      this.prisma = new PrismaClient()
      this.entity = entity
   }
   async getAll() {
      return new Promise<any[]>(async (resolve, reject) => {
         try {
            const res: any[] = await this.prisma[this.entity].findMany()
            resolve(res)
         } catch (error) {
            reject(error)            
         }
      })
   }
   async getOne(id: number) {
      return new Promise<any | string>(async (resolve, reject) => {
         try {
            const res: any = await this.prisma[this.entity].findUnique({
               where: {
                  id_bird: id
               }
            })
            resolve(res ? res : 'Nothing')
         } catch (error) {
            reject(error)
         }
      })
   }
   async delete(id: number) {
      return new Promise<any>(async (resolve, reject) => {
         try {
            const res: any = await this.prisma[this.entity].delete({
               where:{
                  id_bird: id
               }
            })
            resolve(res)
         } catch (error) {
            reject(error)
         }
      })
   }
   async update(id: number, data: any) {
      return new Promise<any>((resolve, reject) => {
         try {
            const res: any = this.prisma[this.entity].update({
               where: {
                  id_bird: id
               },
               data: data
            })
            resolve(res)
         } catch (error) {
            reject(error)
         }
      })
   }
   async insert(entity: any) {
      return new Promise<any>(async (resolve, reject) => {
         try {
            const res: any = await this.prisma[this.entity].create({
               data: entity
            })
            resolve(res)
         } catch (error) {
            reject(error)
         }
      })
      
   }
}