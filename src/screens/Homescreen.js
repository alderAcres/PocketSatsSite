import React, { Component } from 'react';
import Header from '../components/Header.js';
import Intro from '../components/Intro.js';
import { Container } from 'react-bootstrap';
import Banner from '../components/Banner.js';
import News from '../components/News.js';
const Homescreen = () => {
  
    return ( 
    <>
        <Header/>
        <Banner/>
      <Container style={{marginTop:'20vh'}}>
       <Intro/>
      </Container>
      <Container>
      <News/> 
      </Container>
     </>
     );
}
 
export default Homescreen;

