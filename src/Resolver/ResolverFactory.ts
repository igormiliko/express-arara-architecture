import AbstractResolver from "./AbstractResolver";

class BirdResolver extends AbstractResolver {}
class FishResolver extends AbstractResolver {}

const ResolverFactory: any = {
   birds: () => new BirdResolver('birds'),
   fish: () => new FishResolver('fish')
}

export default ResolverFactory