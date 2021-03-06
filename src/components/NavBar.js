import React from 'react';
import {Nav, Row, Logo} from './StyledComponents'

//Top header/navigation bar to appear on each page with styled Links and central logo. 

const NavBar = () => {
  //local styles
  const imageStyles = {
    height: "20vh"
  } 
  const navContainer = {
    display: "flex",
    width: "100vw", 
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9FFFF"
  } 

  //render using styled components
  return (
    <Row> 
      <div style={navContainer}>
          <Nav to="/lookbook">LOOKBOOK</Nav>
          <Nav to="/about">ABOUT</Nav>
          <Nav to="/giftcards">GIFT CARDS</Nav>
          <Logo to="/"><img style={imageStyles} src="/logo.png" alt="logo"></img></Logo>
          <Nav data-cy="contactLink" to="/contact">CONTACT</Nav>
          <Nav to="/products">SHOP</Nav>
          <Nav data-cy="orderLink" to="/orders/new">ORDER NOW</Nav>
      </div>
    </Row>
  )
}

export default NavBar