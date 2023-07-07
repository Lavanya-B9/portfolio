import React, { useState } from 'react';
import './NavbarStyles.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [clicked,setClicked] = useState(false);
  const clickHandler = () =>{
    setClicked(!clicked);
  }
  return (
    <div className='nav-container'>
      <h3><i className='logo'>My portfolio</i></h3>
       <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
          <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/projects'>Projects</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
      </ul>
     <div onClick={clickHandler} className='icon'>
          {clicked ? <i className='fas fa-times'></i> : <i className='fa-solid fa-bars'></i>}
          </div>
         </div>
  )
}

export default Navbar