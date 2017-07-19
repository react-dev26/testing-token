import React, { PropTypes, Component} from 'react';
import LoadingButton from './LoadingButton';
import { Link } from 'react-router-dom';

import {logout, clearError} from 'actions';

class Nav extends Component {
  constructor(props) {
    super(props)
    this._logout = this._logout.bind(this);
    this._clearError = this._clearError.bind(this);
  }

  render() {
    const { loggedIn, currentlySending} = this.props;
    console.log('loggedIn', loggedIn);
    console.log('currentlySending', currentlySending);
    const navButtons = this.props.loggedIn ? (
      <div>
        {this.props.currentlySending ? (
          <LoadingButton className='btn--nav' />
        ) : (
          <Link to='#' className='btn btn--login' onClick={this._logout}>Logout</Link>
        )}
      </div>
    ) : (
      <div>
        <Link to='/register' className='btn btn--login' onClick={this._clearError}>Sign Up</Link>
        <Link to='/login' className='btn btn--login' onClick={this._clearError}>Login</Link>
      </div>
    )

    return (
      <li style={{ marginLeft: '2.25em', padding: 0 }}>
        {navButtons}
      </li>
    );
  }

  _logout() {
    this.props.dispatch(logout());
  }

  _clearError() {
    this.props.dispatch(clearError());
  }

}

Nav.propTypes = {
  loggedIn: PropTypes.bool,
  currentlySending: PropTypes.bool,
  dispatch: PropTypes.func,
};
Nav.defaultProps = {
  loggedIn: null,
  currentlySending: null,
  dispatch: () => {},
};

export default Nav;
