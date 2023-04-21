import { Serverless } from 'serverless/plugins/aws/provider/awsProvider';

const STAGE = process.env.STAGE;
const REGION = process.env.REGION;
const CORS = {
  origin: '*',
  headers: ['Content-Type', 'Authorization'],
};

const serverlessConfiguration: Serverless = {
  service: 'graphql-dynamodb-poc',
  frameworkVersion: '3',
  provider: {
    name: 'aws',
    runtime: 'nodejs16.x',
    stage: STAGE,
    region: REGION,
    timeout: 60,
    memorySize: 512,
    // Set the default RetentionInDays for a CloudWatch LogGroup
    logRetentionInDays: 7,
    apiGateway: {
      // Compress response when larger than specified size in bytes (must be between 0 and 10485760)
      minimumCompressionSize: 1024,
    },
    environment: {
      STAGE,
    },
  },
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true,
      // Provide a glob for files to ignore
      excludeFiles: 'src/**/*.test.ts',
      packagerOptions: {
        scripts: ['rm -rf node_modules/aws-sdk', 'rm -rf node_modules/@types/aws-lambda'],
      },
    },
    'serverless-offline': {
      reloadHandler: true,
    },
    // pruning of all but the most recent version(s) of managed functions from AWS
    prune: {
      automatic: true,
      number: 1,
    },
  },
  plugins: ['serverless-webpack', 'serverless-offline', 'serverless-prune-plugin'],
  functions: {
    graphql: {
      handler: 'src/handler/server.handler',
      events: [
        {
          http: {
            method: 'get',
            path: '/graphql',
            cors: CORS,
          },
        },
        {
          http: {
            method: 'post',
            path: '/graphql',
            cors: CORS,
          },
        },
      ],
    },
  },
};

module.exports = serverlessConfiguration;
