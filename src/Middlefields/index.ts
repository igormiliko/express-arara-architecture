const cluster = require('cluster')

import BirdsMiddleField from "./BirdsMiddlefield";
import FishMiddlefield from "./FishMiddlefield";

class MiddleField {
  middlefields = [BirdsMiddleField, FishMiddlefield];
  run() {
    return new Promise<void>(async (resolve, reject) => {
      try {
        return Promise.all(
          this.middlefields.map(async (middlefield: any) =>{
            // if(cluster.isMaster) {
            //    cluster.fork()
            // } else {
               await middlefield
            // }
         })
        );
      } catch (error) {
        console.log(error);
      }
    });
  }
}

export default new MiddleField();
