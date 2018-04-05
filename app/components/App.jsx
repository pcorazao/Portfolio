/*
    ./app/components/App.jsx
*/
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {SiteNavigation} from './SiteNavigation.jsx';
import {Main} from './Main.jsx';
import {Footer} from './Footer.jsx';
import '../images/favicon.ico';

export default class App extends React.Component {
  render() {
    return (
     <div>
       <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
       <link rel="icon" href="favicon.ico" type="image/x-icon" />
       <Router>
         <div>
            <SiteNavigation/>
            <Main/>
            <Footer/>
          </div>
        </Router>         
      </div>);
  }
}