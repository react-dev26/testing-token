import React, { PropTypes } from 'react';

import person1 from 'utils/images/person1.png';
import person2 from 'utils/images/person2.png';
import person3 from 'utils/images/person3.png';
import styles from './styles';

function Tab({ name, content, img }) {
  return (
    <li style={styles.container}>
      <h3 style={styles.h3}>{name}</h3>
      <div style={styles.split}>
        <div style={styles.content}>
          <br />
          <p style={styles.p}>{content}</p>
        </div>
        <div style={styles.imageContent}>
          <img style={styles.img} src={img} alt="img" />
        </div>
      </div>
    </li>
  );
}

Tab.propTypes = {
  name: PropTypes.string,
  content: PropTypes.string,
  img: PropTypes.string,
};
Tab.defaultProps = {
  name: "person",
  content: "empty",
  img: null,
};
export default Tab;
