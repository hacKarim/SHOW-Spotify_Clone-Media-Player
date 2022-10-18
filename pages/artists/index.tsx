import type { NextPage } from "next";
import React, { useEffect } from "react";

import styles from "./../../styles/Home.module.css";

import { Playlist } from "./../../components/playlist/playlist";
import { PlaylistData, Props } from "./../../helpers/types";
import { fetchPlaylist } from "./../../helpers/fetchPlaylist";
import { fetchFavorites } from "./../../context/favoritesContext";
import { usePlay } from "./../../context/playerContext";
import { useFav } from "./../../context/favoritesContext";
import { Albums } from "../../components/albums/albums";
import { Artists } from "../../components/artists/artists";

const ArtistsPage: NextPage<Props> = (props) => {
  const { initQueue } = usePlay();
  const { setFav } = useFav();

  useEffect(() => {
    initQueue(props.playlist.tracks.map((e) => e.track));
    setFav(props.favorites);
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Artists playlist={props.playlist}></Artists>
      </main>
    </div>
  );
};

export async function getServerSideProps(context: any) {
  var playlistData: PlaylistData = await fetchPlaylist();
  var favorites = fetchFavorites(context, playlistData);

  return {
    props: {
      playlist: playlistData,
      favorites: favorites,
    },
  };
}

export default ArtistsPage;
