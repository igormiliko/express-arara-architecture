import AbstractResolver from "./AbstractResolver";

class BirdResolver extends AbstractResolver {}

const ResolverFactory: any = {
   birds: () => new BirdResolver('birds')
}

export default ResolverFactory