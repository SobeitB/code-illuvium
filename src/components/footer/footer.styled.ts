import styled from 'styled-components'

export const Footer = styled.footer`
   background:linear-gradient(rgb(19, 10, 42) 0%, rgb(28, 11, 71) 100%); 
`

export const BorderTop = styled.hr`
   margin: 0px;
   width: 99%;
   border-image-slice: 1;
   border-image-source:linear-gradient(270deg, rgba(9, 228, 97, 0) 0%, rgb(206, 239, 0) 17.19%, rgb(81, 249, 128) 34.38%, rgb(45, 81, 237) 50%, rgb(0, 96, 241) 67.19%, rgb(241, 0, 217) 83.33%, rgba(45, 73, 85, 0) 99.75%);
`

export const FooterContainer = styled.div`
   padding:32px ;
   height:100%;
   max-width:100%;
   margin: 0px auto;

   @media screen and (min-width: 768px) {
      padding:56px 56px 32px;
   }

   @media screen and (min-width: 992px) {
      padding:40px 24px 24px;
   }
`

export const Containersocial = styled.section`
   display: flex;
   flex-direction:column;
   justify-content: space-between;
   margin-bottom:32px;

   @media screen and (min-width: 981px) {
      display: flex;
      -webkit-box-pack:justify;
      justify-content: space-between;
      flex-direction: row;
   }
`

export const TitleImg = styled.div`
   width: 160px ;
   height: 42px;
`

export const BodyImg = styled.div`
   margin-top:20px;

   @media screen and (min-width: 768px) {
      margin-top:0px;
   }
`

export const TextBottom = styled.div`
   text-align:center;
   margin-top:32px;
   color:rgb(116, 116, 170);
   font-size:0.9em;
`

export const InfoLinks = styled.div`
   display: flex;
   @media screen and (min-width: 768px) {
      -webkit-box-pack:justify;
      justify-content:space-between;
      width: 24%;
   }
`

export const Links = styled.a`
   display: flex;
   color:rgb(116, 116, 170);
   font-weight:bold;
   text-decoration:none;
   margin-bottom:8px;

   &:hover{
      color:white;
   }

   @media screen and (min-width: 768px) {
      padding-right:32px;
   }
`

export const InfoProject = styled.div`
   
   @media (max-width: 980px) {
      width: 24%;
   }

   @media screen and (min-width: 981px) {
      width: 80%;
      display: flex;
      align-items: flex-start;
      border-left:1px solid rgb(37, 33, 79);
   }

   @media screen and (min-width: 768px) {
      width: 32%;
      display: flex;
      -webkit-box-align:center;
      align-items: center;
      -webkit-box-pack:center;
      margin:10px 0;
   }
`

export const InfoPrice = styled.div`
   margin:32px 0px;
   width:80%;
   display: flex;

   @media screen and (min-width: 768px) {
      margin: 0px;
      min-width:160px;
      justify-content:center;
      -webkit-box-pack:center;
   }
`

export const Icon = styled.div`
   margin-right:8px;

   @media screen and (min-width: 768px) {
      position: relative;
      top:4px;
   }

   @media screen and (min-width: 992px) {
      top:12px;
      margin-right:16px;
      width:90%;
   }
`

export const BodyPrice = styled.div`
   width: 100%;
`

export const PriceText = styled.p`
   color:rgb(116, 116, 170);
   font-weight:bold;
   margin-bottom:4px;

   @media screen and (min-width: 992px) {
      margin-bottom:8px;
   }
`


export const Price = styled.p`
   color:rgb(255, 255, 255);
   font-size:1.3em;

   @media screen and (min-width: 992px) {
      margin:14px 0 8px;
   }

   @media screen and (min-width: 768px) {
      margin:4px 0 8px;
   }
`

export const PricePercent = styled.p`
   display: flex;
   color:rgb(94, 219, 74);
`

export const Percent = styled.div`
   margin-right:4px;
`

export const Available = styled.div`
   width: 100%;
   @media screen and (max-width: 1050px) {
      width: 60%;
   }

   @media screen and (max-width: 1000px) {
      width: 40%;
   }
`

export const AvailableTitle = styled.p`
   margin-bottom:8px;
   color:rgb(116, 116, 170);
   font-weight:bold;
`

export const AvailableBody = styled.div`
   display: flex;
   flex-wrap: wrap;
   width: 70%;

   @media screen and (max-width: 1000px) {
      width: 80%;
   }
`

export const AvailableItem = styled.div`
   margin-right:16px;
   padding:6px 0px 0px;

   @media screen and (min-width: 992px) {
      margin-right:24px;
   }
`

export const AvailableText = styled.a`
   font-size:1.2em;
   color:white;
   display: flex;
   align-items: center;
   -webkit-box-align:center;
`





