import React from 'react';
import SkillsStyle from "./Skills.module.css";
import SkillExample from "./SkillExampleFirst/SkillExampleFirst";


const Skills = () => {
    return (
        <div className={SkillsStyle.container}>
            <div className={SkillsStyle.contentContainer}>
         <div className={SkillsStyle.blockName}><h2>My skills:</h2></div>
         <div className={SkillsStyle.skillExample}>
             <SkillExample name={"REACT"}/>
             <SkillExample name={"REDUX"}/>
             <SkillExample name={"TYPESCRIPT"}/>
         </div>
            </div>

            </div>

    )
}
export default Skills;