import React from 'react';
import FontAwasome from 'react-fontawesome';
const Training = () => {
    return ( 
        <>
            <div className="training-card">
            <FontAwasome className="fas fa-award training_icon"/>
                <p className="training-name">React Js Essential Training
                <br/><span className="training-duration">(sept 2020 - oct 2020)</span></p>
                <p className="training-org">Organisation : LinkedIn Learning</p>
                <div className="center">
                    <button className="training-certi">View Certificate</button>
                </div>
            </div>
            <div className="training-card">
            <FontAwasome className="fas fa-award training_icon"/>
                
                <h2 className="training-name">HTML, CSS and JS for beginners
                <br/><span className="training-duration">(June 2020 - July 2020)</span></h2>
                <p className="training-org">Organisation : Udemy</p>
                <div className="center">
                    <button className="training-certi">View Certificate</button>
                </div>

            </div>
            <div className="training-card">
            <FontAwasome className="fas fa-award training_icon"/>
                <h2 className="training-name">Core Java
                <br/><span className="training-duration">(June 2018 - July 2018)</span></h2>
                <p className="training-org">Organisation : Cetpa Infotech Pvt. Ltd.</p>
                <div className="center">
                    <button className="training-certi">View Certificate</button>
                </div>
            </div>
        </>
     );
}
 
export default Training;