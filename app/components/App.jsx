/*
    ./app/components/App.jsx
*/
import React from 'react';
import { Button } from 'react-bootstrap';
import {SiteNavigation} from './SiteNavigation.jsx';

export default class App extends React.Component {
  render() {
    return (
     <div>
        <SiteNavigation/>         
      </div>);
  }
}