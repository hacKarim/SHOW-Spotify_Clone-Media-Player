import { Text } from '@nextui-org/react';
import { ReactElement, useState } from 'react';
import { FiHeart } from 'react-icons/fi';
import MotionHoc from './../common/MotionHoc';
import { Track } from './Track/Track';
import styles from './Track/Track.module.css';

export const Playlist = MotionHoc((props: any): ReactElement => {
  const [playlist, setPlaylist] = useState(props.playlist);

  const PlaylistHeader = () => (
    <div className={styles.header}>
      <div className={styles.image}></div>
      <div className={styles.title}>
        <Text h4>Title</Text>
      </div>
      <div className={styles.album}>
        <Text h4>Album</Text>
      </div>
      <div className={styles.artists}>
        <Text h4>Artists</Text>
      </div>
      <div className={styles.duration}></div>
      <div className={styles.fav}>
        <Text>
          <FiHeart size={'2em'} opacity={0.3} />
        </Text>
      </div>
    </div>
  );

  const EmptyFavoritesPlaceholder = () => <Text blockquote>{"You didn't like any music yet. This is mostly disabled regarding gh-pages next export functionnality (aka export-gssp)."}</Text>;

  return (
    <>
      {props.showOnlyFavorites && props.favorites.favlist.length > 0 ? <PlaylistHeader /> : props.showOnlyFavorites && <EmptyFavoritesPlaceholder />}
      {playlist.tracks.map((element: any, index: any) =>
        props.showOnlyFavorites ? (
          props.favorites.favlist[element.track.id].isFav && <Track key={index} track={element.track} favValue={props.favorites.favlist[element.track.id].isFav}></Track>
        ) : (
          <Track key={index} track={element.track} favValue={props.favorites.favlist[element.track.id].isFav}></Track>
        )
      )}
    </>
  );
});
