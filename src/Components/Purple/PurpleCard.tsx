

import React from 'react'
import styled from "@emotion/styled"
import {BsDot} from "react-icons/bs"

const Wrapper = styled.div`
      color :white ;
         margin-left: 20px;
         margin: 40px;
         

         img{
          position: relative;
          bottom:20px;
         }

         
`
const H2 = styled.div`
      font-size: 24px;
`

const S = styled.p``

const IconBox=styled.div`
       color : white;
       position: relative;
       top:15px;
       

`

const HoldBox = styled.div`
      display: flex;
      
`
const Box = styled.div`
     
       
`


interface Iprops {
    avatar :any;
    title:string;
    text: string;
    self:string;
    context:string;

}

const PurpleCard :React.FC<Iprops>= ({avatar, title, text, self, context}) => {
  return (
    <Wrapper>
      <Box>
      <img src = {avatar}/>
          <H2> {title} </H2>
      
        <HoldBox>
        
          <IconBox> {<BsDot/>} </IconBox>
          <S> {text} </S>
        </HoldBox>

        <HoldBox>
          <IconBox> {<BsDot/>} </IconBox>
          <S>{self} </S>

        </HoldBox>

        <HoldBox>
          <IconBox> {<BsDot />} </IconBox>
          <S> {context} </S>
        </HoldBox>
      </Box>


    </Wrapper>
  )
}

export default PurpleCard