// import React from 'react'

// function AboutMe() {
//   return (
//     <div className='w-full h-screen flex lobster-regular text-white bg-neutral-900'>
//       <div className='h-full w-1/2 flex justify-center px-20 gap-5 flex-col'>
//         <h1 className='text-5xl'>  <span className=" text-orange-500">Y</span>ash{' '}
//         <span className=" text-rose-600">N</span>ihalani</h1>
//         <h2 className='text-4xl '>Freelance<span className='text-amber-500'>  Web developer</span></h2>
//         <h3 className='text-3xl lili'>I am a passionate web developer skilled in React, Tailwind CSS, Redux, and Appwrite. I create responsive, visually appealing websites with smooth animations using GSAP. I enjoy solving complex problems and working on real-world projects like admin panels and blog apps. My goal is to master Full-stack development. 🚀</h3>
//         <button></button>
//       </div>


//       <div className='h-full w-1/2 bg-neutral-500'><img src="" alt="" /></div>
//     </div>
//   )
// }

// export default AboutMe


import React from 'react'

function AboutMe() {
  return (
    <div id='about-me' className='flex rounded-4xl w-full h-screen md:flex lili tracking-wide text-white bg-gradient-to-r from-stone-950 via-neutral-900 to-neutral-800'>
      <div className='h-full w-full flex px-5 justify-center md:px-20 gap-5 flex-col bg-transparent'>
        <h1 className='text-5xl lg:text-7xl '>  
          <span className=" text-orange-500">Y</span>ash{' '}
          <span className=" text-rose-600">N</span>ihalani
        </h1>
        <h2 className='text-5xl lg:text-7xl'>Freelance
          <br></br>
          <span className='text-amber-500 text-5xl'> Web Developer</span>
        </h2>
        <h3 className='text-xl md:text-3xl lg:text-4xl'>
        I’m a Freelance web developer with a passion for crafting sleek, responsive websites. Expert in React, Tailwind CSS, Redux, and Appwrite, I create dynamic user interfaces with smooth GSAP animations. I enjoy turning ideas into reality, having built exciting projects like a music app, blog website, and interactive platforms. My goal? To master Full-Stack Development and deliver seamless, engaging digital experiences that leave a lasting impact! 
        </h3>
        <button className='p-5 text-2xl active:scale-95 font-bold tracking-wide w-44 bg-amber-950 rounded-4xl'>Contact Me</button>
      </div>

      <div className=' hidden h-full w-1/2 bg-transparent md:flex items-center justify-center'>
        {/* <img className='h-1/2 rounded-4xl' src="/photo.png" alt="" /> */}
      </div>
    </div>
  )
}

export default AboutMe
