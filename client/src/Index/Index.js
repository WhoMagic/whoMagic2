import React, { Component } from 'react';
<<<<<<< HEAD:client/src/Register/Register.js
import { Panel, ControlLabel, Glyphicon } from 'react-bootstrap';
import './Register.css';
import API from "../utils/API";
import { Redirect } from 'react-router-dom';
import ImageUpload from '../components/imageUpload/imageUpload';
import history from '../history';
import { stringify } from 'querystring';
import Jumbotron from '../components/Jumbotron';
import MyCarousel from '../components/MyCarousel';
import Footer from '../components/Footer';

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
=======
import Jumbotron from '../components/Jumbotron';
import './Index.css';
import MyCarousel from '../components/MyCarousel';
import Footer from '../components/Footer';
import App from '../App';
class Index extends Component {
>>>>>>> addingIndex:client/src/Index/Index.js

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
<<<<<<< HEAD:client/src/Register/Register.js
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
              <input type="text" placeholder="User Name" name="userName"  value={this.state.userName} 
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
=======
      <div>
          <Jumbotron />
        <div className="container">
          <h2>Welcome</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat orci eu nulla sagittis, pulvinar dignissim lectus consequat. Etiam in lobortis ligula, vitae ornare lacus. Vivamus scelerisque lorem arcu, vitae eleifend ex commodo a. Quisque rutrum, augue sit amet egestas efficitur, magna nulla lacinia elit, sed suscipit tortor erat vitae enim. Donec egestas odio id aliquet rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque mi dolor, egestas nec lacinia non, sodales eu lacus. Donec ultricies nec elit ac ornare. Quisque fermentum ligula ut feugiat cursus. Aliquam auctor suscipit ex a lacinia. Mauris sollicitudin, justo quis fringilla finibus, dui diam ullamcorper nulla, sit amet placerat justo neque quis quam. Praesent nec nibh at tortor ornare dignissim. Morbi tincidunt fringilla turpis at luctus. Vivamus dapibus ligula eget pellentesque luctus. Maecenas ut consectetur lacus, non dignissim nisi. Praesent sodales tellus sit amet faucibus tempus.
          </p>
          <p>
            Maecenas dapibus, est posuere eleifend rutrum, lectus ligula gravida urna, at pretium dui turpis non lorem. Donec pretium lorem ipsum, at fermentum nibh consequat facilisis. Sed maximus massa est, vel porta diam placerat id. Vivamus imperdiet lorem eget dolor bibendum, eget gravida tellus interdum. Sed lectus odio, condimentum eu porttitor vel, euismod sit amet urna. Nam quis dui a nibh rhoncus aliquam vitae in metus. Nam sit amet semper turpis. Suspendisse eu malesuada tortor, vel lacinia nisl. Phasellus ultrices vehicula magna, sed tempor neque dapibus quis. Phasellus urna justo, sollicitudin ac odio eget, convallis varius nulla. Vivamus in lacinia lorem, at eleifend nulla. Nulla nec luctus purus. Integer id purus mauris. Phasellus finibus ultricies erat a tempus. Nulla luctus sem nec justo venenatis, eu faucibus purus congue.
          </p>
        </div>
        <h2>
            why use who magic
            </h2>
            <MyCarousel />
>>>>>>> addingIndex:client/src/Index/Index.js
            <div>
            </div>
          </Panel>
        </div>
        </div>

    );
  }
}

<<<<<<< HEAD:client/src/Register/Register.js
export default Register;
=======
export default Index;
>>>>>>> addingIndex:client/src/Index/Index.js
