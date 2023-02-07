import { MAIN_DATA } from './MainData';
import styles from '../style/style.module.css';
import NavItem from "./NavItem";


const Nav = ({add})=>{
    return(
        <ul className={styles.nav}>
            {
            MAIN_DATA.map(data=>{
               return <NavItem name={data.text} componet={add} key={data.id} style={styles.nav_item}/>
            })
           }
        </ul>
    )
}

export default Nav;