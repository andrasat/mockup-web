import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Slider from 'react-slick'
import './App.css';



class App extends React.Component {

  render() {
    // const { } = this.state
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3500,
      speed: 850,
      slidesToShow: 1,
      slidesToScroll: 1
    }
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

export default App;