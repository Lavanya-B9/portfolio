import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Routes/Home';
import About from './Routes/About';
import Contact from './Routes/Contact';
import Projects from './Routes/Projects';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>

        
      </Routes>
    </div>
  )
}

export default App