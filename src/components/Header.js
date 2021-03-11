import React from 'react'
import { Image, Navbar, Container, Button, Nav, NavDropdown } from 'react-bootstrap';
import pic from '../images/btc.png';
const Header = () => {
  return (
    <header id='header'>
    <Navbar style={{height:'8vh', padding: '5vh'}} className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" variant="white" expand="lg" collapseOnSelect id ='navbar'>
      <Container style={{paddingTop:'10px'}}>
      <div className='pocket' style={{marginBottom: '22px', marginRight: '12px'}}>
      </div>
   <Navbar.Brand href="/" style={{fontSize:"2rem"}}>PocketSats</Navbar.Brand> 
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto textLight" id="nav-links">
        <Nav.Link style={{color:'white'}} href="/services">Info</Nav.Link>
        <Nav.Link style={{color:'white'}} href="/about">Crypto Thesis</Nav.Link>
        <Nav.Link style={{color:'white'}} href="/contact">Contact</Nav.Link>
        <NavDropdown className= "text-black" title="More" id="basic-nav-dropdown">
          <NavDropdown.Item style={{color:'black'}} href="/about">Meet the Team</NavDropdown.Item>
          <NavDropdown.Item style={{color:'black'}} href="/projects">Projects</NavDropdown.Item>
          <NavDropdown.Item style={{color:'black'}} href="/faq">FAQ</NavDropdown.Item>
          <NavDropdown.Divider/>
          <NavDropdown.Item style={{color:'black'}} href="/contact">Contact</NavDropdown.Item>
        </NavDropdown>
        <Button className="btn btn-info navbar-btn" style={{width:'10rem', height: 'auto', marginRight: '-2rem'}}>Download</Button>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
    </header>
  )
}

export default Header
