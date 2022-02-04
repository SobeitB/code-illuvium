import {
   EmblaBody,
   EmblaSlide,
   EmblaSlideImg,
} from './slider.styled'
import s from './embla.module.css'
import React, { useCallback, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react'

interface propsList {
   imageList: string[];
   embla__dot:number[];
}
export const Slider: React.FC<propsList> = ({imageList, embla__dot}) => {
   const [selectedIndex, setSelectedIndex] = useState<number>(0);
   const [emblaRef, embla] = useEmblaCarousel()

   const onThumbClick = useCallback((id: number) => {
      return () => {
         embla?.scrollTo(id)
         setSelectedIndex(id)
      }
   }, [embla])

   const inlineTwo = {
      order:`${window.innerWidth < 760 ? '2' : '1' }`,
   }

   return(
      <div style={inlineTwo} >
         <EmblaBody className={s.embla} ref={emblaRef}>
            <div className={s.embla__container}>
               {imageList.map((img:string) => {
                  return(
                     <EmblaSlide key={img} className={s.embla__slide}>
                        <EmblaSlideImg src={img} alt="" />
                     </EmblaSlide>
                  );
               }) }
            </div>
         </EmblaBody>
            <div className={s.embla__dots}>
               {embla__dot.map((indexDot) => {
                  return(
                     <button 
                        key={indexDot} 
                        onClick={onThumbClick(indexDot)}
                        className={`${s.embla__dot} ${selectedIndex === indexDot && s.embla__dot_active}`} 
                        type="button"
                     ></button>
                  );
               })}
         </div>
      </div>
   )
} 