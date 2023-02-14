import styles from '../style/style.module.css';
const CarouselItem = ({imgName, alt}) =>{
  return(
    <div className={styles.carouseiItem}>
      <img src={imgName} alt={alt} />
    </div>
  )
}

export default CarouselItem;