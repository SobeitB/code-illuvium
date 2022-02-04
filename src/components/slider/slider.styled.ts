import styled from 'styled-components'

export const EmblaBody = styled.div`
   position: relative;
   margin-left:auto;
   margin-right: auto;

   @media (max-width:1040px) {
      width:80%;
   }

   @media (max-width:760px) {
      width:100%;
   }
`

export const EmblaSlide = styled.div`
   position: relative;
   min-width:100%;
   padding-left:10px;
   cursor:grab;
`

export const EmblaSlideImg = styled.img`
   max-width:100%;
`