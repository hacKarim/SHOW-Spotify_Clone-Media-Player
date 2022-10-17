import {
  Avatar,
  Badge,
  Popover,
  Spacer,
  Text,
  Grid,
  Row,
  Col,
  User,
  Button,
  Modal,
  Progress,
} from "@nextui-org/react";
import { ReactElement, useState, useEffect } from "react";
import styles from "./../../../styles/Track.module.css";
import { FaPlay, FaPause } from "react-icons/fa";
import { FiHeart, FiPlay, FiPause } from "react-icons/fi";
import moment from "moment";
import { usePlay } from "./../../../context/playerContext";
import { useFav } from "./../../../context/favoritesContext";

export const Track = (props): ReactElement => {
  const [visible, setVisible] = useState(false);
  const { song, setSong, play, setPlay } = usePlay();
  const [isCurrentSong, setIsCurrentSong] = useState(
    song.id == props.track.track.id
  );
  const { addFav, removeFav, fav, isFav } = useFav();
  const [liked, setLiked] = useState<boolean>(true);

  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
  };

  const PlayButtonBehavior = () => {
    isCurrentSong ? setPlay(!play) : setSong(props.track.track, true);
  };
  useEffect(() => {
    setIsCurrentSong(song.id == props.track.track.id);
  }, [song]);

  const LikeBehavior = () => {
    // liked ? removeFav(props.track.track) : addFav(props.track.track)
    // setLiked(!liked)
  };

  return (
    <>
      <div
        className={
          isCurrentSong
            ? styles.row_current
            : props.track.track.preview_url
            ? styles.row
            : styles.row_disabled
        }
      >
        <div className={styles.item_image}>
          <Badge
            content={"!"}
            css={{
              p: "$2",
              visibility: props.track.track.preview_url ? "hidden" : "visible",
            }}
            color="warning"
            placement="bottom-right"
            shape="rectangle"
            size="md"
            onClick={() => handler()}
          >
            <div
              className={styles.cover_image}
              onClick={() =>
                props.track.track.preview_url && PlayButtonBehavior()
              }
            >
              {!isCurrentSong ? (
                <FaPlay className={styles.play_icon}></FaPlay>
              ) : play ? (
                <FaPause className={styles.play_icon}></FaPause>
              ) : (
                <FaPlay className={styles.play_icon}></FaPlay>
              )}

              <img src={props.track.track.album.images[0].url}></img>
            </div>
          </Badge>
        </div>

        <div className={styles.item_trackname}>
          <Text size="$lg" weight="medium">
            {props.track.track.name}
          </Text>
        </div>

        <div className={styles.item_album}>
          <Text>{props.track.track.album.name}</Text>
        </div>
        <div className={styles.item_artists}>
          <Avatar.Group>
            {props.track.track.artists.map((element, index) => (
                  <Avatar key={index} size="md" pointer text={element.name} />
            ))}
          </Avatar.Group>
        </div>
        <div className={styles.item_duration}>
          <Text>
            {moment(props.track.track.duration_ms, "x").minutes() +
              ":" +
              moment(props.track.track.duration_ms, "x")
                .seconds()
                .toLocaleString("en-US", {
                  minimumIntegerDigits: 2,
                  useGrouping: false,
                })}
          </Text>
          <Progress
            color="primary"
            value={props.track.track.popularity}
            size="xs"
          />
        </div>
        <div className={styles.item_fav}>
          <Text>
            <FiHeart
              size={"2em"}
              className={liked ? styles.heart_liked : styles.heart}
              onClick={() => LikeBehavior()}
            />
          </Text>
        </div>
      </div>

      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18} weight={"bold"}>
            Unavailable Song
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text>
            The track you're trying to listen to is unavailable in your current
            plan / country.
          </Text>
          <Text>Please upgrade to unlock all tracks.</Text>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
          <Button
            auto
            onClick={() =>
              window.open("https://www.spotify.com/fr/premium/#plans", "_blank")
            }
          >
            Purchase premium
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
