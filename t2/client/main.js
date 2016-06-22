import React, { PropTypes } from 'react';
import { createStore } from 'redux';
import { render } from 'react-dom';
import todoApp from './reducers';
import { Provider } from 'react-redux';

// Components
import App from './components/App';

// Store
let store = createStore(todoApp);

$(document).ready(function() {
  render(
    <Provider store={store}>
      <App />
    </Provider>
    , document.getElementById('app')
  );
});
