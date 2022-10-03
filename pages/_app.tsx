import '../styles/globals.css'
import type { AppProps } from 'next/app'

//Apollo Client
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { NextUIProvider } from '@nextui-org/react';



const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://spotify-graphql.shotgun.live/api',
  // ssrMode: typeof window === 'undefined',
});


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </ApolloProvider>
  )
}

export default MyApp
