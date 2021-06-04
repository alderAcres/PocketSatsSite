import React, { useState } from 'react'
import { Carousel, Container } from 'react-bootstrap';
import pic1 from '../images/down.jpg';
import pic2 from '../images/light.jpg';
import pic3 from '../images/crypto.jpg';
const HowToUse = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div id='caro'>
  <div style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
<h1 style= {{textAlign: 'center', marginBottom: '40px', color: 'black', fontSize: '34px'}}>How to Use the PocketSats Extension</h1>
</div>
    <Carousel activeIndex={index} onSelect={handleSelect}>
    <Carousel.Item >
      <img
        className="d-block w-100"
        src={pic1}
        alt="First slide"
        style = {{width:'20vw', height: 'auto'}}
      />
      <Carousel.Caption>
        <h1>Step 1: Download Extension</h1>
        <p>Access <a id="pocket-link" style={{color: '#f2a900'}}>PocketSats</a> through the Google Chrome store or directly through this website.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item id='caro'>
      <img
        className="d-block w-100"
        src={pic2}
        alt="Second slide"
        style = {{width:'20vw', height: 'auto'}}
      />

      <Carousel.Caption>
        <h1>Step 2: Highlight USD Price</h1>
        <p>On any website, choose a price you'd like converted to Satoshis and highlight the text with your cursor. </p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item id='caro'>
    <Container>
    <Carousel.Caption>
        <h1 style={{color: 'white'}}>Step 3: Press Button: 'Price in Sats'</h1>
        <p>
          In the PocketSats extension, there's a button saying 'Price in Sats'. After you've highlighted a price, click that button and see what the sat conversion is in live time!
        </p>
      </Carousel.Caption>
      </Container>
      <img
        className="d-block w-100"
        src={pic3}
        alt="Third slide"
        style = {{width:'20vw', height: 'auto'}}
      />

    </Carousel.Item>
  </Carousel>
    </div>
  )
}

export default HowToUse
