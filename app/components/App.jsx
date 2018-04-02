/*
    ./app/components/App.jsx
*/
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {SiteNavigation} from './SiteNavigation.jsx';
import {Main} from './Main.jsx';
import {Footer} from './Footer.jsx';

export default class App extends React.Component {
  render() {
    return (
     <div>
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