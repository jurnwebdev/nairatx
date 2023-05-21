import React from 'react';
import './App.css';
import './ccodes.css';
import './Frame.css';
import leftNav from './img/left-navigation.png';
import rightNav from './img/right-navigation.png'
import ExportEvent from './EventComp';


const eventDisplay = ({ eventData }) => {
    return (
        <div className="event-container flex flex-column">
            <div className="event-header flex justify-sb align-center">
                <h1>UPCOMING EVENTS</h1>
                <div className="navigation flex justify-sb">
                    <img src={leftNav} alt="" />
                    <img src={rightNav} alt="" />
                </div>
            </div>

            {/* <div className="event-body flex flex-wrap overflow-x"> */}
            {/* Event Component Start */}

            <ExportEvent />

            {/* Event Component End */}

            {/* </div> */}
            <div className="flex-column flex-center">
                <button className="all-events">View All Events</button>
            </div>
        </div>
    )
}


export default eventDisplay;
