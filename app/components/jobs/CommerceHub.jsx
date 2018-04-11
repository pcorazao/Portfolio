// CommerceHub.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import CommerceHubPic from '../../images/CommerceHub.png';

export class CommerceHub extends React.Component {
            render()
            {        
                return (<div>
                            <div class="container">
                                    <div class="row">                                    
                                        <div class="col-lg-4 align-self-center">
                                            <img class="img-fluid rounded" src={CommerceHubPic} alt="Generic placeholder image"/>
                                        </div>                                   
                                    </div>
                                    <div class="row" style={{marginTop:'30px'}}>
                                        <div class="col-lg-10 offset-lg-1">                                        
                                            <h5 class="mt-0">Sr. Software Engineer</h5>
                                            <p><em>  
                                            CommerceHub helps retailers and brands increase sales by expanding the product assortments, 
                                            promoting products on the channels that perform, and enabling rapid, on-time customer delivery.  
                                            The company specializes in reducing delivery times of online purchases via drop ship integration solutions.
                                            The company offers several solutions to list products on various marketplaces (Amazon, Walmart, Jet, Sears, Google, Bing etc..).  
                                            CommerceHub also provides technology to create product demand via Google AdWords, Facebook Ads, Bing Ads, and Amazon Sponsored Products etc.
                                            </em></p>
                                            <ul>
                                                <li>Developed and maintained a solution that delivered products to marketplaces.</li>
                                                <li>Developed and maintained a solution that created demand for products on Google AdWords and Bing Ads.</li>
                                                <li>Developed new system integration with <a href="https://www.commercehub.com/news/commercehub-supports-facebook-dynamic-product-ads/">Facebook Ads</a></li>
                                                <li>Developed new system integration with <a href="https://searchengineland.com/yahoo-launches-product-ads-on-search-and-display-235926">Yahoo Gemini</a></li>
                                                <li>Implemented a <a href="https://prometheus.io/">prometheus.io</a> solution to help visualize system health with metrics and <a href="https://grafana.com/">grafana</a>.</li>
                                                <li>Created <a href='https://www.chef.io/chef/'>chef</a> recipes and cookbooks to install <a href="https://prometheus.io/">prometheus.io</a>, <a href='https://www.nginx.com/'>nginx</a> and <a href='https://prometheus.io/docs/alerting/alertmanager/'>alertmanager</a></li>
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
                                            <span class="badge badge-pill badge-dark">Chef</span>&nbsp;
                                            <span class="badge badge-pill badge-dark">Ruby</span>&nbsp;
                                            <span class="badge badge-pill badge-dark">GOCD</span>&nbsp;
                                            <span class="badge badge-pill badge-dark">Artifactory</span>&nbsp;
                                            <span class="badge badge-pill badge-dark">SQS</span>&nbsp;
                                            <span class="badge badge-pill badge-dark">Lambda</span>&nbsp;
                                        </div>
                                    </div>
                                </div>
                    </div>                    
                );  
            }  
}