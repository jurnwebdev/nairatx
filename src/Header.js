import { useState } from 'react';
import './App.css';
import './ccodes.css';
import './Frame.css';
import logo from './img/nairatix.svg';
import cart from './img/Vector.svg';
import './toggle.css';



function Header() {

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className="App">

      <header className="flex justify-sb align-center">
        <img src={logo} alt='logo' className='logo' />


        <nav className={`navbar flex justify-sb align-center ${menuOpen ? 'open' : ''}`}>

          <button className="menu-toggle flex-column" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          <ul className={`menu ${menuOpen ? 'open' : 'hide'}`}>

            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Talent Management</a></li>
            <li><a href="#">Contact</a></li>

            <div className={`${menuOpen ? '' : 'cart-hide'}`}>
              <span className="cart-count">0</span>
              <button className={`btn-cart ${menuOpen ? '' : ''}`}>Basket</button>
            </div>
          </ul>
        </nav>

        <div className="right-header flex justify-sb align-center">

          <input type="checkbox" className="l"></input>
          <div className="cart basket">
            <h5></h5>
            <img src={cart} alt=""></img>
          </div>
        </div>
      </header>

    </div >
  );
}

export default Header;
