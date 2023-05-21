import './App.css';
import './ccodes.css';
import './Frame.css';
import logo from './img/nairatix.svg';

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} alt='logo'></img>

        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Talent Management</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>

        <div className="right-header flex-row-sb">
            <input type="checkbox" className="l"></input>
            
            <img className="cart" src="/src/img/Vector.svg" alt=""></img>
        </div>
      </header>
      
    </div>
  );
}

export default App;
