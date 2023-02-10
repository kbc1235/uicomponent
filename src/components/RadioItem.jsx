import styles from '../style/style.module.css';

const RadioItem = ({children,id,name,value,defaultCheckd,disabled})=>{

  return(
    <div className={styles.radio_box}>
      <input
        type='radio'
        id={id}
        name={name}
        value={value}
        defaultChecked={defaultCheckd}
        disabled={disabled}
      />
      <label htmlFor={id} >{children}</label>
    </div>
  )
}

export default RadioItem