import { ReactElement, useState } from "react";
import { Progress, Grid, Tooltip, Text } from "@nextui-org/react";

//Next dynamic used to disable ssr on this import
import dynamic from "next/dynamic";
import styles from "./../../styles/Player.module.css";
import Link from "next/link";

const AudioPlayer = dynamic(() => import("react-audio-player"), { ssr: false });

export const Player = (props): ReactElement => {
  const [tracks, setTracks] = useState(props.tracks);

  return (
    <>
      <div className={styles.player__wrapper + " " + styles.flex_center}>
        <div className={styles.player__body}>
          <div className={styles.player__song_info_wrapper}>
            <img className={styles.track__cover_art_image} src={""} alt="" />
            <div className={styles.player__song_info}>
              <p
                className={styles.track__title + " " + styles.overflow_ellipsis}
              >
                <Text>track__title</Text>
              </p>
              <p
                className={
                  styles.track__authors + " " + styles.overflow_ellipsis
                }
              >
                <Text>track__authors</Text>{" "}
              </p>
            </div>
          </div>
          <div className={styles.player__control_panel}>
            <div className={styles.player__time}>0:00</div>
            <Progress value={10} shadow color="error" status="error" />
          </div>
          <div className={styles.player__additional_buttons}>
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
        <div className={styles.player__controls}>⏮️ ⏯️ ⏭️</div>
      </div>
      <AudioPlayer
        src="" //{tracks[0].track.preview_url}
        autoPlay
        controls
        volume={0}
        style={{ display: "none" }}
      />
    </>
  );
};
