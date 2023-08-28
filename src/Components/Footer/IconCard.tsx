


import styled from '@emotion/styled'
import React from 'react'

interface Iprops {
     title: string;
     icon:any;
     text:string;


}
const Container = styled.div`
     margin-bottom:10px;
`
const H =styled.h4`
      font-weight:light;

`
const Hold = styled.div`
       display: flex;
       gap:10px;
       font-weight:light;
        color: #8e8f92;
`
const Box = styled.div``
const Para = styled.div`
       
       
       
`

const IconCard :React.FC<Iprops>= ({title, icon, text}) => {
  return (
    <Container>
       <H> {title} </H>  

       <Hold>
         <Box> {icon} </Box>
         <Para> {text} </Para>
       </Hold>
    </Container>
  )
}

export default IconCard