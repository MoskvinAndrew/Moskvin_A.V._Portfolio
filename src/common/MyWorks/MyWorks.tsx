import React from 'react';
import MyWorksStyle from "./MyWorks.module.css";
import WorkExample from "./WorkExample/WorkExample";



const MyWorks = () => {
    return (
        <div className={MyWorksStyle.container}>
            <div className={MyWorksStyle.contentContainer}>
                <div className={MyWorksStyle.blockName}><h2>My works:</h2></div>
                <div className={MyWorksStyle.skillExample}>
                    <WorkExample/>
                    <WorkExample/>
                </div>
            </div>

        </div>

    )
}
export default MyWorks;