// SiteNavigation.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class SiteNavigation extends React.Component {
            render()
            {        
                return (                    
                <Navbar>
                <Navbar.Header>
                  <Navbar.Brand>
                    <Link to={'/'}>Peter Corazao</Link>
                  </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                  <NavItem eventKey={1}>
                    <Link to={'/about'}>About</Link>
                  </NavItem>                  
                  <NavDropdown eventKey={2} title="Jobs" id="basic-nav-dropdown">
                    <MenuItem eventKey={2.1}><Link to={'/hca'}>HCA</Link></MenuItem>
                    <MenuItem eventKey={2.2}><Link to={'/asurion'}>Asurion</Link></MenuItem>
                    <MenuItem eventKey={2.3}><Link to={'/nc2media'}>NC2 Media</Link></MenuItem>
                    <MenuItem eventKey={2.4}><Link to={'/commercehub'}>CommerceHub</Link></MenuItem>
                  </NavDropdown>
                </Nav>
              </Navbar>);  
            }  
}