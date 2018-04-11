// Asurion.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import AsurionPic from '../../images/Asurion.png';

export class Asurion extends React.Component {
            render()
            {        
                return (<div>
                        <div class="container">
                            <div class="row">                                    
                                <div class="col-lg-4 align-self-center">
                                    <img class="img-fluid rounded" src={AsurionPic} alt="Generic placeholder image"/>
                                </div>                                   
                            </div>
                            <div class="row" style={{marginTop:'30px'}}>
                                <div class="col-lg-10 offset-lg-1">                                        
                                    <h5 class="mt-0">Software Engineer 4</h5>
                                        <p><em>  
                                            Asurion is the major cell phone insurance provider for US carriers and most over seas countries.  
                                            Asurion has a highly integrated and large system that needs timely adjustment in order to maintain success.  
                                            Have you ever lost or damaged a phone and processed a claim with Asurion? If yes, then it is likely my code helped process your claim!</em></p>
                                        <ul>
                                            <li>Developed integration services to communicate with various carriers Verizon, ATT, MetroPCS, Walmart, TMobile.</li>
                                            <li>Developed Asurion's middle tier consisting of Tiboc EMS,  Tibco BW (JVM) Services and WCF Services.</li>
                                            <li>Delivered the project <a href="https://www.youtube.com/watch?v=MULfhIbPoT4">AT&T Mulit-Device Protection Pack</a>, required large adjustments to Asurion's middle tier.</li>
                                            <li>Delivered the project <a href="https://play.google.com/store/apps/details?id=com.asurion.android.verizon.vms&feature=search_result">Verizon Mobile Security</a>, required large adjustments to Asurion's middle tier. </li>
                                            <li>Decreased testing effort and increased test case coverage by creating service emulation of external APIs in Dev and QA environments.</li>
                                            <li>Reduced manual effort and errors by introducing automated deployment process to Dev, QA, and Production using GOCD and Artifactory.</li>
                                            <li>Developed the company’s internal website in SharePoint 2010.</li>
                                            <li>Hired as a Software Engineer 2, promoted Sr. Software Engineer and finally Software Engineer 4, trusted with large projects.</li>
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
                                    <span class="badge badge-pill badge-dark">ASP.Net</span>&nbsp;
                                    <span class="badge badge-pill badge-dark">MVC.Net</span>&nbsp;                                           
                                    <span class="badge badge-pill badge-dark">JavaScript</span>&nbsp;                                       
                                    <span class="badge badge-pill badge-dark">JQuery</span>&nbsp;                                       
                                    <span class="badge badge-pill badge-dark">ReactJS</span>&nbsp;
                                    <span class="badge badge-pill badge-dark">SQL</span>&nbsp;
                                    <span class="badge badge-pill badge-dark">CSS</span>&nbsp;                                                                               
                                    <span class="badge badge-pill badge-dark">HTML</span>&nbsp;                                           
                                    <span class="badge badge-pill badge-dark">AWS</span>&nbsp;
                                    <span class="badge badge-pill badge-dark">.Net Core</span>&nbsp;
                                    <span class="badge badge-pill badge-dark">Puppet</span>&nbsp;
                                    <span class="badge badge-pill badge-dark">GOCD</span>&nbsp;
                                    <span class="badge badge-pill badge-dark">Artifactory</span>&nbsp;
                                    <span class="badge badge-pill badge-dark">SharePoint 2010</span>&nbsp;
                                </div>
                            </div>
                        </div>
                    </div>                    
                );  
            }  
}