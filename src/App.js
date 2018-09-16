// default imports
import React, { Component } from 'react';
import './App.css';

// material imports
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

// fontawesome imports
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFreeCodeCamp, faCodepen, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// call library.add to include icons
library.add(faGithub, faFreeCodeCamp, faCodepen, faLinkedin);

class App extends Component {
  render() {

    // override materialui default theme using muithemeprovider and createmuitheme
    const theme = createMuiTheme({
      palette: {
        primary: {
          light: '#8eacbb',
          main: '#607d8b',
          dark: '#34515e',
          contrastText: '#fff',
        },
        secondary: {
          light: '#c1d5e0',
          main: '#90a4ae',
          dark: '#62757f',
          contrastText: '#fff',
        },
      },
    });
    
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <AppBar position="static" color="primary">
            <Toolbar>
              <Typography id="titleTypography" variant="title" color="inherit">mccauley.tech</Typography>
              <IconButton><FontAwesomeIcon icon={faCodepen} className="iconStyle" /></IconButton>
              <IconButton><FontAwesomeIcon icon={faFreeCodeCamp} className="iconStyle" /></IconButton>
              <IconButton><FontAwesomeIcon icon={faGithub} className="iconStyle" /></IconButton>
              <IconButton><FontAwesomeIcon icon={faLinkedin} className="iconStyle" /></IconButton>
            </Toolbar>
          </AppBar>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;