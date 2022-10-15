import type { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";

import styles from "../styles/Home.module.css";

import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { Playlist } from "../components/playlist/playlist";
import { Track } from "../components/common/Track";

// This is a nice way to get only the data needed for the project
const GET_PLAYLIST = gql`
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
          album {
            name
            images {
              height
              width
              url
            }
          }
          artists {
            name
          }
          popularity
          duration_ms
        }
      }
    }
  }
`;

const Home: NextPage = () => {
  const router = useRouter();
  

  const { loading, error, data } = useQuery(GET_PLAYLIST);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Playlist playlist={data.playlist}></Playlist>
      </main>
    </div>
  );
};

export default Home;
