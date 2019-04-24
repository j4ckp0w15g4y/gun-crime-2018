import React, { Component } from 'react';
import './App.css';
import { Route, Link } from "react-router-dom";
import HomePage from './components/HomePage/HomePage'
import AboutPage from './components/AboutPage/AboutPage'
import Footer from './components/Footer/Footer'


class App extends Component {
  render() {
    return (
      <div>
  
        <nav className="navbar is-black" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">            
            <Link className="navbar-item" to="/">Home</Link>
            <Link className="navbar-item" to="/about">About</Link>
            
          </div>                                                   
         </nav>
         
      
         <main>
          <Route exact path="/" component={HomePage}/>
            <Route path="/about" component={AboutPage}/>         
          </main>
        <Footer />
      
      </div>
    )
  }
}

export default App;
