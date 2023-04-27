import { Resolvers } from '../model/gql/schema';

const resolvers: Resolvers = {
  Query: {
    bar: () => {
      return [
        {
          id: 'a',
          content: 'content a',
        },
        {
          id: 'b',
          content: 'content b',
        },
      ];
    },
  },
};

export default resolvers;
