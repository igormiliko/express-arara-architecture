const cluster = require("cluster");

import BirdsMiddleField from "./BirdsMiddlefield";
import FishMiddlefield from "./FishMiddlefield";

class MiddleField {
  middlefields = [BirdsMiddleField, FishMiddlefield];
  async run() {
    try {
      await Promise.all(
        this.middlefields.map(async (middlefield: any) => {
          if(cluster.isMaster) {
             cluster.fork()
             cluster.on("exit", () => {
              cluster.fork();
            });
          } else {
          await Promise.resolve(middlefield.applyControllers());
          }
        })
      );
    } catch (error) {
      console.log(error);
    }
  }
}

export default new MiddleField();
