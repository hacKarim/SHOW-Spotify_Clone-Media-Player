import { Table, User } from "@nextui-org/react";
import React, { ReactElement, useState, useEffect } from "react";
import { Track } from "./body/Track";
import { PlaylistHeader } from "./header/header";
import { usePlay } from '../../context/playerContext';
import MotionHoc from "./../common/MotionHoc";

export const Playlist = MotionHoc((props: any): ReactElement => {
  const [playlist, setPlaylist] = useState(props.playlist);
  const { initQueue } = usePlay()

  useEffect(() => {
    initQueue(props.playlist.tracks.map((e) => e.track))
  }, [])

  return (
    <>
      <PlaylistHeader playlistName={playlist.name}></PlaylistHeader>
      {playlist.tracks.map((element: any) => {
        return <Track key={element.id} track={element}></Track>;
      })}
    </>
  );
});
