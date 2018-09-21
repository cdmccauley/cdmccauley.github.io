// default imports
import React, { Component } from 'react';
import './Footer.css';

// react-router-dom imports
import { Link } from 'react-router-dom';

// material imports
import Typography from '@material-ui/core/Typography';

class Footer extends Component {

  render() {
    return (

      <div id="foot-wrap">
      <div id="footer">
        <hr />
          <img src="https://via.placeholder.com/100x100" alt="placeholder"></img>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
          <div id="social-nav">
            <Link to="https://codepen.io/cdmccauley/" target="_blank" rel="noopener noreferrer">CodePen</Link>
            <span> / </span>
            <Link to="https://www.freecodecamp.org/cdmccauley" target="_blank" rel="noopener noreferrer">freeCodeCamp</Link>
            <span> / </span>
            <Link to="https://github.com/cdmccauley" target="_blank" rel="noopener noreferrer">GitHub</Link>
            <span> / </span>
            <Link to="https://www.linkedin.com/in/mccauleytech/" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
          </div>
        <hr />
        <Typography variant="title">mccauley.tech</Typography>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      </div>

    );
  }
}

export default Footer;