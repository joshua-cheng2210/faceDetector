import React, { Component } from 'react'
import Tilt from 'react-parallax-tilt';
import logo from './logo.jpg'
import './Logo.css';
export class Logo extends Component {
  render() {
    return (
      <div className="ma4 mt0">
        <Tilt className="Tilt br4 shadow-2">
          {/* <h1>React Parallax Tilt 👀</h1>
          <p>this will be my Logo (with Tilt animation)</p> */}
            <div className="Tilt-inner logo-img"><img src={logo} className="Tilt-inner logo-img img"alt="logo"></img></div>
        </Tilt>
      </div>
    )
  }
}

export default Logo
