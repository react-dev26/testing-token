import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles';

function SocialMediaItem({ url, label, className }) {
  return (
    <li style={styles.container}>
      <Link className={className} to={url} style={styles.icon}>
        <span style={styles.label}>{label}</span>
      </Link>
    </li>
  );
}
SocialMediaItem.propTypes = {
  url: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
};
SocialMediaItem.defaultProps = {
  url: null,
  label: null,
  className: null,
};
export default SocialMediaItem;
