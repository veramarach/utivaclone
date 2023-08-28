
import React from 'react'
import styled from "@emotion/styled"

const Container = styled.div`
     /* margin-top:70px; */
      
`
const Wrapper = styled.div`
      /* @media screen and (max-width:768px) {
        display: flex;
        flex-wrap:wrap;
        justify-content:center;
        
     }  */
      
`
const Hold = styled.div` 
       img {
        width: 400px;
        height: 400px;  
        
       }

       @media screen and (max-width:768px) {
        width:250px;
        height: 250px;
         
       }
`

interface Iprops {
    avatar:any;

}

const ImpactCard : React.FC<Iprops>= ({avatar}) => {
  return (
    <Container>
        <Wrapper>

        <Hold> 
          <img src = {avatar}/>
      </Hold>
        </Wrapper>
    </Container>
  )
}

export default ImpactCard