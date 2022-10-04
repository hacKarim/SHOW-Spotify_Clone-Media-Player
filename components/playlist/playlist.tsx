import { Table, User } from "@nextui-org/react";
import React, { ReactElement, useState } from "react";
import { PlaylistHeader } from "./header/header";

export const Playlist = (props: any): ReactElement => {
  const [playlist, setPlaylist] = useState(props.playlist);

  const columns = [
    {
      key: "title",
      label: "NAME",
    },
    {
      key: "artist",
      label: "ARTIST",
    },
    {
      key: "album",
      label: "ALBUM",
    },
  ];

  const tracks = playlist.tracks.map((element: any) => {
    let temp = {
      id: element.track.id,
      title: element.track.name,
      artist: element.track.artists[0].name,
      album: element.track.album.name,
      cover: element.track.album.images[0].url,
      previewUrl: element.track.preview_url,
    };
    return temp;
  });

  const disabledTracks = playlist.tracks.map((element: any) => {
    if (element.track.preview_url == null) return element.track.id;
  });

  const renderCell = (item: any, columnKey: React.Key) => {
    const cellValue = item[columnKey];
    switch (columnKey) {
      case "title":
        return (
          <User
            squared
            src={item?.cover}
            css={{
              p: 0,
              filter:
                disabledTracks.indexOf(item?.id) > -1
                  ? "saturate(0)"
                  : "saturate(1)",
            }}
          >
            {item?.title}
          </User>
        );

      default:
        return cellValue;
    }
  };
  return (
    <>
      <PlaylistHeader playlistName={playlist.name}></PlaylistHeader>
      <Table
        css={{ height: "auto", minWidth: "100%" }}
        disabledKeys={disabledTracks}
      >
        <Table.Header columns={columns}>
          {(column) => (
            <Table.Column key={column.key}>{column.label}</Table.Column>
          )}
        </Table.Header>
        <Table.Body items={tracks}>
          {(item: any) => (
            <Table.Row key={item.id}>
              {(columnKey) => (
                <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
              )}
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </>
  );
};
