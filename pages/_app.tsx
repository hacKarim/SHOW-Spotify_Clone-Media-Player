import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

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
      <NextThemesProvider
        defaultTheme="system"
        attribute="class"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className,
        }}
      >
        <NextUIProvider>
          <Component {...pageProps} />
        </NextUIProvider>
      </NextThemesProvider>
    </ApolloProvider>
  );
}

export default MyApp;
