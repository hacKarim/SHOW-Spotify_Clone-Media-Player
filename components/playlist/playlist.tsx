import { ReactElement, useEffect } from 'react'
import React, { useState } from 'react';
import { PlaylistHeader } from './header/header';
import { PlaylistBody } from './body/body'
export const Playlist = (props: any): ReactElement => {

    const [playlist, setPlaylist] = useState(props.playlist);

    return <>
        <PlaylistHeader></PlaylistHeader>
        <PlaylistBody playlist={playlist}></PlaylistBody>
    </>
}
