import React, { Component } from 'react';
import Header from '../components/Header.js';
import Banner from '../components/Banner.js';
import { Container } from 'react-bootstrap';

const Homescreen = () => {
  
    return ( 
      <div>
      <Header/>
      <Container>
         <Banner/>
      </Container>
  </div>
     );
}
 
export default Homescreen;

