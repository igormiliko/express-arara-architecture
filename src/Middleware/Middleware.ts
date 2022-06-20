import { NextFunction, Response, Request } from "express"

class BirdMiddleWare {
   middlewares = [
      (req: Request,res: Response, next: NextFunction) => {
         
         const {apikey} = req.headers;

         if(apikey !== 'blue-arara') {
            res.statusCode = 401
            res.json({
               message: 'Not authorized'
            }).send()
         }
         next()
      }
   ]
}

export default new BirdMiddleWare()