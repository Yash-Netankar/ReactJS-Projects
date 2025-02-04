import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from "./Redux/rootReducer"
import App from "./App";
import "./sass/main.css"

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
