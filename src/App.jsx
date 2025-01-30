import './App.css'
import Navigation from "./Components/Navigation/Navigation"
import Logo from "./Components/Logo/Logo"
import Rank from "./Components/Rank/Rank"
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm"
import FaceDetector from "./Components/FaceDetector/FaceDetector"
import 'tachyons'
import ParticlesBg from 'particles-bg'

function App() {

  return (
    <div className="App">
      <ParticlesBg type="circle" bg={true} className="particles"/>
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      <FaceDetector />
      
    </div>
  )
}

export default App
