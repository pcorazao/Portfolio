// Footer.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar, Nav } from 'react-bootstrap';

export class Footer extends React.Component {
            render()
            {        
                return (
                    
                        <Navbar fixedBottom="true">
                          <Nav pullRight>
                                <Navbar.Text>
                                    <Navbar.Link href="https://github.com/pcorazao/Portfolio"><i class="fa fa-github"></i>&nbsp;source</Navbar.Link>
                                </Navbar.Text>
                                <Navbar.Text>
                                    <Navbar.Link href="mailto:pcorazao@gmail.com"><i class="fa fa-at"></i>&nbsp;email</Navbar.Link>
                                </Navbar.Text>
                                <Navbar.Text>
                                    <Navbar.Link href="https://www.linkedin.com/in/petercorazao/"><i class="fa fa-linkedin"></i>&nbsp;social</Navbar.Link>
                                </Navbar.Text>
                            </Nav>                           
                        </Navbar>      
                );  
            }  
}