import styles from '../style/style.module.css';

const ToastWrap = ({childen})=>{
  return(
    <div className={styles.toastWrap}>
      {childen}
    </div>
  )
}

export default ToastWrap;