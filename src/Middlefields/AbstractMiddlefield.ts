export default class AbstractMiddleField {
  private Route: any;
  private Controller: any;
  constructor(Route: any, Controller: any) {
    this.Route = Route;
    this.Controller = Controller;
  }

  applyControllers() {
    this.Route.getAll(this.Controller.getAll.bind(this.Controller));
    this.Route.delete(this.Controller.delete.bind(this.Controller));
    this.Route.post(this.Controller.create.bind(this.Controller));
    this.Route.put(this.Controller.update.bind(this.Controller));
    this.Route.getOne(this.Controller.getOne.bind(this.Controller));
  }
}
