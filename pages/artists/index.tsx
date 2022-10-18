import type { NextPage } from "next";
import { useEffect } from "react";

import styles from "./../../styles/Home.module.css";

import { Artists } from "../../components/artists/artists";
import { PageHeader } from "../../components/navigation/PageHeader";
import { fetchFavorites, useFav } from "./../../context/favoritesContext";
import { usePlay } from "./../../context/playerContext";
import { fetchPlaylist } from "./../../helpers/fetchPlaylist";
import { PlaylistData, Props } from "./../../helpers/types";

const ArtistsPage: NextPage<Props> = (props: any) => {
  const { initQueue } = usePlay();
  const { setFav } = useFav();

  useEffect(() => {
    initQueue(props.playlist.tracks.map((e: any) => e.track));
    setFav(props.favorites);
  }, []);

  return (
    <div className={styles.container}>
      <PageHeader text="Artists"></PageHeader>

      <Artists playlist={props.playlist}></Artists>
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

export default ArtistsPage;
