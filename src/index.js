import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// you can pass data through your component called "prop"
ReactDOM.render(
  <App cat={5} txt="This is the prop text" />,
  document.getElementById('root')
);
