import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dialog from './dialogbox.js';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
    <Dialog/>, 
    document.getElementById('root')
);
registerServiceWorker();
