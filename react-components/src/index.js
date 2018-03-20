import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  ErrorBox from './error.js';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(<ErrorBox/>, document.getElementById('root'));
registerServiceWorker();
