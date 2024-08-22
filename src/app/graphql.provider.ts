import { Apollo, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { ApplicationConfig, inject } from '@angular/core';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { GRAPHQL_V1_API_URL } from './core/constants/api-url';
import { environment } from 'src/environments/environment';
import { setContext } from '@apollo/client/link/context';

const uri = GRAPHQL_V1_API_URL;
const apiKey = environment.bitQueryApiKey.v1;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function apolloOptionsFactory(): ApolloClientOptions<any> {
  const httpLink = inject(HttpLink);

  // Create a link to set the API key in the headers
  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        'X-API-KEY': apiKey, // Add the API key to headers
      },
    };
  });

  return {
    link: authLink.concat(httpLink.create({ uri })),
    cache: new InMemoryCache(),
  };
}

export const graphqlProvider: ApplicationConfig['providers'] = [
  Apollo,
  {
    provide: APOLLO_OPTIONS,
    useFactory: apolloOptionsFactory,
  },
];
