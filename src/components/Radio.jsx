import { useRef,useEffect } from 'react';
import RadioItem from "./RadioItem";
import RadioWrap from "./RadioWrap"

const Radio = () => {
  return(
    <RadioWrap>
      <RadioItem id={'radio1'} name={'radio'} value={'radio1'}>라디오01</RadioItem>
      <RadioItem id={'radio2'} name={'radio'} value={'radio2'}>라디오02</RadioItem>
      <RadioItem id={'radio3'} name={'radio'} value={'radio3'}>라디오03</RadioItem>
      <RadioItem id={'radio4'} name={'radio'} value={'radio4'}>라디오04</RadioItem>
      <RadioItem id={'radio5'} name={'radio'} value={'radio5'}>라디오05</RadioItem>
    </RadioWrap>


  )
}

export default Radio;