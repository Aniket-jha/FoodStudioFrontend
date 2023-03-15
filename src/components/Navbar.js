import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import classes from "./Header.module.css"
const HeaderNavbar = () => {
  return (
    <div> <Navbar style={{border:"#E4DCCF 1px solid"}} bg="light"  expand="lg">
      <Container>
        <Navbar.Toggle className="mx-right" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Link style={{textDecoration:"none",color:"#000"}} className={classes.navLink} to="/">Home</Link>
             <Link style={{textDecoration:"none",color:"#000"}} className={classes.navLink } to="/products">Shop</Link>
           
             <Link style={{textDecoration:"none",color:"#000"}} className={classes.navLink} to="/about">About Us </Link>
             <Link style={{textDecoration:"none",color:"#000"}} className={classes.navLink} to="/contact">Contact</Link>
             
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar></div>
  )
}

export default HeaderNavbar