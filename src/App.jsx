import React from "react";
import { BrowserRouter as Router, Route , Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import Services from "./components/Services";


import './App.css'
import './components/Header.css'
import './components/Home.css'
import './components/Footer.css'
import './components/Contact.css'
import './components/mediaquery.css'




 function App(){
  return(
    <>
  
 

       <Router>

       <Header />
       <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />

        
             
        </Routes>
        <Footer />
       

    </Router> 
     
    </>
  )
 }

 export default App;