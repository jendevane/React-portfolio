import React from 'react';
import './AboutMe.css';
import Jennyphoto from "../../assets/Images/Jennyphoto.jpg"
function AboutMe() {
  return (
    <div className="about-styles" id="about-me">
     <div>
      <img className= "photo" src={ Jennyphoto } alt="Jennyphoto.png"/>
     </div>
     <div className="about-message">
       <h1>ABOUT ME</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quia placeat eos atque veniam voluptatum sapiente ipsum tempore iste, omnis cumque velit autem consectetur. Veritatis molestias ullam voluptas nostrum? Dolorum.</p>
     </div>
    </div>
  )
}
export default AboutMe