import React, { Component } from 'react';
import Header from '../components/Header.js';
import Intro from '../components/Intro.js';
import { Container } from 'react-bootstrap';
import Banner from '../components/Banner.js'
const Homescreen = () => {
  
    return ( 
    <div>
      <Header/>
      <Banner/>
      <Container style={{marginTop:'20vh'}}>
       <Intro/>
      </Container>
     </div>
     );
}
 
export default Homescreen;

