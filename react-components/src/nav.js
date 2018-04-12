import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


class Nav extends React.Component {
    render() {
    let items = React.Children.toArray(this.props.children);
        return (
            <div>{items}</div>
        )
    }
}

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

            // <Nav>
            //     <NavItem url='/'>Home </NavItem>
            //     <NavItem url='/about'>About </NavItem>
            //     <a href='/contact'>Contact </a>
            // </Nav>
        )
    }
}