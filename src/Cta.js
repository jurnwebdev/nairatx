import React from 'react';
import './App.css';
import './ccodes.css';
import './Frame.css';

const Cta = () => {
  return (
    <div className="subscribe-cta flex flex-wrap">
        <div className='col-6 col-md'>
           <h4>Everything you need to know about upcoming events in your inbox</h4>
        </div>

      <div className="col-md col-6 flex-row-end">
        <div className="input-container">
          <input className="input" name="text" type="text" placeholder="Enter Email Address" />
          <label className="label" for="input">Enter Your Email</label>
          <div className="topline"></div>
          <div className="underline"></div>
        </div>
      </div>

    </div>
  )
}

export default Cta