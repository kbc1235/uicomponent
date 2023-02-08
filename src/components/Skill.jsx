const Skill = ({skill, upRef, index})=>{
    return(
        <span ref={upRef}>{skill}</span>
    )
}

export default Skill;