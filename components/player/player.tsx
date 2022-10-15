import { ReactElement, useState, useEffect } from "react";
import {
  Progress,
  Grid,
  Tooltip,
  Text,
  Popover,
  Avatar,
  User,
  Col,
  Row,
  Button,
} from "@nextui-org/react";

//Next dynamic used to disable ssr on this import
import dynamic from "next/dynamic";
import styles from "./../../styles/Player.module.css";
import Link from "next/link";
import { usePlay } from "./../../context/playerContext";
import moment from "moment";
import { GrChapterNext, GrChapterPrevious } from "react-icons/gr";

const AudioPlayer = dynamic(() => import("react-audio-player"), { ssr: false });

export const Player = (props): ReactElement => {
  const [tracks, setTracks] = useState(props.tracks);
  const { song, setSong, play, setPlay, previousSong, skipSong } = usePlay();
  const [noSong, setNoSong] = useState<boolean>(true);

  useEffect(() => {
    if (song.name != "") {
      setNoSong(false);
    }
  }, [song]);

  if (song.id == "") {
    return <div></div>;
  }

  return (
    <>
      <div className={styles.player__wrapper + " " + styles.flex_center}>
        <div className={styles.player__body}>
          <div className={styles.player__song_info_wrapper}>
            <img
              className={styles.track__cover_art_image}
              src={song.album.images[0].url}
              alt={song.album.name}
            />
          </div>
          <div className={styles.player__control_panel}>
            
              <div className={styles.player__song_info}>
                <p
                  className={
                    styles.track__title + " " + styles.overflow_ellipsis
                  }
                >
                  <Text size="1.5em" weight="bold">{song.name}</Text>
                </p>
                <p
                  className={
                    styles.track__authors + " " + styles.overflow_ellipsis
                  }
                >
                  {song.artists.map((element, index) => <span style={{padding: "10px"}}>{element.name}</span>)}
                </p>
              </div>
              <Progress value={10} shadow color="error" status="error" />
          </div>
          
          <div className={styles.player__additional_buttons}>
          <div className={styles.player__time}>
              <Text>
                {moment(song.duration_ms, "x").minutes() +
                  ":" +
                  moment(song.duration_ms, "x")
                    .seconds()
                    .toLocaleString("en-US", {
                      minimumIntegerDigits: 2,
                      useGrouping: false,
                    })}
              </Text>
            </div>
            <div>❤️</div>
            <div>🔁</div>
            <Tooltip
              placement="top"
              content={
                <input
                  type="range"
                  id="volume"
                  name="volume"
                  min="0"
                  max="100"
                />
              }
            >
              🔊
            </Tooltip>
          </div>
        </div>
        <div className={styles.player__controls}>
          <div onClick={() => previousSong()}>⏮️</div>
          <div onClick={() => setPlay(!play)} style={{ fontSize: "2em" }}>
            {play ? "⏸️" : "▶️"}
          </div>
          <div onClick={() => !noSong && skipSong()}>⏭️</div>

        </div>
      </div>
    </>
  );
};
