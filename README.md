# GraphQL TypeScript Codegen POC

This repository is a proof-of-concept (POC) demonstrating how to setup the GraphQL Code Generator to auto generate the GraphQL Resolvers Typescript type.

## Why Generate Types?
Manually maintaining GraphQL operation types, or the complete absence of types, can lead to many issues including outdated typing, typos, and partial typing of data. By automating and generating the typing of GraphQL operations, you can improve the developer experience and the stability of the stack.

## How It Works
The GraphQL Code Generator uses a schema and a set of documents (queries, mutations, subscriptions) to generate Typescript types for GraphQL operations. In this POC, we use a local schema and a set of sample documents to generate the resolver types.

The generated resolver types are based on the schema and the documents, and include types for queries, mutations, and subscriptions. These types are then used by the resolver functions to ensure type safety.

## Available Scripts

In the project directory, you can run:

### `npm run local`
Runs the app in the development mode.

### `npm run codegen`
To auto generate the `schema.grapgql` type

## Reference
1. [GraphQL Code Generator](https://graphql-code-generator.com/)
2. [GraphQL Code Generator Install Wizard](https://the-guild.dev/graphql/codegen/docs/getting-started/installation#initialization-wizard)
3. [Import .graphql File](https://medium.com/open-graphql/how-to-resolve-import-for-the-graphql-file-with-typescript-and-webpack-7a34c906e4c1)