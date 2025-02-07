import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; // ✅ Import Gmail icon

function Gmailicon() {
  return (
    <>
      <a href="mailto:devloper.yash005@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="2x" color="white" /></a>
    </>
  );
}

export default Gmailicon;
