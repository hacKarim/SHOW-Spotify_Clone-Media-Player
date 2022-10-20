import Image from 'next/image';
import { ReactElement } from 'react';

import styles from './Case.module.css';

export const Case = (props: any): ReactElement => {
  return (
    <div className={styles.container} style={props.scaleUp && { transform: 'scale(2)' }}>
      <div className={styles.disk + ' ' + styles.show_side} style={props.scaleUp && { transform: 'rotateY(50deg) rotateX(10deg) rotateZ(-5deg) scale(1.1) translateY(-20px)' }}>
        <div className={styles.face + ' ' + styles.cover + ' ' + styles.shadow_2xl}>
          <div className={styles.bottom}>
            <Image layout="fill" alt={props.track && props.track.album} src={props.track && props.track.cover} />
          </div>
        </div>
        <div className={styles.side + ' ' + styles.shadow_2xl}>
          <div className={styles.top + ' ' + styles.flex + ' ' + styles.justify_center + ' ' + styles.items_center}></div>
          <div className={styles.bottom + ' ' + styles.flex + ' ' + styles.justify_center + ' ' + styles.items_center}>
            <h4>{props.track && props.track.album}</h4>
          </div>
        </div>
        <div className={styles.face + ' ' + styles.back}></div>
      </div>
    </div>
  );
};
