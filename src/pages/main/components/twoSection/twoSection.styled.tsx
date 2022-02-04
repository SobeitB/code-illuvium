import styled from 'styled-components'

export const Container = styled.section`
   margin-top:-30vh;
   z-index: 3;
   padding: 360px 20px 160px;
   background: linear-gradient(200deg, rgb(38, 20, 66) 0%, rgb(19, 10, 42) 50%, rgb(42, 91, 170) 100%);

   @media (min-width: 768px) {
      background-image:url(https://www.illuvium.io/images/backgrounds/1440x900.jpg);
      background-position:center center;
      background-repeat:no-repeat;
      background-attachment:fixed;
      background-size:cover;
   }

   @media (max-width: 750px) {
      padding: 360px 20px 10px;
   }
`

export const BodyContent = styled.div`
   width: 100%;
   max-width:1216px;
   margin: 0 auto;
`

export const WelcomeBody = styled.div`
   max-width:1200px;
   margin: 0px auto 128px;
   text-align: center;
   overflow: hidden;

   @media screen and (max-width: 930px) {
      max-width:720px;
   }
`

export const WelcomeTitle = styled.h1`
   margin-bottom: 24px;
   font-weight: 800;
   font-size:48px;
   line-height:56px;
   text-align: center;
   color:white;
`

export const WelcomeText = styled.p`
   margin: 24px 0px 48px;
   font-weight: normal;
   font-size:18px;
   line-height:27px;
   color:white;
`

export const EmblaSlideImg = styled.img`
   max-width:100%;

   @media (max-width:1040px) {
      max-width:50%;
   }

   @media (max-width:750px) {
      max-width:90%;
   }
`

export const BodyItems = styled.div`
   margin-top:112px;
   display: flex;
   -webkit-box-align:center;
   align-items:center;

   @media (max-width:750px) {
      flex-direction: column;
      width:80%;
      margin: 0 auto;
      margin-top:50px;
   }
`

export const BodyItemsText = styled.div.attrs((props: {right:boolean}) => props)`
   width:100%;
   max-width:440px;
   margin-right:${(props) => props.right && '70px'};
   margin-left:${(props) => !props.right && '70px'};

   @media screen and (max-width: 1279px) {
      margin-right:40px;
   }

   @media screen and (max-width: 750px) {
      margin-right:0;
      margin-left:0;
   }
`

export const ItemsTitle = styled.h2`
   color: #fff;
   font-weight: 800;
   line-height:50px;
   font-size:39px;
   margin-bottom: 20px;
`

export const ItemsText = styled.div`
   font-weight: normal;
   font-size:18px;
   line-height:27px;
   color:white;
   margin-bottom:24px;
`

export const BodyBuild = styled(BodyItems)`
   margin-top:0px;
`