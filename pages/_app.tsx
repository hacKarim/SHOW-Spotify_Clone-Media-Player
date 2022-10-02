import '../styles/globals.css'
import type { AppProps } from 'next/app'

//Apollo Client
import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';






const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://spotify-graphql.shotgun.live/api',
  // ssrMode: typeof window === 'undefined',
});


function MyApp({ Component, pageProps }: AppProps) {
  return (<ApolloProvider client={client}>
    <Component {...pageProps} />
  </ApolloProvider>
  )
}

export default MyApp
