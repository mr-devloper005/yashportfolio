

import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";

function LinkedInIcon() {
  return (
    <a href="https://www.linkedin.com/in/yash-nihalani-841780310" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faLinkedin} size="2xl" color="white" />
    </a>
  )
}

export default LinkedInIcon
