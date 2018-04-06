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
                                            The company offers several solutions to list products on various marketplaces (Amazon, Walmart, Jet, Sears etc..).  
                                            CommerceHub also provides technology to create demand via Google AdWords, Facebook Ads and Bing Ads.
                                            </i></p>
                                            <ul>
                                                <li>Developed and maintained a solution that delivered products to marketplaces.</li>
                                                <li>Developed and maintained a solution that created demand for products on Google AdWords, FacebookAds and Bing Ads.</li>
                                                <li>Developed new system integration with <a href="https://www.commercehub.com/news/commercehub-supports-facebook-dynamic-product-ads/">Facebook Ads</a></li>
                                                <li>Developed new system integration with <a href="https://searchengineland.com/yahoo-launches-product-ads-on-search-and-display-235926">Yahoo Gemini</a></li>
                                                <li>Implemented a <a href="https://prometheus.io/">prometheus.io</a> solution to help visualize system help with <a href="https://grafana.com/">grafana</a>.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                    </div>                    
                );  
            }  
}