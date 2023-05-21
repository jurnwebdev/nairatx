import React from 'react';
import './App.css';
import './ccodes.css';
import './Frame.css';
import location from './img/pin.png';
import time from './img/clock.png';
import date from './img/calendar.png';
import eventData from "./data/EventData.js";


const EventComp = ({ eventData }) => {
    return (
        <div className="event-body flex flex-nowrap overflow-x">

            {eventData.map(event => (
                <div className="event flex flex-column flex-center" key={event.eID}>
                    <div className="featured-img">
                        <img src={event.fImage} alt="" width="100%" />
                    </div>
                    <div className="event-info flex-column flex-center">
                        <span className="e-title">{event.eTitle}</span>
                        <div className="date-time flex justify-sb sm-flex-column">
                            <span className="flex justify-center align-center"><img src={time} /> {event.eDate}</span>
                            <span className='flex justify-center align-center'><img src={date} />{event.eTime}</span>
                        </div>
                        <div className="location flex justify-center align-center">
                            <img src={location} alt="" />
                            <span>{event.eventLocation}</span>
                        </div>
                        <h3 className="event-price">{event.ticketPrice}</h3>
                    </div>
                    <div className="btn-book flex flex-column flex-center">
                        GET TICKETS
                    </div>
                </div>
            ))}
        </div>
    );
}

const ExportEvent = () => {
    return (
        <EventComp eventData={eventData} />
    )
}

export default ExportEvent;