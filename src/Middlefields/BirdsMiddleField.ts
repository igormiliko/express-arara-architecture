import BirdController from "../Controllers/BirdControl";
import BirdsRoute from "../Routes/BirdsRoute";
import { IAbstractRouter } from "../type";
import AbstractMiddleField from "./AbstractMiddlefield";

class BirdMiddleField extends AbstractMiddleField {}

export default new BirdMiddleField(BirdsRoute , BirdController)
