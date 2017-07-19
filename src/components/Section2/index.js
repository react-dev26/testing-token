import React from 'react';

import Portrait from './Portrait';
import styles from './styles.js';

function Section() {
  return (
    <section style={styles.wrapper}>
      <div style={styles.inner}>
        <div style={styles.split}>
          <section style={styles.portrait}>
            <span style={styles.fit}><img src="https://www.dropbox.com/s/7t6ng1basul3ery/pic02.jpg?dl=1" style={styles.img} alt="pic02" /></span>
          </section>
          <Portrait />
        </div>
      </div>
    </section>
  );
}

export default Section;
