import React from 'react'
import styled from "@emotion/styled"


const Container = styled.div`
       
       
       
`
const Card = styled.div`
      padding:20px;
`


interface Iprops {
    
    title:string;
    text:string;
    span:string;
    icon:any;

}

const Title= styled.div`
       font-size:19px;
       font-weight:bolder;
       width: 450px;
       padding-bottom:10px;
`
const Text = styled.div`
       line-height: 20px;
       color: #5C5B58;
    `
const S = styled.span``
const IconBox = styled.div`
      margin-left:20px;

`
const Hold =styled.div`
      display: flex;
      line-height: 50px;
      color: #6A6ABB;
     
`
const Wrapper = styled.div`
      height: 300px;
      width: 700px;
      background-color:white;
      margin: 10px;
      display: flex;
      box-shadow: rgba(27, 31, 35, 0.15) 5px 5px 5px 5px;
      border-radius:4px;
      
      align-items:center;

      @media screen and (max-width: 768px) {
        width: 500px;
        
        
      }
      

      :hover{
        
        background-color: #FFFBF4;
        border: 1px solid#FF822D;
        
      }
      
`

const ProgramCard:React.FC<Iprops> = ({ title, text,span, icon}) => {
  return (
    <Container>
       <Wrapper>
       <Card>
            
            <Title>{title} </Title>
            <Text>{text} </Text>
            <Hold>
            <S>{span} </S>
            <IconBox>{icon} </IconBox>
            </Hold>

        </Card>
        
       </Wrapper>

    </Container>
  )
}

export default ProgramCard