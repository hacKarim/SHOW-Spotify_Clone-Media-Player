import { ReactElement, useEffect } from 'react'
import React, { useState } from 'react';

export const Playlist = (props): ReactElement => {

    const [playlist, setPlaylist] = useState(props.playlist);

    return <>
        PLAYLIST<br></br>
        {
            playlist.tracks.map(element => {
                return (<div>{element.track.id}</div>)
            })
        }
    </>
}
