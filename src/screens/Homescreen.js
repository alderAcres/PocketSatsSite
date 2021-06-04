import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../components/Header.js';
import DataBanner from '../components/DataBanner.js';
import Intro from '../components/Intro.js';
import { Container } from 'react-bootstrap';
import News from '../components/News.js';
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
        <DataBanner/>
       <Intro/>
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
     </div>
     );
}
 
export default Homescreen;

