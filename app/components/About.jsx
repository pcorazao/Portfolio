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
                                        <h2>About Pete</h2>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-10 offset-lg-1">
                                        <p><em>Hi y’all! In 2015 I moved from my home town of Nashville, TN to Seattle, WA. 
                                            My wife and I have grown to love the Puget Sound area. 
                                            We frequently spend our Saturdays at Marymoor dog park with our golden retriever, and fishing is my favorite hobby. 
                                            I enjoy going out in the Puget Sound and the many lakes around the area in my Hobie kayak. 
                                            I also love to code and solve hard problems in the software space.</em></p>
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
                                            <p>I jump started my career by getting my undergrad in computer science at UTSA. 
                                                This was a great school for computer science and helped me build a strong foundation. 
                                                While there, I spent a lot of time working with Linux and learning the fundamentals of CS. 
                                                I especially enjoyed my graphics class where we rendered 3D objects in OpenGL. 
                                                I also had a great time in my embedded systems class programming Lego robots to solve mazes drawn with electrical tape.</p> 
                                    </div>
                                </div>
                                <div class="row" style={{marginTop:'30px'}}>                                                                        
                                    <div class="col-lg-9 offset-lg-1 order-lg-1 order-2">                                        
                                        <h5 class="mt-0">Middle Tennessee State University</h5>
                                            <p>I completed my Master’s degree in computer science at MTSU in 2013 while also working full time at Asurion. 
                                                I focused on big parallel on Unix clusters using a programmatic framework called MPI. 
                                                In my design of Parallel Software class, I even implemented <a href="https://github.com/pcorazao/mpi">my own version of MPI</a>. 
                                                Other class I particularly enjoyed were Data Mining and Artificial Intelligence. 
                                                In my AI class, we implemented some of the foundational AI algorithms like decision trees, classifiers, and recommendation systems.
                                            </p> 
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
                                    <table class="table table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">Tier</th>
                                                <th scope="col">Tech Stack</th>                                            
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>                                            
                                                <td>Front End</td>
                                                <td>ASP, MVC, HTML, ReactJS, AngularJS, JQuery, CSS, Javascript, Bootstrap</td>
                                            </tr>
                                            <tr>                                            
                                                <td>Middle</td>
                                                <td>Tibco EMS, Tibco BW, Azure Service Bus, Azure Worker Role(s), SQS, Lambda, MSNQ, WebAPI, Express, Node, IIS, ASMX, WCF</td>
                                            </tr>
                                            <tr>                                            
                                                <td>Database</td>
                                                <td>SQL, Cosmos DB</td>
                                            </tr>
                                            <tr>                                            
                                                <td>Platform</td>
                                                <td>SharePoint, Chef, GOCD, Artifactory, Azure, AWS</td>
                                            </tr>                                                                                           
                                        </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div class="row" style={{marginTop:'30px'}}>
                                    <div class="col-lg-12">
                                        <h2>Blog</h2>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-11 offset-lg-1">
                                        From time to time I contribute to <a href="https://pragmaticsoa.wordpress.com/">Pragmatic Architecture</a>, a site dedicated to trending architecture technology and patterns.
                                    </div>
                                </div>
                            </div>
                        </div>                    
                        );  
            }  
}