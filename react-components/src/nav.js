import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


class Nav extends React.Component {
    render() {
    let items = React.Children.toArray(this.props.children);
        for (let x in items) {
            if (items[x].type !== NavItem) {
                    items.splice(x, 1);
            }
        }
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

NavItem.propTypes = {
    url: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired
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