import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './Routes';
import store from './Redux/store';
import { Provider } from 'react-redux'

import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
