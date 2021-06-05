import React from 'react'
import { Navbar, Container, Button, Nav, NavDropdown } from 'react-bootstrap';
import pic from '../images/pocket-sats-logo.png';
import HowToUse from '../components/HowToUse.js';

const Header = () => {

  const styles = {
    logo : {
      height:'9.4vh', 
      wdith: 'auto',
      marginRight: '5px'
    },
    links : {
      alignSelf: 'center', 
      color:'white', 
      fontSize: '1.8vw',
      marginRight: '1.2vw'
  },
    brand : {
      fontSize:'3vw'
    }
  }

  return (
    <header style={{ marginBottom: '15vh'}} >
    <Navbar className="navbar navbar-expand-md navbar-dark bg-dark fixed-top" variant="white" expand="lg" collapseOnSelect id ='navbar'>
    <a href="/"><img src={pic} alt='btc-logo' style = {styles.logo}/></a>
   <Navbar.Brand href="/" style={styles.brand}>PocketSats</Navbar.Brand> 
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav style={{marginLeft: '6rem'}} className="ml-auto textLight" id="nav-links">
        <Nav.Link style={styles.links} href="#jumpToHowToUse">How To Use</Nav.Link>
        <Nav.Link style={styles.links} href="#jumpToNews">Crypto News</Nav.Link>
        <Button className="btn btn-primary navbar-btn" style={{color: 'black', fontSize: '1.3vw'}}>Download</Button>
      </Nav>
    </Navbar.Collapse>
    </Navbar>
    </header>
  )
}

export default Header
