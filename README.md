# GraphQL TypeScript Codegen POC

This repository is a proof-of-concept (POC) demonstrating how to setup the GraphQL Code Generator to auto generate the GraphQL Resolvers Typescript type.

Manually maintaining the GraphQL operation types or the complete absence of types can lead to many issues:

1. outdated typing (regarding the current Schema)
2. typos
3. partial typing of data (not all Schema's fields has a corresponding type)

For this reason, automating and generating the typing of GraphQL operations will both improve the developer experience and stability of the stack.

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