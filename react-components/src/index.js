import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  ErrorBox from './error.js';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
    <div>
        <ErrorBox>The World is ending</ErrorBox>
        <ErrorBox>The World is fine</ErrorBox>
    </div>, 
    document.getElementById('root')
);
registerServiceWorker();
