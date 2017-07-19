import React from 'react';

import styles from './styles';

function Portrait() {
  return (
    <section style={styles.container}>
      <h2 style={styles.h2}>TAI - Artificial Intelligence (AI) Tools Simplified For The Token World</h2>
      <div style={styles.features}>
        <article style={{...styles.fa, ...styles.faDiamond}} className="icon">
          <i style={styles.i} className="fa fa-diamond"></i>
          <h3 style={styles.h3}>Wall Street Tools For The Token World</h3>
          <p style={styles.p}>Wall Street quality tools deliverd for the Token Market.</p>
        </article>
        <article style={{...styles.fa, ...styles.faFileO}} className="icon">
          <i style={{...styles.i, left: '1.5em',}} className="fa fa-file-o"></i>
          <h3 style={styles.h3}>AI Optimized</h3>
          <p style={styles.p}>Advanced AI algorithms anticipating market trends and analysing big data for your success.</p>
        </article>
        <article style={{...styles.fa, ...styles.faClone}} className="icon">
          <i style={styles.i} className="fa fa-clone"></i>
          <h3 style={styles.h3}>Secure And Private</h3>
          <p style={styles.p}>Distributed and secure on a decentralized blockchain for privacy and security.</p>
        </article>
        <article style={{...styles.fa, ...styles.faEnvelopeO}} className="icon">
          <i style={{...styles.i, left: '1.5em',}} className="fa fa-envelope-o"></i>
          <h3 style={styles.h3}>Accessible To Anyone</h3>
          <p style={styles.p}>Easy to understand and use for both sophisticated investors or beginners.</p>
        </article>
      </div>
    </section>
  );
}

export default Portrait;
