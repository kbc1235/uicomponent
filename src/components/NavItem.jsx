
const NavItem = ({name, text, style, componet}) =>{
        return(
            <li>
                <button className={style} onClick={componet}>
                    <span data-text={text}  name={name}></span>
                </button>
            </li>
        )
}

export default NavItem;