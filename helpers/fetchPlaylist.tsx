import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import { PlaylistData } from "./types";
import nookies from "nookies";

export async function fetchPlaylist(): Promise<PlaylistData> {
  try {
    const client = new ApolloClient({
      uri: "https://spotify-graphql.shotgun.live/api",
      cache: new InMemoryCache(),
    });

    const { data } = await client.query({
      query: gql`
        query getUrl {
          playlist {
            name
            images {
              url
            }
            tracks {
              added_at
              track {
                id
                name
                preview_url
                duration_ms
                popularity
                artists {
                  id
                  name
                  images {
                    url
                  }
                }
                album {
                  id
                  images {
                    url
                  }
                  name
                }
              }
            }
          }
        }
      `,
    });

    return data.playlist;
  } catch (e) {
    console.error("Could not retrieve graphQL data: ", e);
    return Promise.reject();
  }
}
