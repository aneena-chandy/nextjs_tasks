function Skills({skills}){
return(
    <ul>
        {
            skills.map((skill,index) =>(
                  <li key={index}>{skill}</li>
        ))}
    </ul>
);
}
export default Skills;