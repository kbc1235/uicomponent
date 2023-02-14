import { useEffect, useRef } from 'react';
import styles from '../style/style.module.css';
import CarouselItem from './CarouselItem';
import Forwardedrefcarousel from './Carousel';

const CarouselWrap = () =>{
  const carousel = useRef();
  useEffect(()=>{
    const $carousel =  carousel.current
    let w = $carousel.children.length;

    $carousel.style.width = `calc(100% * ${w})`


    
  })
  

  return(
    <div className={styles.carouselwrap}>
      <Forwardedrefcarousel ref={carousel}>
          <CarouselItem imgName={'https://placeholder.com/assets/images/150x150-2-500x500.png'}/>
          <CarouselItem imgName={'https://placeholder.com/assets/images/150x150-2-500x500.png'}/>
          <CarouselItem imgName={'https://placeholder.com/assets/images/150x150-2-500x500.png'}/>
          <CarouselItem imgName={'https://placeholder.com/assets/images/150x150-2-500x500.png'}/>
          <CarouselItem imgName={'https://placeholder.com/assets/images/150x150-2-500x500.png'}/>
          <CarouselItem imgName={'https://placeholder.com/assets/images/150x150-2-500x500.png'}/>
          <CarouselItem imgName={'https://placeholder.com/assets/images/150x150-2-500x500.png'}/>
          <CarouselItem imgName={'https://placeholder.com/assets/images/150x150-2-500x500.png'}/>
      </Forwardedrefcarousel>
      <button type='button'>이전</button>
      <button type='button'>다음</button>
    </div>
  )
}

export default CarouselWrap;