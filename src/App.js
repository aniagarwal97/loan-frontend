import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './Routes';
import store from './Redux/store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <ToastContainer autoClose = {2500}/>
      <Router>
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
