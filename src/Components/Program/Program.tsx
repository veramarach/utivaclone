import React from 'react'
import styled from '@emotion/styled'
import ProgramCard from './ProgramCard'
import {MdArrowForward} from "react-icons/md"




const Container = styled.div`
          margin-top:120px;
          width: 100%;

      h1{
        color: #050794;
        font-weight:bolder;
        font-size:48px;
        margin-left:10px;
        
      }
      
       
`
const Wrapper = styled.div`
       /* display: flex; */
       justify-content:space-evenly;
       align-items:center;

       @media screen and (min-width:768px) {
        display: flex;
        
       }

      
`


const Program :React.FC= () => {
    let title1: string= "Intensive BOOTCAMPS Designed To Help You Get into Tech "
    let text1:string= "Learn tech with others in virtual classes,work on projects,and build your portfolio. "
    let span1:string = " View Programs"
    let title2 :string = "Start a Tech Career with an International work Experience"
    let text2:string ="Learn tech skills in class,get paired with one of our tech companies and work in real work environments."
    let span2: string = " View program"
  return (
    <Container>
        <h1>What is the Best Learning Program for <br/>you?</h1>
            
        <Wrapper>
            

            <ProgramCard
              title= {title1}
              text = {text1}
              span = {span1}
              icon = {<MdArrowForward/>}
            />


            <ProgramCard 
            title= {title2}
            text = {text2}
            span = {span2}
            icon = {<MdArrowForward/>}
            
            />
            

        </Wrapper>

    </Container>
  )
}

export default Program