# Introduction to Using .graphql Files in Typescript

When working with GraphQL and Typescript, you may want to use `.graphql` files to store your queries, mutations, and other GraphQL operations. However, Typescript doesn't know how to handle these files by default, so you need to provide it with some additional information.

To do this, you need to create a graphql.d.ts file in your `src/@types` folder. This file will tell Typescript how to handle .graphql files and provide the correct types for your GraphQL Schema.

## Steps

1. Create a new folder in your project called `src/@types` if it doesn't already exist.

2. Inside the `src/@types` folder, create a new file called `graphql.d.ts`.

3. Add the following code to the `graphql.d.ts` file:

```typescript
declare module '*.graphql' {
  import { DocumentNode } from 'graphql';
  const value: DocumentNode;
  export default value;
}
```

4. Save the file.

5. Then Add the follow configuration to the `tsconfig.json` file:
```
{
  "compilerOptions": {
    ...
    "typeRoots": ["node_modules/@types", "src/@types"],
  },
  ...
}
```

6. That's it! Now Typescript will know how to handle .graphql files in your project. You can import them like any other module and use them as DocumentNodes.