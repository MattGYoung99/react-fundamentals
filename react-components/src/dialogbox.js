import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const DialogBox = ({children}) => {
    return (
        <div className="dialogBox">
            {children}
        </div>
    )
}
class Title extends React.Component {
    render() {
        return (
            <h1>{this.props.children}</h1>
        )
    }
}
class Body extends React.Component {
    render() {
        return (
            <p className="dialogBody">{this.props.children}</p>
        )
    }
}
class Footer extends React.Component {
    render() {
        return (
            <button className="dialogFooter">{this.props.children}</button>
        )
    }
}

export default class Dialog extends React.Component {
    render() {
        return (
            <DialogBox>
                <Title>This is a title</Title>
                <Body>This is a body paragraph</Body>
                <Footer>Close</Footer>
            </DialogBox>
        )
    }
}