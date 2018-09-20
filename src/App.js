// default imports
import React, { Component } from 'react';
import './App.css';

// material ui imports
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

// component imports
import Header from './Header.js';
import Landing from './Landing.js';
import Footer from './Footer.js';

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
        <Header />
        <Landing />
        <Footer />
      </MuiThemeProvider>
    );
  }
}

export default App;