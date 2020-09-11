import React from 'react';
import toHireMeStyle from "./toHireMe.module.css";




const ToHireMe = () => {
    return(
        <div className={toHireMeStyle.blockContainer}>
         <div className={toHireMeStyle.contentContainer}>
             <div className={toHireMeStyle.text}>
                 <h2>Considering options for remote work</h2>
             </div>
             <button>Hire me</button>
         </div>
        </div>
    )
}

export default ToHireMe;