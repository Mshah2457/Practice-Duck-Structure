import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { GRAPHQL_URL } from '../Config';

export default new ApolloClient({
  link: new HttpLink({ uri: `${GRAPHQL_URL}` }),
  cache: new InMemoryCache().restore({/*Load from LocalStorage?*/})
});
