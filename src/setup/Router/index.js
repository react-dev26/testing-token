import React, { PropTypes } from 'react';
import {Router, Route, browserHistory, Redirect } from 'react-router'

import Layout from 'containers/Layout';
import HomePage from 'containers/HomePage';
import Login from 'components/Header/TopNav/Login';
import SignUp from 'components/Header/TopNav/SignUp';
import Dashboard from 'containers/Dashboard';
import NotReadyPage from 'containers/NotReadyPage';
import Generic from 'containers/Generic';
import { store } from 'index.js';
import { clearError } from 'actions';

export const routes = [
  { path: '/home', component: HomePage },
  { path: '/generic', component: Generic },
  { path: '/login', component: Login },
  { path: '/register', component: SignUp },
  { path: '/dashboard', component: Dashboard },
  { path: '*', component: NotReadyPage },

];

function checkAuth (nextState, replace) {
  let {loggedIn} = store.getState()

  store.dispatch(clearError())

  // Check if the path isn't dashboard. That way we can apply specific logic to
  // display/render the path we want to
  if (nextState.location.pathname !== '/dashboard') {
    if (loggedIn) {
      if (nextState.location.state && nextState.location.pathname) {
        replace(nextState.location.pathname)
      } else {
        replace('/')
      }
    }
  } else {
    // If the user is already logged in, forward them to the homepage
    if (!loggedIn) {
      if (nextState.location.state && nextState.location.pathname) {
        replace(nextState.location.pathname)
      } else {
        replace('/')
      }
    }
  }
}
function hashLinkScroll() {
  const { hash } = window.location;
  if (hash !== '') {
    // Push onto callback queue so it runs after the DOM is updated,
    // this is required when navigating from a different page so that
    // the element is rendered on the page before trying to getElementById.
    setTimeout(() => {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) element.scrollIntoView();
    }, 0);
  }
}
function Routing() {
  return (
    <Router history={browserHistory} onUpdate={hashLinkScroll}>
      <Route component={Layout}>
        <Redirect exact from='/' to='/home' />
        <Route path='/home' component={HomePage} />
        <Route onEnter={checkAuth}>
          <Route path='/login' component={Login} />
          <Route path='/register' component={SignUp} />
          <Route path='/dashboard' component={Dashboard} />
        </Route>
        <Route path='*' component={NotReadyPage} />
      </Route>
    </Router>
  );
}
Routing.contextTypes = {
  router: PropTypes.object,
};

export default Routing;
