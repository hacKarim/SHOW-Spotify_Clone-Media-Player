import { Card, Col, Grid, Text } from "@nextui-org/react";
import { ReactElement, useState } from "react";
import { PlaylistHeader } from "./header/header";

export const Albums = (props: any): ReactElement => {
  const [playlist, setPlaylist] = useState(props.playlist);

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

  return (
    <>
      <PlaylistHeader playlistName={playlist.name}></PlaylistHeader>
      <Grid.Container gap={2} justify="flex-start">
        {tracks.map((track, index) => (
          <Grid xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
            <Card isPressable variant="bordered">
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  src={track.cover}
                  objectFit="cover"
                  width="100%"
                  alt={track.title}
                />
              </Card.Body>
              <Card.Footer
                css={{
                  position: "absolute",
                  bgBlur: "#00000066",
                  borderTop:
                    "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                  zIndex: 1,
                  bottom: 0,
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
              </Card.Footer>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </>
  );
};
