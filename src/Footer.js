// default imports
import React, { Component } from 'react';
import './Footer.css';

// material imports
import Typography from '@material-ui/core/Typography';

class Footer extends Component {

  render() {
    return (

      <div id="footer">
        <hr />
          <img src="https://via.placeholder.com/100x100"></img>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
          <div id="social-nav">
            <a href="#">CodePen</a>
            <span> / </span>
            <a href="#">freeCodeCamp</a>
            <span> / </span>
            <a href="#">GitHub</a>
            <span> / </span>
            <a href="#">LinkedIn</a>
          </div>
        <hr />
        <Typography variant="title">mccauley.tech</Typography>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Resume</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>

    );
  }
}

export default Footer;