import React, { Component } from 'react';
import AboutImg from '../Assets/se2.webp';
import '../Components/AboutMeDataStyles.css';
import   AboutMeData from'../Components/AboutMeData';
import   Footer from'../Components/Footer';

export class About extends Component {
  render() {
    return (
      <div>
        <div className='about-banner-img'>
           <img src={AboutImg} alt='about-img'/>
          </div>
        <AboutMeData/>
       <Footer/>
      </div>
    )
  }
}

export default About