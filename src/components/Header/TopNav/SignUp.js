import React, { PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import Form from './common/Form';

import {registerRequest} from 'actions';

class SignUp extends Component {
  constructor (props) {
    super(props)

    this._register = this._register.bind(this);
  }

  render () {
    let {dispatch} = this.props;
    let {formState, currentlySending, error} = this.props.data;

    return (
      <div className='form-page__wrapper'>
        <div className='form-page__form-wrapper'>
          <div className='form-page__form-header'>
            <h2 className='form-page__form-heading'>Sign Up</h2>
          </div>
          <Form data={formState} dispatch={dispatch} history={this.props.history} onSubmit={this._register} btnText={'SignUp'} error={error} currentlySending={currentlySending} />
        </div>
      </div>
    );
  }

  _register (username, password) {
    this.props.dispatch(registerRequest({username, password}))
  }
}

SignUp.propTypes = {
  data: PropTypes.object,
  history: PropTypes.object,
  dispatch: PropTypes.func
};
SignUp.defaultProps = {
  data: null,
  history: null,
  dispatch: () => {},
};

function select (state) {
  return {
    data: state
  }
}

export default connect(select)(SignUp);
