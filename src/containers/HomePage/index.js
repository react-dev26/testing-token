import React from 'react';

import Section1 from 'components/Section1';
import Section2 from 'components/Section2';
import Section3 from 'components/Section3';
import Section4 from 'components/Section4';
import Timeline from 'components/Timeline';
import ImageAuthority from 'utils/images/authority.png';
import styles from './styles';

function HomePage() {
  return (
    <div style={styles.wrapper}>
      <Section1 />
      <div>
        <span style={styles.ImageFit}><img src={ImageAuthority} style={styles.img} alt="authority" /></span>
      </div>
      <Section2 />
      <Section3 />
      <br />
      <br />
      <Timeline />
      <Section4 />
    </div>
  );
}

export default HomePage;
