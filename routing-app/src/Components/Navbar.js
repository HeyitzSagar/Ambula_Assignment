import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../src/bootstrap.min.css'


const navbar = () => {
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          {/* <Navbar.Brand ><Nav.Link href='/'>RoutingAssignment</Nav.Link></Navbar.Brand> */}
          <Nav className="me-auto">
            <Nav.Link href="/home">HomePage</Nav.Link>
            <Nav.Link href="/about">AboutPage</Nav.Link>
            <Nav.Link href="/contact">ContactPage</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  
    </>
  )
}

export default navbar
