const resolvers = {
  Query: {
    upcomingTodo: () => {
      return [
        {
          todoId: '1',
          todoContent: 'content 1',
        },
        {
          todoId: '2',
          todoContent: 'content 2',
        },
        {
          todoId: '3',
          todoContent: 'content 3',
        },
      ];
    },
  },
  Todo: {
    todoContent: (parent) => {
      if (parent.todoId === '2') {
        return 'override content';
      }

      return parent.todoContent;
    },
  },
};

export default resolvers;
