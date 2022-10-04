import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import Layout from "../components/Layout";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { PlayerProvider } from "../context/playerContext";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://spotify-graphql.shotgun.live/api",
  // ssrMode: typeof window === 'undefined',
});

const lightTheme = createTheme({
  type: "light",
});

const darkTheme = createTheme({
  type: "dark",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <PlayerProvider>
        <NextThemesProvider
          defaultTheme="system"
          attribute="class"
          value={{
            light: lightTheme.className,
            dark: darkTheme.className,
          }}
        >
          <Layout>
            <NextUIProvider>
              <Component {...pageProps} />
            </NextUIProvider>
          </Layout>
        </NextThemesProvider>
      </PlayerProvider>
    </ApolloProvider>
  );
}

export default MyApp;
