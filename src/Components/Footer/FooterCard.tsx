 import React from 'react'
 import styled from '@emotion/styled'
 
 interface Iprops {
    title:string;
    text:string;
    content:string;
    context:string;
    write:string;
    utiva: string;
    impact:string;
    nucleus:string;
    migrate:string;

 }
 
 const Container=styled.div`
        /* display: flex;
        flex-wrap:wrap; */
        
 `
 const Wrapper= styled.div` 
       
       @media screen and (max-width:768px) {
        display: flex;
        flex-direction: column;
    
       }
 `
 const H =styled.h4`
       margin-bottom:10px;
 `
 const T =styled.a`
        margin-bottom:10px;
        display: flex;
        flex-direction:column;
        font-weight:light;
        color: #8e8f92;

 
 `
 const C = styled.a`
         margin-bottom:10px;
        display: flex;
        flex-direction:column;
        font-weight:light;
        color:#8e8f92;
        
 `
 const H1 =styled.a`
        margin-bottom:10px;
        display: flex;
        flex-direction:column;
        font-weight:light;
        color:#8e8f92;
 `
 const Para = styled.a`
        margin-bottom:10px;
        display: flex;
        flex-direction:column; 
        font-weight:light;
        color: #8e8f92;
 `
 const B = styled.a` 
        margin-bottom:10px;
        display: flex;
        flex-direction:column;
        font-weight:light;
        color: #8e8f92;
       
 `
 const D = styled.a`
       margin-bottom:10px;
        display: flex;
        flex-direction:column;
        font-weight:light;
        color: #8e8f92;
 `
 const E = styled.a` 
       margin-bottom:10px;
        display: flex;
        flex-direction:column;
        font-weight:light;
        color: #8e8f92;
 `
 const G =styled.a`
        margin-bottom:10px;
        display: flex;
        flex-direction:column;
        font-weight:light;
        color: #8e8f92;
 `

 const FooterCard:React.FC<Iprops> = ({title, text, content,context,write,utiva,impact,nucleus, migrate}) => {
   return (
     <Container>

        <Wrapper>
            <H> {title} </H>
            <T> {text} </T>
            <C>{content} </C>
            <H1> {context} </H1>
            <Para>{write} </Para>
            <B>{utiva} </B>
            <D> {impact} </D>
            <E> {nucleus} </E>
            <G> {migrate} </G>
                
            

        </Wrapper>

     </Container>
   )
 }
 
 export default FooterCard