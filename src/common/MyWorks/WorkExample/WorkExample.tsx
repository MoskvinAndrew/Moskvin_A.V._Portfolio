import React from 'react';
import Example from "./WorkExample.module.css";


const WorkExample = () => {
    return(
        <div className={Example.MainContainer}>

            <div className={Example.topOfExampleBlock}>
                <img src={"https://testcreative.co.uk/wp-content/uploads/2018/08/Test-Twitter-Icon.jpg"}/>
                <button>Open</button>
            </div>


            <div className={Example.bottomOfExampleBlock}>
                <span>Название проекта.</span>
                <p>Краткое описание Проекта.</p>
            </div>

        </div>
    )
}
export default WorkExample;