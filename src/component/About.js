import React from 'react';
import profile from '../images/profile.png';
const About = () => {
    return ( 
        <>
        <div className="about-section">
        <img src={profile} alt="" className="about-img"/>
        <p className="about"><span className="salute">Hi There,</span> <br/><br/>I am a passoniate developer, Seeking a responsible position 
                in an esteemed organization where I can utilize my 
                skills and knowledge which would enable me as a fresh 
                graduate to grow while fulfilling organizational goals.</p>

        </div>
         <div className="personal-details">
         <p className="email">Email : aarjoopanwar1234@gmail.com</p>
         <p className="phone">Phone : 8979299062</p>
        </div>
        </>
     );
}
 
export default About;
