import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/Layout";
import "../styles/globals.css";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { FavProvider } from "../context/favoritesContext";
import { PlayerProvider } from "../context/playerContext";

const disableselect = (e) => {
  return false;
};
if (typeof window !== "undefined") {
  document.onselectstart = disableselect;
  document.onmousedown = disableselect;
}

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
        <FavProvider>
          <NextThemesProvider
            defaultTheme="system"
            attribute="class"
            value={{
              light: lightTheme.className,
              dark: darkTheme.className,
            }}
          >
            <Layout>
              <Head>
                <title>Shotgun - Playlist</title>
                <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1.0"
                />
              </Head>
              <NextUIProvider>
                <Component {...pageProps} />
              </NextUIProvider>
            </Layout>
          </NextThemesProvider>
        </FavProvider>
      </PlayerProvider>
    </ApolloProvider>
  );
}

export default MyApp;
