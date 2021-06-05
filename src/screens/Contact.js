import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import emailjs, { init } from 'emailjs-com';

init("user_b3A5qniuECygNz33QRqf5");


export default function Contact() {

  function sendEmail(e){
    e.preventDefault();
    console.log('made it')
    emailjs.sendForm('service_fsfex85', 'template_3ukmh6s', e.target, 'user_b3A5qniuECygNz33QRqf5')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }
return (
  <div className= 'contact-container' style={{height: '100vh', marginBottom: '20vh'}}>
    <Container style={{padding:'3rem', height: '40vh', width: '50vw'}}>
    <Container style={{display:'flex', flexDirection: 'column', justifyContent: 'center', justifyItems: 'center'}}>
    <hr className="my-2"></hr>
    <h1 style= {{fontSize: '3.8rem'}}>Contact Us</h1>
    <hr className="my-2"></hr>
    </Container>
    <form style={{border:'3px solid black', padding: '20px', borderRadius: '3px', marginBottom: '10%'}} onSubmit={sendEmail}>
    <Form.Group  controlId="exampleForm.ControlInput1">
      <Form.Label>Name</Form.Label>
      <Form.Control type="name" placeholder="" />
    </Form.Group>
    <Form.Group controlId="exampleForm.ControlInput1">
      <Form.Label>Email</Form.Label>
      <Form.Control type="name" placeholder="" />
    </Form.Group>
  
    <Form.Group controlId="exampleForm.ControlTextarea1">
      <Form.Label>Message</Form.Label>
      <Form.Control as="textarea" rows={3} />
    </Form.Group>
    <Button type="submit" style={{fontSize:'1rem', fontWeight:'bold'}} className="btn btn-info btn-lg btn-block">Message</Button>
  </form>
  </Container>
  </div>
  )
}

