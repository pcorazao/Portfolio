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
                                       NC2 Media is a mid sized company with a large portfolio of solution offerings to the Nashville area.
                                       The company developes websites for famous country music artists and events.
                                       NC2 also provides websites to select local products and brands.  
                                       They help establish and promote brands via various channels and outlets.  
                                       I worked extensively with Azure, Angular and C# on two minimal viable product (MVC) products</em></p>
                                    <ul>
                                        <li>Developed MVC digital marketplace of crowd sourced media with Azure</li>
                                        <li>Developed MVC digital advertizing in games via <a href="https://unity3d.com/">Unity</a></li>
                                        <li>Proficient in Unity, Feel like playing some games? <a href="https://unity-pete.azurewebsites.net/Unity-Survival-Shooter-Web.html">Survival Shooter</a>&nbsp;|&nbsp; 
                                        <a href="https://unity-pete.azurewebsites.net/stealth01.html">Stealth</a> &nbsp;|&nbsp;
                                        <a href="https://unity-pete.azurewebsites.net/SpaceShooter.html">Space Shooter</a> &nbsp;|&nbsp;
                                        <a href="https://unity-pete.azurewebsites.net/Scavanger.html">Scavanger</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>                    
                );  
            }  
}