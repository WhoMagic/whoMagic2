import React, { Component } from 'react';
import { Panel, ControlLabel, Glyphicon } from 'react-bootstrap';
import './Register.css';
import API from "../utils/API";
import { Redirect } from 'react-router-dom';
import ImageUpload from '../components/imageUpload/imageUpload';
import history from '../history';
import { stringify } from 'querystring';

class Register extends Component {
  componentWillMount() {

   // const { userProfile, getProfile } = this.props.auth;

    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
      });
    } else {
      this.setState({ profile: userProfile });
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event, state){
   event.preventDefault()

   //New User info to send to database
   API.createUser({
    userName: this.state.userName.toLowerCase(),
    userEmail: this.state.profile.email.toLowerCase(),
    occupation: this.state.occupation,
    aboutMe: this.state.aboutMe, 
    hobbies: this.state.hobbies,
    food: this.state.food,
    music: this.state.music
   })
   //if user registers take them to homepage
   .then(function (response) {
    if(response.status == 200){
      window.location.replace(`/`);
    }
   })
   //if there was an error registering, throw error
   .catch(function (error) {
    if(error.response.data.code == 11000){
      console.log("THE USERNAME IS NOT UNIQUE");
    }
    console.log(error.response);
   })


    /*
    let showme = {
      userName: this.state.userName.toLowerCase(),
      userEmail: this.state.profile.email.toLowerCase(),
      occupation: this.state.occupation,
      aboutMe: this.state.aboutMe, 
      hobbies: this.state.hobbies,
      food: this.state.favoriteFood,
      music: this.state.music
    }

    for(var property in showme) {
      console.log(property + "=" + showme[property]);
  }
*/

    
  // history.replace('/Attending');
   
 }

  render() {
    const { profile } = this.state;

    return (
      <div className="card" col-sm-6>
    <div className="img-container">
          <h1> Welcome to WHO MAGIC</h1>
          <Panel header="Register">
          <div className="col-sm-6">
          <h1>User Profile
          </h1>
      <form onSubmit={(e)=>this.handleSubmit(e,this.state)}>
        <label>
        <label>
              <input type="text" placeholder="User Name" name="userName" value={this.state.userName} 
              onChange={this.handleInputChange}/>
          </label>
          <br />
           <label>
              <input type="text" placeholder="Occupation" name="occupation" value={this.state.title} 
              onChange={this.handleInputChange}/>
          </label>
          <br />
        <label>
              <textarea name="aboutMe" placeholder="Tell us about you..." value={this.state.aboutMe} onChange={this.handleInputChange}></textarea>
          </label>
          <br />
          <label>
    <input type="text" placeholder="Hobbies" name="hobbies" value={this.state.hobbies}
    onChange={this.handleInputChange}/>
  </label>
  <br />
        <label>
    <input type="text" placeholder="Favorite Music" name="music" value={this.state.music}
    onChange={this.handleInputChange}/>
  </label>
        <br />
        <label>
            <input type="text" placeholder="Favorite Food" name="food"
            value={this.state.food} onChange={this.handleInputChange} />
        </label>
        </label>
        <input type="submit" value="Submit" />
      </form>
          </div>
            <img src={profile.picture} alt="profile" />
                  <ImageUpload/>
            <div>
            </div>
          </Panel>
        </div>
        </div>
    );
  }
}

export default Register;
