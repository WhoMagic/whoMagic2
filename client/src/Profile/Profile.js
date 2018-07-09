import React, { Component } from 'react';
import { Panel, ControlLabel, Glyphicon } from 'react-bootstrap';
import './Profile.css';
import API from "../utils/API";
import ImageUpload from '../components/imageUpload/imageUpload';
import history from '../history';
import { stringify } from 'querystring';

class Profile extends Component {
  componentWillMount() {
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
    .catch(err => console.log(err))

 
  // history.replace('/Attending');
   
 }

  render() {
    const { profile } = this.state;


  



    return (
      <div className="card" col-sm-6>
    <div className="img-container">
          <h1> Hello {profile.name}</h1>
          <Panel header="Profile">
          <div className="col-sm-6">
          <h1>Tell others a bit about yourself
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

export default Profile;
