import React from 'react'
import './App.css';
import './ccodes.css';
import './Frame.css';

const Hero = () => {
    const eventColor = {
        color: '#04ac5c' 
    };
  return (
    <div className="hero-container">
        <h1 className="hero-title">Explore Top-Rated<br/>
            <span style={eventColor.color}>Events</span>, Discounts, And More
        </h1>
        <h4 className="hero-description">GET UP TO <span style={eventColor}>10% OFF</span> TABLE BOOKINGs FROM OUR
            FAVOURITE VENUES IN <span style={eventColor}>ABUJA.</span></h4>

        <button className="btn-discover">Discover Events</button>
    </div>
  )
}

export default Hero