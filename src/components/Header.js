import React from 'react'
import { Image, Navbar, Container, Button, Nav, NavDropdown } from 'react-bootstrap';
import pic from '../images/pocket-sats-logo.png';
import HowToUse from '../components/HowToUse.js';

const Header = () => {
  return (
    <header id='header'>
    <Navbar style={{height:'8vh', padding: '5vh'}} className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" variant="white" expand="lg" collapseOnSelect id ='navbar'>
      <Container style={{paddingTop:'10px'}}>
      <a href="/"><Image src={pic} alt='btc-logo' style={{height:'9.8vh', marginRight: '5px'}}/></a>
   <Navbar.Brand href="/" style={{fontSize:"2rem"}}>PocketSats</Navbar.Brand> 
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav style={{marginLeft: '6rem'}} className="ml-auto textLight" id="nav-links">
        <Nav.Link style={{alignSelf: 'center', color:'white', fontSize: '1.1rem'}} href="#jumpToHowToUse">How To Use</Nav.Link>
        <Nav.Link style={{color:'white', alignSelf: 'center', fontSize: '1.1rem'}} href="#jumpToNews">Crypto News</Nav.Link>
        <NavDropdown style={{fontSize: '1.1rem', alignSelf: 'center'}} className= "text-black" title="More" id="basic-nav-dropdown">
          <NavDropdown.Item style={{color:'black'}} href="/faq">FAQ</NavDropdown.Item>
          <NavDropdown.Divider/>
          <NavDropdown.Item style={{color:'black'}} href="/contact">Contact</NavDropdown.Item>
        </NavDropdown>
        <Button className="btn btn-primary navbar-btn" style={{ width:'11rem', height: 'auto', fontSize: '1.1rem', marginRight: '-2rem'}}>Download</Button>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
    </header>
  )
}

export default Header
