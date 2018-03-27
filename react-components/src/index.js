import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  ErrorBox from './error.js';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
    <ErrorBox>The World is Ending</ErrorBox>, 
    document.getElementById('root')
);
registerServiceWorker();
