import React from 'react'
import { Jumbotron, Button, Container } from 'react-bootstrap';
const Intro = () => {
  const styles = {
    button : {
      width:'20vw', 
      height:'9vh', 
      fontSize: '2.2vw',
      padding: '2vh 2vw'
    },
    p : {
      fontSize: '2.3vw', 
      marginTop: '3.5vh'
    },
    header : {
      fontSize: '2.8vw',
      fontWeight: 'bolder'
    },
    jumbo : {
      textAlign: 'center',
      marginTop: '10vh'
    }
  }
  return (
    <Jumbotron id='jumbo' style={styles.jumbo}>
    <h1 style= {styles.header} >Convert USD to Satoshis (Sats) on the fly with PocketSats!</h1>
    <p style= {styles.p}>
      PocketSats is an extension that allows you to be on any website 
      and have the ability to convert the price of an item in USD to Sats, the smallest unit of Bitcoin.
    </p>
    <p>
      <div id='button-container'>
      <Button style= {styles.button} className='btn-primary btn-md' variant="primary">Learn</Button>
      <Button style= {styles.button} className='btn-dark btn-md' variant="dark">Download</Button>
      </div>
    </p>
  </Jumbotron>
  )
}

export default Intro
