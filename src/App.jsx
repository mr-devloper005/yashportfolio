// import React from 'react'
// import { useState } from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css'
// import NavBar from './Components/NavBar'
// import LineAnimation from './Components/LineAnimation';
// import Home from './Components/Home';
// import AboutMe from './Components/AboutMe';
// import SkillsNav from './Components/SkillsNav';
// import MyProjects from './Components/MyProjects';
// import Services from './Components/Services';
// import ContactMe from './Components/ContactMe';

// function App() {

//   return (
//     <>
    
//     <Router>  
//       <Routes>
         
//         <Route path="/" element={<Home/>} />
//       </Routes>
//     <NavBar/>
//   </Router>

//   <AboutMe/>
//   <SkillsNav/>
//   <MyProjects/>
//   <Services/>
//   <ContactMe/>
      
//     </>
//   )
// }

// export default App


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import AboutMe from './Components/AboutMe';
import SkillsNav from './Components/SkillsNav';
import MyProjects from './Components/MyProjects';
import Services from './Components/Services';
import ContactMe from './Components/ContactMe';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>

      <AboutMe />
      <SkillsNav />
      <MyProjects />
      <Services />
      <ContactMe />
    </>
  );
}

export default App;