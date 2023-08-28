import React from 'react'
import { Global, css} from "@emotion/react"
import font1 from '../../Fonts/Raleway/static/Raleway-Black.ttf'
import font2 from "../../Fonts/Raleway/static/Raleway-BlackItalic.ttf"
import  font3 from "../../Fonts/Raleway/static/Raleway-Bold.ttf"
import font4 from "../../Fonts/Raleway/static/Raleway-BoldItalic.ttf"
import font5 from "../../Fonts/Raleway/static/Raleway-ExtraBold.ttf"
import font6 from "../../Fonts/Raleway/static/Raleway-ExtraBoldItalic.ttf"
import font7 from "../../Fonts/Raleway/static/Raleway-ExtraLight.ttf"
import font8 from "../../Fonts/Raleway/static/Raleway-ExtraLightItalic.ttf"
import font9 from "../../Fonts/Raleway/static/Raleway-Italic.ttf"
import font10 from "../../Fonts/Raleway/static/Raleway-Light.ttf"
import font11 from "../../Fonts/Raleway/static/Raleway-LightItalic.ttf"
import font12 from "../../Fonts/Raleway/static/Raleway-Medium.ttf"

const Globalstyle: React.FC = () => {
  return (
    <div>
        <Global 
        styles = {css`
                 :root {
                    --color-primary: #050794;
                    
                 }
        font-family: "CustomFont";
        src: url(${font1});
        src: url(${font2});
        src: url(${font3});
        src: url(${font4});
        src: url(${font5});
        src: url(${font6});
        src: url(${font7});
        src: url(${font8});
        src: url(${font9});
        src: url(${font10});
        src: url(${font11});
        src: url(${font12});


body{
    font-family: CustomFont;
}



            
        `}
        
        
        
        
        />
    </div>
  )
}

export default Globalstyle;