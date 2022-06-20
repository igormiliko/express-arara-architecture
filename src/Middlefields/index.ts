import AbstractMiddleField from "./AbstractMiddlefield";
import BirdsMiddleField from "./BirdsMiddlefield";
import FishMiddlefield from "./FishMiddlefield";

class MiddleField {
   middlefields = [
      BirdsMiddleField,
      FishMiddlefield
   ]
   run() {
      return new Promise<void>((resolve, reject) => {
         this.middlefields.map((middlefield: any) => middlefield)
      })
   }
}

export default new MiddleField()