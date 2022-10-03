import { ReactElement, useEffect } from 'react'
import React, { useState } from 'react';
import { PlaylistHeader } from './header/header';
import { PlaylistBody } from './body/body';
import { Table } from '@nextui-org/react';

export const Playlist = (props: any): ReactElement => {

    const [playlist, setPlaylist] = useState(props.playlist);

    const columns = [
        {
            key: "title",
            label: "NAME",
        },
        {
            key: "artist",
            label: "ARTIST",
        },
        {
            key: "album",
            label: "ALBUM",
        },
        {
            key: "cover",
            label: "COVER",
        },

    ];

    const tracks = playlist.tracks.map((element: any) => {
        let temp = {
            id: element.track.id,
            title: element.track.name,
            artist: element.track.artists[0].name,
            album: element.track.album.name,
            cover: element.track.album.images[1].url,
            previewUrl: element.track.previewUrl,
        };
        return (temp);
    });
    console.log(playlist);


    return (
        <Table
            css={{
                height: "auto",
                minWidth: "100%",
            }}
        >
            <Table.Header columns={columns}>
                {(column) => (
                    <Table.Column key={column.key}>{column.label}</Table.Column>
                )}
            </Table.Header>
            <Table.Body items={tracks}>
                {(item: any) => (
                    <Table.Row key={item.id}>
                        {(columnKey) => <Table.Cell>{item[columnKey]}</Table.Cell>}
                    </Table.Row>
                )}
            </Table.Body>
        </Table>
    );
}
