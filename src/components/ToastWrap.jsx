import styles from '../style/style.module.css';

const ToastWrap = ({children})=>{
  return(
    <div className={styles.toastWrap}>
      {children}
    </div>
  )
}

export default ToastWrap;