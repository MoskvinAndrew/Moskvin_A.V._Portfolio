import React from 'react';
import FooterStyle from "./Footer.module.css";


const Footer = () => {
    return(
        <div className={FooterStyle.footerContainer}>
           <div className={FooterStyle.footerName}>
               <h2>Moskvin Andrew</h2>

               <div className={FooterStyle.unKnownBlock}>
               </div>

               <div className={FooterStyle.text}>
                   <span> © 2020 All rights reserved </span>
               </div>

           </div>
        </div>
    )
}
export default Footer;