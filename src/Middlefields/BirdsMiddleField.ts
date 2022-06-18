import BirdControl, { AbstractController } from "../Controllers/BirdControl";
import { IAbstractRouter } from "../type";

class BirdMiddleField {
   

   applyControllers(BirdRoute: IAbstractRouter) {
      BirdRoute.getAll(BirdControl.getAll.bind(BirdControl));
      BirdRoute.delete(BirdControl.delete.bind(BirdControl));
      BirdRoute.post(BirdControl.create.bind(BirdControl));
      BirdRoute.put(BirdControl.update.bind(BirdControl));
      BirdRoute.getOne(BirdControl.getOne.bind(BirdControl));
   }
}

export default new BirdMiddleField()