// import React, { useState } from 'react'
// import { gsap } from "gsap";

// function LineAnimation() {

//   let [initialPath,setInitialPath] = useState("M -1000 100 Q 700 100 3000 100");


//  let mouseMove = (dets) => {

//   console.log(dets);
  
//  setInitialPath(`M 10 100 Q ${dets.x} ${dets.y} 990 100`) 

//   gsap.to("svg #pathu", {
//     attr: { d: initialPath },
//     duration: 0.3,
//     ease: "power3.out",
//   });
// };

// let mouseleave = (dets) => {
  

//   // path = "M 10 100 Q 500 100 990 100";

//   // gsap.to("svg path", {
//   //   attr: { d: path },
//   //   duration: 1.5,
//   //   ease: "elastic.out(1.5,0.2)",
//   // });
// };



//   return (
//     <div onMouseMove={mouseMove} onMouseLeave={mouseleave} className='h-24 bg-transparent opacity-45 absolute top-0 w-full'>
//     <svg width="100%" height="150" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 2000 200">
//         <path id="pathu" d="M -1000 100 Q 700 100 3000 100" stroke="white" fill="transparent"/>
//       </svg>
      
      
// </div>
//   )
// }

// export default LineAnimation



import React, { useState } from 'react';
import { gsap } from "gsap";


function LineAnimation() {
  // Initial path state
  let [initialPath, setInitialPath] = useState("M -1000 100 Q 700 100 3000 100");

  // Mouse move event
  let mouseMove = (e) => {
    // Update path with mouse coordinates
   
    setInitialPath(`M -1000 100 Q ${e.clientX} ${e.clientY} 3000 100`);

    // Animate path with GSAP
    gsap.to("svg #pathu", {
      attr: { d: initialPath },
      duration: 0.5,
      ease: "back.out(1.7)",
    });
  };

  // Mouse leave event
  let mouseLeave = () => {
    // Reset path to initial value
    setInitialPath("M -1000 100 Q 700 100 3000 100");

    // Animate back to original path
    gsap.to("svg #pathu", {
      attr: { d: "M -1000 100 Q 700 100 3000 100" },
      duration: 4,
      ease: "elastic.out(1.5, 0.2)",
    });
  };

  return (
    <div
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      className='h-24 bg-transparent opacity-45 absolute top-0 w-full'
    >
      <svg width="100%" height="150" xmlns="http://www.w3.org/2000/svg" >
        <path
          id="pathu"
          d={initialPath}  // Dynamically set the path based on state
          stroke="white"
          fill="transparent"
        />
      </svg>
    </div>
  );
}

export default LineAnimation;
