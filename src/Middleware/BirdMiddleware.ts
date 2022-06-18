import { NextFunction, Response, Request } from "express"

class BirdMiddleWare {
   middlewares = [
      (req: Request,res: Response, next: NextFunction) => {
         // console.log('I\'m blue')
         new Promise((res, rej) => res(
            setTimeout(() => '_', 50)
         ))
         res.statusCode = 200
         next()
      },
      (req: Request,res: Response, next: NextFunction) => {
         new Promise((res, rej) => res(
            setTimeout(() => '_', 50)
         ))
         res.statusCode = 200
         // console.log('And I can fly')
         next()
      },
   ]
}

export default new BirdMiddleWare()