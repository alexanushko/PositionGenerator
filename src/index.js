import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
// import store from './redux/reduxStore';

ReactDOM.render(
    <BrowserRouter>
        {/*<Provider>*/}
            <App />
        {/*</Provider>*/}
    </BrowserRouter>,
  document.getElementById('root')
);

// <Provider store={store}>
