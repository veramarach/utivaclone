import React from 'react'
import styled from "@emotion/styled"
import pics from "../../assets/asset 57.webp"
import PurpleCard from "./PurpleCard"
import pic1 from "../../assets/asset 58.svg"
import pic2 from "../../assets/asset 59.svg"
import pic3 from "../../assets/asset 60.svg"
import pic4 from "../../assets/asset 61.svg"
import pics1 from "../../assets/asset 62.webp"
import {FiArrowUpRight} from "react-icons/fi"
import Card from './Card'
import pics2 from "../../assets/asset 63.webp"
import pics3 from "../../assets/asset 64.webp"
import {AiOutlineArrowRight}from "react-icons/ai"
import pics4 from "../../assets/asset 65.svg"




const Container = styled.div`
      background-color:#000269;

      margin-top:150px;
`
const Wrapper = styled.div`
      @media screen  and (min-width: 768px) {
        display: flex;
        justify-content:space-between;
        
        
      }
       
`

const Right = styled.div`
      padding-top:50px;

`
const Box = styled.div` 
      display: flex;
      padding: 30px;
      gap:400px;

    
`

const Hold = styled.div` 
      display:flex;
      margin-left:10px;

      
      h1{
        color:white;
      }
      

      h2{
        font-size:32px;
        color:#FBAF1B;
        margin-left:15px;
        position:relative;
        bottom:5px;
         
      }


`
const Para = styled.p`
      line-height:30px;
      font-size: 18px;
      color:white;

      @media screen and (max-width:768px) {
        width: 500px;
        
      }

`
const Second = styled.div``
const HeroImage= styled.img`
        width: 300px; 
`
const Holder = styled.div`
      display: flex;
      color: white;
      justify-content: space-between;
      margin-top:100px;
      position: relative;
      left:30px;

      @media screen and (max-width:768px) {
         display: flex;
         flex-direction:column;
        
      } 

`
const First = styled.div`
      font-size:34px;

      @media screen and (max-width: 768px) {
        font-size:19px;
        
      }
`
const Third = styled.div` 
       display: flex;
       align-items: flex-end;
       margin-right:40px;

       

       img{
        width: 80px;
        height:50px;
        margin-right:20px;
        position: relative;
        bottom: 30px;
       }
`
const Read = styled.p`
       padding-top:30px;

`
const IconHold =styled.div`
        position : relative;
        bottom: 40px;
        /* right: 20px; */
`
const Holding = styled.div`
     display: flex;
     margin-left:20px;

     @media screen and (max-width:768px) {
        display:flex;
        flex-direction:column;
        
     }
`

const Started = styled.div`
     color: white;
     padding:20px;

     p{
        font-size:18px;
     }
`
const BoxIcon = styled.div`
     color: #B57F30;
     display: flex;
`
const ImageHold  = styled.div` 
       padding:5px;

       img{
        width: 100px;
        height: 100px;
       }
`
const Outline = styled.div`
       margin-left:30px;
`



const purple:React.FC = () => {

    let title1:string = "Immersing Learning"
    let title2: string = "Lectures Lab"
    let title3: string = "Capstone Projects"
    let title4: string = "Job Career Coaching"
    let text1: string = "Robust content and Videos "
    let text2: string = "Weekend classes"
    let text3: string = "Work on multiple projects"
    let text4: string = "Learn to leverage LinkedIn"
    let self1: string = "Self-paced + Live Classes"
    let self2: string = "Intensive training"
    let self3: string = "Get real-time feedback"
    let self4:string = "Cv for tech industry"
    let context1: string = "Assessments and Projects"
    let context2 :string = "Focus on real business cases"
    let context3: string = "Real-time mentoring"
    let context4: string = "Access to job opportunities"
    let cube1:string = "30k+"
    
    let cube2: string = "85%"
    
  return (
    <Container>
        <Box>
        <Right>
            <Hold>
               <h1>How you will </h1>
               <h2>Learn</h2>
            </Hold>

           <Para>
           <p>Premium skills learning across the entire digital product lifecycle:data,design,<br />development,marketing,and product management.</p>
           </Para>
        </Right>

        <Second>
            <HeroImage src = {pics} />
        </Second>
         
        </Box>
        <Wrapper>
            
            <PurpleCard
          avatar={pic1}
          title = {title1}
          text = {text1}
          self = {self1}
          context = {context1}
          
          />
            
           
           <PurpleCard
          avatar={pic2}
          title = {title2}
          text = {text2}
          self = {self2}
          context = {context2}
          />
           

          <PurpleCard
          avatar={pic3}
          title = {title3}
          text = {text3}
          self = {self3}
          context = {context3}
          />

         <PurpleCard
          avatar={pic4}
          title = {title4}
          text = {text4}
          self = {self4}
          context = {context4}
          />

        </Wrapper>

        <Holder>
            <First>
                <h1>Accelerate Your Growth.<br />Think it, become it with<br/>Utiva</h1>
            </First>
            <Third>
                <img src = {pics1} />
                <Read><h4>Read Testimonials<br/>over 20 amazing stories</h4></Read>

                <IconHold>{<FiArrowUpRight/>} </IconHold>
            </Third>

        </Holder>

        <Holding>
        <Card 
        avatar2={pics2}
        cube = {cube1} 
        bg = "#FFFFFF"
        
        
        />
        <Card
        cube={cube2}
        bg = "#06CF74"
        avatar2={pics3}
        
        
        />
        </Holding>

        <Started>
            <p>We are a platform that helps you learn tech skills and turn projects into hiring and visibility</p>
            <BoxIcon>
                Get Started
               <Outline> {<AiOutlineArrowRight/>}</Outline>
            </BoxIcon>

            <ImageHold>
                <img src = {pics4}/>
            </ImageHold>
        </Started>
        
    </Container>
  )
}

export default purple