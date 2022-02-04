import {
   Container,
   ContentBody,
   TitleImg,
   Info,
   InfoTitle,
   BodyBtn,
   RegisterBtn,
   Trailer,
   TrailerSvg,
   Img,
} from './oneSection.styled'
import titleImg from '../../../../components/header/image/title.svg'

export const OneSection = () => {
   return(
      <Container>
         <ContentBody>
            <TitleImg>
               <Img src={titleImg} alt="" />
            </TitleImg>

            <Info>
               <InfoTitle>Fight for ETH.</InfoTitle>

               <BodyBtn>
                  <RegisterBtn>Register</RegisterBtn>

                  <Trailer>
                     <TrailerSvg>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM11.1109 8.00005L6.22201 4.4445V11.5556L11.1109 8.00005Z" fill="white"></path></svg>
                     </TrailerSvg>
            
                     Trailer
                  </Trailer>
               </BodyBtn>
            </Info>
         </ContentBody>
      </Container>
   )
}