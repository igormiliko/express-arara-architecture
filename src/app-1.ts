import express, { NextFunction } from 'express'
import { Request, Response } from 'express'
import BirdRoutes from './Routes/Birds'

const app = express()

function BirdController(req: Request , res: Response) {
   return res.send('Hello, I\'m a arara')
}

const middlewares = [
   (req: Request,res: Response, next: NextFunction) => {
      console.log('I\'m blue')
      next()
   },
   (req: Request,res: Response, next: NextFunction) => {
      console.log('And I can fly')
      next()
   },
]

const BirdApp = new BirdRoutes('bird', middlewares)

BirdApp.get(BirdController)
BirdApp.initIn(app)

export default app