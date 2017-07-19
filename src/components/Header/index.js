import React from 'react';

import Logo from './Logo';
import TopNav from './TopNav';
import styles from './styles';

function Header() {
  return (
    <header style={styles.container}>
      <Logo />
      <TopNav />
    </header>
  )
}

export default Header;
