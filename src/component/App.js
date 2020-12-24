import React, { useState } from 'react';
import FontAwasome from 'react-fontawesome';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import '../style/App.css';
import Home from './Home';
import Education from './Education';
import Training from './Training';
import Project from './Project';
import About from './About';

function App() {
  const [burgerIcon, changeBurgerIcon] = useState(true);
  // const [open, changeOpen] = useState(false);
  const changeBurgerIconDisplay = () =>
  {
    changeBurgerIcon(!burgerIcon);
    console.log(burgerIcon);
  }
  
  
  return (
    <Router>
    <div className="container">
      <div className="nav-bar">
        <h1 className="nav-title">Portfolio</h1>
        
        <ul className="nav-menu" style={{display: burgerIcon?"":"block"}}>
          <li className="nav-link"><Link to="/" className="nav-menu-item" onClick={changeBurgerIconDisplay}>Home</Link></li>
          <li className="nav-link"><Link to="/education" className="nav-menu-item" onClick={changeBurgerIconDisplay}>Education</Link></li>
          <li className="nav-link"><Link to="/training" className="nav-menu-item" onClick={changeBurgerIconDisplay}>Training</Link></li>
          <li className="nav-link"><Link to="/project" className="nav-menu-item" onClick={changeBurgerIconDisplay}>Projects</Link></li>
          <li className="nav-link"><Link to="/about" className="nav-menu-item" onClick={changeBurgerIconDisplay}>About</Link></li>
        </ul>
       
        <button className="linkedin-btn"><FontAwasome className="fas fa-linkedin" style={{"fontSize":20}}/></button>
        <button className="insta-btn"><FontAwasome className="fas fa-instagram" style={{"fontSize":20}}/></button>
        <button className="github-btn"><FontAwasome className="fas fa-github" style={{"fontSize":20}}/></button>
        
        {burgerIcon?<div className="burger" onClick={changeBurgerIconDisplay}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>:<div className="burger-cross" onClick={changeBurgerIconDisplay}>
          <p className="cross"><FontAwasome className="fa fa-close"/></p>
          </div>}
        
      </div>
      <div className="home">
        <Switch>
        <Route exact path="/" render={(props) => (<Home/>)}/>
        <Route exact path="/education" render={(props) => (<Education/>)}/>
        <Route exact path="/training" render={(props) => (<Training/>)}/>
        <Route exact path="/project" render={(props) => (<Project/>)}/>
        <Route exact path="/about" render={(props) => (<About/>)}/>
        
        </Switch>
      </div>
    </div>
    </Router>
    )
}
export default App;
