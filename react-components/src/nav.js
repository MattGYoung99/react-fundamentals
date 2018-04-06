import React from 'react';
import ReactDOM from 'react-dom';
import propTypes from 'prop-types';
<<<<<<< HEAD
import ErrorBox from './error.js';
import PropTypes from 'prop-types';

class NavItem extends React.Component {
    render() {
        return (
        <a href={this.props.url}>
            {this.props.children}
        </a>
        )
    }
}


  const Nav = ({children}) => {
      let links = React.Children.toArray(children);
      return (
        <div>
            {links}
        </div>
      )
  }
  
  Nav.propTypes = {
    children: function (props, propName, componentName) {
      const prop = props[propName]
      console.log(prop + 'prop',props + 'props',propName + 'propName',componentName + 'componentName');
      let error = null
        React.Children.forEach(prop, function (child) {
            if (child.type !== 'NavItem') {
                error = new Error('`' + componentName + '` children should be of type `NavItem`.');
                console.log(child.type + '*')
            }
        })
      return error
    }
  }

 class App extends React.Component {
    render() {
        return (
            <Nav>
                <NavItem url='/home'>Home </NavItem>
                <NavItem url='/contact'>Contact </NavItem>
                {/* <NavItem url='/projects'>Projects </NavItem> */}
                <a url="/projects">Projects </a>
            </Nav>
        )
    }
  }
  
  
  export default App;
=======
const Nav = ({children}) => {
    let items = React.Children.toArray(children);
        return (
            <div></div>
        )
};

NavItem.propTypes = {
    url: PropTypes.string.isRequired,
    children: PropTypes.element
}

const NavItem = (props, children) => {
    return (
        <a href={props.url}>
            {children}
        </a>
    )
};
>>>>>>> 1dc989cdec1ad647b6fa454a4a04a83e023e21ac
