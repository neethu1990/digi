import React from 'react'
import { Navbar , Nav , Container } from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div>
         <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        
          <Navbar.Brand as={Link} to= "/"> Neethu Sunder </Navbar.Brand>
          <Nav className="me-auto">

        
          < Nav.Link as={Link} to= "/">Home</Nav.Link>
            <Nav.Link as={Link} to= "/about">About</Nav.Link>
            <Nav.Link as={Link} to= "/project">Project</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header