import React from 'react';
import styles from '../style/style.module.css';

const Carousel = ({ children }, ref) =>{
  return(
    <div className={styles.carousel} ref={ref}>
      {children}
    </div>
  )
}

const Forwardedrefcarousel = React.forwardRef(Carousel)
export default Forwardedrefcarousel;