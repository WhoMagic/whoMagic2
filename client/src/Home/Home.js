import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from "../utils/API";
import history from '../history';
import './style.css';

class Home extends Component {
  state = {
    userName: ""
  };

  //bring in user profile from auth
  componentWillMount() {
    //this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
/*
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
      });
    } else {
      this.setState({ profile: userProfile });
    }
    */

    //does email exist in database?
 
    getProfile((err, profile, cb) => {
      this.regCheck(profile.email);
    });
  }

 

  regCheck = (email) => {
    API.registerCheck(email)
      .then(response => {
          console.log("1. from the api: " + response.data.userName);

         // console.log("from the api: " + response.data);

          if(response.data == null){
            window.location.replace(`/Register`);
          }else{
          
            console.log("this is the response: ",response.data.userName );
            //this.setState({ userName: response.data.userName })
            console.log("hello ? ", this)

            let username = response.data.userName;

             username = username.split(/\s+/).map(w => w[0].toUpperCase() + w.slice(1)).join(' ');
            this.setState({ userName: username })
          }
      })
      .catch(error => { 
          console.log(error.response);
      })
  }

  login = () => {
    this.props.auth.login();
  }


  render() {
    const { isAuthenticated } = this.props.auth;
    const { profile } = this.state; //user profile info
   // const { userInfo } = this.state.userInfo;

    console.log("in the render: " + this.state.userName);

  


    return (




      <div className="container">
        {
          isAuthenticated() && (
              <h3 CLASSNAME="capital">
                Welcome {this.state.userName}, <br /><br /> 
                <span CLASSNAME="center">Create a new event</span>{' '}
                <Link to="Event"> new event</Link>
                <br/><br />
                 <input CLASSNAME="center" placeholder="Enter an Event Code"></input> <br />
              
                <br />
              </h3> 
              
              
            )
        }
        {
          !isAuthenticated() && (
              <h3>
                You are not logged in! Please{' '}
                <a
                  style={{ cursor: 'pointer' }}
                  onClick={this.login.bind(this)}
                >
                  Log In
                </a>
                {' '}to continue.
              </h3>
            )
        }
      </div>
    );
  }
}

export default Home;