


import React from 'react'
import styled from "@emotion/styled"
import {MdArrowForward} from "react-icons/md"




interface Iprops {
    avatar:any;
    title: string;
    text: string;
    span:string;
    avatar2: string;
    bold: string;
    content: string;
    context: string;
    mini: string;
    top: string;
    maxi: string;

}

const Container = styled.div`
     margin-top:80px;
      gap:30px;
       

     @media screen and (min-width: 768px) {
        display: flex;
        flex-wrap:nowrap;
        
        
     } 
    
`
const Wrapper = styled .div`
          
    
`
const Box= styled.image``
const H3= styled.div`
     font-size: 24px;
     font-weight:bold;
     color:#2C2C2C;

`
const Para = styled.p`
      color: #808185;
      line-height: 25px;
      font-size:18px;
      width: 300px; 
      
`
const S = styled.span`
       color: #050794;
`
const Hold = styled.div`
      color: #050794;
      display: flex;
      font-weight:bolder;
      font-size:18px;

`
const IconBox = styled.div`
       margin-left:20px;
`
const Box2 = styled.image`
      width: 500px;
      @media screen and (min-width:768px) {
        width: 300px;

        
      }
      

      img{
        width:500px;
        margin-top:30px;
        position: relative;
        
      }

      @media screen and (min-width: 768px) {
           width: 300px;
        
      }

`
const Left = styled.div`
      display: flex;
      
`

const BoxHold = styled.div`
       
       @media screen and (max-width: 768px) {
        position: absolute;
        left:100px;
        
        
       }
       



      display: flex;
      align-items: center;
      justify-content: center;
      gap:20px;
      background-color:#10A662;
      height: 140px;
      width: 500px;
       /* margin-left:200px; */
      border-radius:5px;
      margin-top:400px;
      position:absolute;
      left:400px

             
`


const H1 = styled.div`
      color: white;
      font-weight:bolder;
      font-size:24px;
`
const S1 = styled.div`
`

const Ship = styled.div`
       color: white;
`
const H2 = styled.div` 
     font-weight:bolder;
     font-size:24px;
`
const S3 = styled.div``
const ShipBox = styled.div`
      color: white;
`
const H4 = styled.div` 
      font-weight:bolder;
      font-size: 24px;
`
const S4= styled.div``
const ShipHold= styled.div`
      color: white;
`





const SliderCard :React.FC<Iprops> = ({avatar, title, text, span, avatar2,bold, content,context,mini, top,maxi }) => {
  return (
    <Container>
        <Wrapper>
         <Box>
            <img src= {avatar}/>
         </Box>
         <H3> {title} </H3>
         <Para> {text} </Para>
           <Hold> <S> {span} </S>
         <IconBox> {<MdArrowForward />} </IconBox></Hold>

         <Left>
        <Box2> <img src= {avatar2}/> </Box2>

       
       <BoxHold>


          <ShipHold>
          <H1> {bold} </H1>
            <S1>{content}</S1>
          </ShipHold>
       
             
            <Ship>
            <H2> {context} </H2>
               <S3> {top} </S3>
            </Ship>
            

         <ShipBox>
            <H4> {mini} </H4>
             <S4> {maxi} </S4>
          </ShipBox>


        </BoxHold>

        </Left> 

        </Wrapper>   
         
    </Container>
  )
}

export default SliderCard