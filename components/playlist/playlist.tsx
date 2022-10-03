import { ReactElement, useEffect } from "react";
import React, { useState } from "react";
import { PlaylistHeader } from "./header/header";
import { PlaylistBody } from "./body/body";
import {
  Table,
  Row,
  Col,
  Grid,
  User,
  Text,
  Card,
  Button,
} from "@nextui-org/react";

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
      cover: element.track.album.images[1].url,
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
          <User squared src={item?.cover} name={cellValue} css={{ p: 0 }}>
            {item?.cover}
          </User>
        );
      case "artist":
        return (
          <Col>
            <Row>
              <Text b size={14} css={{ tt: "capitalize" }}>
                {cellValue}
              </Text>
            </Row>
            <Row>
              <Text b size={13} css={{ tt: "capitalize", color: "$accents7" }}>
                {item?.artist}
              </Text>
            </Row>
          </Col>
        );
      default:
        return cellValue;
    }
  };
  return (
    <>
      <PlaylistHeader playlistName={playlist.name}></PlaylistHeader>
      <Grid.Container gap={2} justify="flex-start">
        {tracks.map((track, index) => (
          <Grid xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
            <Card isPressable variant="bordered">
              <Card.Header
                css={{
                  position: "absolute",
                  bgBlur: "#00000066",
                  borderTop:
                    "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                  zIndex: 1,
                }}
              >
                <Col>
                  <Text
                    size={12}
                    weight="bold"
                    transform="uppercase"
                    color="#ffffffAA"
                  >
                    {track.artist} - {track.album}
                  </Text>
                  <Text h4 color="white">
                    {track.title}{" "}
                  </Text>
                </Col>
              </Card.Header>
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  src={track.cover}
                  objectFit="cover"
                  width="100%"
                  alt={track.title}
                />
              </Card.Body>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
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
