import FishController from "../Controllers/FishController";
import FishRoute from "../Routes/FishRoute";
import AbstractMiddleField from "./AbstractMiddlefield";

class FishMiddleField extends AbstractMiddleField {}

export default (new FishMiddleField(FishRoute , FishController)).applyControllers()
