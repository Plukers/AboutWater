import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

import AppReducer from './reducers/Reducer';
import AppContainer from './container/AppContainer';

const logger = createLogger();

ReactDOM.render(
        <Provider store={createStore(AppReducer, applyMiddleware(thunk, promise, logger))}>
          <AppContainer/>
        </Provider>,
        document.getElementById('root')
      );