import React from 'react';
import SkillExampleFStyle from "./SkillExampleFirst.module.css";

type SkillExampleType = {
    name:string,
}

const SkillExample = (props:SkillExampleType) => {
    return (
        <div className={SkillExampleFStyle.BlockContainer}>

            <div className={SkillExampleFStyle.logoName}>
                <img src={'logo'}/>
                    <div><h4>{props.name}</h4></div>
            </div>


            <div className={SkillExampleFStyle.description}>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
            </div>


        </div>
    )
}
export default SkillExample;