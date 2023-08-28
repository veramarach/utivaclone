


import React from 'react'
import styled from '@emotion/styled';
import {AiOutlineDown} from "react-icons/ai"
import {BiMenuAltRight} from "react-icons/bi"
import Button from "../Reuse/Button"
import pics from "../../assets/asset 0.svg"



const Container = styled.header`
      height: 70px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
`
const Logo = styled.div`
      margin-left: 50px;
`


const Navigation = styled.div`
      display: flex;
      align-items: center;

      @media screen and (max-width: 768px) {
        display: none;
      }
`
const Nav = styled.nav` 
      display: flex;
      align-items: center;
      cursor: pointer;
      margin-right:40px;
      font-size: 15px;
      

      :hover {
        color: rgba(0,0,0,0.3);
      }
`
const Icon = styled.div` 
       margin-top: 5px;
       margin-left: 3px;
`
const ButHold = styled.div`
      gap: 20px;
      display: flex;
      margin-left: 40px;

      @media screen and (max-width: 768px) {
             display: flex;
        
      }
`

const Menu = styled.div`
      font-size: 40px;
      margin-right: 40px;
      @media screen and (min-width: 768px) {
        display: none;
        
      }
`

const Header:React.FC= () => {
  return (
    <Container>
        <Logo>
          <img src = {pics}/>
          
        </Logo>
        <Navigation>
            <Nav>
                schools
                <Icon>
                  {<AiOutlineDown/>}
                </Icon>
            </Nav>
            <Nav>
                Enterprise
                <Icon>{<AiOutlineDown/>}</Icon>
            </Nav>
            <Nav>
                Company
                <Icon>{<AiOutlineDown />}</Icon>
            </Nav>

        </Navigation>
        <ButHold>
            <Button cl= "white" bd= " " bg="#fbaf1b" text= "Get Started" />
            <Button cl= "#050794" bd= "#050794" bg= "transparent" text="Explore" />
        </ButHold>

        <Menu>
           {<BiMenuAltRight/>}
        </Menu>
    </Container>
  )
}

export default Header 