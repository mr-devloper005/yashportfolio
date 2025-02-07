import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"; 

function WhatsAppLogo() {
  return (
    <>
      <a href="https://wa.me/7737738330" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faWhatsapp} size="2x" color="white" />
      </a> {/* Customize */}
    </>
  );
}

export default WhatsAppLogo;
