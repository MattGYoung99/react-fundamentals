import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const CardInfo = {
    name: 'Matthew G Young',
    expiration: '07/21',
    num: '1234 5678 1234 5678',
    bank: 'Big Stacks Inc'
}

const CreditCard = ({info}) => {
    const {name, expiration, num, bank} = info;
    return (
        <div className='card-wrapper'>
            <p className='bank-name'>{bank}</p>
            <p className='cc-number'>{num}</p>
            <p className='expiration-date'>
                <b>Good Thru </b> {expiration}
            </p>
            <p className='card-holder-name'>{name}</p>
        </div>
    )
};


ReactDOM.render(<CreditCard info={CardInfo} />, document.getElementById('root'));
registerServiceWorker();
