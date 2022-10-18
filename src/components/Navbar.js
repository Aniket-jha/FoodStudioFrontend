import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import classes from "./Header.module.css"
const HeaderNavbar = () => {
  return (
    <div> <Navbar style={{border:"#E4DCCF 1px solid"}} bg="light"  expand="lg">
      <Container>
        <Navbar.Toggle className="mx-right" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link className={classes.navLink} href="/">Home</Nav.Link>
           
             <Nav.Link className={classes.navLink } href="/products">Shop</Nav.Link>
             <Nav.Link className={classes.navLink } href="/Wholesale">Wholesale</Nav.Link>
             <Nav.Link className={classes.navLink} href="/about">About Us </Nav.Link>
             <Nav.Link className={classes.navLink} href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar></div>
  )
}

export default HeaderNavbar