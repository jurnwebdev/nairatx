import React from 'react';
import './App.css';
import './ccodes.css';
import './Frame.css';
import line from './img/Line.svg';

const Copyright = () => {
  return (
    <div className="copyright flex flex-column flex-center">
      <img src={line} alt="" width="100%" />
      <p>©2019 – 2023 Nairatix – crafted by sboT</p>
    </div>
  )
}

export default Copyright