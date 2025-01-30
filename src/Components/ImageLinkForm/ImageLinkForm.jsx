import React, { Component } from 'react'
import "./ImageLinkForm.css"

export class ImageLinkForm extends Component {
  render() {
    return (
      <div className='ba pa3'>
        <p className="f3 center">this will be my ImageLinkForm</p>
        <div className="center pa4br3 shadow-5">
          <input type="text" className="f4 pa4 w-70 center"></input>
          <button className="w-30 grow f4 link ph3 pv2 dib  bg-light-purple">Detect</button>
        </div>
      </div>
    )
  }
}

export default ImageLinkForm
