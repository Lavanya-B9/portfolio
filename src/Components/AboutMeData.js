import React from 'react';
import './AboutMeDataStyles.css';
import AboutImg from '../Assets/se4.webp';
import CV from '../Assets/Lavanya.pdf'

const AboutMeData = () => {
  return (
    <div className='about-container'>
        <h1>About Me</h1>
        <div className='about-content'>
        <img src={AboutImg} alt='about-img'/>
        <div>
        <h2>Heyyy..  I'm<span> Lavanya Bandaru</span></h2>
        <p>as a beginner in the field of information technology, I strive to associate myself with an organization where i can utilize my skills in the best possible manner, which further gives me an opportunity to grow in my career journey while contributing to the development of the organization.</p>
        <p style={{marginBottom:30}}>
            to pursue my career as a software professional by contributing my thoughts and actions to the company's vision and thus acheive self-development by playing a significant role in building the organization
        </p>
        <a download='' href={CV} className='btn-dark' style={{marginLeft:20}}>Download CV</a>
        </div>
        </div>
        <div className='skills-container'>
          <div className='each-container'>
            <h3> Languages</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>React JS</li>
              <li>React Native</li>
              <li>Redux</li>
              <li>Python</li>
              <li>Operating system</li>
               </ul>
          </div>
          <div className='each-container'>
            <h3>Education</h3>
           <ul>
            <li>WISE Engineering College <i>___B.Tech</i></li>
            <p><i>Aggregate---66%</i></p>
            <li>Chanakya Junior College <i>___Intermediate</i></li>
            <p><i>Aggregate---74%</i></p>
              <li>P.R.Z.P.High School<i>___SSC</i></li>
            <p><i>Aggregate---83%</i></p>
           </ul>
          </div>
          <div className='each-container'>
            <h3>Skills</h3>
            <ul>
              <li>Communication Skills</li>
              <li> Problem Solving</li>
              <li>Flexible</li>
              <li>Adaptive</li>
            </ul>
          </div>
        </div>
        </div>
  )
}


export default AboutMeData