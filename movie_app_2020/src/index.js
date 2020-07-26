import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/**
 * react application은
 * 한 번에 하나(App)의 component만
 * rending 할 수 있다.
 * -> 모든 것은 App 안에 넣어야 함
 */
ReactDOM.render(
  <App/>, // component - HTML을 반환함
  document.getElementById('root')
);

