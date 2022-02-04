import styled from 'styled-components'

export const Header = styled.header`
   background-color:rgb(17, 15, 36);
   position:stiky;
   width: 100%;
   left:0;
   z-index:11;
   top:40px;
`

export const HeaderContainer = styled.div`
   padding:0px 20px 0px;
   max-width:1200px;
   margin:0px auto;

   @media screen and (max-width:980px) {
      padding-left:1em;
   }
`

export const NavMenu = styled.div`
   display: flex;
   -webkit-box-align:center;
   align-items:center;
   justify-content:space-between;
`

export const Menu = styled.button`
   display: none;
   position: absolute;
   right: 0.4em;
   top:1.6em;
   flex-direction: column;
   justify-content: space-between;
   width: 2rem;
   height: 1.2rem;
   background: transparent;
   border: none;
   cursor: pointer;
   padding: 0px;
   z-index:10px;

   @media screen and (max-width:810px) {
      display: flex;
   }
`

export const MenuItem = styled.button`
   width: 1.5rem;
   height: 0.2rem;
   background: white;
   border-radius:10px;
   transition: all 0.3s linear 0s;
   position: relative;
   transform-origin:1px center;
   border: none;
`

export const TitleImg = styled.button`
   background: none;
   border: none;
   margin-bottom:1.2em;
`

export const ListLinks = styled.ul`
   display: flex;
   flex: 1 0 auto;
   -webkit-box-align:center;
   align-items: center;
   justify-content: center;

   @media screen and (max-width: 800px) {
      display: none;
   }
`

export const MeniBody = styled.div`
   display: flex;
   flex: 1 0 auto;
   -webkit-box-align:center;
   align-items: center;
   justify-content: center;

   @media screen and (max-width: 800px) {
      display: none;
   }
`

export const BodyPopap = styled.div`
   min-width: 200px;
   background: rgb(17, 15, 36);
   position: absolute;
   top:40px;
   opacity: 0;
   visible:hidden;
   transform: translateY(-5px);
   transition: all 0.4s ease 0s;
   z-index:100;

   &:hover {
      opacity:1;
   }
`

export const PopapUl = styled.ul`
   padding: 1em;
`

export const PopapLinks = styled.li`
   list-style-type:none;
   padding: 1em;
   color:rgb(116, 116, 170);
   fill:rgb(116, 116, 170);
`

export const LinksBody = styled.div`
   position: relative;
   display: flex;
   justify-content: space-evenly;
`

export const Links = styled.a`
   color: rgb(116, 116, 170);
   fill:rgb(116, 116, 170);
   text-align:center;;
   position: relative;
   display: flex;
   flex-direction: column;
   overflow: visible;
   cursor: pointer;
   margin: 0px 0.9em;

   &:hover{
      color:white;
   }

   &:hover + ${BodyPopap} {
      opacity:1;
   }

   @media screen and (max-width: 900px) {
      margin: 0px 0.6em;
   }
`

export const RegisterBtn = styled.a`
   display: flex;
   align-items: center;
   justify-content: center;
   position: relative;
   width: 100%;
   max-width: 160px;
   height: 48px;
   text-transform: uppercase;
   font-weight:800;
   font-size: 15px;
   line-height:24px;
   letter-spacing:0.2em;
   color: white;
   text-shadow:rgb(0 0 0 / 30%) 0px 2px 3px;
   border:0px;
   z-index:auto;
   transition:text-shadow 0.4s ease-in-out 0s;
   margin: 0px 1em 0 2em;
   background-color:rgb(42, 30, 57);
   cursor:pointer;

   &:hover{
      text-shadow:rgb(145 72 206) -1px 0px, rgb(76 232 190) 1px 0px, rgb(0 0 0 / 30%) 0px 2px 3px;
   }

   @media screen and (max-width: 850px) {
      margin: 0px 0.5em 0 0;
      width: 80%;
      max-width: 140px;
   }
`