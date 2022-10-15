import { Avatar, Badge, Text } from "@nextui-org/react";
import { ReactElement, useState } from "react";
import styles from "./../../../styles/Track.module.css";

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
            <Avatar
              squared
              src={props.track.track.album.images[0].url}
              zoomed
              borderWeight="light"
              size="xl"
              bordered
            />
          </Badge>
        </div>

        <div className={styles.item}>
          <Text size="$lg" weight="bold">
            {props.track.track.name}
          </Text>
        </div>
        <div className={styles.item}>
          <Text>
            {props.track.track.artists.map((element: any) => (
              <Badge variant="flat">{element.name}</Badge>
            ))}
          </Text>
        </div>
        <div className={styles.item}>
          <Text>{props.track.track.album.name}</Text>
        </div>
        <div className={styles.item_duration}>
          <Text>dur</Text>
        </div>
        <div className={styles.item_fav}>
          <Avatar text="🤍" squared pointer />{" "}
        </div>
      </div>
    </>
  );
};
