// SiteNavigation.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';


export class SiteNavigation extends React.Component {
            render()
            {        
                return (                    
                <Navbar>
                <Navbar.Header>
                  <Navbar.Brand>
                    <a href="#home">Peter Corazao</a>
                  </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                  <NavItem eventKey={1} href="#about">
                    About
                  </NavItem>                  
                  <NavDropdown eventKey={3} title="Jobs" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}>HCA</MenuItem>
                    <MenuItem eventKey={3.2}>Asurion</MenuItem>
                    <MenuItem eventKey={3.3}>NC2 Media</MenuItem>
                    <MenuItem eventKey={3.4}>CommerceHub</MenuItem>
                  </NavDropdown>
                </Nav>
              </Navbar>);  
            }  
}