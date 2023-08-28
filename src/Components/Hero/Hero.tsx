


import styled from '@emotion/styled'
import React from 'react'
import ButtonIcon from '../Reuse/ButtonIcon'
import pics from "../../assets/asset 2.webp"
// import picss from "../../assets/asset 1.png"




const Container = styled.section`
      display :flex ;
      justify-content: center;
      gap: 50px;
      flex-wrap: wrap;
      margin-top: 30px;
      background-color:#F9F9F3;
`
const First = styled.div``
const Build = styled.h1`
      font-size: 50px;
      font-weight: bolder;
      color: var(--color-primary);
      margin-bottom: 15px;
      line-height: 50px;

      @media screen and (min-width: 768px) {
        font-size: 70px;
        line-height: 70px;
        
      }

`
const Para = styled.p`
     @media screen and (min-width: 768px) {
        width: 500px;
        font-size: 18px;
        color: #76777A;

        
     }
      
      
`
const ButHold = styled.div`
      display: flex;
      gap: 40px;
      margin-top: 30px;
`
const Second = styled.div`
      width: 100%;
      @media screen and (min-width: 768px) {
        width: 500px;
        
      }
`

const HeroImage = styled.img`
      width: 100%
    
`

const Content = styled.div`
      display:flex; 
      padding: 40px;


`
const Read = styled.div`
      color:#1C1E9D;
       
`




const Hero :React.FC = () => {
  return (
    <Container>

        <First>

            <Build>
                Build Top<br />Tech Talents for<br/>the World
            </Build>

            <Para>
                Our Bootcamps are designed to help you learn from the best industry
                leaders from more than 19 countries.
            </Para>

            
            

            <ButHold>
                <ButtonIcon
                bg = "#fbaf1b"
                bd = ""
                text = "Individual"
                cl = "white"
                />

                    <ButtonIcon
                    bg = "transparent"
                    bd = "rgb(251, 175, 27)"
                    text='business'
                    cl='#050794'
                    />
            </ButHold>
            
            <Content>
            
               Over 30k+ professionals trained.
                
               <Read>Read Stories</Read>

            </Content>

             
        </First>

        <Second>
            <HeroImage src={pics} />
        </Second>

    </Container>
  )
}

export default Hero;