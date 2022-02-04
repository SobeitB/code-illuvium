import {
   Container,
   BodyAnimation,
   Title,
   Img,
} from './threeSection.styled'

export const ThreeSection = () => {
   return(
      <Container>
         <BodyAnimation data-aos="fade-up" data-aos-duration="2000">
            <Title>Our partners</Title>

            <Img src="https://www.illuvium.io/images/homepage-content/our-partners.webp" alt=""/>
         </BodyAnimation>
      </Container>
   )
}