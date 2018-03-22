import React from 'react';
import ReactDOM from 'react-dom';
import propTypes from 'prop-types';
const Nav = ({children}) => {
    let items = React.Children.toArray(children);
        return (
            <div></div>
        )
};

NavItem.propTypes = {
    url: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
}

const NavItem = (props, children) => {
    return (
        <a href={props.url}>
            {children}
        </a>
    )
};