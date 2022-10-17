import { ReactElement, useState, useEffect } from "react";
import { Progress, Tooltip, Text } from "@nextui-org/react";

import styles from "./../../styles/Player.module.css";
import { usePlay } from "./../../context/playerContext";
import moment from "moment";
import { AnimatePresence, motion } from "framer-motion";

export const Player = (props): ReactElement => {
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
      <AnimatePresence>
        <motion.div
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut" }}
          exit={{ y: -300, opacity: 0 }}
        >
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
                    <Text size="1.5em" weight="medium">
                      {song.name}
                      {" - "}
                      {song.artists.map((element, index) => (
                        <span key={index} style={{marginRight: 10, fontWeight: 300}}>{element.name}</span>
                      ))}
                    </Text>
                  </p>
                </div>
                <Progress value={10} shadow color="error" status="error" className={styles.player__progress}/>
                <div className={styles.player__controls}>
                  <div onClick={() => previousSong()}>⏮️</div>
                  <div
                    onClick={() => setPlay(!play)}
                    style={{ fontSize: "2em" }}
                  >
                    {play ? "⏸️" : "▶️"}
                  </div>
                  <div onClick={() => !noSong && skipSong()}>⏭️</div>
                </div>
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
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};
