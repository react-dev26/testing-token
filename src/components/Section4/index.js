import React from 'react';

import Tab1 from './Tab1';
import Tab2 from './Tab2';
import styles from './styles';

function Section() {
  return (
    <section style={styles.wrapper}>
      <div style={styles.container}>
        <div style={styles.center}>
          <hr style={styles.hr} />
          <h2 id="TEAM" style={styles.h2}>About</h2>
          <hr style={styles.hr} />
        </div>
        <p style={styles.p}>We believe blockchains and the tokens built upon them will continue to transform and flourish, despite controversy and resistance to this inevitable transformation of the way we store value and money.

TokenAI’s purpose is to enable regular humans to benefit from tools that were only available to Wall Street and large corporations, such as big data and AI, without fear, falsehood or friction and to protect their part in the future of money.</p>
        <div style={styles.center}>
          <hr style={styles.hr} />
          <h2 style={styles.h2}>Team</h2>
          <hr style={styles.hr} />
        </div>
        <Tab1 />
        <div style={styles.center}>
          <hr style={styles.hr} />
          <h2 style={styles.h2}>Advisors</h2>
          <hr style={styles.hr} />
        </div>
        <Tab2 />
      </div>
    </section>
  );
}

export default Section;
