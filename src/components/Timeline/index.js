import React from 'react';

import timelineImg from 'utils/images/timeline.png';
import styles from './styles';

function Timeline() {
  return (
    <div style={styles.screencontent}>
      <div style={styles.screenon}>
        <div style={styles.center}>
          <h1 style={styles.h1}><strong style={styles.str}>Timeline</strong></h1>
          <span style={styles.imgFit}><img style={styles.img} src={timelineImg}/></span>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
