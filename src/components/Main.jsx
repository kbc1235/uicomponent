import { useEffect, useRef } from "react";
import styles from "../style/style.module.css";
import Profile from "./Profile";
import Skill from "./Skill";

const Main = () => {
  const skills = [
    "HTML",
    "CSS",
    "JS",
    "Jquery",
    "SCSS",
    "REACT",
    "Figma",
    "Jira",
    "GitHub",
  ];
  const dom = useRef();
  const viewWrap = useRef();

  useEffect(() => {
    let h = viewWrap.current.offsetHeight;
    let y = h;
    let max = parseInt(h * skills.length);
    setInterval(() => {
      if (h >= max) {
        h = 0;
        dom.current.style.transform = `translateY(${h}px)`;
      }
      dom.current.style.transform = `translateY(-${h}px)`;
      h += y;
    }, 2000);
  });

  return (
    <div className={styles.main_wrap}>
      <Profile name={'김영우'} />
      <div className={styles.main}>
        <div className={styles.main_title}>I can use</div>
        <div className={styles.skill_box} ref={viewWrap}>
          <div className={styles.skill_view} ref={dom}>
            {skills.map((data) => {
              return <Skill skill={data} key={data} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
