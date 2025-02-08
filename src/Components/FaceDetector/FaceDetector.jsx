import React from 'react'
import './FaceDetector.css'

const FaceDetector = ({boxes, inputIMG}) => {
  return (
    <div className='center'>
      {inputIMG && <img id="inputImage" src={inputIMG} alt="clarify input or output image" width='500px' height="auto"></img>}
      {/* <div className="bounding-box" style={{top: boxes[0].topRow, right: boxes[0].rightCol, bottom: boxes[0].bottomRow, left: boxes[0].leftCol}}></div> */}
    </div>
  )
};

export default FaceDetector
