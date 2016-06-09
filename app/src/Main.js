import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import AppReducer from './reducers/Reducer';
import App from './components/App';

const store = createStore(AppReducer);

ReactDOM.render(
        <App store={store} />,
        document.getElementById('root')
      );