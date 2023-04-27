import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloServerPluginLandingPageDisabled } from '@apollo/server/plugin/disabled';
import { startServerAndCreateLambdaHandler, handlers } from '@as-integrations/aws-lambda';
import { IS_OFFLINE } from '../constant';
import resolvers from '../resolver';
import typeDefs from '../schema/schema';

/**
 * Loads landing page only on local env, disables landing page on server env
 * https://www.apollographql.com/docs/apollo-server/builtin-plugins/
 */
const getApolloPlugins = () => {
  // https://www.apollographql.com/docs/apollo-server/api/plugin/landing-pages
  const localPlugin = ApolloServerPluginLandingPageLocalDefault();
  const serverPlugin = ApolloServerPluginLandingPageDisabled();
  const plugin = IS_OFFLINE === true ? localPlugin : serverPlugin;
  return [plugin];
};

const requestHandler = handlers.createAPIGatewayProxyEventRequestHandler();

const contextHelper = async (context: any): Promise<any> => {
  // can put dataloader into the context
  return context;
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: getApolloPlugins(),
});

export const handler = startServerAndCreateLambdaHandler(server, requestHandler, { context: contextHelper });
