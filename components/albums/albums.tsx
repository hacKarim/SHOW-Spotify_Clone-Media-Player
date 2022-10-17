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
import MotionHoc from "./../common/MotionHoc";
import { Track } from "../playlist/body/Track";

export const Albums = MotionHoc((props: any): ReactElement => {
  const [playlist, setPlaylist] = useState(props.playlist);

  const [selectedAlbum, setSelectedAlbum] = useState(null);

  const handler = (track: any) => {
    setSelectedAlbum(track);
    console.log(track);
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
          <Grid xs={6} sm={6} md={4} lg={3} xl={2} key={index}>
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
                  bg: "#00000030",
                  borderTop:
                    "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                  zIndex: 1,
                  bottom: 0,
                }}
              >
                <Col>
                  <Text
                    size={12}
                    weight="medium"
                    transform="uppercase"
                    color="#ffffffAA"
                  >
                    {track.artist}
                  </Text>
                  <Text h4 color="white">
                    {track.album}
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
        style={{ paddingTop: 0}}
      >
        <Modal.Body style={{maxWidth: "80vw",maxHeight: "80vh"}}>
          {selectedAlbum && (
            <Image
              src={selectedAlbum ? selectedAlbum.cover : ""}
              objectFit="cover"
            />
          )}
          
        </Modal.Body>
        
      </Modal>
    </>
  );
});
