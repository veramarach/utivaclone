


import React from 'react'
import styled from '@emotion/styled'




const Card=styled.b <{cl:string; bgg:string;bcc:string; text:string; icon:any;}>`
       display: flex;
       
       left: 30px;
       background-color:${(props)=> props.bgg};
       color:${(props) => props.cl};
       padding:15px 15px 15px 15px;
       border-radius:25px;
       border-color:${(props) => props.bcc}
       


`
const Text = styled.text``
const Icon = styled.div``

interface Iprops {
    cl :string;
    bg :string;
    bc :string;
    text :string;
    icon: any;

}


const Bootcard:React.FC <Iprops> = ( {cl, bg, bc, text, icon} ) => {
  return (
    
       <Card cl={cl} bgg={bg} bcc= {bc}>
        <Text> {text} </Text>
        <Icon> {icon} </Icon>
       </Card>
    
  )
}

export default Bootcard