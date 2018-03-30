import React from 'react';
import ReactDOM from 'react-dom';
import propTypes from 'prop-types';


const NavItem = (props) => {
    return (
      <a href={props.url}>
        {props.children}
      </a>
    )
  }
  
  const Nav = ({children}) => {
      let links = React.Children.toArray(children);
      return (
        <div>
          {links}
        </div>
      )
  }
  
 class App extends React.Component {
    render() {
        return (
            <Nav>
                <NavItem url='/home'>Home</NavItem>
                <NavItem url='/contact'>Contact</NavItem>
                <NavItem url='/portfolio'>Portfolio</NavItem>
            </Nav>
        )
    }
  }
  
  
  export default App;