import { Resolvers } from '../model/gql/schema';

const resolvers: Resolvers = {
  Query: {
    foo: () => {
      return [
        {
          id: '1',
          content: 'content 1',
        },
        {
          id: '2',
          content: 'content 2',
        },
      ];
    },
  },
};

export default resolvers;
