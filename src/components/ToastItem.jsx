import styles from '../style/style.module.css'
const ToastItem = ({msg = '메시지 없음'}) => {
  return(
    <div className={styles.toastitem}>
      {msg}
    </div>
  )
}

export default ToastItem