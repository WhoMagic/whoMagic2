import React, { Component } from 'react';
import queryString from 'query-string';
import { createStore } from 'redux'

import './EventInfo.css';

class EventInfo extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
 //   myVar.subscribe(() =>
 // console.log(myVar.getState())

    //console.log(createStore);
   // var holder = queryString.parse(this.props.location.search);
   // console.log( holder[0].name );
  //console.log(queryString.parse(this.props.location.search))

    return (
   
      <div className="container">
        {
         <h1> Event Info </h1> 
        }
      </div>
    );
  }
}

export default EventInfo;