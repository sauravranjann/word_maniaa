
import './App.css';
import Navbar from './Navbar';
import Wordmania from './Wordmania';
import Darkmode from './Darkmode';
import React,{useState} from 'react';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  const [mode, setmode] = useState("light")
  const togglee = () =>{
    if(mode==="light")
    {
      setmode("dark")
      document.body.style.backgroundColor= "#26367d"
     
    }
    else{
      setmode("light")
      document.body.style.backgroundColor= "white"
      
    }
  }
   
  return (
    <>
    <Router>
     <Navbar mode={mode} togglee={togglee}/>
     {/* <Wordmania mode={mode} heading="WORD MANIA "/> */}
      
      <div className="container my-3">
        <Routes>   
          <Route path="/about" element={<Darkmode mode={mode}/>} />
          <Route path="/" element={<Wordmania mode={mode} heading="WORD MANIA "/>} />
        </Routes>
      </div>
   </Router>
    </>
   
  );
}

export default App;
