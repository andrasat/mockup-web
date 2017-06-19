import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';



class App extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {

    return (
      <Router>
        <div className="App">
          <nav className="nav hospital">
            <div className="nav-left">
              <p className="nav-item title is-3"><Link to="/">Carolus Summarecon</Link></p>
            </div>
            <div className="nav-right">
              <p className="nav-item is-active"><Link to="/profile">Profile</Link></p>
              <p className="nav-item"><Link to="/visi&misi">Visi & Misi</Link></p>
              <p className="nav-item"><Link to="/kontak">Kontak</Link></p>
            </div>
          </nav>

          <div classname="columns">

          </div>
        </div>
      </Router>
    );
  }
}

export default App;