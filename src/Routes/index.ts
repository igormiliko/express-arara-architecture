import express from "express"
import AbstractRouter from "./AbstractRoute";
import BirdsRoute from "./BirdsRoute";
import FishRoute from "./FishRoute";

class Routes {
   routes = [
      BirdsRoute,
      FishRoute
   ]
   load(app: express.Application) {
      return new Promise<void>((resolve, reject) => {
         return this.routes.map((route: AbstractRouter) => route.initIn(app))
      })
   }
}

export default new Routes()