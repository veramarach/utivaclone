

import React from 'react'
import styled from "@emotion/styled"

interface Iprops{
    avatar2:any;
    cube:string;
    bg: string;

}

const Container = styled.section`
        /* width: 100%; */
        
      
`
const Wrapper = styled.div`
        display: flex; 
       

      @media screen and (max-width: 768px) {
        display: flex;
        flex-wrap:wrap;
        justify-content: center;
        
      } 
      


       img{
        width: 350px;
        height: 350px;

        @media screen and (max-width: 768px)  {
          width: 500px;
          height: 500px;
          
        }
       }

`
const Box= styled.div<{bgg: string}>` 
      width: 350px;
      height: 350px;
      box-shadow: rgba(27, 31, 35, 0.15) 5px 5px 5px 5px;
      background-color:${(props) => props.bgg};

      @media screen and (max-width: 768px) {
        width: 500px;
        height: 200px;
        
      }

`
const Hold = styled.div` 
       display: flex;
       justify-content:center;
       align-items:center;
        padding: 100px; 
       font-size:48px;
       font-weight:bolder;

       @media screen and (max-width: 768px) {
        padding:100px;
        
       }
       

`



const Card:React.FC<Iprops>= ({avatar2, cube, bg, }) => {
  return (
    <Container>
        <Wrapper>
          <Box bgg = {bg}>
            <Hold> {cube}</Hold>
            
          </Box>
          <img
          src = {avatar2}
          />
          
        </Wrapper>
    </Container>
  )
}

export default Card