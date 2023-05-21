import React from 'react';
import './App.css';
import './ccodes.css';
import './Frame.css';
import IntroImage from './img/Rectangle.png';

const Intro = () => {
  return (
    <div className="intro flex flex-column flex-center">
      <p>NAIRATIX is a ticketing platform for live experiences in the city of Abuja. You can find and attend events in
        style, with our add-on packages.</p>

      <div className="intro-img-section flex flex-column flex-center">
        <img src={IntroImage} alt="" />

        <div className="hangers flex flex-center absolute-position">

          <span className="ticket-sold relative-position">7,000+ <br /> Tickets Sold</span>

          <span className="active-attendees relative-position">4,000+ <br />Active Attendees</span>

          <span className="popular-events relative-position">70+ <br />Popular Events</span>

        </div>
      </div>
    </div>
  )
}

export default Intro