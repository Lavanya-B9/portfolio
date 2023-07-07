import React from 'react';
import HeroSection from '../Components/HeroSection';
import AboutMeData from '../Components/AboutMeData';
import ProjectsSection from '../Components/ProjectsSection';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div>
<HeroSection/>
<AboutMeData/>
<ProjectsSection/>
<Footer/>
    </div>
  )
}

export default Home