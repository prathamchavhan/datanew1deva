import React from 'react';
import styles from './DarkRectangle.module.css';

export default function DarkRectangle() {
  return (
    <div className={styles.container}>
      <div className={styles.glassRectangle}>
        <div className={styles.glassOverlay}></div>
      </div>
    </div>
  );
}
