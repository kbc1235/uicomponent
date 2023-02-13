import {useRef, useEffect, useState} from 'react'
import styles from '../style/style.module.css'
import ToastWrap from './ToastWrap';
import ToastItem from './ToastItem';

const msgList = {
  complete : '성공하였습니다.',
  cancel : '취소하였습니다.',
}

const Toast = () =>{
  const [toast, setToast] = useState(false);
  const [toastMsg, setToastMsg] = useState('');
  const addToast = (type) => {
    setToast(true);
    setToastMsg(msgList[type]);
  }
  useEffect(()=>{
    if(toast){
      setTimeout(()=> {
        setToast(false);
        setToastMsg('');
      },1000);
    }
  },[toast])
  return(
    <div className={styles.toast}>
      <button type="button" className={styles.open} onClick={()=> addToast('complete')}>확인</button>
      <button type="button" className={styles.open} onClick={()=> addToast('cancel')}>취소</button>
      <ToastWrap>
       {
        toast && <ToastItem msg={toastMsg} />
       }   
      </ToastWrap>
    </div>
  )
}

export default Toast;