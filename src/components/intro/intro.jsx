import './intro.scss';
import { init } from "ityped";
import { useEffect, useRef } from "react";




export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, { 
      showCursor: true, 
      backDelay: 1500,
      backSpeed: 50,
      strings: ["Developer", "Designer", "Content Creator"], 
    });  
  }, []);


  return ( 
   <div className="Intro" id='intro'>
     <div className="left">
       <div className="imgContainer">
         <img src="assets/man2.png.jpg" alt="" />
       </div>
     </div>
     <div className="right">
       <div className="wrapper">
         <h2>Hi there, I'm</h2>
         <h1>Harvey</h1>
         <h3>Web <span ref={textRef}></span></h3>
       </div>
       <a href='#portfolio'>
         <img src="assets/down.png" alt=""/>
       </a>
     </div>
   </div>
  )
}
