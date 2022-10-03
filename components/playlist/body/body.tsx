import { ReactElement, useEffect } from 'react'
import React, { useState } from 'react';

export const PlaylistBody = (props: any): ReactElement => {
    const [playlist, setPlaylist] = useState(props.playlist);

    return <>
        <div>PLAYLIST BODY</div>
        <div>
            {
                 playlist.tracks.map((element:any) => {
                    return (<div>{element.track.id}</div>)
                })
            }
        </div>
    </>
}
