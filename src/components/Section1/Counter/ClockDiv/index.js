import React, { PropTypes } from 'react';

import styles from './styles';

function ClockDiv({ label, value }) {
  return (
    <div style={styles.container}>
      <span style={styles.value}>{value}</span>
      <div style={styles.label}>{label}</div>
    </div>
  );
}
ClockDiv.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
};
ClockDiv.defaultProps = {
  label: null,
  value: null,
};
export default ClockDiv;
