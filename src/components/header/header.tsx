import {
   Header,
   HeaderContainer,
   NavMenu,
   TitleImg,
   ListLinks,
   Links,
   RegisterBtn,
   Menu,
   MenuItem,
   LinksBody,
   BodyPopap,
   PopapUl,
   PopapLinks,
} from './header.styled'
import titleSvg from './image/title.svg'

export const Hedaer = () => {
   return(
      <Header>
         <HeaderContainer>
            <NavMenu>
               <TitleImg>
                  <img src={titleSvg} alt="" />
               </TitleImg>

               <Menu>
                  <MenuItem />
                  <MenuItem />
                  <MenuItem />
               </Menu>
               <ListLinks>
                  <Links>Staking</Links>
                  <LinksBody>
                     <Links>Exchange</Links>

                     <BodyPopap>
                        <PopapUl>
                           <PopapLinks>Buy ILV</PopapLinks>
                           <PopapLinks>Land</PopapLinks>
                           <PopapLinks>IlluviDex</PopapLinks>
                           <PopapLinks>NFTs</PopapLinks>
                        </PopapUl>
                     </BodyPopap>
                  </LinksBody>

                  <Links>Illuviary</Links>

                  <Links>Careers</Links>

                  <LinksBody>
                     <Links>Community</Links>
                     <BodyPopap>
                        <PopapUl>
                           <PopapLinks>Blog</PopapLinks>
                           <PopapLinks>Discord</PopapLinks>
                           <PopapLinks>Telegram</PopapLinks>
                           <PopapLinks>Twitter</PopapLinks>
                        </PopapUl>
                     </BodyPopap>
                  </LinksBody>

                  <LinksBody>
                     <Links>More</Links>
                     <BodyPopap>
                        <PopapUl>
                           <PopapLinks>FAQ</PopapLinks>
                           <PopapLinks>Staking FAQ</PopapLinks>
                           <PopapLinks>Litepaper</PopapLinks>
                           <PopapLinks>Whitepaper</PopapLinks>
                           <PopapLinks>Quantstamp Audit</PopapLinks>
                           <PopapLinks>Governance</PopapLinks>
                           <PopapLinks>Governance</PopapLinks>
                        </PopapUl>
                     </BodyPopap>
                  </LinksBody>

                  <RegisterBtn>Register</RegisterBtn>
               </ListLinks>
            </NavMenu>
         </HeaderContainer>
      </Header>
   );
}