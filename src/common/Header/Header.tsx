import React from 'react';
import HeaderClass from "./header.module.css";
import Nav from "../Nav/Nav";


const Header = () => {
    return(
    <div className={HeaderClass.headerContainer}>
       <Nav/>
    </div>
    )
}
export default Header ;