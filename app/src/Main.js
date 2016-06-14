import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createLogger from 'redux-logger'

import AppReducer from './reducers/Reducer';
import AppContainer from './components/container/AppContainer';

const logger = createLogger();
const store = createStore(AppReducer, applyMiddleware(logger));

ReactDOM.render(
        <Provider store={store}>
          <AppContainer/>
        </Provider>,
        document.getElementById('root')
      );