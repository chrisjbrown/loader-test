import 'app/styles/index.css';
import 'es5-shim';
import 'es6-shim';
import 'es6-promise';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from 'app/store/configure-store';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Root from './containers/root';

const store = configureStore({});

const history = syncHistoryWithStore(browserHistory, store);

injectTapEventPlugin();

if (!__TEST__) {
  /**
   * on initial load. if we don't have user data try and login w/ out credentials.
   * if user has cookie. getting user data will succeded
   * otherwise fail and force user to login
   */

  ReactDOM.render(
    <Root history={history} store={store} />,
    document.getElementById('root'),
  );
}
