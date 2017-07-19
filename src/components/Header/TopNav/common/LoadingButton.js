import React, { PropTypes } from 'react';
import LoadingIndicator from './LoadingIndicator';

function LoadingButton({ className }) {
  return (
    <a href='#' className={className + ' btn btn--loading'} disabled='true'>
      <LoadingIndicator />
    </a>
  );
}

LoadingButton.propTypes = {
  className: PropTypes.string,
};
LoadingButton.defaultProps = {
  className: null,
};

export default LoadingButton
