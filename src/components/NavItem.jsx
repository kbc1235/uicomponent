
const NavItem = ({name, style}) =>{
        return(
            <li>
                <button className={style}>
                    <span data-text={name}></span>
                </button>
            </li>
        )
}

export default NavItem;