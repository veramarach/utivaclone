



import React from 'react'
import styled from '@emotion/styled'
import {AiOutlineArrowRight} from "react-icons/ai"
import ImpactCard from './ImpactCard'
import pics from "../../assets/asset 66.webp"
import pics1 from "../../assets/asset 67.webp"
import pics2 from "../../assets/asset 68.webp"
import pics3 from "../../assets/asset 69.webp"

const Container = styled.div`
       /* margin-top:80px; */
       width: 100%;

       h1{
        font-size: 70px;
        /* font-weight:bolder; */
        color:#0A476B ;
        font-weight:800

       }
       @media screen and (max-width: 786px) {
        h1{
            font-size: 42px;;
        }
        
       }
           
        
       
       p{
        color: #474747;
        font-size:20px;
       }

`
const IconBox = styled.div`
      display :flex ;
      color: #5254B5;
`
const Hold = styled.div`
       margin-left:20px; 

`
const Wrapper = styled.div`
          display: flex;
        
       @media screen and (max-width:768px) {
        display: flex;
        flex-wrap:wrap;  
        gap:50px;
       }
`

const Impact : React.FC= () => {
  return (
    <Container>
        <h1>Impact is the reason <br />we exist!</h1>
        <p>Utiva.impact is an impact project of Utiva,a tech company that is <br />powering the tech side of learning for people of colour and minorities,<br />across Africa and the world.</p>
        
        <IconBox>
            Learn More
            <Hold> {<AiOutlineArrowRight/>} </Hold>
        </IconBox>

        <Wrapper>

        <ImpactCard
        avatar={pics}
        />
        <ImpactCard
        avatar={pics1}
        />

        <ImpactCard
        avatar={pics2}
        />
         

         <ImpactCard
         avatar={pics3}
         
         />
        </Wrapper>


         
    </Container>
  )
}

export default Impact