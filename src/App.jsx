import './App.css'
import Navigation from "./Components/Navigation/Navigation"
import Logo from "./Components/Logo/Logo"
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm"
import FaceDetector from "./Components/FaceDetector/FaceDetector"
import 'tachyons'

function App() {

  return (
    <div className="App">
      <Navigation />
      <Logo />
      <ImageLinkForm />
      <FaceDetector />
      
    </div>
  )
}

export default App
