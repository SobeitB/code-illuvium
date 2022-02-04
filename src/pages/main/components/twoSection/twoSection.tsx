import {
   Container,
   BodyContent,
   WelcomeBody,
   WelcomeTitle,
   WelcomeText,
   BodyBuild,
   BodyItemsText,
   ItemsTitle,
   ItemsText,
   EmblaSlideImg,
   BodyItems,
} from './twoSection.styled'

import {Slider} from '../../../../components/slider/slider'

export const TwoSection = () => {

   const sliderOne = {
      imageList:[
         'https://www.illuvium.io/images/homepage-content/welcome-to-illuvium.webp',
         'https://www.illuvium.io/images/homepage-content/crimson-waste.webp',
         'https://www.illuvium.io/images/homepage-content/halcyon.webp',
         'https://www.illuvium.io/images/homepage-content/biome.webp',
         'https://www.illuvium.io/images/homepage-content/interactive.webp'
      ],
      embla__dot:[0, 1, 2, 3, 4, 5]
   }

   const sliderTwo = {
      imageList:[
         'https://www.illuvium.io/images/homepage-content/huge-roaster-to-collect.webp',
         'https://www.illuvium.io/images/homepage-content/thyla.webp',
         'https://www.illuvium.io/images/homepage-content/pistol-shrimp.webp',
         'https://www.illuvium.io/images/homepage-content/squizz.webp',
         ''
      ],
      embla__dot:[0, 1, 2, 3, 4]
   }

   const inlineOne = {
      order:`${window.innerWidth < 760 ? '1' : '2' }`,
   }

   const inlineTwo = {
      order:`${window.innerWidth < 760 ? '2' : '1' }`,
   }

   return(
      <Container>
         <BodyContent 
            data-aos="fade-up" 
            data-aos-duration="1500"
         >
            <WelcomeBody>
               <WelcomeTitle>Welcome to Illuvium</WelcomeTitle>

               <WelcomeText>An open-world RPG adventure game built on the Ethereum Blockchain. Journey across a vast and varied landscape on your quest to hunt and capture deity-like creatures called Illuvials. Discover the cause of the cataclysm that shattered this land.</WelcomeText>
               
               <Slider 
                  imageList={sliderOne.imageList}
                  embla__dot={sliderOne.embla__dot}
               />

               <BodyBuild>
                  <BodyItemsText right={true}>
                     <ItemsTitle>Build the perfect team</ItemsTitle>
                     <ItemsText>Draft your starters. Challenge to be the best. Outsmart and counter your opponents strategically to place rank in competition. Earn $ILV through play, and become part of our community-based governance.</ItemsText>
                  </BodyItemsText>

                  <EmblaSlideImg 
                     alt="" 
                     src="https://www.illuvium.io/images/homepage-content/build-the-perfect-team.webp"
                  />
               </BodyBuild>

               <BodyItems>
                  <Slider 
                     imageList={sliderTwo.imageList}
                     embla__dot={sliderTwo.embla__dot}
                  />

                  <BodyItemsText style={inlineOne} right={true}>
                     <ItemsTitle>A huge roster to collect</ItemsTitle>
                     <ItemsText>100+ Illuvials populate this alien world. Each possess different affinities, classes, and abilities. Capture them. Fuse them. Upgrade your Illuvials and discover more powerful forms.</ItemsText>
                  </BodyItemsText>
               </BodyItems>

               <BodyItems>
                  <BodyItemsText right={true}>
                     <ItemsTitle>Backed by the blockchain</ItemsTitle>
                     <ItemsText>Store your Illuvials on Shards. Sleek crystal slivers that hold the essence of the creature inside. Compare stats with your friends and flaunt your rare shiny, cosmic, and holo collectibles.</ItemsText>
                  </BodyItemsText>

                  <EmblaSlideImg 
                     alt="" 
                     src="https://www.illuvium.io/images/homepage-content/backed-by-blockchain.webp"
                  />
               </BodyItems>

               <BodyItems>
                  <EmblaSlideImg 
                     style={inlineTwo}
                     alt="" 
                     src="https://www.illuvium.io/images/homepage-content/say-goodbye-to-gas.webp"
                  />

                  <BodyItemsText style={inlineOne} right={false}>
                     <ItemsTitle>Say goodbye to GAS</ItemsTitle>
                     <ItemsText>Enjoy a new era of NFTs thanks to integration with Immutable X. Zero gas fees for peer-to-peer trading with instant transactions, all while you securely maintain custody of your assets.</ItemsText>
                  </BodyItemsText>
               </BodyItems>
            </WelcomeBody>
         </BodyContent>
      </Container>
   )
}