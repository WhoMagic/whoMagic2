import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import history from '../history';
import './style.css';

class Home extends Component {
  
  //bring in user profile from auth
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
  }

  login() {
    this.props.auth.login();
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    const { profile } = this.state; //user profile info

    console.log('user email: ' + profile.email);
    

    return (
      <div className="container">
        {
          isAuthenticated() && (
              <h3>
                You are logged in! You can now view your{' '}
                <Link to="profile">profile area</Link>

                <h3>

                make a new event{' '}
                <Link to="Event">new event</Link>
                <br/>
                <br />
              Got an invite? Enter the code here 
              
                </h3>
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