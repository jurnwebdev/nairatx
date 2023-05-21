import React from 'react';
import './App.css';
import './ccodes.css';
import './Frame.css';
import guts from './img/guts 9.png';
import moscow from './img/moscow-underground 1.png';
import tiki from "./img/tikicultures 1.png";
import donkey from './img/donkey.png';
import edgemax from "./img/edgemax.png";
import hwp from "./img/hwp 1.png";
import handb from './img/hustke-and-bustle 1.png';
import whiskey from "./img/whiskey 1.png";


const Clients = () => {
  return (
    <div className="clients flex flex-column flex-start flex-md-center">
    <h1>OUR CLIENTS</h1>
    <div className="client-container flex justify-sb">
        <img src={guts} alt="Guts Foundation" width="100%" className="client-logo"/>

        <img src={moscow} alt="Guts Foundation" width="100%" className="client-logo"/>

        <img src={tiki} alt="Guts Foundation" width="100%" className="client-logo"/>

        <img src={donkey} alt="Guts Foundation" width="100%" className="client-logo"/>

        <img src={edgemax} alt="Guts Foundation" width="100%" className="client-logo"/>

        <img src={hwp} alt="Guts Foundation" width="100%" className="client-logo"/>

        <img src={handb} alt="Guts Foundation" width="100%" className="client-logo"/>

        <img src={whiskey} alt="Guts Foundation" width="100%" className="client-logo"/>
    </div>
</div>
  )
}

export default Clients