import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DataBanner from '../components/DataBanner.js';
import Intro from '../components/Intro.js';
import Header from '../components/Header.js';
import { Container } from 'react-bootstrap';
import Footer from '../components/Footer.js';
import HowToUse from '../components/HowToUse.js';
const Homescreen = () => {
    const styles = {
        container : {
            display: 'flex',
            flexDirection: 'column',
            justifyContent:'space-between'
        }
    }
    return ( 
    <div>
        <Header/>
       <Intro/>
      <Container id="homeContain">
      <div id="jumpToHowToUse">
      <HowToUse/> 
      </div>
      </Container>
      <Container>
          <Footer/>
      </Container>
     </div>
     );
}
 
export default Homescreen;

