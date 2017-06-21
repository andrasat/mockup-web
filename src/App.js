import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import { Home } from './components'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isHamburgerActive: false
    };
  }

  classHamburger = () => {
    return 'nav-right nav-menu '+(this.state.isHamburgerActive ?'is-active':'')+' is-hidden-desktop';
  }

  handleHamburgerClick = () => {
    this.setState({
      isHamburgerActive: !this.state.isHamburgerActive
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="carolus-header">
            <div className="columns is-tablet">
              <div className="column is-6">
                <div className="carolus-title">
                  <Link className="title is-2 carolus" to="/">St. Carolus</Link>
                  <p className="mini-text">Summarecon Serpong</p>
                </div>
              </div>
              <div className="column is-6">
                <div className="emergency">
                  <p>Telp: 021 - 5422 0811</p>
                  <p>Gawat Darurat: 021 - 5422 0818 </p>
                </div>
              </div>
            </div>
          </div>

          <nav className="nav hospital">
            <div className="nav-left">
            <p className="nav-item is-hidden-mobile"><Link className="left-items" to="/pelayanan">Pelayanan</Link></p>
            <p className="nav-item is-hidden-mobile"><Link className="left-items" to="/penunjang">Penunjang Medis</Link></p>
            <p className="nav-item is-hidden-mobile"><Link className="left-items" to="/karier">Karier</Link></p>
            <p className="nav-item is-hidden-mobile"><Link className="left-items" to="/profile">Profile</Link></p>
            <p className="nav-item is-hidden-mobile"><Link className="left-items" to="/kontak">Kontak</Link></p>
            </div>

            <div className={this.classHamburger()}>
              <p className="nav-item is-hidden-tablet"><Link className="right-items" to="/pelayanan">Pelayanan</Link></p>
              <p className="nav-item is-hidden-tablet"><Link className="right-items" to="/penunjang">Penunjang Medis</Link></p>
              <p className="nav-item is-hidden-tablet"><Link className="right-items" to="/karier">Karier</Link></p>
              <p className="nav-item is-hidden-tablet"><Link className="right-items" to="/profile">Profile</Link></p>
              <p className="nav-item is-hidden-tablet"><Link className="right-items" to="/kontak">Kontak</Link></p>
            </div>

            <span className="nav-toggle" onClick={() => this.handleHamburgerClick()}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </nav>

          <Route exact path="/" component={Home} />

          <footer className="footer">
            <div className="container">
              <div className="content has-text-centered">
                <p>
                  Created in 2017
                </p>
              </div>
            </div>
          </footer>

        </div>
      </Router>
    );
  }
}
