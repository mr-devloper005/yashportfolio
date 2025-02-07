import React from 'react'

function SkillsNav() {
  return (
    <>
    <div className='w-96  h-1/2 rounded-4xl bg-gradient-to-b ml-3 mt-5 from-stone-800 via-neutral-950 to-neutral-800'>
      <h1 id='skills' className='md:block text-white text-center md:text-7xl lili  text-5xl p-14'><span className='col'>S</span>kills</h1>
      <div className='w-full h-48 flex flex-wrap  md:flex-nowrap justify-evenly items-center'>
        <img src="htmlpng.png" className='w-16 md:w-20 m-2' alt="" />
        <img src="csspng.png" className='w-16 md:w-20 m-2' alt="" />
        <img src="jspng.png" className='w-16 md:w-20 m-2' alt="" />
        <img src="reactpng.png" className='w-16 md:w-20 m-2' alt="" />
        <img src="https://www.vlehelp.com/content/1721711156_blog.jpg" className='h-16 md:h-20 rounded-3xl w-40 md:w-48 text-white m-2' alt="" />
        {/* <img src="gitpng.png" className='w-14 md:w-20 m-2' alt="" /> */}
        <img className='h-14 md:h-20 rounded-2xl w-36 md:w-44 text-white m-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGA-WQSCQS5n-dlbNpaExktIFGfs-XM7qFhQ&s" alt="" />
      </div></div>
    </>
  )
}

export default SkillsNav

