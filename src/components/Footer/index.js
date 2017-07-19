import React from 'react';

import SocialMedia from './SocialMedia';
import CustomForm from './CustomForm';
import styles from './styles';

function Footer() {
  return (
    <footer style={styles.container}>
      <div style={styles.inner}>
        <div style={styles.split}>
          <SocialMedia />
          <CustomForm />
        </div>
      </div>
      <div style={styles.copyRight}>
        <p style={{ margin: '0 0 2em 0'}}>© TokenAI INC. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
