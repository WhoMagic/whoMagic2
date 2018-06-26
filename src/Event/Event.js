import React, { Component } from 'react';
import './Event.css';
import 'bootstrap/dist/css/bootstrap.css';

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfGuests: 50
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
     // <Jumbotron>
      <form onSubmit={this.handleSubmit}>
      <label>
    Name of event:
    <input type="text" name="name" />
  </label>
        <br />
        <label>
    Location:
    <input type="text" name="name" />
  </label>
  <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Event Description:
            <input type="text" name="name" />
        </label>
        <br />
         <h4> Dress code </h4>
        <select>
  <option value="Casual">Casual</option>
  <option value="Semi-Formal">Semi-Formal</option>
  <option selected value="Formal">Formal</option>
  <option value="Black Tie">Black Tie</option>
  <option value="White Tie">White Tie</option>
</select>

        <input type="submit" value="Submit" />
      </form>
      //</Jumbotron>
    );
  }
}

export default Event;