import Image from "next/image";
import { ReactElement } from "react";

import styles from "./Case.module.css";

export const AlbumCase = (props: any): ReactElement => {
  return (
    <div
      className={
        styles.page +
        " " +
        styles.flex +
        " " +
        styles.justify_center +
        " " +
        styles.items_center
      }
    >
      <div className={styles.container}>
        <div className={styles.disk + " " + styles.show_side}>
          <div
            className={
              styles.face + " " + styles.cover + " " + styles.shadow_2xl
            }
          >
            <div className={styles.bottom}>
              <Image
                layout="fill"
                alt={props.track.album}
                src={props.track.cover}
              />
            </div>
          </div>
          <div className={styles.side + " " + styles.shadow_2xl}>
            <div
              className={
                styles.top +
                " " +
                styles.flex +
                " " +
                styles.justify_center +
                " " +
                styles.items_center
              }
            ></div>
            <div
              className={
                styles.bottom +
                " " +
                styles.flex +
                " " +
                styles.justify_center +
                " " +
                styles.items_center
              }
            >
              <h4>{props.track.album}</h4>
            </div>
          </div>
          <div className={styles.face + " " + styles.back}></div>
        </div>
      </div>
    </div>
  );
};
