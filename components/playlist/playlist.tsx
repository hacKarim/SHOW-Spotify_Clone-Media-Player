import { Text } from "@nextui-org/react";
import { ReactElement, useState } from "react";
import { FiHeart } from "react-icons/fi";
import styles from "./../../styles/Track.module.css";
import MotionHoc from "./../common/MotionHoc";
import { Track } from "./body/Track";

export const Playlist = MotionHoc((props: any): ReactElement => {
  const [playlist, setPlaylist] = useState(props.playlist);

  return (
    <>
      {props.showOnlyFavorites && props.favorites.favlist.length > 0 ? (
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
          <div className={styles.item_fav}>
            <Text>
              <FiHeart size={"2em"} opacity={0.3} />
            </Text>
          </div>
        </div>
      ) : (
        props.showOnlyFavorites && (
          <Text blockquote>You didn't like any music</Text>
        )
      )}
      {playlist.tracks.map((element: any, index: any) =>
        props.showOnlyFavorites ? (
          props.favorites.favlist[element.track.id].isFav && (
            <Track
              key={index}
              track={element}
              favValue={props.favorites.favlist[element.track.id].isFav}
            ></Track>
          )
        ) : (
          <Track
            key={index}
            track={element}
            favValue={props.favorites.favlist[element.track.id].isFav}
          ></Track>
        )
      )}
    </>
  );
});
