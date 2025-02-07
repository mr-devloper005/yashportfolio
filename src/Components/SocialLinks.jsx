 import React from 'react'
import WhatsAppLogo from './WhatsAppLogo'
import LinkedInIcon from './LinkedInIcon'
import Gmailicon from './Gmailicon'
 
 function SocialLinks() {
   return (
     <div className='w-5/6 md:w-xl h-12 absolute bottom-3 flex justify-evenly items-center rounded-4xl bg-neutral-800'>
       
<WhatsAppLogo/>
<LinkedInIcon/>
<Gmailicon/>

     </div>
   )
 }
 
 export default SocialLinks
 