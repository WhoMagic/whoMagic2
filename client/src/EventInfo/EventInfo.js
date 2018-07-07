import React, { Component } from 'react';
import './EventInfo.css';

class EventInfo extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
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