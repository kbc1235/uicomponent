
const NavItem = ({name, style, componet}) =>{
        return(
            <li>
                <button className={style} onClick={componet}>
                    <span data-text={name}></span>
                </button>
            </li>
        )
}

export default NavItem;