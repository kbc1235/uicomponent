
const NavItem = ({name, text, style, componet}) =>{
        return(
            <li>
                <button className={style} onClick={componet} data-text={text} name={name}></button>
            </li>
        )
}

export default NavItem;