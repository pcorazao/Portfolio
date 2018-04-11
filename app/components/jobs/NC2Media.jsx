// NC2Media.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import NC2MediaPic from '../../images/NC2Media.png';

export class NC2Media extends React.Component {
            render()
            {        
                return (<div>
                    <div class="container">
                            <div class="row">                                    
                                <div class="col-lg-2 align-self-center">
                                    <img class="img-fluid rounded" src={NC2MediaPic} alt="Generic placeholder image"/>
                                </div>                                   
                            </div>
                            <div class="row" style={{marginTop:'30px'}}>
                                <div class="col-lg-10 offset-lg-1">                                        
                                    <h5 class="mt-0">Sr. Software Engineer</h5>
                                    <p><em>  
                                       NC2 Media is a mid-sized company with a large portfolio of solution offerings to the Nashville area.
                                       The company develops websites for famous country music artists and events.
                                       NC2 also provides websites to select local products and brands.  
                                       They help establish and promote brands via various channels and outlets.  
                                       I worked extensively with Azure, Angular and C# on two minimum viable product (MVP) products</em></p>
                                    <ul>
                                        <li>Developed MVP digital marketplace of crowd sourced media with Azure</li>
                                        <li>Developed MVP digital advertizing in games via <a href="https://unity3d.com/">Unity</a></li>
                                        <li>Proficient in Unity, Feel like playing some unity demo games I built? <a href="https://unity-pete.azurewebsites.net/Unity-Survival-Shooter-Web.html">Survival Shooter</a>&nbsp;|&nbsp; 
                                        <a href="https://unity-pete.azurewebsites.net/stealth01.html">Stealth</a> &nbsp;|&nbsp;
                                        <a href="https://unity-pete.azurewebsites.net/SpaceShooter.html">Space Shooter</a> &nbsp;|&nbsp;
                                        <a href="https://unity-pete.azurewebsites.net/Scavanger.html">Scavanger</a>
                                        </li>
                                        <li>Developed payment integration with Paypal</li>
                                        <li>Developed digital coupon distribution with apple passbook</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="row" style={{marginTop:'30px'}}>
                                    <div class="col-lg-12  offset-lg-1">
                                        <h5>Skills</h5>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-11 offset-lg-1">
                                        <span class="badge badge-pill badge-dark">C#</span>&nbsp;
                                        <span class="badge badge-pill badge-dark">WebAPI</span>&nbsp;                                          
                                        <span class="badge badge-pill badge-dark">JavaScript</span>&nbsp;                                       
                                        <span class="badge badge-pill badge-dark">AngularJS</span>&nbsp;                                       
                                        <span class="badge badge-pill badge-dark">Azure</span>&nbsp;
                                        <span class="badge badge-pill badge-dark">Cosmos DB</span>&nbsp;
                                        <span class="badge badge-pill badge-dark">Azure EMS</span>&nbsp;
                                        <span class="badge badge-pill badge-dark">Gulp</span>&nbsp;                                       
                                        <span class="badge badge-pill badge-dark">HTML</span>&nbsp;
                                        <span class="badge badge-pill badge-dark">BootStrap</span>&nbsp;
                                        <span class="badge badge-pill badge-dark">CSS</span>&nbsp;
                                    </div>
                                </div>
                        </div>
                    </div>                    
                );  
            }  
}