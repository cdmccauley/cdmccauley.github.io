// default imports
import React, { Component } from 'react';
import './App.css';

// material ui imports
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import CssBaseline from '@material-ui/core/CssBaseline';

// component imports
import Header from './Header.js';
import Landing from './Landing.js';
import Portfolio from './Portfolio.js';
import Footer from './Footer.js';
import NotFound from './NotFound.js';

// react-router-dom imports
import { Route, Switch as RouterSwitch } from 'react-router-dom';

class App extends Component {

  render() {

    // override materialui default theme using muithemeprovider and createmuitheme
    const theme = createMuiTheme({
      palette: {
        type: 'dark',
      },
    });
    
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <RouterSwitch>
          <Route exact path='/' component={ Landing } />
          <Route path='/portfolio' component={ Portfolio } />
          <Route component={ NotFound } />
        </RouterSwitch>
        <Footer />
      </MuiThemeProvider>
    );
  }
}

export default App;