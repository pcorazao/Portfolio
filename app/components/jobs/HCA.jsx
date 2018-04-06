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
                                    <p><i>Hospital Coperation of America (HCA) is one of the largest healthcare corporations in our country.  
                                        HCA owns and maintains a large network of hospitals and offers solutions ranging from hospital supply chain to technology.  
                                        I interned with HCA in Nashville during undergrad and worked for one of their hospitals in San Antonio (<a href="https://sahealth.com/">Methodist Hospital</a>).
                                        </i></p>

                                    <ul>
                                        <li>Produced software solutions for a healthcare Group Purchasing Organization (GPO) called <a href="https://healthtrustpg.com/">HealthTrust</a>.</li>
                                        <li>Developed various inventory  and contract management applications using .net c#. </li>
                                        <li>Worked extensively with SharePoint 2007 and custom web-parts on the <a href="https://www.coretrustpg.com/">CoreTrust</a> web site to help progress GPO membership, contracts and workflows.</li>
                                        <li>Implemented a single sign on solution (SSO) that integrated with active directory for authentication and authorization.</li>
                                        <li>The software team practiced agile and lean development strategies for quick incremental software releases.</li>
                                    </ul> 
                                </div>
                            </div>
                        </div>
                     </div> 
                );  
            }  
}