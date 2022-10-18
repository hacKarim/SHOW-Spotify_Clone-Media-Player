import { Card, Grid, Image, Modal, Row, Text } from "@nextui-org/react";
import { ReactElement, useState } from "react";
import MotionHoc from "./../common/MotionHoc";

export const Artists = MotionHoc((props: any): ReactElement => {
  const [playlist, setPlaylist] = useState(props.playlist);

  const [selectedAlbum, setSelectedAlbum] = useState();

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
      <Grid.Container gap={2} justify="flex-start">
        {tracks
          .sort((a, b) => 0.5 - Math.random())
          .map((track: any, index: number) => (
            <Grid xs={6} sm={4} md={3} lg={2} xl={2} key={index}>
              <Card isPressable>
                <Card.Body css={{ p: 10 }}>
                  <Card.Image
                    src={track.cover}
                    objectFit="cover"
                    style={{ borderRadius: 300, padding: 10 }}
                    alt={track.album.artist}
                  />
                </Card.Body>
                <Card.Footer css={{ justifyItems: "flex-start" }}>
                  <Row wrap="wrap" justify="space-between" align="center">
                    <Text h6 style={{ textAlign: "center", margin: "0 auto" }}>
                      {track.title}
                    </Text>
                  </Row>
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
        <Modal.Body style={{ maxWidth: "80vw", maxHeight: "80vh" }}>
          {selectedAlbum && (
            <Image
              layout="fill"
              src={selectedAlbum ? selectedAlbum.cover : ""}
              objectFit="cover"
              alt={selectedAlbum ? selectedAlbum.album : ""}
            />
          )}
        </Modal.Body>
      </Modal>
    </>
  );
});
