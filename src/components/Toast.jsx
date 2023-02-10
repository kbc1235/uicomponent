import styles from '../style/style.module.css'
import ToastWrap from './ToastWrap';

const Toast = () =>{
  return(
    <div>
      <button type="button" className={styles.open}>Toast On</button>
      <ToastWrap />
    </div>
  )
}

export default Toast;