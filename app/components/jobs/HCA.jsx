// HCA.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import HCAPic from '../../images/HCA.png';

export class HCA extends React.Component {
            render()
            {        
                return (
                
                    <div>
                        <div class="container">
                            <div class="row">                                    
                                <div class="col-lg-3 align-self-center">
                                    <img class="img-fluid rounded" src={HCAPic} alt="Generic placeholder image"/>
                                </div>                                   
                            </div>
                            <div class="row" style={{marginTop:'30px'}}>
                                <div class="col-lg-9 offset-lg-1">                                        
                                    <h5 class="mt-0">Software Engineer</h5>
                                        <p><em>Hospital Corporation of America (HCA) is one of the largest healthcare corporations in our country.  
                                            HCA owns and maintains a large network of hospitals and offers services ranging from hospital supply chain to technology solutions.  
                                            I interned with HCA in Nashville during undergrad and worked for one of their hospitals in San Antonio (<a href="https://sahealth.com/">Methodist Hospital</a>).
                                            </em></p>

                                        <ul>
                                            <li>Produced software solutions for a healthcare Group Purchasing Organization (GPO) called <a href="https://healthtrustpg.com/">HealthTrust</a>.</li>
                                            <li>Developed various inventory and contract management applications using .net c#. </li>
                                            <li>Worked extensively with SharePoint 2007 and custom web-parts on the <a href="https://www.coretrustpg.com/">CoreTrust</a> website.</li>
                                            <li>Implemented a single sign on (SSO) solution that integrated with active directory.</li>
                                            <li>The software team practiced agile and lean development strategies for quick incremental software releases.</li>
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
                                        <span class="badge badge-pill badge-dark">ASP.net</span>&nbsp;                                          
                                        <span class="badge badge-pill badge-dark">JavaScript</span>&nbsp;                                       
                                        <span class="badge badge-pill badge-dark">JQuery</span>&nbsp;                                       
                                        <span class="badge badge-pill badge-dark">Active Directory</span>&nbsp;
                                        <span class="badge badge-pill badge-dark">SQL</span>&nbsp;
                                        <span class="badge badge-pill badge-dark">CSS</span>&nbsp;
                                        <span class="badge badge-pill badge-dark">SharePoint 2007</span>&nbsp;                                       
                                        <span class="badge badge-pill badge-dark">HTML</span>&nbsp;
                                        <span class="badge badge-pill badge-dark">SiteCore</span>&nbsp;
                                        <span class="badge badge-pill badge-dark">CSS</span>&nbsp;
                                    </div>
                                </div>
                        </div>
                     </div> 
                );  
            }  
}