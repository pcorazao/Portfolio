// SiteNavigation.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

export class SiteNavigation extends React.Component {
            render()
            {        
                return (  
                  <div>
                    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style={{opacity:.75, zIndex:3}}>
                      <Link class="navbar-brand" to={'/'}>Peter Corazao</Link>
                      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                      </button>
                      <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                          <li class="nav-item active">
                            <Link class="nav-link" to={'/about'}>About</Link>
                          </li>                    
                          <li class="nav-item dropdown">
                            {/* <div class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Jobs
                            </div> */}
                            <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Jobs <span class="caret"></span></a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                              <Link class="dropdown-item" to={'/hca'}>HCA</Link>
                              <Link class="dropdown-item" to={'/asurion'}>Asurion</Link>
                              <Link class="dropdown-item" to={'/NC2Media'}>NC2 Media</Link>
                              <Link class="dropdown-item" to={'/CommerceHub'}>CommerceHub</Link>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </nav>
                   </div>
              );  
            }  
}