import React from 'react';

import Counter from './Counter';
import ImgLogo from 'utils/images/logo120.png';
import styles from './styles';

function Section() {
  return (
    <section style={styles.wrapper}>
      <div style={styles.inner}>
        <div>
          <img src={ImgLogo} alt="logo" />
        </div>
        <h1 style={styles.h1}>TokenAI token sale</h1>
        <h3 style={styles.h3}>Artificial Intelligence (AI) and Big data for the token world</h3>
        <h4 style={styles.h4}>Countdown to Crowd Sale:</h4>
        <Counter />
        <ul style={styles.actions}>
          <li style={styles.li}>
            <button style={styles.button}>Get Started</button>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Section;
