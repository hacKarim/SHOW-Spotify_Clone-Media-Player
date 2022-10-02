import '../styles/globals.css'
import type { AppProps } from 'next/app'

//Apollo Client
import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
    },
  };
});

const httpLink = new HttpLink({
  uri: process.env.SPOTIFY_URL
});


const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
  ssrMode: typeof window === 'undefined',
});


function MyApp({ Component, pageProps }: AppProps) {
  return (<ApolloProvider client={client}>
    <Component {...pageProps} />
  </ApolloProvider>
  )
}

export default MyApp
