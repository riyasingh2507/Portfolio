import './App.css'
import Footer from './components/Footer';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';
import Education from './sections/Education';
import Experience from './sections/Experiences';
import FeaturedProject from './sections/FeaturedProject';
// import Navbar from './components/navbar';
import Hero from './sections/Hero'
import HumanSide from './sections/HumanSide';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import WhatIDo from './sections/WhatIDo';
function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero/>
      <WhatIDo />
      <Experience />
      <FeaturedProject />
      <Skills />
      <Projects />
      <Education />
      <Achievements />
      <HumanSide />
      <Contact />
      <Footer />
    </>
  );
}

export default App
