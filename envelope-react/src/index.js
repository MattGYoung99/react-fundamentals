import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var testSender = {
    name: 'Matt Young',
    street: '645 Fake street',
    address: 'Bingolingo, WY 62347'
}
var testReceiver = {
    name: 'Dan Man',
    street: '123 Fake street',
    address: 'Cuck, ME 12419'
}

function AddressLabel({person}) {
    const {name, street, address} = person;
    return (
        <span>
            <p className="name">{name} </p>
            <p className="street">{street}</p>
            <p className="address">{address}</p>
        </span>
    );
}
const Envelope = ({reciever, sender}) => {
    return (
        <div className="wrapper">
            <div className="fromAddress">
                    <AddressLabel
                        person={sender}
                    />
            </div>
            <div className="toAddress">
                    <AddressLabel
                        person={reciever}
                    />
            </div>
        </div>
    )
}


ReactDOM.render(<Envelope reciever={testReceiver} sender={testSender} />, document.querySelector('#root'));
