import React from 'react';

import Img1 from 'utils/images/expensesgraph.png';
import Img2 from 'utils/images/weeks.png';
import styles from './styles';

function Section3() {
  const items = [
    { id: 1, label: "ERC-20 Standard Token"},
    { id: 2, label: "Focus on supporting community and expanding access for new members"},
    { id: 3, label: "Capped with Hidden cap"},
    { id: 4, label: "Escrow service for increased security"},
    { id: 5, label: "Funds returned if minimum not reached"},
    { id: 6, label: "Founder tokens vest over 2 years"},
  ];
  return (
    <section style={styles.container}>
      <h1 style={styles.h1}>Crowdsale Summary</h1>
      <div style={styles.inner}>
        <div style={styles.stats}>
          <article style={styles.wrapper}>
            <div>
              <ul style={styles.ul}>
                {
                  items.map(item =>
                    <li key={item.id} style={styles.li}>{item.label}</li>,
                  )
                }
              </ul>
            </div>
            <br />
            <h3 style={styles.h3}>Crowdsale fundementals</h3>
            <p style={styles.p}>Crowdsale fundementals set up to protect participants privacy and security</p>
          </article>
          <article style={styles.wrapper}>
            <div>
              <span style={styles.imgFit}>
                <img style={styles.img} src={Img1} alt="img1"/>
              </span>
            </div>
            <h3 style={styles.h3}>Intended use of revenue</h3>
            <p style={styles.p}>Majority of revenue will go into purchasing and managing the token portfolio</p>
          </article>
          <article style={{...styles.wrapper, ...styles.wrapperBorder}}>
            <div>
              <span style={styles.imgFit}>
                <img style={styles.img} src={Img2} alt="img2"/>
              </span>
            </div>
            <br />
            <br />
            <h3 style={styles.h3}>Price and Duration</h3>
            <p style={styles.p}>Token sale will last one month plus a 24 hour bonus period.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
export default Section3;
