// About.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import UTSAPic from '../images/UTSA.png';
import MTSUPic from '../images/MTSU.png';

export class About extends React.Component {
            render()
            {        
                return (
                        <div>
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <h1>About Pete</h1>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-10 offset-lg-1">
                                        <p><em>Howdy y'all, I moved from my home town Nashville Tennessee to Seattle Washington to join the tech boom!
                                              My wife and I have grown to love the Puget Sound area.  
                                              We love to spend time with our golden retriever at Marymoor dog park. 
                                              I really enjoy fishing the fresh water lakes and sound in my Hobie kayak.  
                                              I also love to code and happen to be a strong software engineer!</em></p>
                                    </div>
                                </div>
                                <div class="row" style={{marginTop:'30px'}}>
                                    <div class="col-lg-12">
                                        <h2>Education</h2>
                                    </div>
                                </div>
                                <div class="row" style={{marginTop:'30px'}}>
                                    <div class="col-lg-2 offset-lg-1 align-self-center">
                                        <img class="img-fluid rounded" src={UTSAPic} alt="Generic placeholder image"/>
                                    </div>                                    
                                    <div class="col-lg-9">                                        
                                        <h5 class="mt-0">University of Texas San Antonio</h5>
                                            <p>I finished my undergrad in computer science at UTSA and really helped to accelerate my carrier.  
                                            UTSA is a great for Computer Science, and helped me build a strong foundation! 
                                            I spent allot of time working with Linux and learning the fundamentals of computer science.  
                                            I enjoyed graphics class where we rendered 3D objects in OpenGL.  
                                            I had a great time in imbedded systems programming lego robots to solve mazes drawn with electrical tape.</p> 
                                    </div>
                                </div>
                                <div class="row" style={{marginTop:'30px'}}>                                                                        
                                    <div class="col-lg-9 offset-lg-1 order-lg-1 order-2">                                        
                                        <h5 class="mt-0">Middle Tennessee State University</h5>
                                            <p>I finished my masters degree in computer science at MTSU while working full time. 
                                            Here I studied big parallel on Unix clusters using a programming framework called MPI.  
                                            I implemented my own version of MPI in one class that can be reviewed review <a href="https://github.com/pcorazao/mpi">here</a>.
                                            I also took data mining and artificial intelligence classes.  
                                            I implemented artificial intelligence algorithms like: decision trees, classifiers and recommendation systems.</p> 
                                    </div>
                                    <div class="col-lg-2 order-lg-2 order-1 align-self-center">
                                        <img class="img-fluid rounded" src={MTSUPic} alt="Generic placeholder image"/>
                                    </div>
                                </div>
                                <div class="row" style={{marginTop:'30px'}}>
                                    <div class="col-lg-12">
                                        <h2>Skills</h2>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-11 offset-lg-1">
                                        <span class="badge badge-pill badge-dark">C#</span>&nbsp;
                                        <span class="badge badge-pill badge-dark">SQL</span>&nbsp;
                                        <span class="badge badge-pill badge-dark">JavaScript</span>&nbsp;
                                        <span class="badge badge-pill badge-dark">React</span>&nbsp;
                                        <span class="badge badge-pill badge-dark">Angular</span>&nbsp;
                                        <span class="badge badge-pill badge-dark">Node</span>&nbsp;
                                        <span class="badge badge-pill badge-dark">Express</span>&nbsp;
                                        <span class="badge badge-pill badge-dark">Azure</span>&nbsp;
                                        <span class="badge badge-pill badge-dark">AWS</span>&nbsp;
                                        <span class="badge badge-pill badge-dark">Ruby</span>&nbsp;
                                        <span class="badge badge-pill badge-dark">Python</span>&nbsp;
                                        <span class="badge badge-pill badge-dark">Perl</span>&nbsp;
                                        <span class="badge badge-pill badge-dark">C</span>&nbsp;
                                        <span class="badge badge-pill badge-dark">C++</span>&nbsp;
                                        <span class="badge badge-pill badge-dark">Chef</span>&nbsp;
                                        <span class="badge badge-pill badge-dark">Gulp</span>&nbsp;
                                        <span class="badge badge-pill badge-dark">Java</span>&nbsp;
                                        <span class="badge badge-pill badge-dark">HTML</span>&nbsp;
                                        <span class="badge badge-pill badge-dark">BootStrap</span>&nbsp;
                                        <span class="badge badge-pill badge-dark">CSS</span>&nbsp;
                                    </div>
                                </div>
                                <div class="row" style={{marginTop:'30px'}}>
                                    <div class="col-lg-12">
                                        <h2>Blog</h2>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-11 offset-lg-1">
                                        From time to time I contribute to <a href="https://pragmaticsoa.wordpress.com/">Pragmatic Architecture</a>
                                    </div>
                                </div>
                            </div>
                        </div>                    
                        );  
            }  
}