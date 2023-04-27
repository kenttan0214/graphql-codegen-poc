const todoSchema = `
type Todo {
  todoId: String
  todoContent: String
}

type Query {
  upcomingTodo: [Todo]
}

schema {
  query: Query
}
`;

export default todoSchema;
