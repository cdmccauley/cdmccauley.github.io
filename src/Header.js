// default imports
import React, { Component } from 'react';
import './Header.css';

// material imports
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

// material testing imports
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

// fontawesome imports
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGithub, faFreeCodeCamp, faCodepen, faLinkedin 
} from '@fortawesome/free-brands-svg-icons';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

// call library.add to include icons
library.add(faEllipsisV, faGithub, faFreeCodeCamp, faCodepen, faLinkedin);

class Header extends Component {

  // initialize state
  state = {
    anchorEl: null,
  };

  // handles menu anchoring
  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  // handles menu close after click
  handleClose = (event) => {
    /*
     * working on how to handle menu navigation, planning to check out react-router
     * this console.log logs the id of the item that was clicked, can use the id to route
     * event.currentTarget.id
    */
    console.log(event.currentTarget.id);
    this.setState({ anchorEl: null });
  };

  render() {

    // declarations
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    
    return (
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography id="titleTypography" variant="title" color="inherit">
            mccauley.tech
          </Typography>
          <IconButton aria-owns={open ? 'menu-appbar' : null } aria-haspopup="true" 
            onClick={this.handleMenu} color="inherit">
            <FontAwesomeIcon icon={faEllipsisV} className="iconStyle" style={{ paddingLeft: '8px', paddingRight: '8px' }} />
          </IconButton>
          <Menu id="menu-appbar" anchorEl={anchorEl} 
            anchorOrigin={{ vertical: 'top', horizontal: 'right', }} 
            transformOrigin={{ vertical: 'top', horizontal: 'right', }} 
            open={open} onClose={this.handleClose}>
            <MenuItem onClick={this.handleClose} id='menu-home'>
              <Typography variant="subheading">Home</Typography>
            </MenuItem>
            <MenuItem onClick={this.handleClose} id='menu-portfolio'>
              <Typography variant="subheading">Portfolio</Typography>
            </MenuItem>
            <MenuItem onClick={this.handleClose} id='menu-resume'>
              <Typography variant="subheading">Resume</Typography>
            </MenuItem>
            <MenuItem onClick={this.handleClose} id='menu-contact'>
              <Typography variant="subheading">Contact</Typography>
            </MenuItem>
            <hr />
            <MenuItem onClick={this.handleClose} id='menu-codepen'>
              <FontAwesomeIcon icon={faCodepen} className="menuIcon" />
              <Typography variant="subheading">CodePen</Typography>
            </MenuItem>
            <MenuItem onClick={this.handleClose} id='menu-freecodecamp'>
              <FontAwesomeIcon icon={faFreeCodeCamp} className="menuIcon" />
              <Typography variant="subheading">freeCodeCamp</Typography>
            </MenuItem>
            <MenuItem onClick={this.handleClose} id='menu-github'>
              <FontAwesomeIcon icon={faGithub} className="menuIcon" />
              <Typography variant="subheading">GitHub</Typography>
            </MenuItem>
            <MenuItem onClick={this.handleClose} id='menu-linkedin'>
              <FontAwesomeIcon icon={faLinkedin} className="menuIcon" />
              <Typography variant="subheading">LinkedIn</Typography>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;