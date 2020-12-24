import React from 'react';
import FontAwasome from 'react-fontawesome';
const Education = () => {
    
    
    return ( 
        <div className="education-section">
        <h1 className="education-heading">Education Details</h1>
        <div className="education-row">
        <div className="education-col-1">
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <FontAwasome className="fas fa-graduation-cap" style={{"fontSize":50,"color":"white"}}/>
                        <p className="class">Graduation<br/><span className="course">B.Tech</span></p>
                        <div className="center">
                            <button className="read-more-btn">Read More</button>
                        </div>
                    </div>
                    <div className="flip-card-back">
                        <p className="clg-name">College Name:<br/>
                        <span className="clg-name-text">
                        Shri Ram group of Colleges, Muzaffarnagar
                            </span>
                        </p>
                        <p className="branch">Branch:<br/>
                        <span className="branch-text">Computer Science and Engineering</span></p>
                        <p className="percentage">
                            Percentage:<br/><span className="percentage-text">85.5 %</span></p>

                    </div>
                </div>
            </div>
        </div>
        <div className="education-col-1">
        <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <FontAwasome className="fas fa-graduation-cap" style={{"fontSize":50,"color":"white"}}/>
                        <p className="class">Intermediate<br/><span className="course">XII</span></p>
                        <div className="center">
                            <button className="read-more-btn">Read More</button>
                        </div>
                    </div>
                    <div className="flip-card-back">
                        <p className="clg-name">College Name:<br/>
                        <span className="clg-name-text">
                        Kalyan Kari kanya Inter College, Muzaffarnagar
                            </span>
                        </p>
                        <p className="branch">Stream:<br/>
                        <span className="branch-text">PCM</span></p>
                        <p className="percentage">
                            Percentage:<br/><span className="percentage-text">85.4 %</span></p>

                    </div>
                </div>
            </div>
        </div>
        <div className="education-col-1">
        <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <FontAwasome className="fas fa-graduation-cap" style={{"fontSize":50,"color":"white"}}/>
                        <p className="class">High School<br/><span className="course">X</span></p>
                        <div className="center">
                            <button className="read-more-btn">Read More</button>
                        </div>
                    </div>
                    <div className="flip-card-back">
                        <p className="clg-name">College Name:<br/>
                        <span className="clg-name-text">
                        Kalyan Kari Kanya Inter College, Muzaffarnagar
                            </span>
                        </p>
                        <p className="branch">Stream:<br/>
                        <span className="branch-text">Mathematics</span></p>
                        <p className="percentage">
                            Percentage:<br/><span className="percentage-text">86.5 %</span></p>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
     );
}
 
export default Education;