import { Progress, Text } from '@nextui-org/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme as useNextTheme } from 'next-themes';
import { ReactElement, useEffect, useState } from 'react';
import { BsArrowDownSquare, BsArrowUpSquare } from 'react-icons/bs';
import { FaPause, FaPlay } from 'react-icons/fa';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import { usePlay } from './../../context/playerContext';
import styles from './Player.module.css';

export const Player = (props: any): ReactElement => {
  const { song, setSong, play, setPlay, previousSong, skipSong } = usePlay();
  const [noSong, setNoSong] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState(false);

  const ui_color = useNextTheme().theme == 'dark' ? 'white' : 'black';

  useEffect(() => {
    if (song.name != '') {
      setNoSong(false);
    }
  }, [song]);

  if (song.id == '') {
    return <div></div>;
  }

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div key="player" initial={{ y: 300, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ease: 'easeOut', duration: 0.2 }} exit={{ y: -300, opacity: 0 }}>
          <motion.div
            key="poster_player"
            animate={isOpen ? 'open' : 'closed'}
            transition={{ ease: 'easeOut', duration: 0.2 }}
            variants={{
              open: { height: '100vh' },
              closed: { height: 'unset' }
            }}
          >
            <div
              className={styles.background}
              style={{
                background: "url('" + song.album.images[0].url + "')"
              }}
            ></div>
            <div className={styles.flex_center}>
              <div className={styles.player_open_icon}>
                <span onClick={() => setIsOpen(!isOpen)}>{isOpen ? <BsArrowDownSquare color={ui_color} /> : <BsArrowUpSquare color={ui_color} />}</span>
              </div>
              <div className={styles.player_container + (isOpen ? ' ' + styles.player_open : '')}>
                <div className={styles.infos}>
                  <img className={styles.cover_image} src={song.album.images[0].url} alt={song.album.name} />
                </div>
                <div className={styles.controller}>
                  <Progress
                    value={10}
                    animated
                    size="xs"
                    // shadow
                    indeterminated={play ? true : false}
                    color="success"
                    className={styles.progressbar}
                  />
                  <div className={styles.song_info}>
                    <p className={styles.title + ' ' + styles.overflow_ellipsis}>
                      <Text size="1.5em" weight="medium">
                        {song.name}
                        {' - '}
                        {song.artists.map((element, index) => (
                          <span key={index} className={styles.artists_names}>
                            {element.name}
                          </span>
                        ))}
                      </Text>
                    </p>
                  </div>
                  <div className={styles.controls}>
                    <div onClick={() => previousSong()}>
                      <MdSkipPrevious color={ui_color} />
                    </div>
                    <div className={styles.play_button} onClick={() => setPlay(!play)}>
                      {play ? <FaPause color={ui_color} /> : <FaPlay color={ui_color} />}
                    </div>
                    <div onClick={() => !noSong && skipSong()}>
                      <MdSkipNext color={ui_color} />
                    </div>
                  </div>
                </div>
                <div className={styles.extra}></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};
