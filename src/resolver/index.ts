import { mergeResolvers } from '@graphql-tools/merge';
import { Resolvers } from '../model/gql/schema';
import fooResolver from './foo';
import barResolver from './bar';

const resolvers: Resolvers = mergeResolvers([fooResolver, barResolver]);

export default resolvers;
