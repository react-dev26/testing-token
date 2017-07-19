import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles';

function Logo() {
  return (
    <div style={styles.wrapper}>
      <Link to="/home" style={styles.property}>TokenAI</Link>
      <span style={styles.text}>Every Token for Everyone</span>
    </div>
  );
}

export default Logo;
