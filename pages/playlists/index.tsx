import type { NextPage } from "next";
import React, { useEffect } from "react";

import styles from "./../../styles/Home.module.css";

import { Playlist } from "./../../components/playlist/playlist";
import { PlaylistData, Props } from "./../../helpers/types";
import { fetchPlaylist } from "./../../helpers/fetchPlaylist";
import { fetchFavorites } from "./../../context/favoritesContext";
import { usePlay } from "./../../context/playerContext";
import { useFav } from "./../../context/favoritesContext";
import { PageHeader } from "../../components/navigation/PageHeader";

const Playlists: NextPage<Props> = (props) => {
  const { initQueue } = usePlay();
  const { setFav } = useFav();

  useEffect(() => {
    initQueue(props.playlist.tracks.map((e) => e.track));
    setFav(props.favorites);
  }, []);

  return (
    <div className={styles.container}>
      <PageHeader text="Playlists"></PageHeader>

      <main className={styles.main}>
        <Playlist
          playlist={props.playlist}
          favorites={props.favorites}
        ></Playlist>
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

export default Playlists;
