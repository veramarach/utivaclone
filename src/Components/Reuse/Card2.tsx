import React from 'react'


import styled from '@emotion/styled'


interface Iprops {
    avatar: any;
}
const Container= styled.div``
const Wrapper = styled.div`
      img{
        width: 100px;
      } 

`

const Card2:React.FC<Iprops> = ({avatar}) => {
  return (
    <Container>
        <Wrapper>
            <img
            src= {avatar}
            />
        </Wrapper>
    </Container>
  )
}

export default Card2