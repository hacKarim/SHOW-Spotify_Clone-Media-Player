import type { NextPage } from "next";
import { useEffect } from "react";

import styles from "./../../styles/Home.module.css";

import { PageHeader } from "../../components/navigation/PageHeader";
import { Playlist } from "./../../components/playlist/playlist";
import { fetchFavorites, useFav } from "./../../context/favoritesContext";
import { usePlay } from "./../../context/playerContext";
import { fetchPlaylist } from "./../../helpers/fetchPlaylist";
import { PlaylistData, Props } from "./../../helpers/types";

const Songs: NextPage<Props> = (props: any) => {
  const { initQueue } = usePlay();
  const { setFav } = useFav();

  useEffect(() => {
    initQueue(props.playlist.tracks.map((e: any) => e.track));
    setFav(props.favorites);
  }, []);

  return (
    <div className={styles.container}>
      <PageHeader text="Songs"></PageHeader>
      <main className={styles.main}>
        <Playlist
          playlist={props.playlist}
          favorites={props.favorites}
        ></Playlist>
      </main>
    </div>
  );
};

export async function getStaticProps(context: any) {
  var playlistData: PlaylistData = await fetchPlaylist();
  var favorites = fetchFavorites(context, playlistData);

  return {
    props: {
      playlist: playlistData,
      favorites: favorites,
    },
  };
}

export default Songs;
