import React from 'react'
import GmailIcon from './Gmailicon'
import LinkedInIcon from './LinkedInIcon'
import WhatsAppLogo from './WhatsAppLogo'

function ContactMe() {

  let socialLinks =[
    {name: 'LinkedIn', url: 'https://www.linkedin.com/in/your-linkedin',element: <LinkedInIcon/>,color:"royalblue"},
    {name:'whatsapp', url: 'https://wa.me/your-number', element: <WhatsAppLogo/>,color:"green"},
    {name:"gmail", url: "mailto:your-email", element: <GmailIcon/>,color:"crimson"},
  ]
  return (
    <div id='contact' className='mt-9 lili h-2/3 md:h-5/6 w-full md:flex justify-center items-center flex-col'>

      <h1  className='text-6xl text-white text-center bg-neutral-950'>Contact - Me</h1>
      <h1 className='text-3xl mt-20 text-white text-center bg-neutral-950'>"Let's Connect – I’m Ready to Contribute and Grow!"</h1>

      <div className='w-full h-3/6 flex justify-center gap-10 p-5 md:gap-20 items-center'>
        {socialLinks.map((obj, index) => (
          <div key={index} className={`flex cursor-pointer justify-center flex-col items-center text-white text-xl md:text-2xl rounded-4xl h-24 md:h-32 w-32`} style={{ backgroundColor: obj.color }}>
            {obj.element}
            {obj.name}
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default ContactMe
