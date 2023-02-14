import { useEffect, useRef, useState } from "react";
import styles from "../style/style.module.css";
import CarouselItem from "./CarouselItem";
import Forwardedrefcarousel from "./Carousel";

const TOTAL_SLIDES = 2;
const CarouselWrap = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);

  const NextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  // Prev 버튼 클릭 시
  const PrevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    carouselRef.current.style.transition = "all 0.5s ease-in-out";
    carouselRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  return (
    <div className={styles.carouselwrap}>
      <Forwardedrefcarousel ref={carouselRef}>
        <CarouselItem
          imgName={
            "https://placeholder.com/assets/images/150x150-2-500x500.png"
          }
        />
        <CarouselItem
          imgName={
            "https://placeholder.com/assets/images/150x150-2-500x500.png"
          }
        />
        <CarouselItem
          imgName={
            "https://placeholder.com/assets/images/150x150-2-500x500.png"
          }
        />
      </Forwardedrefcarousel>
      <button type="button" onClick={PrevSlide}>
        이전
      </button>
      <button type="button" onClick={NextSlide}>
        다음
      </button>
    </div>
  );
};

export default CarouselWrap;
