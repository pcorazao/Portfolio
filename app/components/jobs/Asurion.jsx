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
                                    <p><i>  
                                        Asurion is the major cell phone insurance provider for US carriers and most over seas.  
                                        They also provide various insurance offerings for other electronic devices and jewelry.  
                                        Asurion has a highly integrated and large system that needs timely adjustment in order to maintain success.  
                                        If you have ever lost or damaged a phone and processed a claim with Asurion, it is likely my code helped process your claim!</i></p>
                                    <ul>
                                        <li>Developed integration services to communicate with various carriers Verizon, ATT, MetroPCS, Walmart, TMobile.</li>
                                        <li>Developed Asurion's middle tier consisting of Tiboc EMS,  Tibco BW (JVM) Services and WCF Services.</li>
                                        <li>Delivered the project <a href="https://www.youtube.com/watch?v=MULfhIbPoT4">AT&T Mulit-Device Protectin Pack</a>, required large adjustments to Asurion's middle tier.</li>
                                        <li>Delivered the project <a href="https://play.google.com/store/apps/details?id=com.asurion.android.verizon.vms&feature=search_result">Verizon Mobile Security</a>, required large adjustments to Asurion's middle tier. </li>
                                        <li>Greatly improved dev and QA testing by creating service emulation of external APIs (Verizon, ATT etc..) and providing data staging tools.</li>
                                        <li>Greatly improved deployment processes to dev, qa and production utilizing Jenkins, Artifactory and GOCD.</li>
                                        <li>Developed the companies internal web site in SharePoint 2010.</li>
                                        <li>Hired as a Software Engineer 2, then promoted Sr. Software Engineer and finally Software Engineer 4 (Jr. Architect / Solution Engineer), trusted with large projects and decisions.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>                    
                );  
            }  
}