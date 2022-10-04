import { ReactElement, useEffect } from "react";
import React, { useState } from "react";
//Next dynamic used to disable ssr on this import
import dynamic from "next/dynamic";
const AudioPlayer = dynamic(() => import("react-audio-player"), { ssr: false });

export const Player = (props): ReactElement => {
  const [tracks, setTracks] = useState(props.tracks);

  return (
    <>
      <AudioPlayer
        src="" //{tracks[0].track.preview_url}
        autoPlay
        controls
        volume={0}
      />
    </>
  );
};
