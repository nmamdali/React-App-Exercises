//import { useState } from "react";
import Home from "./components/Home";
import './App.css'
import { Route, Routes, Link } from "react-router-dom"
import Currencies from "./components/Currencies";
function App() {
 
  return (
    <div className="App">
      <nav className="nav justify-content-center">
         <Link to="/"  className='nav-item nav-link'>Home</Link>
         <Link to="/currencies" className='nav-item nav-link'>Currencies</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/currencies"  element={<Currencies/>}/>
     </Routes>

    </div>
  );
}

export default App;
