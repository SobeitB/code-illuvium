import styled from 'styled-components'

export const Container = styled.section`
   padding: 80px 0;
   background-color:rgb(17, 15, 36);
   overflow: hidden;
`

export const BodyForm = styled.div`
   position: relative;
   z-index:1;
`

export const LampGreen = styled.div`
   position: absolute;
   width: 216px;
   height: 216px;
   right:72px;
   top:45px;
   background-color:rgb(76, 232, 190);
   opacity:0.5;
   filter:blur(94px);
   z-index:10;
   border-radius: 50px;
   animation:2s ease-in-out 0s infinite alternate-reverse both running blur-out-expand, 10s ease-in-out 0s infinite alternate-reverse none running move-horizontally;
`

export const LampPurple = styled.div`
   position: absolute;
   width: 197px;
   height: 197px;
   left:78px;
   bottom:45px;
   background-color:rgb(111, 59, 132);
   opacity:0.5;
   filter:blur(94px);
   z-index:10;
   border-radius: 50px;
   animation:2s ease-in-out 0s infinite alternate-reverse both running blur-out-expand, 10s ease-in-out 0s infinite alternate-reverse none running move-horizontally;
`

export const BodyTitle = styled.h2`
   font-size:40px;
   line-height:56px;
   color:white;
   text-align:center;
   margin-bottom: 48px;
`

export const Form = styled.form`
   position: relative;
   z-index:20;
`

export const FormContainer = styled.form`
   display: flex;
   align-items: center;
   justify-content: center;
`

export const FormInput = styled.input`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 100%;
   max-width:363px;
   height: 48px;
   padding-left:16px;
   border:0;
   background: rgba(76, 232, 190, 0.15);
   border-radius:2px;
   color:white;
   z-index:11;
`
export const FormBtn = styled.button`
   display: flex;
   align-items: center;
   justify-content: center;
   position: relative;
   width: 100%;
   max-width:160px;
   height: 48px;
   background:linear-gradient(78.49deg, rgb(76, 232, 190) -28.53%, rgb(133, 67, 194) 257.48%);
   border:none;
   cursor:pointer;
   font-weight: 800;
   font-size:15px;
   color:white;
   text-shadow:rgb(0 0 0 / 30%) 0px 2px 3px;
   transition:text-shadow 0.4s ease-in-out 0s;
`
