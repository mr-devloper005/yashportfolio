// import React from 'react'
// import SocialLinks from './SocialLinks'


// function Home() {
//   return (
   
//       <div id='home' className='h-screen pt-28 w-screen flex flex-col'>
//         <div className='h-1/6 w-full'></div>
//         <div className='h-1/2 w-full flex justify-evenly items-center flex-col gap-7'>  
//         <h1 className='text-white lobster-regular c text-2xl'>Hey! I'm <span className='col'>Y</span>ash<span className='col'> N</span>ihalani</h1>
//         <h2 className='text-white lobster-regular text-3xl'><span className='col'>I</span>'m a <span className='col'>F</span>ront <span className='col'>E</span>nd <span className='col'>W</span>eb <span className='col'>D</span>eveloper</h2>
//         <h4 className='text-white lobster-regular tracking-wide text-3xl text-center w-3xl'>I can build user friendly interface for web sites and applications with <span className=" text-blue-600">React JS</span>  and {' '}  <span className=" text-yellow-400"> Javascript </span>
//         I love the front end development.</h4>
//         <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className='p-5 px-10 bg-rose-600 rounded-3xl active:scale-90 text-white text-3xl  font-extrabold cursor-pointer'>Hire Me</button></div>
   
//         <div className='h-1/4 w-full flex justify-center relative items-center'><SocialLinks/></div>
        
//       </div>
 
//   )
// }

// export default Home

import React from 'react';
import SocialLinks from './SocialLinks';

function Home() {
  return (
    <div id='home' className='h-screen pt-16 md:pt-28 w-screen flex flex-col'>
      {/* Empty div for spacing */}
      <div className='h-1/6 w-full'></div>

      {/* Main Content */}
      <div className='h-1/2 w-full flex justify-evenly items-center flex-col gap-4 md:gap-7'>
        <h1 className='text-white lobster-regular font-extrabold text-3xl md:text-6xl'>
          Hey! I'm <span className='col'>Y</span>ash<span className='col'> N</span>ihalani
        </h1>
        <h2 className='text-white  font-extrabold lobster-regular text-3xl md:text-7xl'>
          <span className='col'>I</span>'m a <span className='col'>F</span>ront <span className='col'>E</span>nd <span className='col'>W</span>eb <span className='col'>D</span>eveloper
        </h2>
        <h4 className='text-white lobster-regular tracking-wide text-2xl md:text-4xl text-center px-4 md:px-20'>
          I can build user-friendly interfaces for websites and applications with{' '}
          <span className='text-blue-600'>React JS</span> and{' '}
          <span className='text-yellow-400'>JavaScript</span>. I love front-end development.
        </h4>
        <button
          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          className='p-5 md:p-5 px-10  bg-rose-600 rounded-3xl active:scale-90 text-white text-2xl md:text-3xl font-extrabold cursor-pointer'
        >
          Hire Me
        </button>
      </div>

      {/* Social Links */}
      <div className='h-1/4 w-full flex justify-center relative items-center'>
        <SocialLinks />
      </div>
    </div>
  );
}

export default Home;