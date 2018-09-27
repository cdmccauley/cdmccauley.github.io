// default imports
import React, { Component } from 'react';
import './Portfolio.css';

// material imports
import Typography from '@material-ui/core/Typography';

class Portfolio extends Component {

  render() {
    return (

      <div id="portfolio">
        <Typography>
          Hello Portfolio!
        </Typography>
        <Mockup 
          landscapeUri={'http://via.placeholder.com/1920x1080/fff/000?text=landscape'} 
          portraitUri={'http://via.placeholder.com/1080x1920/fff/000?text=portrait'}
        />
      </div>

    );
  }
}

const Mockup = (props) => {
  // deconstruct props for mockup images uri
  const { landscapeUri, portraitUri } = props;

  // todo: finding bugs with the css mockup, the entire thing is using flex so it leaves
  // blank space to the right of the component, have figured out that i can use percentages
  // over 100% to correct this behavior, i have layed the displays out next to each other
  // so i can resize them each to be as close to accurate as i can before introducing percentages
  // over 100 so to maintain a good scale for the image displays

  // ideas: start with image instead of device, define image size and margin will push open
  // divs laying behind it to reveal?? (img is wrapped by thick border with radius then
  // margin reveals device frame below??)

  return (
    <div id="flex-container" style={{ display: 'flex', 
                                      alignItems: 'flex-end' }}>

      <div id="laptop" style={{ height: '39.375vw', 
                                width: '70vw', 
                                borderRadius: '.5em' }}>

        <div id="laptop-screen-frame" style={{ backgroundColor: 'black', 
                                                width: '98%', 
                                                height: '100%', 
                                                borderRadius: '.5em .5em 0 0', 
                                                margin: 'auto' }}>

          <div id="laptop-screen" style={{ backgroundColor: 'white', 
                                            width: '90%', 
                                            height: '90%', 
                                            margin: 'auto', 
                                            transform: 'translateY(10%)', 
                                            backgroundImage: `url(${landscapeUri})`, 
                                            backgroundSize: '100% 100%' }}>
          </div>

        </div>

        <div id="laptop-keyboard" style={{ backgroundColor: 'gray', 
                                            width: '100%', 
                                            height: '6%', 
                                            borderRadius: '0 0 .5em .5em' }}>
        </div>

      </div>

      <div id="tablet" style={{ backgroundColor: 'black', 
                                height: '25vw', 
                                width: '20vw', 
                                // transform: 'translateX(-55%)', 
                                borderRadius: '.3em' }}>

        <div id="tablet-screen" style={{ backgroundColor: 'white', 
                                          width: '80%', 
                                          height: '83%', 
                                          margin: 'auto', 
                                          transform: 'translateY(10%)', 
                                          backgroundImage: `url(${portraitUri})`, 
                                          backgroundSize: '100% 100%', 
                                          backgroundRepeat: 'no-repeat' }}>
        </div>

      </div>

      <div id="phone" style={{ backgroundColor: 'black', 
                                height: '14vw', 
                                width: '10vw', 
                                // transform: 'translateX(-190%)', 
                                borderRadius: '.2em' }}>

        <div id="phone-screen" style={{ backgroundColor: 'white', 
                                        width: '84%', 
                                        height: '72%', 
                                        margin: 'auto', 
                                        transform: 'translateY(18%)', 
                                        backgroundImage: `url(${portraitUri})`, 
                                        backgroundSize: '100% 100%', 
                                        backgroundRepeat: 'no-repeat' }}>
        </div>

      </div>
      
    </div>
  );
}

export default Portfolio;