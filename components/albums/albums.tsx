import { Grid, Image, Modal } from "@nextui-org/react";
import { ReactElement, useState } from "react";
import { AlbumCase } from "../albums/case/case";
import MotionHoc from "./../common/MotionHoc";

export const Albums = MotionHoc((props: any): ReactElement => {
  const [playlist, setPlaylist] = useState(props.playlist);

  const [selectedAlbum, setSelectedAlbum] = useState<any>(null);

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
      <Grid.Container gap={4} justify="flex-start">
        {tracks.map((track: any, index: number) => (
          <Grid
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={2}
            key={index}
            onClick={() => handler(track)}
            style={{ justifyContent: "center" }}
          >
            <AlbumCase track={track} />
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
              src={selectedAlbum.cover}
              objectFit="cover"
              alt={selectedAlbum.album}
            />
          )}
        </Modal.Body>
      </Modal>{" "}
    </>
  );
});
