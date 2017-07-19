import 'babel-polyfill'

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { AppContainer } from 'react-hot-loader';
import injectTapEventPlugin from 'react-tap-event-plugin';

import 'styles/main.css';

import reducer from 'reducers';
import rootSaga from 'sagas';
import Router from 'setup/Router';

injectTapEventPlugin();

const logger = createLogger({
  prodicate: (getState, action) => action.type !== 'CHANGE_FORM'
})

const sagaMiddleware = createSagaMiddleware();
export const store = createStore( reducer, applyMiddleware(logger, sagaMiddleware));
sagaMiddleware.run(rootSaga);

function renderApp(Component) {
  render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root'),
  );
}

renderApp(Router);

if (module.hot) {
  module.hot.accept('./setup/Router/index.js', () => {
    const NewApp = require('./setup/Router/index.js').default;
    renderApp(NewApp);
  });
}
