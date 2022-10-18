import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { AppProps } from "next/app";
import Layout from "../components/navigation/Layout";
import "../styles/globals.css";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { FavProvider } from "../context/favoritesContext";
import { PlayerProvider } from "../context/playerContext";

const disableselect = (e: any) => {
  return false;
};

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

// used to disable text selection during user interaction
if (typeof window !== "undefined") {
  document.onselectstart = disableselect;
  document.onmousedown = disableselect;
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <PlayerProvider>
        <FavProvider>
          <NextThemesProvider
            defaultTheme="light"
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
        </FavProvider>
      </PlayerProvider>
    </ApolloProvider>
  );
}

export default MyApp;
