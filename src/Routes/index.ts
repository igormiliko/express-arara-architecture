import express from "express"
import AbstractRouter from "./AbstractRoute";
import BirdsRoute from "./BirdsRoute";

class Routes {
   routes = [
      BirdsRoute
   ]
   load(app: express.Application) {
      return new Promise<void>((resolve, reject) => {
         this.routes.map((route: AbstractRouter) => route.initIn(app))
      })
   }
}

export default new Routes()