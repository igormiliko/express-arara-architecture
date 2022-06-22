import AbstractController from "../Controllers/AbstractController";
import AbstractRouter, { IAbstractRoute } from "../Routes/AbstractRoute";

export default class AbstractMiddleField {
  private Route: AbstractRouter;
  private Controller: AbstractController;
  constructor(Route: AbstractRouter, Controller: AbstractController) {
    this.Route = Route;
    this.Controller = Controller;
  }

  async applyControllers() {
    return new Promise<void>(() => {
      try {
        Object.keys(this.Route).map((key: string) => {
          if (
            this.Route[key as keyof IAbstractRoute] &&
            this.Controller[key as keyof AbstractController]
          ) {
            this.Route[key](this.Controller[key].bind(this.Controller));
          }
        });
      } catch (error) {
        return error;
      }
    });
  }
}
