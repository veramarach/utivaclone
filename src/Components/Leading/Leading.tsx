import React from 'react'
import styled from "@emotion/styled"
import Card2 from '../Reuse/Card2'

import pics from '../../assets/asset 7.png'
import pics1 from "../../assets/asset 8.webp"
import pics2 from "../../assets/asset 9.png"
import pics3 from "../../assets/asset 10.jpeg"
import pics4 from "../../assets/asset 11.webp"
import pics5 from "../../assets/asset 12.png"
import pics6 from "../../assets/asset 13.png"
import pics7 from "../../assets/asset 14.png"
import pics8 from "../../assets/asset 15.png"
import pics9 from "../../assets/asset 16.png"
import pics10 from "../../assets/asset 17.webp"
import pics11 from "../../assets/asset 18.png"
import pics12 from "../../assets/asset 19.png"
import pics13 from "../../assets/asset 20.png"
import pics14 from "../../assets/asset 21.png"
import pics15 from "../../assets/asset 22.png"
import pics16 from "../../assets/asset 23.png"
import pics17 from "../../assets/asset 24.png"
import pics18 from "../../assets/asset 25.png"
import pics19 from "../../assets/asset 26.png"
import pics20 from "../../assets/asset 27.png"
import pics21 from "../../assets/asset 28.png"
import pics22 from "../../assets/asset 29.jpeg"
import pics23 from "../../assets/asset 30.png"
import pics24 from "../../assets/asset 31.png"
import pics25 from "../../assets/asset 32.jpeg"
import pics26 from "../../assets/asset 33.png"
import pics27 from "../../assets/asset 34.png"
import pics28 from "../../assets/asset 35.png"
import pics29 from "../../assets/asset 36.jpeg"
import pics30 from "../../assets/asset 37.png"
import pics31 from "../../assets/asset 38.png"
import pics32 from "../../assets/asset 39.jpeg"
import pics33 from "../../assets/asset 40.png"
import pics34 from "../../assets/asset 41.webp"
import pics35 from "../../assets/asset 42.png" 
import {BsLightningFill} from "react-icons/bs"

const Container = styled.div`
           margin-top:70px;

           h3{
            font-size:20px;
            font-weight:bolder;
           }        
      
`
const Wrapper = styled.div`
       display: flex;
       flex-wrap:wrap;
       width:100%; 
       padding-top:40px;
       gap: 70px;

       @media screen and (max-width: 768px) {
        display: flex;
        justify-content:center;
        
       }
       
      `

      const NewHold = styled.div`
            display :flex ;
            margin-top:40px;
      `
      const New = styled.div`
            display: flex;

            padding: 15px 15px 15px 15px;
            background-color:#1AAC69;
            border-radius:25px;
            
            margin-right:10px;
      `
      const Text = styled.text` 
             color:white;
           
           `
      const Icon = styled.div`
             color:#FF822D;
      `
      const More = styled.div`
           color:#3335A8;
           font-weight:bolder;
           margin-top:16px;
      `
      const P= styled.p`
            color: #4B4CB2;
        
      `

const Leading:React.FC= ()  =>{
  return (
    <Container>
        <h2>Our Talents Work With Many of these Leading Tech Companies</h2>

        <Wrapper>
            <Card2 
            avatar= {pics}
            
            />

            <Card2 
            avatar = {pics1}
            />

            <Card2 
            avatar = {pics2}
            />

            <Card2
            avatar = {pics3}
             />

             <Card2
             avatar = {pics4}
             />
             <Card2
             avatar = {pics5}
             />

            <Card2
             avatar = {pics6}
             />

            <Card2
             avatar = {pics7}
             />

             <Card2
             avatar = {pics8}
             />

            <Card2
             avatar = {pics9}
             />

            <Card2
             avatar = {pics10}
             />

            <Card2
             avatar = {pics11}
             />

            <Card2
             avatar = {pics12}
             />

             <Card2
             avatar={pics13}
              />

              <Card2
              avatar = {pics14}
              
              />

              <Card2
              avatar={pics15} 
              />

              <Card2
              avatar={pics16}
              />

              <Card2
              avatar={pics17}
              />

              <Card2
              avatar={pics18}
              />

              <Card2
              avatar={pics19}
              />

              <Card2
              avatar={pics20}
              />
              <Card2
              avatar={pics21}
              />
              <Card2
              avatar={pics22}
              />

              <Card2
              avatar={pics23}
              />

              <Card2
              avatar={pics24}
              />

              <Card2
              avatar={pics25}
              />

             <Card2
              avatar={pics26}
              />

              <Card2
              avatar={pics27}
              />

              <Card2
              avatar={pics28}
               />

               <Card2
               avatar={pics29}
               />

               <Card2
               avatar={pics30}
               />

               <Card2
               avatar={pics31}
               />

               <Card2
               avatar={pics32}
               />

               <Card2
               avatar={pics33}
               />

               <Card2
               avatar={pics34}
               />

               <Card2
               avatar={pics35}
               />

        </Wrapper>

          <NewHold>
            <New>
                <Text>NEW</Text>
                <Icon> {<BsLightningFill/>} </Icon>
            </New>
              <P>Hp inc to support Utiva's mission to empower African Women.</P>
              <More>Read More</More>
          </NewHold>
    </Container>
  )
}

export default Leading;