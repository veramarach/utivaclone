


import React from 'react'
import styled from "@emotion/styled"
import {LiaHandPointer} from "react-icons/lia"
import ExperienceCard from '../Experience/ExperienceCard'

import pics from "../../assets/asset 43.webp"
import pics2 from "../../assets/asset 44.webp"
import pics3 from "../../assets/asset 45.webp"
import pics4 from "../../assets/asset 46.webp"
import pics5 from "../../assets/asset 47.webp"
import pics6 from "../../assets/asset 48.webp"
import pics7 from "../../assets/asset 49.webp"
import pics8 from "../../assets/asset 50.webp"
import pics9 from "../../assets/asset 45.webp"
const Container=styled.div`
       position: relative;
        top:50px;
       margin: 50px;

       h1{
        color: #050794;
        font-weight:bolder;
        font-size:48px;
        
       }

       p{
        font-weight:bold;
        font-size:18px;
        color: #5d5b5b;
        
       }

`
const Icon = styled.div`
      color: #FBAF1B;
      position: relative;
      bottom:28px;
      margin-left:47px;
      font-size:30px;
`

const Wrapper = styled.div`
       display: flex;
       flex-wrap:wrap;
       justify-content: center;


`




const Experience :React.FC= () => {
    let text1 : string = "i am interested in Data and numbers."
    let span1 : string = "View Courses"
    let text2 : string = "i am interested in Design and Creatives"
    let span2 : string = "View Courses"
    let text3 : string = "i am interested in Products"
    let span3 : string = "View Courses"
    let text4 : string = "i am interested in Business Analysis"
    let span4 : string = "View Courses"
    let text5 : string = "i am interested in Programming"
    let span5 : string = "View Courses"
    let text6 : string = "i am interested in cloud Development"
    let span6: string = "View Courses"
    let text7 : string = "I am interested in Product Marketing"
    let span7 : string = "View Courses"
    let text8 : string = "I am Interested in Blockchain"
    let span8 : string = "View Courses"
    let text9 : string = "I am interested in Cybersecurity"
    let span9 : string = "View Courses"
    
  return (
    <Container>
        <h1>Experience LifeLong Learning with Utiva<br />Bootcamps</h1>
        <p>Bootcamp     Bootcamp + Internship</p>
        <Icon>{<LiaHandPointer />} </Icon>

        <Wrapper>
        
        <ExperienceCard 
        bg = " #050794"
        avatar={pics}
        text = {text1}
        span = {span1}
         
        />


        <ExperienceCard
        bg = "#0C8F54"
        avatar = {pics2}
        text = {text2}
        span = {span2}
        
        
        />

        <ExperienceCard
        bg = "#7C01A7"
        avatar = {pics3}
        text = {text3}
        span = {span3}
        
        
        />

        <ExperienceCard
        bg = "#A78700"
        avatar={pics4}
        text= {text4}
        span = {span4}
        
        
        
        />

        <ExperienceCard
        bg = "#A74F46"
        avatar={pics5}
        text = {text5}
        span = {span5}
        
        />

        <ExperienceCard
        bg = "#0E8F8F"
        avatar ={pics6}
        text = {text6}
        span = {span6}
        
        />

        <ExperienceCard
        bg = "#10A662"
        avatar = {pics7}
        text = {text7}
        span = {span7} 
        />

        <ExperienceCard
        bg = "#000269"
        avatar={pics8}
        text = {text8}
        span = {span8}
        />

        <ExperienceCard
        bg = "#A78700"
        avatar={pics9}
        text = {text9}
        span = {span9}
        />
        </Wrapper>
    </Container>
  )
}

export default Experience