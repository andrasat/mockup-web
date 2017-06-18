import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      evKey: 0
    };
  }

  _handleSelect(evKey) {
    this.setState({evKey});
  };

  render() {
    const { evKey } = this.state
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Carolus Summarecon</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav bsStyle="tabs" activeKey={evKey} onSelect={(e) => this._handleSelect(e)} pullRight={true}>
            <NavItem eventKey="1">Profile</NavItem>
            <NavItem eventKey="2">Visi & Misi</NavItem>
            <NavItem eventKey="3">Kontak</NavItem>
            <NavItem eventKey="4">Guest Book</NavItem>
          </Nav>
        </Navbar>
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default App;