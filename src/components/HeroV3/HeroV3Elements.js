import styled from 'styled-components';
import {Link} from 'react-scroll';
import {MdKeyboardArrowRight,MdArrowForward} from 'react-icons/md';


export const MaizeContainer = styled.div`
 ${'' /* height:100%; */}
 width:100%;
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-items:center;
 background:#fff;
 padding:10px;
 z-index:1;

 :before {
     content:'';
     position:Absolute;
     top:0;
     left:0;
     right:0
     bottom:0;
     background:linear-gradient(180deg, rgba(0,0,0,0.2) 0%,  rgba(0,0,0,0.6) 100%) , 
     linear-gradient(180deg, rgba(0,0,0,0.2) 0%,  transparent 100%);
     z-index:2;

`

export const MaizeWrapper = styled.div`
 background:#fbfbfd;
 padding-bottom:56px;
 padding-top:5vh;
`


export const MaizeText = styled.div`
 width:100%
 display:flex;
 text-align:center;
 align-content:center;
 justify-content:center;
 padding-top:0px;
 top:0;
 flex-shrink:1;
 position:relative;
` 



export const MaizeH4 = styled.h4`
 font-family: "SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
 font-size:17px;
 line-height:.9;
 font-weight:400;
 letter-spacing: -.022em;
 margin-top:.4em;
`

export const MaizeH3 = styled.h3`
 font-size:21px;
 margin-top:.4em;
 line-height:.9;
 font-weight:500;
 letter-spacing: -.022em;
 font-family: "SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
`

export const HeroH1 = styled.h1`
 font-family:"SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
 margin-top:20px;
 font-size:48px;
 line-height:1.07143;
 font-weight:400px;
 letter-spacing:-.005em;
 color:#1d1d1f;

 
 @media screen and (max-width:768px) {
     font-size:40px;
 }

 @media screen and (max-width:480px) {
     font-size:32px;
`



export const MaizeP = styled.p`
 font-family:"SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
 font-size:21px;
 height:16px;
  
 @media screen and (max-width:768px) {
     font-size:16px;
 }

 @media screen and (max-width:480px) {
     font-size:16px;
 }
`

export const HeroP = styled.p`
 font-family:"SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
 height:16px;
  
 @media screen and (max-width:768px) {
     font-size:16px;
 }

 @media screen and (max-width:480px) {
     font-size:16px;
 }
`



export const Button = styled(Link)`
 color:#2c8746;
 display: flex;
 justify-content:center;
 align-items:center;
 font-style: normal;
 z-index: 1;
 text-align:center;
 font-family: "SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
 font-weight:400;
 margin-top:.4em;
 font-size: 17px;
 line-height: 1.381;
`

export const ArrowForward = styled(MdArrowForward)` 
 margin-left:8px;
 font-size:20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
 margin-left:8px;
 font-size:20px;
`




//maize content for images section

export const HeroContent = styled.div`
 display:flex; 
 flex-wrap:wrap;
 width:98%;
 padding:16px;
 margin:auto;
 justify-content:space-around;
 align-items:center;
 margin-bottom:-24px;
 margin-top:24px;
 text-align:center;
 
 
 
 @media screen and (max-width:720px) {
     flex-direction:column;
     align-items:center;

 }

`





export const MaizeCard = styled.div`
 margin:auto;
 line-height:75px;
 display:flex;
 flex-direction:column;
 flex-basis:25%;
 padding:28px;
 text-align:center;
 align-content:center;
 justify-content:center;

 @media screen and (max-width:720px) {
     display:grid;
     grid-template-column:1fr;
 }
`

export const MaizeIcon = styled.img`
 margin:auto;
 width:50%;
 padding-bottom:36px;
`