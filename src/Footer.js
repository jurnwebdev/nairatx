import React from 'react';
import './App.css';
import './ccodes.css';
import './Frame.css';
import './responsive.css';
import Logo from './img/nairatix.svg';
import facebook from './img/fb.svg';
import twitter from './img/twitter.svg';
import instagram from './img/instagram.svg';


const Footer = () => {
    return (
        <footer className="flex flex-row-sb flex-wrap">
            <div className="footer-column flex-column">
                <img className="footer-logo" src={Logo} alt="" width="100%" />
                <p>NairaTix is a ticketing platform for live experiences in the city of Abuja.</p>
            </div>

            <div className="footer-column flex-column">
                <h4 className="footer-title">Products</h4>
                <ul className="flex flex-column">
                    <li><a href="#">Book Table</a></li>
                    <li><a href="#">Book Tickets</a></li>
                    <li><a href="#">Talent Booking</a></li>
                </ul>
            </div>

            <div className="footer-column flex-column">
                <h4 className="footer-title">Company</h4>
                <ul className="flex flex-column">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>

            <div className="footer-column flex flex-column justify-sb">
                <h4 className="footer-title">Follow us</h4>
                <div className='flex flex-column justify-sb g-20'>
                    <span className="social-link flex align-center flex-row"><img src={facebook} alt="" />Facebook</span>
                    <span className="social-link flex align-center flex-row"><img src={twitter} alt="" />Twitter</span>
                    <span className="social-link flex align-center flex-row"><img src={instagram} alt="" />Instagram</span>
                </div>
            </div>

        </footer>
    )
}

export default Footer;
