import React from 'react'

function Services() {

  let data = [
    {
      id: 1,
      title: "Web Development",
      description: "I specialize in building custom React websites, business websites, and dynamic admin dashboards that are user-friendly, fast, and fully responsive.",
      icon: "💻",
    },
    {
      id: 2,
      title: "UI/UX Design",
      description: "I design modern, responsive, and visually appealing user interfaces with Tailwind CSS, ensuring a smooth and enjoyable experience for users across all devices.",
      icon: "🎨",
    },
    {
      id: 3,
      title: "Performance Optimization",
      description: "I focus on optimizing website performance for faster loading speeds, SEO improvements, and writing efficient, clean code to enhance overall user experience.",
      icon: "🚀",
    },
    {
      id: 4,
      title: "Maintenance & Support",
      description: "I offer ongoing maintenance services, including bug fixing, feature updates, and long-term support to keep your website running smoothly and up-to-date.",
      icon: "🛠️",
    },
  ];
  

  
  return (
    <div id='services' className='z-0 h-screen w-full flex flex-col justify-center pt-36 items-center bg-neutral-950 cursor-pointer'>  

      <h1 className='lili text-4xl text-white text-center'><span className="col">W</span>hat <span className="text-cyan-600">I</span>
      <span className="col"> D</span>o <span className="col">F</span>or <span className="col">C</span>lient.
      </h1>  

      <p className='text-white mt-7 text-2xl text-center'>"Passionate web developer crafting modern, responsive, and optimized websites." 🚀</p>

      <div className='w-full overflow-x-auto h-5/6 flex flex-nowrap justify-start items-center'>

        {data.map((obj, index) => (
          <div key={index} className='h-3/4 w-4/5 md:w-1/5 m-2 rounded-3xl bg-stone-950 border-4 border-black opacity-95 flex-shrink-0'>
            <h1 className='text-center text-white p-5 text-3xl lili'>{obj.icon} {obj.title} </h1>
            <p className='m-5 text-xl md:text-2xl text-white'>{obj.description}</p>
          </div>  
        ))}   
      </div>
      
    </div>
  )
} 

export default Services
