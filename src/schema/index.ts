const Todo = `
  type Todo {
    todoId: String
    todoContent: String
  }
`;

export default `
  ${Todo}
  type Query {
    "get all upcoming todo"
    upcomingTodo: [Todo]
  }
`;
