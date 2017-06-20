import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Slider from 'react-slick'
import './App.css';



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
    const settings = {
      dots: true,
      infinite: true,
      pauseOnHover: true,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 3500,
      speed: 900,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Router>
        <div className="App">
          <div className="carolus-header">
            <div className="columns is-mobile">
              <div className="column is-6">
                <Link className="title is-1 carolus" to="/">St. Carolus</Link>
                <p className="mini-text">Summarecon Serpong</p>
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

          <div className="megatron">
            <Slider {...settings}>
              <img src="http://lorempixel.com/640/360/people" alt="image1"/>
              <img src="http://lorempixel.com/640/360/people/2" alt="image2"/>
              <img src="http://lorempixel.com/640/360/people/3" alt="image3"/>
              <img src="http://lorempixel.com/640/360/people/4" alt="image4"/>
              <img src="http://lorempixel.com/640/360/people/5" alt="image5"/>
              <img src="http://lorempixel.com/640/360/people/6" alt="image6"/>
            </Slider>
          </div>

          <div className="columns is-mobile content">
            <div className="column">
              <div><h2>Test</h2></div>
              <div><h1>Test</h1></div>
              <div><h1>Test</h1></div>
            </div>
            <div className="column">
              <div><h1>Test</h1></div>
              <div><h1>Test</h1></div>
              <div><h1>Test</h1></div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
