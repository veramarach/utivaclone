


import React from 'react'
import styled from '@emotion/styled'
import SliderCard from '../Slider/SliderCard'
import pic1 from "../../assets/asset 51.svg"
import pic2 from "../../assets/asset 52.webp"



const Container = styled.div`
    margin-left:10px;
    display: flex;
    
      
`
const Wrapper = styled.div`
      display: flex;

     @media screen and (min-width: 768px) {
        display: flex;
        
     }
     

      
`

const Slider :React.FC= () => {
    let title1:string = "For Business "
    
    
    let text1 : string = "Utiva offers companies the technology,Contents,and the best training approaches that help drive workforce development. "


    let span1: string = "Get started"

    let bold1 : string= "15k"

    let content1: string = "Students Trained"

    let context1 :string = "90%"
    let top1: string = "Apprenticeship"
    let mini1:string = "500+"
    let maxi1: string = "Projects completed"
    
    
    
    
  return (
    <Container>
        <Wrapper>
            <SliderCard 
            avatar={pic1}
            title = {title1}
            text = {text1}
            span = {span1}
            avatar2= {pic2}
            bold = {bold1}
            content = {content1}
            context = {context1}
            mini = {mini1}
            top = {top1}
            maxi = {maxi1}

            />
            
        

        </Wrapper>

    </Container>
  )
}

export default Slider