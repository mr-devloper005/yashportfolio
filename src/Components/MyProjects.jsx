import React from 'react'

function MyProjects() {

let myProjectsData = [
  {
    title: '#1 Client Information',
    description: 'This is a website for a telecom company, which provides information about the company and its services.',
    image: 'sachintelecom.png',
    link: 'https://sachintelecom.netlify.app/'
  },
  {
    title: '#2 Music App',
    description: 'This is a music app that allows users to listen to their favorite songs, create playlists, and share them with friends.',
    image: 'https://www.lifewire.com/thmb/MFqyU5kO39WsDXvM303ewiHPy4Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/spotify-free-music-696d80893d4e425e996854736c5d43b3.png',
    link: null
  },
  {
    title: '#3 Blog Website',
    description: 'This is a blog website where users can read and write articles on various topics.',
    image:'blogger.png',
    link: 'https://blog-website.netlify.app/'
  },
  // {
  //   title: 'Interactive Platform',
  //   description: 'This is an interactive platform that allows users to connect with each other, share ideas, and collaborate on projects.',
  //   image: 'interactive.png',
  //   link: 'https://interactive-platform.netlify.app/'
  // },
  // {
  //   title: 'E-commerce Website',
  //   description: 'This is an e-commerce website where users can buy and sell products online.',
  //   image: 'ecommerce.png',
  //   link: 'https://ecommerce-website.netlify.app/'
  // },
  // {
  //   title: 'Portfolio Website',
  //   description: 'This is my portfolio website where I showcase my work and skills as a web developer.',
  //   image: 'portfolio.png',
  //   link: 'https://portfolio-website.netlify.app/'
  // },
  // {
  //   title: 'Admin Panel',
  //   description: 'This is an admin panel that allows users to manage and control the content of a website or application.',
  //   image: 'admin.png',
  //   link: 'https://admin-panel.netlify.app/'
  // },
  // {
  //   title: 'Weather App',
  //   description: 'This is a weather app that provides real-time weather information for any location in the world.',
  //   image: 'weather.png',
  //   link: 'https://weather-app.netlify.app/'
  // },

]


  return (
    <div className='md:block w-full h-auto md:h-3/4 pt-10 bg-gradient-to-b rounded-4xl mt-5 from-stone-950 via-neutral-900 to-neutral-800'>
      <h1 className='text-5xl lili text-center text-white mb-10'>
        <span className='col'>R</span>ecent <span className='col'>P</span>rojects
      </h1>

      <div className='w-full h-full flex flex-col md:flex-row justify-evenly items-center'>
        {myProjectsData.map((item, index) => (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className=' w-4/5 md:h-96 md:w-1/4 rounded-4xl  m-2'
          >
            <img
              src={item.image}
              className='object-fill w-full h-3/4 rounded-t-3xl'
              alt={item.title}
            />
            <div className='p-2'>
              <h1 className='text-center text-white text-2xl lili mb-2'>
                {item.title}
              </h1>
              <p className=' hidden md:block text-center text-white'>
                {item.description}
              </p>
              <p className='text-center hidden text-white mt-2'>
                Project Name: {item.title}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default MyProjects
