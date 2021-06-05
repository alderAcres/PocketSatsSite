import React, { useState } from 'react'
import { Carousel, Container } from 'react-bootstrap';
import pic1 from '../images/cell.jpg';
import pic2 from '../images/light.jpg';
import pic3 from '../images/crypto.jpg';
function HowToUse() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const styles = {
    container : {
      color : 'white'
    },
    header : {
      color : 'white',
      fontSize: '2.6vw'
    },
    p : {
      color : 'white',
      fontSize: '2.1vw'
    }
  }
  return (
    <div className='container' style = {styles.container}>
    <Carousel style= {{width:'69vw', height:'auto', margin: '3vh 0'}} activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src={pic1}
          alt="First slide"
        />
        <Carousel.Caption>
        <h1 style = {styles.header}>Step 1: Download Extension</h1>
        <p style = {styles.p}>Access PocketSats through the Google Chrome store or directly through this website.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1 style = {styles.header}>Step 2: Highlight USD Price</h1>
        <p style = {styles.p}>On any website, choose a price you'd like converted to Satoshis and highlight the text with your cursor. </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic3}
          alt="Third slide"
        />

        <Carousel.Caption>
        <h1 style = {styles.header}>Step 3: Press Button: 'Price in Sats'</h1>
        <p style = {styles.p}>
          In the PocketSats extension, there's a button saying 'Price in Sats'. After you've highlighted a price, click that button and see what the sat conversion is in live time!
        </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default HowToUse;
