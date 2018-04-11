// Footer.jsx
import React from 'react';
import ReactDOM from 'react-dom';

export class Footer extends React.Component {
            render()
            {        
                return (
                        <div>
                            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-bottom justify-content-end navbar-expand-lg" style={{opacity:.75}}>
                                <ul class="navbar-nav">
                                <li class="nav-item active">
                                    <a class="nav-link" href="https://github.com/pcorazao/Portfolio"><i class="fa fa-github"></i>&nbsp;Source</a>
                                </li>
                                <li class="nav-item active">
                                    <a class="nav-link" href="mailto:pcorazao@gmail.com"><i class="fa fa-envelope"></i>&nbsp;Email</a>
                                </li>
                                <li class="nav-item active">
                                    <a class="nav-link" href="https://www.linkedin.com/in/petercorazao/"><i class="fa fa-linkedin-square"></i>&nbsp;LinkedIn</a>
                                </li>
                                <li class="nav-item active">
                                    <a class="nav-link" href="https://twitter.com/pcorazao"><i class="fa fa-twitter"></i>&nbsp;Twitter</a>
                                </li>
                                </ul>
                            </nav>
                        </div>
                        );  
            }  
}