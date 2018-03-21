import React from 'react';
import ReactDOM from 'react-dom';


function ErrorBox({children}) {
    return (
        <div className="error">
            <i class="fa fa-exclamation-triangle"/>
            {children}
        </div>
    );
}


export default ErrorBox;



