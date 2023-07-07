import React from 'react';
import './HeroSectionStyles.css';
import HeroImg from '../Assets/computerimg1.avif';
import { NavLink } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className='hero-container'>
      <div className='hero-img'>
     <img src={HeroImg} alt='hero-img'/>
     </div>
     <div className='hero-content'>
      <h1>Hello... I Am <span>Lavanya</span></h1>
      <h5><i>__frontend developer aspirant</i></h5>
      <NavLink to='/about' className='btn-dark'>About Me</NavLink>
     <NavLink to='/contact' className='btn-light'>Contact Me</NavLink>
    </div>
    </div>
  )
}

export default HeroSection