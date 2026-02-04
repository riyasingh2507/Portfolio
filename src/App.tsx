import './App.css'
import Experience from './sections/Experiences';
import FeaturedProject from './sections/FeaturedProject';
// import Navbar from './components/navbar';
import Hero from './sections/Hero'
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
    </>
  );
}

export default App
