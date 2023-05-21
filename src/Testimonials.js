import React from 'react';
import './App.css';
import './ccodes.css';
import './Frame.css';
import { testimonials } from './data/EventData.js';
import leftNav from './img/left-navigation.png';
import rightNav from './img/right-navigation.png';

const Testimonials = () => {
    return (
        <div className="testimonial flex-column">
            <h1>What people say</h1>
            <div className="client-testimonial flex overflow-x flex-row-sb">
                {testimonials.map(e => (
                    <div className="client-testimonial-board flex-column" key={e.clientId}>
                        <img src={e.clientPhoto} alt="" className="client-testimonial-img" />
                        <p>
                            {e.clientPost}
                        </p>
                        <p className="client-name">{e.clientName}</p>
                    </div>
                ))}
            </div>

            <div className="navigation flex flex-row-sb mt-20">
                <img src={leftNav} alt="" width="30%" />
                <img src={rightNav} alt="" width="30%" />
            </div>

        </div>
    )
}

export default Testimonials;
