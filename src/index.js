import React from 'react';
import ReactDOM from 'react-dom';
import { Sanctum } from 'react-sanctum';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import App from './App';
import { sanctumConfig } from './Config/sanctumConfig';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Sanctum config={sanctumConfig}>
      <App />
    </Sanctum>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
