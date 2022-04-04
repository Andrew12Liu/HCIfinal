import React from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap'
import navstuff from './nav.json'
export default function Navigation() {
    console.log(navstuff.stuff)
  return (
    <Navbar>
  <Container>
      <Nav>
      {navstuff.stuff.map(i =>  (
      <>
      {console.log(i)}
        
      <Nav.Link href="#home">{i}</Nav.Link>
          </>
      ))}
      </Nav>

  </Container>
</Navbar>
  )
}
