import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../components/Header.js';
import Intro from '../components/Intro.js';
import { Container } from 'react-bootstrap';
import Banner from '../components/Banner.js';
import News from '../components/News.js';
import Footer from '../components/Footer.js';
import HowToUse from '../components/HowToUse.js';
const Homescreen = () => {
  
    return ( 
    <>
        <Header/>
        <Banner/>
      <Container id="homeContain" style={{marginTop:'10vh'}}>
       <Intro/>
      </Container>
      <Container id="homeContain">
      <div id="jumpToHowToUse">
      <HowToUse/> 
      </div>
      </Container>
      <Container id="homeContain" style={{marginTop: '-15vh', marginBottom: '5vh'}}>
         <div id="jumpToNews">
         <News/> 
      </div>
      </Container>
      <Container>
          <Footer/>
      </Container>
     </>
     );
}
 
export default Homescreen;

