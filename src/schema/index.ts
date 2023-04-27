import { mergeTypeDefs } from '@graphql-tools/merge';
import barSchema from './bar.graphql';
import fooSchema from './foo.graphql';

const typeDefs = mergeTypeDefs([barSchema, fooSchema]);

export default typeDefs;
