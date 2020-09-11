import React from 'react';
import ContactsStyle from "./Contacts.module.css";




const Contacts = () => {
    return(
        <div className={ContactsStyle.blockContainer}>
            <div className={ContactsStyle.contentContainer}>
                <div className={ContactsStyle.nameBlock}>
                    <h2>Contacts:</h2>
                </div>
                <div className={ContactsStyle.formContent}>
                <form className={ContactsStyle.formStyle}>
                    <input placeholder={"Your name"}/>
                    <input placeholder={"email"}/>
                    <textarea placeholder={"you want?"}/>
                </form>
                </div>
                <button>Submit</button>
            </div>
        </div>
    )
}

export default Contacts;