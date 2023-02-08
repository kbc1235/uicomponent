const Skill = ({skill, current})=>{
    return(
        <span ref={current}>{skill}</span>
    )
}

export default Skill;