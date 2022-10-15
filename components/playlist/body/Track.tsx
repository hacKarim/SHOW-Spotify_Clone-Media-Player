import { Avatar, Badge, Text } from "@nextui-org/react";
import { ReactElement, useState } from "react";
import styles from "./../../../styles/Track.module.css";
import { FaPlay } from "react-icons/fa";

export const Track = (props): ReactElement => {
  return (
    <>
      <div
        className={
          props.track.track.preview_url ? styles.row : styles.row_disabled
        }
      >
        <div className={styles.item_image}>
          <Badge
            content={"!"}
            css={{
              p: "$2",
              visibility: props.track.track.preview_url ? "hidden" : "visible",
            }}
            color="warning"
            placement="bottom-right"
            shape="rectangle"
            size="md"
          >
            <div className={styles.cover_image}>
              

              <FaPlay className={styles.play_icon}></FaPlay>

              <img
                src={props.track.track.album.images[0].url}
                
              ></img>

            </div>
          </Badge>
        </div>

        <div className={styles.item_trackname}>
          <Text size="$lg" weight="bold">
            {props.track.track.name}
          </Text>
        </div>

        <div className={styles.item_album}>
          <Text>{props.track.track.album.name}</Text>
        </div>
        <div className={styles.item_artists}>
          <Avatar.Group>
            {props.track.track.artists.map((element, index) => (
              <Avatar
                key={index}
                size="lg"
                pointer
                text={element.name}
                stacked
              />
            ))}
          </Avatar.Group>
        </div>
        <div className={styles.item_duration}>
          <Text>0:00</Text>
        </div>
        <div className={styles.item_fav}>
          🤍
        </div>
      </div>
    </>
  );
};
