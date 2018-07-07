import React, { Component } from 'react';
import queryString from 'query-string';
import API from "../utils/API";
import 'bootstrap/dist/css/bootstrap.css';

import './EventInfo.css';

class EventInfo extends Component {
  login() {
    this.props.auth.login();
  }

  state = {
    eventHolder: [],
  };

  componentDidMount(){
      let id = queryString.parse(this.props.location.search).eId;
      this.loadEvent(id);
  }

  loadEvent = (id) => {
    API.getEvent(id)
     // .then(res => console.log(res.data))
      .then(res =>
      this.setState({ eventHolder: res.data })
      )
      .catch(err => console.log(err));
  };

  render() {
     console.log("in here yo: " + this.state.eventHolder.eventName); 
   


    return (
      <div className="info">
        <p>Event Name: {this.state.eventHolder.eventName}</p>
        <p>Location: {this.state.eventHolder.eventLocation}</p>
        <p>Date: {this.state.eventHolder.date}</p>
        <p>Description: {this.state.eventHolder.eventDescript} </p>
        <p>Dress: {this.state.eventHolder.dress}</p>
        <p>Number of Guests: {this.state.eventHolder.guestNumber}</p>
      </div>
      )

  
  }
}

export default EventInfo;