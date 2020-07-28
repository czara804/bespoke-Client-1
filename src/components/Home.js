import React from 'react';
// import {useGlobalState} from '../config/store'
// import {getOrderFromId} from '../services/orderServices'
import {Link} from 'react-router-dom'
import {HomeWrapper, HomeTopRow, OrderNowHome, TopLeft, TopRight, 
  HomeHeading, HomeSubHead, HomeMidRow, MidRight, MidLeft, Lookbook, 
  LookWrite, Circle, Giftcard, Squad, ThirdRow, InstaLink, InstaPics, 
  Pic, MidRightTop} from './StyledComponentC'
import {Star1, Star2, Star3} from './StyledComponents'

  const starTwo = {
    zIndex: "4",
    margin: "-30px 30px 25px -20px",
  }
  const starOne = {
    marginLeft: "-10px"
  }
  const starThree = {
    marginLeft: "-50px"
  }
  const starContainer = {
    display: "flex",
    marginRight: "-180px",
    marginTop: "60px",
    zIndex: "10"
  }

const Home = () => {

  return (
    <div>
      <HomeWrapper>
        <HomeTopRow>
          <TopLeft>
            <div>
              <HomeHeading>YOU'RE NEVER</HomeHeading>
              <HomeHeading>FULLY DRESSED</HomeHeading>
              <HomeHeading>WITHOUT A GOOD</HomeHeading>
              <HomeHeading>SET OF NAILS.</HomeHeading>
            </div>
            <HomeSubHead>
              <div>Nail Salon in Sidmouth,</div>
              <div>Devon. Come see what</div>
              <div>we are all about.</div>
            </HomeSubHead>
          </TopLeft>
          <TopRight>
            <div>
              <OrderNowHome to="/products">MAKE AN ORDER</OrderNowHome>
            </div>
          </TopRight>
        </HomeTopRow>
        <HomeMidRow>
          <MidLeft>
            <Lookbook>
              <img style={{width:"250px"}}src="/lookbookIcon.jpg" alt="lookbook" ></img>
            </Lookbook>
            <LookWrite>
              <div>THE</div>
              <div>LOOKBOOK</div>
              <Link to="/lookbook" >TAKE A PEEK</Link>
            </LookWrite>
          </MidLeft>
          <MidRight>
            <MidRightTop>
            <div style={starContainer}>
              <Star1 style={starOne}></Star1>
              <Star2 style={starTwo}></Star2>
              <Star3 style={starThree}></Star3>
            </div>
              <Circle>
              <Giftcard src="/giftcard.png" alt="giftcard"></Giftcard>
                <Squad>
                  <div>Treat</div>
                  <div>Your</div>
                  <div>Squad.</div> 
                </Squad>
              </Circle>
            </MidRightTop>
            <div style={{fontSize:"50px", display: "flex", justifyContent:"center", padding:"2%", margin:"2%"}}>
                <Link to="/lookbook">GRAB A GIFT CARD</Link>
            </div>
          </MidRight>
        </HomeMidRow>
        <ThirdRow>
          <InstaLink>
            <a href="https://www.instagram.com/bespoke_nails_/">@bespoke_nails_</a>
          </InstaLink>
          <InstaPics>
            <Pic src="/nails1.png" alt="nails"></Pic>
            <Pic src="/nails2.png" alt="nails"></Pic>
            <Pic src="/nails3.png" alt="nails"></Pic>
            <Pic src="/nails4.png" alt="nails"></Pic>
            <Pic src="/nails5.png" alt="nails"></Pic>
          </InstaPics>
        </ThirdRow>
      </HomeWrapper>
    </div>
  )


}



export default Home