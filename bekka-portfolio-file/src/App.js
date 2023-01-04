import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/AboutMe";
import Navigation from "./components/Navigation";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";


function App() {

  const [page, setPage ] = useState('about');
  
return (
  <div>
    <Header>
    <Navigation setPage = {setPage} />
    </ Header>
    { 
      page == 'portfolio' 
        ? <Portfolio /> 
        : page == 'contact' 
        ? <Contact /> 
        : page == 'resume' ? <Resume /> 
        : <About />
    }

    <Footer />
  </div>
)  
}

export default App
