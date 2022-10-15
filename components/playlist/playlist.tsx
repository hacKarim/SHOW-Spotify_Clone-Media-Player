import { Table, User } from "@nextui-org/react";
import React, { ReactElement, useState } from "react";
import { Track } from "./body/Track";
import { PlaylistHeader } from "./header/header";

export const Playlist = (props: any): ReactElement => {
  const [playlist, setPlaylist] = useState(props.playlist);

 

  const disabledTracks = playlist.tracks.map((element: any) => {
    if (element.track.preview_url == null) return element.track.id;
  });

  const renderCell = (item: any, columnKey: React.Key) => {
    const cellValue = item[columnKey];
    switch (columnKey) {
      case "title":
        return (
          <User
            name={item?.title}
            squared
            zoomed
            src={item?.cover}
            pointer
            size="lg"
            css={{
              p: 0,
              filter:
                disabledTracks.indexOf(item?.id) > -1
                  ? "saturate(0)"
                  : "saturate(1)",
            }}
          ></User>
        );

      default:
        return cellValue;
    }
  };
  return (
    <>
      <PlaylistHeader playlistName={playlist.name}></PlaylistHeader>
        {playlist.tracks.map((element: any) => {
          return <Track key={element.id} track={element}></Track>;
        })}
    </>
  );
};
