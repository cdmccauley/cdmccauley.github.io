// default imports
import React, { Component } from 'react';
import './Landing.css';

// material imports
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

// fontawesome imports
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import { faJava, faJs, faReact, faHtml5, faCss3, faAndroid, faAngular, faSass } from '@fortawesome/free-brands-svg-icons';

library.add(faJava, faHashtag, faJs, faReact, faHtml5, faCss3, faSass, faAndroid, faAngular);

class Landing extends Component {

  render() {
    return (

      <div id="landing">
        <Paper id="paper">
          <img src="avatar-full.png" alt="Chris McCauley"></img>
          <div>
            <Typography id="landing-name" variant="headline">Chris McCauley</Typography>
            <Typography id="landing-title" variant="subheading">Software Developer</Typography>
            <div id="icons">
              <FontAwesomeIcon icon={faJava} className="icon-style" />
              <FontAwesomeIcon icon={faHashtag} className="icon-style" />
              <FontAwesomeIcon icon={faAndroid} className="icon-style" />
              <FontAwesomeIcon icon={faJs} className="icon-style" />
              <FontAwesomeIcon icon={faReact} className="icon-style" />
              <FontAwesomeIcon icon={faAngular} className="icon-style" />
              <FontAwesomeIcon icon={faHtml5} className="icon-style" />
              <FontAwesomeIcon icon={faCss3} className="icon-style" />
              <FontAwesomeIcon icon={faSass} className="icon-style" />
            </div>
          </div>
        </Paper>
        <Typography id="intro">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </div>

    );
  }
}

export default Landing;