import { Progress, Text } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme as useNextTheme } from "next-themes";
import { ReactElement, useEffect, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import { usePlay } from "./../../context/playerContext";
import styles from "./../../styles/Player.module.css";

import { BsArrowDownSquare, BsArrowUpLeftSquare } from "react-icons/bs";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import Image from "next/image";

export const Player = (props: any): ReactElement => {
  const { song, setSong, play, setPlay, previousSong, skipSong } = usePlay();
  const [noSong, setNoSong] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState(false);

  const ui_color = useNextTheme().theme == "dark" ? "white" : "black";

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
      <AnimatePresence mode="wait">
        <motion.div
          key="player"
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.2 }}
          exit={{ y: -300, opacity: 0 }}
        >
          <motion.div
            key="poster_player"
            animate={isOpen ? "open" : "closed"}
            transition={{ ease: "easeOut", duration: 0.2 }}
            variants={{
              open: { height: "100vh" },
              closed: { height: "unset" },
            }}
          >
            <div
              className={styles.player__background}
              style={{
                background: "url('" + song.album.images[0].url + "')",
              }}
            ></div>
            <div className={styles.flex_center}>
              <div
                style={{
                  right: 10,
                  fontSize: "2em",
                  top: 5,
                  cursor: "pointer",
                  position: "absolute",
                  zIndex: 999,
                }}
              >
                <span onClick={() => setIsOpen(!isOpen)}>
                  {isOpen ? (
                    <BsArrowDownSquare color={ui_color} />
                  ) : (
                    <BsArrowUpLeftSquare color={ui_color} />
                  )}
                </span>
              </div>
              <div
                className={
                  styles.player__body +
                  (isOpen ? " " + styles.player__body__open : "")
                }
              >
                <div className={styles.player__song_info_wrapper}>
                  <img
                    className={styles.track__cover_art_image}
                    src={song.album.images[0].url}
                    alt={song.album.name}
                  />
                </div>
                <div className={styles.player__control_panel}>
                  <Progress
                    value={10}
                    animated
                    size="xs"
                    // shadow
                    indeterminated={play ? true : false}
                    color="success"
                    className={styles.player__progress}
                  />
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
                          <span
                            key={index}
                            style={{ marginRight: 10, fontWeight: 300 }}
                          >
                            {element.name}
                          </span>
                        ))}
                      </Text>
                    </p>
                  </div>
                  <div className={styles.player__controls}>
                    <div onClick={() => previousSong()}>
                      <MdSkipPrevious color={ui_color} />
                    </div>
                    <div
                      onClick={() => setPlay(!play)}
                      style={{ fontSize: "2em" }}
                    >
                      {play ? (
                        <FaPause color={ui_color} />
                      ) : (
                        <FaPlay color={ui_color} />
                      )}
                    </div>
                    <div onClick={() => !noSong && skipSong()}>
                      <MdSkipNext color={ui_color} />
                    </div>
                  </div>
                </div>

                <div className={styles.player__additional_buttons}></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};
