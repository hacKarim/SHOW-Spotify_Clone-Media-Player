import {
  Button,
  Card,
  Checkbox,
  Col,
  Grid,
  Input,
  Modal,
  Image,
  Row,
  Text,
} from "@nextui-org/react";
import { ReactElement, useState } from "react";
import { PlaylistHeader } from "./header/header";

export const Albums = (props: any): ReactElement => {
  const [playlist, setPlaylist] = useState(props.playlist);

  const [selectedAlbum, setSelectedAlbum] = useState(null);

  const handler = (track: any) => {
    setSelectedAlbum(track);
  };

  const closeHandler = () => {
    setSelectedAlbum(null);
  };

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
        {tracks.map((track: any, index: number) => (
          <Grid xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
            <Card isPressable variant="bordered" onClick={() => handler(track)}>
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
                    {track.artist}
                  </Text>
                  <Text h4 color="white">
                    {track.album}{" "}
                  </Text>
                </Col>
              </Card.Footer>
            </Card>
          </Grid>
        ))}
      </Grid.Container>

      <Modal
        closeButton
        blur
        width="fit-content"
        open={selectedAlbum != null ? true : false}
        onClose={closeHandler}
        noPadding
        style={{ paddingTop: 0 }}
      >
        <Modal.Body>
          {selectedAlbum && (
            <Image
              src={selectedAlbum ? selectedAlbum.cover : ""}
              width={800}
              height={800}
              objectFit="cover"
            />
          )}
          {selectedAlbum && (
            <>
              <Text
                h1
                size={60}
                css={{
                  textGradient: "45deg, $yellow600 -20%, $red600 100%",
                }}
                weight="bold"
                style={{ position: "absolute", lineHeight: 1 }}
              >
                {selectedAlbum && selectedAlbum.artist}
              </Text>
              <Text
                h1
                size={60}
                css={{
                  textGradient: "45deg, $blue600 -20%, $pink600 50%",
                }}
                weight="bold"
                style={{
                  position: "absolute",
                  lineHeight: 1,
                  top: 80,
                }}
              >
                {selectedAlbum && selectedAlbum.album}
              </Text>
            </>
          )}

          {selectedAlbum && selectedAlbum.title}
          {selectedAlbum && selectedAlbum.artist}
        </Modal.Body>
      </Modal>
    </>
  );
};
