import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles';

function ActionItem({ label, to }) {
  return (
    <li style={styles.property}>
      <Link to={`${to}`} style={styles.link}>{label}</Link>
    </li>
  );
}

ActionItem.propTypes = {
  label: PropTypes.string,
  to: PropTypes.string,
};
ActionItem.defaultProps = {
  label: null,
  to: null,
};

export default ActionItem;
