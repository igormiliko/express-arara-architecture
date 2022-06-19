import AbstractMiddleField from "./AbstractMiddlefield";
import BirdsMiddleField from "./BirdsMiddleField";

class MiddleField {
   middlefields = [
      BirdsMiddleField
   ]
   run() {
      return new Promise<void>((resolve, reject) => {
         this.middlefields.map((middlefield: any) => middlefield)
      })
   }
}

export default new MiddleField()