import { useState } from 'react';
import Pop from './Pop';
import styles from '../style/style.module.css';

const Modal = () =>{
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true)
  }
  const closeModal = () => {
    setOpen(false)
  }
  return(
    <div className={styles.modal_wrap}>
      <button type='button' className={styles.open} onClick={openModal}>팝업 열기</button>
      <Pop open={open} close={closeModal} content={'야생의 모달팝업이 등장했다.'}/>
    </div>
  )
}

export default Modal;