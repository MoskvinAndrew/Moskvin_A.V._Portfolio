import React from 'react';
import  './App.css';
import Header from "./common/Header/Header";
import Main from "./common/Main/Main";
import Skills from "./common/Skills/Skills";
import MyWorks from "./common/MyWorks/MyWorks";
import ToHireMe from "./common/toHireMe/toHireMe";
import Contacts from "./common/Contacts/Contacts";
import Footer from "./common/Footer/Footer";


function App() {
  return (
    <div className="App">
        <Header/>
        <Main/>
        <Skills/>
        <MyWorks/>
        <ToHireMe/>
        <Contacts/>
        <Footer/>
    </div>
  );
}

export default App;
