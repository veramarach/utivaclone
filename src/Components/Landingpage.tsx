import React from 'react'
import Hero from "./Hero/Hero"
import styled from "@emotion/styled"
import Leading from "./Leading/Leading"
import Program from './Program/Program'
import Experience from './Experience/Experience'
import Transformation from './Transformation'
import Slider from "./Slider/Slider"
import Purple from './Purple/purple'
import Impact from './Impact/Impact'


const Wrapper = styled.div`
      overflow-x: hidden;
      @media screen and (max-width: 768px) {
        padding: 20px;
        
      }
`
const  Landingpage:React.FC = () => {
  return (
    <Wrapper>
        <Hero />
        <Leading/>
        <Program/>
        <Experience />
        <Transformation />
        <Slider />
        <Purple />
        <Impact />
        
        
    </Wrapper>
  )
}

export default Landingpage;