import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  ErrorBox from './error.js';
import App from './nav.js';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
    <App/>, 
    document.getElementById('root')
);
registerServiceWorker();
