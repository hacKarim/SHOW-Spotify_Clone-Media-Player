import { Table, Text, User } from "@nextui-org/react";
import React, { ReactElement, useState, useEffect } from "react";
import { Track } from "./body/Track";
import { PlaylistHeader } from "./header/header";
import { usePlay } from "../../context/playerContext";
import MotionHoc from "./../common/MotionHoc";
import styles from "./../../styles/Track.module.css";

export const Playlist = MotionHoc((props: any): ReactElement => {
  const [playlist, setPlaylist] = useState(props.playlist);
  const { initQueue } = usePlay();

  useEffect(() => {
    initQueue(props.playlist.tracks.map((e) => e.track));
  }, []);

  return (
    <>
      <PlaylistHeader playlistName={playlist.name}></PlaylistHeader>
      <div className={styles.row_header}>
        <div className={styles.item_image} style={{ width: 64 }}></div>

        <div className={styles.item_trackname}>
          <Text h4>Title</Text>
        </div>

        <div className={styles.item_album}>
          <Text h4>Album</Text>
        </div>
        <div className={styles.item_artists}>
          <Text h4>Artists</Text>
        </div>
        <div className={styles.item_duration}>
          <Text></Text>
        </div>
        <div className={styles.item_fav}>🤍</div>
      </div>
      {playlist.tracks.map((element: any) => {
        return <Track key={element.id} track={element}></Track>;
      })}
    </>
  );
});
