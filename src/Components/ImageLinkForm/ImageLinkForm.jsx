import React, { Component } from 'react'
import "./ImageLinkForm.css"


const ImageLinkForm = (({ onInputchange, onButtonSubmit }) => {
  return (
    <div className='ba pa3'>
      <p className="f3 center">this will be my ImageLinkForm</p>
      <div className="center pa4br3 shadow-5">
        <input type="text" className="f4 pa4 w-70 center" onChange={onInputchange}></input>
        <button className="w-30 grow f4 link ph3 pv2 dib  bg-light-purple" onClick={onButtonSubmit}>Detect</button>
      </div>
    </div>
  )
})

export default ImageLinkForm
