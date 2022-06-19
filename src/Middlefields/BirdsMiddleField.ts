import BirdController from "../Controllers/BirdController";
import BirdsRoute from "../Routes/BirdsRoute";
import AbstractMiddleField from "./AbstractMiddlefield";

class BirdMiddleField extends AbstractMiddleField {}

export default (new BirdMiddleField(BirdsRoute , BirdController)).applyControllers()
