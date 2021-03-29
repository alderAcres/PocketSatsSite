import React from 'react'
import { Jumbotron, Button, Container } from 'react-bootstrap';
const Intro = () => {
  return (
    <Jumbotron id='jumbo' style={{textAlign: 'center'}}>
    <h1>Convert USD to Satoshis (Sats) on the fly with PocketSats!</h1>
    <p style={{fontSize: '16px', marginTop: '4rem'}}>
      PocketSats is anextension that allows you to be on any website 
      and have the ability to convert the price of an item in USD to Sats, the smallest unit of Bitcoin.
    </p>
    <p>
      <div id='button-container'>
      <Button style={{height:'10vh', width:'20vw', fontSize: '1.2rem'}} className='btn-primary btn-md' variant="primary">Learn more</Button>
      <Button style={{height:'10vh', width:'20vw', fontSize: '1.2rem'}} className='btn-dark btn-md' variant="dark">Download Extension</Button>
      </div>
    </p>
  </Jumbotron>
  )
}

export default Intro
