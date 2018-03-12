import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var testSender = {
    name: 'Matt',
    street: '645 Fake street',
    address: 'Bingolingo, WY 62347'
}
var testReceiver = {
    name: 'Danny',
    street: '123 Fake street',
    address: 'Cuck, ME 12419'
}

function AddressLabel({person}) {
    const {name, street, address} = person;
    return (
        <span>
            <span className="name">
                {name} 
            </span>
            <span className="street">
                {street}
             </span>
            <span className="address">
                {address} 
            </span>
        </span>
    );
}
const Envelope = () => {
    return (
        <div className='wrapper'>
            <div className="toPerson">
                <AddressLabel
                    person={testSender}
                />
            </div>
            <div className="fromPerson">
                <AddressLabel 
                    person={testReceiver}
                />
            </div>
        </div>
    )
}


ReactDOM.render(<Envelope/>, document.querySelector('#root'));
