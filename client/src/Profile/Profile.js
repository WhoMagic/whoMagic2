import React, { Component } from 'react';
import { Panel, ControlLabel, Glyphicon } from 'react-bootstrap';
import './Profile.css';
import ImageUpload from '../components/imageUpload/imageUpload';
import API from "../utils/API";
import ImageUpload from '../components/imageUpload/imageUpload';
import history from '../history';

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
   console.log(state);

   API.saveBook(state)
   .then(res => this.loadBooks())
   .catch(err => console.log(err));
   history.replace('/Attending');
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
              Ocupacion:
              <input type="text" name="title" value={this.state.title} 
              onChange={this.handleInputChange}/>
          </label>
          <br />
        <label>
    Hobbies:
    <input type="text" name="author" value={this.state.author}
    onChange={this.handleInputChange}/>
  </label>
  <br />
        <label>
    Favorite Music:
    <input type="text" name="synopsis" value={this.state.synopsis}
    onChange={this.handleInputChange}/>
  </label>
        <br />
        <label>
          Favorite food:
            <input type="text" name="favoriteFood"
            value={this.state.favoriteFood} onChange={this.handleInputChange} />
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
  }


  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        company: this.state.company,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    const { profile } = this.state;
    return (
      <div className="card">
    <div className="img-container">
          <h1> Hello {profile.name}</h1>
          <Panel header="Profile">
          <div className="col-sm-6">
          <h1>Tell others a bit about yourself
          </h1>
      <form onSubmit={this.handleSubmit}>
        <label>
           <label>
              Ocupacion:
              <input type="text" name="Ocupacion" value={this.state.Ocupacion} 
              onChange={this.handleInputChange}/>
          </label>
          <br />
        <label>
    Hobbies:
    <input type="text" name="Hobbies" value={this.state.Hobbies}
    onChange={this.handleInputChange}/>
  </label>
  <br />
        <label>
    Favorite Music:
    <input type="text" name="favoriteMusic" value={this.state.favoriteMusic}
    onChange={this.handleInputChange}/>
  </label>
        <br />
        <label>
          Favorite food:
            <input type="text" name="favoriteFood"
            value={this.state.favoriteFood} onChange={this.handleInputChange} />
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
