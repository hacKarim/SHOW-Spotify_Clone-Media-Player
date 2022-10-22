import { createContext, ReactNode, useContext, useEffect, useRef, useState } from 'react';
import { Track } from './../helpers/types';

const initialSong: Track = {
  name: '',
  id: '',
  preview_url: '',
  artists: [],
  duration_ms: 0,
  album: {
    id: '',
    name: '',
    images: []
  }
};

export const initialVolume: number = 0.5;
const initialMuted = initialVolume == 0 ? true : false;

type playerContextType = {
  play: boolean;
  setPlay: (newState: boolean) => void;
  volume: number;
  setVolume: (newVolume: number) => void;
  muted: boolean;
  setMuted: (newState: boolean) => void;
  song: Track;
  setSong: (newSong: Track, playInstant?: boolean, index?: number) => void;
  skipSong: () => void;
  previousSong: () => void;
  initQueue: (newQueue: Track[]) => void;
};

const playerContextDefaultValues: playerContextType = {
  play: false,
  setPlay: () => {},
  volume: initialVolume,
  setVolume: () => {},
  muted: initialMuted,
  setMuted: () => {},
  song: initialSong,
  setSong: () => {},
  skipSong: () => {},
  previousSong: () => {},
  initQueue: () => {}
};

const PlayerContext = createContext<playerContextType>(playerContextDefaultValues);

export function usePlay() {
  return useContext(PlayerContext);
}

type Props = {
  children: ReactNode;
};

function isAvailable(track: Track): boolean {
  return track.preview_url != null;
}

export function PlayerProvider({ children }: Props) {
  const [play, handlePlay] = useState<boolean>(false);
  const setPlay = (newState: boolean) => {
    handlePlay(newState);
  };

  const [volume, handleVolume] = useState<number>(initialVolume);
  const setVolume = (newVolume: number) => {
    handleVolume(newVolume);
  };

  const [muted, handleMuted] = useState<boolean>(initialMuted);
  const setMuted = (newState: boolean) => {
    handleMuted(newState);
  };

  const [queue, setQueue] = useState<Track[]>([]);
  const [qIndex, setQIndex] = useState<number>(0);

  const [song, handleSong] = useState<Track>(initialSong);
  const setSong = (newSong: Track, playInstant: boolean = false, index?: number) => {
    if (index == null) {
      index = queue.findIndex((elt) => elt.id === newSong.id);
    }
    setQIndex(index);
    handleSong(newSong);
    refPlayer.current.pause();
    refPlayer.current.load();
    if (playInstant && newSong.preview_url != null) {
      setPlay(true);
    }
  };

  const skipSong = () => {
    var newIndex: number = (newIndex = (qIndex + 1 + queue.length) % queue.length);
    while (!isAvailable(queue[newIndex])) {
      newIndex = (newIndex + 1 + queue.length) % queue.length;
    }

    setSong(queue[newIndex], true, newIndex);
  };

  const previousSong = () => {
    var newIndex: number = (newIndex = (qIndex - 1 + queue.length) % queue.length);
    while (!isAvailable(queue[newIndex])) {
      newIndex = (newIndex - 1 + queue.length) % queue.length;
    }

    setSong(queue[newIndex], true, newIndex);
  };

  const initQueue = (newQueue: Track[]) => {
    setQueue(newQueue);
    if (song.id != '') {
      var index: number = newQueue.findIndex((elt) => elt.id === song.id);
      if (index === -1) {
        index = 0;
      }
      setQIndex(index);
    }
  };

  const refPlayer = useRef<any>();

  const playSong = async () => {
    try {
      await refPlayer.current.play();
    } catch (e: any) {
      refPlayer.current.pause();
      console.log('error while trying to play song: ', e);
      setPlay(false);
    }
  };

  useEffect(() => {
    if (play == true) {
      playSong();
    } else {
      refPlayer.current.pause();
    }
  }, [play]);

  useEffect(() => {
    refPlayer.current.volume = volume;
    if (volume == 0) {
      setMuted(true);
      refPlayer.current.muted = true;
    } else {
      setMuted(false);
      refPlayer.current.muted = false;
    }
  }, [volume]);

  useEffect(() => {
    if (muted == true) {
      refPlayer.current.volume = 0;
    } else {
      refPlayer.current.volume = volume;
    }
  }, [muted]);

  const value = {
    play,
    setPlay,
    volume,
    setVolume,
    muted,
    setMuted,
    song,
    setSong,
    skipSong,
    previousSong,
    initQueue
  };

  return (
    <PlayerContext.Provider value={value}>
      <audio ref={refPlayer} onEnded={() => skipSong()} autoPlay src={song.preview_url}></audio>
      {children}
    </PlayerContext.Provider>
  );
}
