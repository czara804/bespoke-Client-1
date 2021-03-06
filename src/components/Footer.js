import React from 'react'
import {FooterLink, RowFooter, FooterContainer, NavBlock, AdminLoginButton} from './StyledComponents'
import {useGlobalState} from '../config/store'
import NewEmail from './NewEmail'

//footer to render on bottom of each page with links and logo styling

const Footer = () => {
  const {store} = useGlobalState()
  //get logged in user from global state for control flow of ADMIN LOGON/DASHBOARD link
  const {loggedInUser} = store
  
  //local styling for footer (not used again)
  const title = {
    fontSize: "1.2em",
    textDecoration: "none",
    color: "#525252",
    margin: "0.2em",
    padding: ".2em .5em",
    fontFamily: "Cabin"
  } 
  const diamond = {
    width: "2.5em"
  }
  const addressContainer = {
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  }
  const address = {
    padding: "0px", 
    color: "#525252",
    fontFamily: "Cabin"
  }
  const socials = {
    width: "1.2em",
    padding: "0.3em"
  } 

  //render footer using styled components - address/contact/page links/ socials
  return (
    <RowFooter>
    {!loggedInUser && (<NewEmail />)}
      <FooterContainer>
          <NavBlock>
            <p style={title}>EXPLORE</p>
            <FooterLink to="/lookbook">LOOKBOOK</FooterLink>
            <FooterLink to="/about">ABOUT</FooterLink>
            <FooterLink to="/giftcards">GIFT CARDS</FooterLink>
          </NavBlock>
          <NavBlock>
            <p><img style={diamond} src="/diamond.png" alt="diamond"></img></p>
            <div style={addressContainer}>
              <div style={address}>138a High Street</div>
              <div style={address}>Sidmouth</div>
              <div style={address}>EX10 8EE</div>
            </div>
            <p>+44 7837 693909</p>
            {!loggedInUser ? <AdminLoginButton to="/admin/login" data-cy="login">ADMIN LOGIN</AdminLoginButton> : <AdminLoginButton to="/dashboard">DASHBOARD</AdminLoginButton>}
          </NavBlock>
          <NavBlock>
            <p style={title}>COMPANY</p>
            <FooterLink to="/contact">CONTACT</FooterLink>
            <FooterLink to="/products">SHOP</FooterLink>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/bespoke_nails_/"><img style={socials} src="/instagram.png" alt="instagram"></img></a>
              <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/home"><img style={socials} src="/twitter.png" alt="twitter"></img></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/BespokeNails.x/"><img style={socials} src="/facebook.png" alt="facebook"></img></a>
            </div>
          </NavBlock>
      </FooterContainer>
    </RowFooter>
  )
}

export default Footer