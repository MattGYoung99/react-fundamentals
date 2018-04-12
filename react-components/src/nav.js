import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


const Nav = ({children}) => {
        return (
            <div>
                {children}
            </div>
        )
};


class NavItem extends React.Component {
    render() {
        return (
            <a href={this.props.url}>
                {this.props.children}
            </a>
        )
    }
}

export default class App extends React.Component {
    render() {
        return (
            <Nav>
                <NavItem url='/'>Home </NavItem>
                <NavItem url='/about'>About </NavItem>
                <NavItem url='/contact'>Contact </NavItem>
            </Nav>
        )
    }
}