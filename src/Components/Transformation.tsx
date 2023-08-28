import styled from '@emotion/styled'
import React from 'react'

const Container = styled.div`
       background-color: #F9F9FD;
`
const Wrapper=styled.div`
      padding:20px;

      h2{
        color:#1E2027;
        font-weight:bolder;
        font-size:32px;
      }

      p{
        color: #545454;
        font-size:18px;
        
      }
`

const Transformation :React.FC= () => {
  return (
    <Container>
        <Wrapper>
           <h2>Digital Transformation for Individuals<br />and Businesses</h2>
           <p>We are a Technology Workforce Development company that helps people learn premium <br />technology skills virtually and partners with companies to hire the best talents and invest <br />in workforce development.Currently with learners from 19 countries.</p>
        </Wrapper>

    </Container>
  )
}

export default Transformation;