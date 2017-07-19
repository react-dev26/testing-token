import React, { PropTypes, Component } from 'react';
import SocialLogin from 'react-social-login';

import ErrorMessage from './ErrorMessage';
import LoadingButton from './LoadingButton';

import {changeForm} from 'actions';

class Form extends Component {
  constructor(props) {
    super(props)

    this._onSubmit = this._onSubmit.bind(this)
    this._changeUsername = this._changeUsername.bind(this)
    this._changePassword = this._changePassword.bind(this)
  }
  render() {
    let {error} = this.props
    const handleSocialLogin = (user,err) => {
     console.log(user); //either you will get a user
     console.log(err); //or an error
    }

    return (
      <form className='form' onSubmit={this._onSubmit}>
        {error ? <ErrorMessage error={error} /> : null}
        <div className='form__field-wrapper'>
          <input
            className='form__field-input'
            type='text'
            id='username'
            value={this.props.data.username}
            placeholder='username'
            onChange={this._changeUsername}
            autoCorrect='off'
            autoCapitalize='off'
            spellCheck='false' />
          <label className='form__field-label' htmlFor='username'>
            Username
          </label>
        </div>
        <div className='form__field-wrapper'>
          <input
            className='form__field-input'
            id='password'
            type='password'
            value={this.props.data.password}
            placeholder='••••••••••'
            onChange={this._changePassword} />
          <label className='form__field-label' htmlFor='password'>
            Password
          </label>
        </div>
        <div className='socialLogin'>
          <SocialLogin provider='google' appId='1085669919173-lslfngv7lb6j9sr7eostmtk54mrdmhc5.apps.googleusercontent.com' callback={handleSocialLogin}>
        	  <button className='social-media-button'>
              <span className='fa fa-google social-login-icon'></span>
              Login with Google
            </button>
          </SocialLogin>
          <SocialLogin provider='facebook' appId='1688338261458536' callback={handleSocialLogin}>
        	  <button className='social-media-button facebook-btn'>
              <span className='fa fa-facebook social-login-icon'></span>
              Login with Facebook
            </button>
          </SocialLogin>
        </div>
        <div className='form__submit-btn-wrapper'>
          {this.props.currentlySending ? (
            <LoadingButton />
          ) : (
            <button className='form__submit-btn' type='submit'>
              {this.props.btnText}
            </button>
             )}
        </div>
      </form>
    );
  }

  _changeUsername(event) {
    this._emitChange({...this.props.data, username: event.target.value})
  }

  _changePassword(event) {
    this._emitChange({...this.props.data, password: event.target.value})
  }

  _emitChange(newFormState) {
    this.props.dispatch(changeForm(newFormState))
  }

  _onSubmit(event) {
    event.preventDefault()
    this.props.onSubmit(this.props.data.username, this.props.data.password)
  }

}

Form.propTypes = {
  dispatch: PropTypes.func,
  data: PropTypes.object,
  onSubmit: PropTypes.func,
  changeForm: PropTypes.func,
  btnText: PropTypes.string,
  error: PropTypes.string,
  currentlySending: PropTypes.bool,
};
Form.defaultProps = {
  dispatch: null,
  data: null,
  onSubmit: null,
  changeForm: null,
  btnText: null,
  error: null,
  currentlySending: null,
};

export default Form;
