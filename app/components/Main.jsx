// Main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import {Home} from './Home.jsx';
import {About} from './About.jsx';
import {HCA} from './jobs/HCA.jsx';
import {Asurion} from './jobs/Asurion.jsx';
import {NC2Media} from './jobs/NC2Media.jsx';
import {CommerceHub} from './jobs/CommerceHub.jsx';


export class Main extends React.Component {
            render()
            {        
                return (<div>
                    <Route exact={true} path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/hca" component={HCA} />
                    <Route path="/asurion" component={Asurion} />
                    <Route path="/nc2media" component={NC2Media} />
                    <Route path="/commercehub" component={CommerceHub} />
                    </div>                    
                );  
            }  
}