// Home.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import ProfilePic from '../images/ProfilePic.png';
import '../../app/css/Home.css';

export class Home extends React.Component {
    render() {
        return (<div>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-11">
                                <div class="jumbotron">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-4">
                                            <img src={ProfilePic} class="img-fluid rounded" alt="Responsive image" />
                                        </div>
                                        <div class="col-lg-8">
                                            
                                            <h1 class="display-4">Welcome</h1>
                                            <p class="lead">Thanks so much for dropping by!</p>
                                            <hr class="my-4" />
                                            <p>This is a place where I can share my professional experiences and show off some of my technical talents.
                                                <br />
                                                Please feel free to look around and reach out to me if you are looking for a hard working full stack software engineer.</p>
                                            <p class="lead">
                                                <Link to={'/about'}>
                                                    <div class="btn btn-primary btn-lg" role="button">Learn more</div>
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>

            {/* <div className="app">
                <p>This text will be blue</p>
            </div> */}
        </div>
        );
    }
}