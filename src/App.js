import React from 'react';
import Home from './PortfolioContainer/Home/Home';
import AboutMe from './PortfolioContainer/AboutMe/AboutMe';
import Resume from './PortfolioContainer/Resume/Resume';
import Project from './PortfolioContainer/Projects/Project';
import ContactMe from './PortfolioContainer/ContactMe/ContactMe';
import Slider from './PortfolioContainer/slider';
function App() {
  return (
    <div className="App">
         <Home/>
         <AboutMe />
         <Resume />
         <Project />
          {/* <Slider />  */}
         <ContactMe />
      
    </div>
  );
}

export default App;