import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Slider from 'react-slick'
import './App.css';



export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      height: 0,
      width: 0
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this._resizeWindow);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resizeWindow);
  }

  _resizeWindow = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

  _isActive = () => {

  }

  render() {
    const { width, height } = this.state;
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3500,
      speed: 850,
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
            <p className="nav-item is-hidden-mobile"><Link className="left-items" to="/news">News</Link></p>
            <p className="nav-item is-hidden-mobile"><Link className="left-items" to="/profile">Profile</Link></p>
            <p className="nav-item is-hidden-mobile"><Link className="left-items" to="/visi&misi">Visi & Misi</Link></p>
            <p className="nav-item is-hidden-mobile"><Link className="left-items" to="/pelayanan">Pelayanan</Link></p>
            <p className="nav-item is-hidden-mobile"><Link className="left-items" to="/penunjang">Penunjang Medis</Link></p>
            <p className="nav-item is-hidden-mobile"><Link className="left-items" to="/karier">Karier</Link></p>
            <p className="nav-item is-hidden-mobile"><Link className="left-items" to="/kontak">Kontak</Link></p>
            </div>
            <div className="nav-right nav-menu is-active is-hidden-desktop">
              <p className="nav-item is-hidden-tablet"><Link className="right-items" to="/news">News</Link></p>
              <p className="nav-item is-hidden-tablet"><Link className="right-items" to="/profile">Profile</Link></p>
              <p className="nav-item is-hidden-tablet"><Link className="right-items" to="/visi&misi">Visi & Misi</Link></p>
              <p className="nav-item is-hidden-tablet"><Link className="right-items" to="/pelayanan">Pelayanan</Link></p>
              <p className="nav-item is-hidden-tablet"><Link className="right-items" to="/penunjang">Penunjang Medis</Link></p>
              <p className="nav-item is-hidden-tablet"><Link className="right-items" to="/karier">Karier</Link></p>
              <p className="nav-item is-hidden-tablet"><Link className="right-items" to="/kontak">Kontak</Link></p>
            </div>
            <span className="nav-toggle">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </nav>

          <div className="megatron">
            <Slider {...settings}>
              <img src="https://placeimg.com/1000/400/animals" alt="image1"/>
              <img src="https://placeimg.com/1000/400/people" alt="image2"/>
              <img src="https://placeimg.com/1000/400/arch" alt="image3"/>
              <img src="https://placeimg.com/1000/400/nature" alt="image4"/>
              <img src="https://placeimg.com/1000/400/animals" alt="image5"/>
              <img src="https://placeimg.com/1000/400/people" alt="image6"/>
              <img src="https://placeimg.com/1000/400/tech" alt="image7"/>
            </Slider>
          </div>

          <div className="columns is-mobile">
            <div className="column">
              <div><h1>Test</h1></div>
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
