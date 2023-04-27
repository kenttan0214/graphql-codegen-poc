import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'src/schema/schema.ts',
  // https://the-guild.dev/graphql/codegen/docs/config-reference/require-field#typescript-support
  require: ['ts-node/register'],
  generates: {
    'src/model/gql/schema.ts': {
      plugins: ['typescript', 'typescript-resolvers'],
    },
  },
};

export default config;
