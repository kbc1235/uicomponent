
import { useEffect, useRef } from "react";
import styles from "../style/style.module.css";
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
  const height = useRef();
  useEffect(()=>{
    
    
  },[])

  return (
    <div className="" >
      <div>
        <div className={styles.skill_box}>
          <div className={styles.skill_view} ref={dom}>
            {skills.map((data, index) => {
              return <Skill skill={data} key={index} current={height}/>;
            })}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Main;
