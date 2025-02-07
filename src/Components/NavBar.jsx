
// import React from 'react'
// import { Link } from 'react-router-dom'


// function NavBar() {
//   return (
//     <div id='navBar'  className='z-10 fixed top-0 w-full h-20 lobster-regular  px-32 flex items-center justify-between bg text-white'>

//     <h1  className="text-3xl font-bold  lobster-regular">
//       <span className="col text-red-500">Y</span>ash{' '}
//       <span className="col text-blue-500">N</span>ihalani
//     </h1>

//     <div className='flex tracking-wide h-full min-w-xl md: justify-between items-center w-1/3 font-bold text-2xl '> 
//       <Link to="#home">Home</Link>
//       <Link to="#about-me">About</Link>
//       <Link to="#skills">Portfolio</Link>
//       <Link to="/services">Services</Link>
//       <Link to="/contact">Contact</Link>
//     </div>
//     </div>
//   )
// }

// export default NavBar


import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

function NavBar() {
  return (
    <div id='navBar' className='z-10 fixed top-0 w-full h-20 lobster-regular px-5 xl:px-32 flex items-center justify-between bg text-white'>
      <h1 className=" text-3xl md:text-4xl xl:text-4xl font-bold lobster-regular">
        <span className="col text-red-500">Y</span>ash{' '}
        <span className="col text-blue-500">N</span>ihalani
      </h1>

      <img className='md:hidden w-10 h-10' src='https://cdn-icons-png.flaticon.com/512/3075/3075977.png'></img>

      <div className='md:flex hidden tracking-wide h-full min-w-xl md: justify-between items-center w-1/3 font-bold text-2xl'>
        <ScrollLink to="home" smooth={true} duration={100} className="cursor-pointer">
          Home
        </ScrollLink>
        <ScrollLink to="about-me" smooth={true} duration={100} className="cursor-pointer">
          About
        </ScrollLink>
        <ScrollLink to="skills" smooth={true} duration={100} offset={250} className="cursor-pointer">
          Portfolio
        </ScrollLink>
        <ScrollLink to="services" smooth={true} duration={100} className="cursor-pointer">
          Services
        </ScrollLink>
        <ScrollLink to="skills" offset={-100} smooth={true} duration={100} className="cursor-pointer">
          Skills
        </ScrollLink>

        <ScrollLink to="contact" smooth={true} duration={100} className="cursor-pointer">
          Contact
        </ScrollLink>
      </div>
    </div>
  );
}

export default NavBar;


