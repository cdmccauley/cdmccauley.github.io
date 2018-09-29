// default imports
import React, { Component } from 'react';
import './Portfolio.css';

// material imports
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

class Portfolio extends Component {

  render() {
    return (

      <div id="portfolio" style={{ padding: '0 16px'}}>
        <Typography variant="display2">Portfolio</Typography>
        <Paper>
          <Typography variant="headline" align="center">Git Gud Games</Typography>
          <Mockup 
            laptopUri={'http://via.placeholder.com/1920x1080/fff/000?text=laptop'} 
            tabletUri={'http://via.placeholder.com/1080x1440/fff/000?text=tablet'}
            phoneUri={'http://via.placeholder.com/1080x1920/fff/000?text=phone'}
          />
        </Paper>
      </div>

    );
  }
}

const Mockup = (props) => {
  // deconstruct props for mockup images uri
  const { laptopUri, tabletUri, phoneUri } = props;

  // divs create device frames to display screenshots of browsers displaying live sites
  return (
    <div style={{ 
        display: 'flex', 
        alignItems: 'flex-end', }}>

      {/* laptop frame */}
      <div style={{ 
        flexBasis: '70vw', 
        backgroundColor: 'black', 
        padding: '2vw 2vw 0 2vw', 
        marginLeft: '14%', 
        borderRadius: '1vw'}}>

        {/* laptop screen */}
        <img src={ laptopUri } style={{ width: '100%' }}/>

        {/* laptop keyboard */}
        <div style={{ 
          backgroundColor: 'gray', 
          width: '110%', 
          height: '2.25vw', 
          marginTop: '1.5vw', 
          transform: 'translateX(-5%)', 
          borderRadius: '0 0 1.5vw 1.5vw' }}>

        </div>

      </div>

      {/* tablet frame */}
      <div style={{ 
        flexBasis: '20vw', 
        backgroundColor: 'black', 
        padding: '2vw', 
        transform: 'translateX(-50%)', 
        borderRadius: '1vw' }}>

        {/* tablet screen */}
        <img src={ tabletUri } style={{ width: '100%' }}/>

      </div>

      {/* phone frame */}
      <div style={{ 
        flexBasis: '10vw', 
        backgroundColor: 'black', 
        padding: '1vw .4vw', 
        transform: 'translateX(-150%)', 
        borderRadius: '1vw'}}>

        {/* phone screen */}
        <img src={ phoneUri } style={{ width: '100%' }}/>
        
      </div>

    </div>
  );
}

export default Portfolio;