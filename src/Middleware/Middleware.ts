import { NextFunction, Response, Request } from "express"

class BirdMiddleWare {
   middlewares = [
      (req: Request,res: Response, next: NextFunction) => {
         return new Promise<void>((resolve, reject) => {
            try {
               const {apikey} = req.headers;
      
               if(apikey !== 'blue-arara') {
                  res.statusCode = 401
                  res.json({
                     message: 'Not authorized'
                  }).send()
               }
               return next()
            } catch (error) {
               return error
            }
         })
         
      }
   ]
}

export default new BirdMiddleWare()