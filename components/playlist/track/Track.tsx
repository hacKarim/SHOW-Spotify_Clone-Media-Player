import { Avatar, Badge, Button, Modal, Progress, Text } from '@nextui-org/react';
import moment from 'moment';
import { ReactElement, useEffect, useState } from 'react';
import { FaPause, FaPlay } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import { useFav } from './../../../context/favoritesContext';
import { usePlay } from './../../../context/playerContext';
import styles from './Track.module.css';

export const Track = (props: any): ReactElement => {
  const [visible, setVisible] = useState(false);
  const { song, setSong, play, setPlay } = usePlay();
  const [isCurrentSong, setIsCurrentSong] = useState(song.id == props.track.id);
  const { addFav, removeFav, fav, isFav } = useFav();
  const [liked, setLiked] = useState<boolean>(props.favValue);

  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
  };

  const PlayButtonBehavior = () => {
    isCurrentSong ? setPlay(!play) : setSong(props.track, true);
  };
  useEffect(() => {
    setIsCurrentSong(song.id == props.track.id);
  }, [song]);

  const LikeBehavior = () => {
    liked ? removeFav(props.track) : addFav(props.track);
    setLiked(!liked);
  };

  //this must be moved up in the hierarchy
  const UnavailableModal = () => (
    <Modal closeButton blur aria-labelledby="modal-title" open={visible} onClose={closeHandler}>
      <Modal.Header>
        <Text id="modal-title" size={18} weight={'bold'}>
          Unavailable Song
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Text>{"The track you're trying to listen to is unavailable in your current plan or country."}</Text>
        <Text>Please upgrade to unlock all tracks.</Text>
      </Modal.Body>
      <Modal.Footer>
        <Button auto flat color="error" onClick={closeHandler}>
          Close
        </Button>
        <Button auto onClick={() => window.open('https://www.spotify.com/fr/premium/#plans', '_blank')}>
          Purchase premium
        </Button>
      </Modal.Footer>
    </Modal>
  );

  return (
    <>
      <div className={isCurrentSong ? styles.row_current : props.track.preview_url ? styles.row : styles.row_disabled}>
        <div className={styles.image}>
          <Badge
            content={'!'}
            css={{
              p: '$2',
              visibility: props.track.preview_url ? 'hidden' : 'visible'
            }}
            color="warning"
            placement="bottom-right"
            shape="rectangle"
            size="md"
            onClick={() => handler()}
          >
            <div className={styles.cover_image} onClick={() => props.track.preview_url && PlayButtonBehavior()}>
              {!isCurrentSong ? <FaPlay className={styles.play_icon}></FaPlay> : play ? <FaPause className={styles.play_icon}></FaPause> : <FaPlay className={styles.play_icon}></FaPlay>}

              <img src={props.track.album.images[2].url} alt={props.track.album.name} />
            </div>
          </Badge>
        </div>

        <div className={styles.title}>
          <Text size="$lg" weight="medium">
            {props.track.name}
          </Text>
        </div>

        <div className={styles.album}>
          <Text>{props.track.album.name}</Text>
        </div>
        <div className={styles.artists}>
          <Avatar.Group>
            {props.track.artists.map((element: any, index: any) => (
              <Avatar key={index} size="md" pointer text={element.name} />
            ))}
          </Avatar.Group>
        </div>
        <div className={styles.duration}>
          <Text>
            {moment(props.track.duration_ms, 'x').minutes() +
              ':' +
              moment(props.track.duration_ms, 'x').seconds().toLocaleString('en-US', {
                minimumIntegerDigits: 2,
                useGrouping: false
              })}
          </Text>
          <Progress
            color="primary"
            className={styles.progress}
            value={props.track.popularity}
            size="xs"
            animated={isCurrentSong && play ? true : false}
            indeterminated={isCurrentSong && play ? true : false}
          />
        </div>
        <div className={styles.fav}>
          <Text>
            <FiHeart size={'2em'} className={liked ? styles.heart_liked : styles.heart} onClick={() => LikeBehavior()} />
          </Text>
        </div>
      </div>
      <UnavailableModal />
    </>
  );
};
