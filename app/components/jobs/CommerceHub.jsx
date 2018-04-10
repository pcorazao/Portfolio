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
                                            <p><i>  
                                            CommerceHub helps retailers and brands increase sales by expanding the product assortments, 
                                            promoting products on the channels that perform, and enabling rapid, on-time customer delivery.  
                                            The company specializes in reducing deliver times of online purchases via drop ship integration solutions.
                                            The company offers several solutions to list products on various marketplaces (Amazon, Walmart, Jet, Sears, Google, Bing etc..).  
                                            CommerceHub also provides technology to create product demand via Google AdWords, Facebook Ads, Bing Ads, and various Sponsored Products etc...
                                            </i></p>
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
                                </div>
                    </div>                    
                );  
            }  
}