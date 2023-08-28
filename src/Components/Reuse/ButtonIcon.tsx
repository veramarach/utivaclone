import React from 'react'
import styled from "@emotion/styled"
import {MdArrowForward} from "react-icons/md"

interface Iprops {
    cl:string;
    bd: string;
    bg: string;
    text: string;
    
}


const But = styled.button<{bgg: string; bdd:string; cl:string;}>` 
            padding: 12px 24px 12px 24px;
            background-color:${(props)=> props.bgg};
            color: white;
            border: 1px solid ${(props) => props.bdd};
            cursor: pointer;
            transition: all 350ms;
            color: ${(props) => props.cl};
            border-radius: 5px;
            display: flex;

            :hover{
                transform: scale(0.97);
            }
   
`
const MainBut = styled.div`
      display: flex;
      align-items: center;
`
const Icon = styled.div`
      margin-left:30px;
`


const ButtonIcon :React.FC<Iprops> = ({cl, bd, bg, text}) => {
  return (
    <But cl = {cl} bdd= {bd} bgg= {bg}>
        <MainBut>
            {text}
        </MainBut>{" "}

        <Icon>
           {<MdArrowForward />}
        </Icon>

    </But>
  )
}

export default ButtonIcon;