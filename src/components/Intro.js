import React from 'react'
import { Jumbotron, Button, Container } from 'react-bootstrap';
const Intro = () => {
  return (
    <Jumbotron id='jumbo'>
    <h1>Convert USD to Satoshis (Sats) on the fly with PocketSats!</h1>
    <p>
      This is a simple extension that allows you to be on any Ecommerce site 
      and have the ability to convert the price of an item in USD to Sats, the smallest unit of Bitcoin.
    </p>
    <p>
      <div id='button-container'>
      <Button style={{height:'10vh', width:'20vw'}} className='btn-primary btn-md' variant="primary">Learn more</Button>
      <Button style={{height:'10vh', width:'20vw'}} className='btn-dark btn-md' variant="dark">Download Extension</Button>
      </div>
    </p>
  </Jumbotron>
  )
}

export default Intro
