import styles from '../style/style.module.css';
import NavItem from "./NavItem";
const Nav = ()=>{
    const Items = ['Modal','Grid','Slider', 'ETC', 'ETC', 'ETC', 'ETC', 'ETC'];

    return(
        <ul className={styles.nav}>
           {Items.map((value, index)=>{
            return <NavItem name={value} key={index} style={styles.nav_item}/>
        })}
        </ul>
    )
}

export default Nav;