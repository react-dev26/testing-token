import React, { PropTypes } from 'react';

function ErrorMessage({ error }) {
  return (
    <div className='form__error-wrapper js-form__err-animation'>
      <p className='form__error'>
        {error}
      </p>
    </div>
  );
}

ErrorMessage.propTypes = {
  error: PropTypes.string,
};

ErrorMessage.defaultProps = {
  error: null,
};

export default ErrorMessage;
