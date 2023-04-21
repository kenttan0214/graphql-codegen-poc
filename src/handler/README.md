# createAPIGatewayProxyEventRequestHandler

When building AWS Lambda functions that interact with API Gateway events, you have two options:

1. createAPIGatewayProxyEventRequestHandler
2. createAPIGatewayProxyV2EventRequestHandler

Option 1 is used for the API Gateway `REST API`, whereas the option 2 is used for the `HTTP API`.

To differentiate it please check `serverless.ts` file:

Option 1
```
  functions: {
    graphql: {
      handler: 'src/handler/server.handler',
      events: [
        {
          http: {},
        },
      ]
    }
  }
```

Option 2
```
  functions: {
    graphql: {
      handler: 'src/handler/server.handler',
      events: [
        {
          httpApi: {},
        },
      ]
    }
  }
```

