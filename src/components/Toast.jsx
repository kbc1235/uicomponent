import {useRef, useEffect, useState} from 'react'
import styles from '../style/style.module.css'
import ToastWrap from './ToastWrap';
import ToastItem from './ToastItem';


const Toast = () =>{
  const [toast, setToast] = useState(false);
  const addToast = () => {
    setToast(true);
    setTimeout(()=>{
      setToast(false)
    },2000)
  }

  return(
    <div>
      <button type="button" className={styles.open} onClick={addToast}>Toast On</button>
      <ToastWrap>
       {
        toast ? 
        <ToastItem />
        : null
       }   
      </ToastWrap>
    </div>
  )
}

export default Toast;