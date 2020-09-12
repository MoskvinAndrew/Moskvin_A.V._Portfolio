import React from 'react';
import MainStyle from "./main.module.css";
import containerCont from './../../styles/Container.module.css';


const Main = () => {
    return (
        <div className={MainStyle.BlockContainer}>

            <div className={containerCont.contentContainer}>

            <div className={MainStyle.text}>
                <span>Hi there,</span>
                <h1>My name is Andrew Moskvin.</h1>
                <p>I'm front-end developer.</p>
            </div>


                <img className={MainStyle.photo} src={'https://st.kp.yandex.net/images/actor_iphone/iphone360_6264.jpg'}/>


            </div>
        </div>
    )
}
export default Main;