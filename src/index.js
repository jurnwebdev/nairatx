import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header.js';
import reportWebVitals from './reportWebVitals';
import Newhero from './Hhero.js';
import Intro from './Intro.js';
import Event from './Event.js';
import Clients from './Clients';
import Testimonial from './Testimonials.js';
import Cta from './Cta';
import Footer from './Footer';
import Copyright from './Copyright';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Newhero />
    <Intro />
    <Event />
    <Clients />
    <Testimonial />
    <Cta />
    <Footer />
    <Copyright />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



