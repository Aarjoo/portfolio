import React from 'react';
import apical from '../images/api_cal.png';
import portfolio from '../images/portfolio.png';
import news from '../images/newshub.png';
import instoliva from '../images/instoliva _logo.png';
const Project = () => {
    return ( 
        <div className="proj-container">
           
                
           <div className="proj-flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={portfolio} alt="" className="proj-img"/>
                                <p className="proj-name">Portfolio<br/>
                                <span className="proj-desc">(A personal portfolio)</span></p>           
                            </div>
                            <div className="flip-card-back" style={{backgroundColor:"rgba(248, 50, 50)"}}>
                                <p className="clg-name" style={{color:"white",fontWeight:"500",fontSize:"15px",padding:"10px"}}>
                                It is an personal portfolio developed in React js. This contains the overview
                                of my education, training, project and contact details.
                               
                                </p>
                                
                            </div>
                        </div>
                    </div>
               
                    <div className="proj-flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={news} alt="" className="proj-img"/>
                                <p className="proj-name">News Hub<br/>
                                <span className="proj-desc">(A hub for news)</span></p>           
                            </div>
                            <div className="flip-card-back" style={{backgroundColor:"rgba(248, 50, 50)"}}>
                                <p className="clg-name" style={{color:"white",fontWeight:"500",fontSize:"15px",padding:"10px"}}>
                                News Portal is a web application built in React js. In this application I use news api from
newsapi.com to fetch the news thus implement the functionality of REST API. 
                               
                                </p>
                                
                            </div>
                        </div>
                    </div>
                
              
                    <div className="proj-flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={instoliva} alt="" className="proj-img"/>
                                <p className="proj-name">Instoliva<br/>
                                <span className="proj-desc">(Choose your right institute here)</span></p>           
                            </div>
                            <div className="flip-card-back" style={{backgroundColor:"rgba(248, 50, 50)"}}>
                                <p className="clg-name" style={{color:"white",fontWeight:"500",fontSize:"15px",padding:"10px"}}>
                                Instoliva is a web application designed using html, css, bootstrap, js, core php. This web
application is specially designed for students to recommend best training institute for any particular course and
also help students to choose nearby Pg.

                               
                                </p>
                                
                            </div>
                        </div>
                    </div>
               
              
                    <div className="proj-flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={apical} alt="" className="proj-img"/>
                                <p className="proj-name">API Calculator<br/>
                                <span className="proj-desc">(An Academic Calculator)</span></p>
                                        
                            </div>
                            <div className="flip-card-back" style={{backgroundColor:"rgba(248, 50, 50)"}}>
                                <p className="clg-name" style={{color:"white",fontWeight:"500",fontSize:"15px",padding:"10px"}}>
                                API Calculator is an android app for University and College Teachers for calculating
Academic/Research Score (Faculty of Languages / Humanities /Arts / Social Sciences / Library /Education /
Physical Education / Commerce / Management and other related disciplines)
              
                                </p>
                               
                                
                            </div>
                        </div>
                    </div>
                
        </div>
     );
}
 
export default Project;