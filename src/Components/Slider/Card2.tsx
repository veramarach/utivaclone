

import React from 'react'
import styled from '@emotion/styled'
const Container = styled.div`
   width: 400px;
   height: 200px;
   background-color:green;
   

`
const Box = styled.div``
const H4 = styled.text``
const T = styled.div``


interface Iprops{
    bold: string;
    content:string;

}

const Card: React.FC<Iprops> = ({bold, content}) => {
  return (
    <Container>
        <Box>
            <H4> {bold} </H4>
        </Box>

        <T> {content} </T>

    </Container>
    
  )
}

export default Card