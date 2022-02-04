import styled from 'styled-components'

export const Container = styled.section`
   width: 100%;
   height: 99vh;
   position: relative;
   overflow: hidden;
   background-color:#000;
`

export const ContentBody = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   position: absolute;
   top:48px;
   left:50%;
   transform: translateX(-50%);
   z-index:3;
`

export const TitleImg = styled.div`
   width: 100%;
   max-width:464px;
   align-items: center;
   z-index:3;

   @media screen and (max-width: 550px) {
      width: 80%;
      max-width:464px;
   }
`

export const Img = styled.img`
   height:123px;
   width:464px;

   @media screen and (max-width: 550px) {
      width: 100%;
      max-width:464px;
   }
`

export const Info = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   padding: 0px 20px;
   margin: 24px;
`

export const InfoTitle = styled.h2`
   color: rgb(255, 255, 255);
   font-weight: 800;
   font-size:32px;
   line-height:50px;
   margin-bottom: 26px;
   text-align: center;
`

export const BodyBtn = styled.div`
   display: flex;
   -webkit-box-align:center;
   align-items: center;
   justify-content: center;

   @media screen and (max-width: 550px) {
      height: 150px;
      justify-content: space-between;
      flex-direction: column;
   }
`

export const RegisterBtn = styled.button`
   width: 100%;
   max-width:160px;
   height: 48px;
   display: flex;
   -webkit-box-align:center;
   align-items: center;
   justify-content: center;
   font-weight:800;
   font-size:15px;
   line-height:24px;
   letter-spacing:0.2em;
   color:white;
   text-shadow:rgb(0 0 0 / 30%) 0px 2px 3px;
   border:0;
   z-index: auto;
   transition:text-shadow 0.4s ease-in-out 0s;
   background:linear-gradient(76.91deg, rgb(76, 232, 190) -125.56%, rgb(133, 67, 194) 116.11%); 
   flex-shrink:0;
   cursor:pointer;
`

export const Trailer = styled(RegisterBtn)`
   margin-left:30px;
   background:transparent;
   border:3px solid rgb(255, 255, 255);
   outline:0px;

   @media screen and (max-width: 550px) {
      margin-left:0px;
   }
`

export const TrailerSvg = styled.div`
   width:16px;
   height:16px;
   margin-right:7px;
`