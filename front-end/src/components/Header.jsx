import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
        <Navbar className="bg-primary">
        <Container>
          <Navbar.Brand href="#home" className='fw-bold text-muted'>Register-Form</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header