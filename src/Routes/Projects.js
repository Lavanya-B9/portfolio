import React, { Component } from 'react'
import BgImg from '../Assets/se1.avif';
import '../Components/ProjectStyles.css';
import ProjectsSection from '../Components/ProjectsSection';
import Footer from '../Components/Footer';

export class Projects extends Component {
  render() {
    return (
      <div>
      <div className='img-container'>
        <div className='img'>
          <img src={BgImg} alt='project-bg-img'/>
          </div>
          </div>
        <ProjectsSection/>
        <Footer/>
        </div>
    )
  }
}

export default Projects