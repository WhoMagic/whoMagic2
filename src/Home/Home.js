import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class Home extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="container">
        {
          isAuthenticated() && (
              <h3>
                You are logged in! You can now view your{' '}
                <Link to="profile">profile area</Link>

                <h3>

                Or make a new event{' '}
                <Link to="Event">new event</Link>
                .
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