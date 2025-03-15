import { Component } from 'react'
import './App.css'
import SignIn from "./Components/SignIn/SignIn"
import RegisterPage from './Components/RegisterPage/RegisterPage'
import Navigation from "./Components/Navigation/Navigation"
import Logo from "./Components/Logo/Logo"
import Rank from "./Components/Rank/Rank"
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm"
import FaceDetector from "./Components/FaceDetector/FaceDetector"
import 'tachyons'
import ParticlesBg from 'particles-bg'
import { routeOptions } from './constants';

const backendPort = 3069
//OLD METHOD OF USING THE API
// import clarifai from 'clarifai'


// const app = new Clarifai.App({
//   apiKey: "756b1e38fc26480783353e4bfb366ac7",
// })

///////////////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, user and app ID, model details, and the URL
// of the image we want as an input. Change these strings to run your own example.
//////////////////////////////////////////////////////////////////////////////////////////////////

const getClarifyRequest = ((imageURL) => {
  const PAT = '1165295fdb9c481aacbfc38c59efc702';
  const USER_ID = 'chen7647';
  const APP_ID = 'my-first-application-ddxi3q';
  const MODEL_ID = 'face-detection';
  const MODEL_VERSION_ID = '6dc7e46bc9124c5c8824be4822abe105';
  const IMAGE_URL = imageURL;
  // To use image bytes, assign its variable   
  // const IMAGE_BYTES_STRING = '/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAoACgDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAYDBQcE/8QAMBAAAQMDAwMDAgQHAAAAAAAAAQIDBAAFEQYSIQcTMTJBURRhCBYikSNScXKhsdH/xAAZAQACAwEAAAAAAAAAAAAAAAAFBgIDBAf/xAAtEQABAwMBBgQHAQAAAAAAAAABAgMRAAQhMQUSE0FRYQaBocEUFiJCcrHR8P/aAAwDAQACEQMRAD8A3+RYY1unSYzCS0ttZUkAgktn0q5yT7jPyDUC4wdGwycH5U2Kt9ZQ7VI1qw5PkvQy3CSVPpf7aQjuKyFH25xzn3pHn3TVNy01Hl2hyy6YdkSpKsS9sl/6RlI3rRu3dxWd6spwnAGPIJTfl925fcLaoSDHXvyo6i9SlCQrU9wKln3OyWiaDN1RAbW3kKbSd7gPtwMkH/tTWy9afuy1iPfnXMAblITwkE4yf08cn3pSbYt1uts24XH6fUbiLAuY1MWyGkLEmUW0rcCRvUpQ5CtwKQCPgi4S1ZbDe4sd9NntDEe79m3uOBLTr0IR9jzodSMqUpTu9JJ8owD7UTT4ZCfv9PbP7860m+s+HBSrejWRuz2kAxoesGYxTW/Zlpkwo1vkuSly3UgKWQUhHJUvIHsAaKTemF8XE6sWmxyZkiaZrMh1jv8ArQNpUVqB8FW0njHqx4zRVVhsph1KlKk5xQ+7uHmikaSJrQerMByet2IwvtuTLa4xv2k7Rk84H9x/esHv92d01boenLXGcuiWrFIhLlpbcaQ2/JdK3VJCkAq2pAR7Zz7YxWudY9fxNIdQbNGkR5TyX4aisNNpUMFZAzkj4NK0jq9ZpbLr0PSlzkhrlZDaQlP3P8Q4/ap3F87bPucJEkx/hHv60b2TYXLrKN5sramYECSQRk9M6c6zmJ+eb5Hi22M7cnWGIQgFLbX0zSo4PDa1YBcTgDyMjJ/qbGPabH08SJt1Uzc9QqRliGg5QySPKvgc+TyfYDmmTUWpNYz7ctxoQdPQshCktupckDJUPUcJT6DwMq8YyaQ9VL0pCS8zapcq4SVOBZmPDO8/cnknlWcDBwn4NYnPjLkQ+qE9OtOVlYpeVHDCEkkkJyT+SuQzy5Y0ru6Ez511/Efa5s1fdkOtyVurIxgdlQAA9gOKKPwolU7remU5hCGYEgo38KUv9I/0TRTDYJCWQBSF4rIN/CRgAR0iTpVD1j1g/qDqJcJqlKcjB9bcda142MpOEJAzgeMnjyTSyze5KEuNRpDoDvC0oe4X9iAeaKKFK+oya6fbOqYbDTeEiAPKpHdS3gBLYc7RQkp3ApQog+cq8nwPJrljzxnPZbUfnugn/NFFRgEVch9xKsH0H8pg6e3x3T3UC1ajaZITGkJLoS4MKbOUrzz/ACKVRRRVzVwtoQmhG1NkWu0HuI+JI8u/Kv/Z';


  const raw = JSON.stringify({
    "user_app_id": {
      "user_id": USER_ID,
        "app_id": APP_ID
      },
    "inputs": [
      {
        "data": {
          "image": {
            "url": IMAGE_URL
            // "base64": IMAGE_BYTES_STRING
          }
        }
      }
    ]
  });
  // console.log("body: ", JSON.parse(raw))

  const requestOptions = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Key ' + PAT,
          // 'Access-Control-Allow-Origin' : "*",
          // "origin" : "*"
      },
      body: raw
  };

  return requestOptions
})


export class App extends Component {
  constructor(){
    super();
    this.state={
      input: "",
      imageURL: "",
      boundingBoxesInfo: [],
      output: "",
      isSignedIn: false,
      route: routeOptions.HomeApp,
      MODEL_ID: 'face-detection', // got it from the getClarifyRequest()
      MODEL_VERSION_ID: '6dc7e46bc9124c5c8824be4822abe105', // got it from the getClarifyRequest()
      user:{
        id: "",
        name: "",
        email: "",
        entries: 1,
        joined: ""
      }
    }
  }

  loadUser = (userX) => {
    this.setState({
      user: userX
    })
    // console.log("loadUSer this.state.user: ", this.state.user)
  }

  updateNumEntries = () => { // only worked in POSTMAN but not yet tested through the app cuz i couldn't get the API to work
    fetch("http://localhost:" + backendPort, {
      method: "put",
      headers: {'content-Type' : "application/json"},
      body : JSON.stringify({
        id : this.state.user.id
      })
    }).then(
      response => response.json()
    ).then(response => {
      // console.log("this is in update entries num. response = ", response)
      if (response === "no such user"){
        return
      } else {
        this.setState(prevState => ({
          user:{
            ...prevState.user,
            entries: response
          }}))
      }
    })
  }

  updateIsSignedIn = () => {
    this.setState(prevState => ({ isSignedIn: !prevState.isSignedIn }));
  }

  onInputchange = (event) => {
    // console.log(event.target.value)
    this.setState({
      input: event.target.value
    })
    // console.log(this.state)
  }

  getBoundingBoxes = (regions) => { // regions = result.outputs[0].data.regions
    let BoundingBoxes_f = [];

    regions.forEach(region => {
      // Accessing and rounding the bounding box values
      const inputIMG = document.getElementById("inputImage")
      const width = Number(inputIMG.width)
      const height = Number(inputIMG.height)
      const boundingBox = region.region_info.bounding_box;
      // TODO: might need to look into this calculations later
      const topRow = boundingBox.top_row.toFixed(3);
      const leftCol = boundingBox.left_col.toFixed(3);
      const bottomRow = boundingBox.bottom_row.toFixed(3);
      const rightCol = boundingBox.right_col.toFixed(3);

      region.data.concepts.forEach(concept => {
          // Accessing and rounding the concept value
          const name = concept.name;
          const value = concept.value.toFixed(4);

          // console.log(`${name}: ${value} BBox: ${topRow}, ${leftCol}, ${bottomRow}, ${rightCol}`);
          const box = {
            "concept.name": concept.name, 
            "concept.value": concept.value.toFixed(4),
            "topRow": topRow,
            "leftCol": leftCol,
            "bottomRow": bottomRow,
            "rightCol": rightCol
          };
          BoundingBoxes_f.push(box);
          // this.setState({boundingBoxesInfo: {... , }})
      });
      this.setState({boundingBox: BoundingBoxes_f})
    });
  }

  // componentDidMount() {
  //   fetch("http://localhost:"+backendPort+"/") // check the port used in the routing part fo the back end code
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  // }

  // this wont work because you need to send the fetch not from the client or front end for security putporses
  // onButtonSubmit = () => {
  //   this.setState({imageURL: this.state.input})
  //   // https://www.shutterstock.com/image-photo/happy-businessman-enjoying-home-office-600nw-2257033579.jpg
  //   const requestOptions = getClarifyRequest(this.state.input);
  //   const url = "https://api.clarifai.com/v2/models/" + this.state.MODEL_ID + "/versions/" + this.state.MODEL_VERSION_ID  + "/outputs";

  //   fetch(url, requestOptions) 
  //   .then(response => {
  //     // console.log("response: ", response)
  //     return response.json()
  //   }).then(data => {
  //     // console.log("\n\n------------------------\n\n")
  //     console.log("data: ", data);
  //     console.log("\n\ndata.outputs[0].regions: ", data.outputs[0].data.regions);
  //     console.log("\n\ndata.outputs[0].regions.region_info: ", data.outputs[0].data.regions[0].region_info);
  //     console.log("\n\ndata.outputs[0].regions.data: ", data.outputs[0].data.regions[0].data);
  //     return data.outputs[0].data.regions;
  //   }).catch(error => {
  //     // console.log("\n\n---------------there is an error----------\n\n")
  //     console.log('error', error)
  //     return error
  //   });}

    // this.getBoundingBoxes(result.outputs[0].data.regions);
    // this.updateNumEntries()

  onButtonSubmit2 = () => {
    this.setState({imageURL: this.state.input})

    fetch("http://localhost:3069/promptingClarifai", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        imgURL : this.state.imageURL
      })
    }).then((response) => {
      return response.json()
    }).then(data => {
      // console.log("\n\n------------------------\n\n")
      console.log("data: ", data);
      console.log("\n\ndata.outputs[0].regions: ", data.outputs[0].data.regions);
      console.log("\n\ndata.outputs[0].regions.region_info: ", data.outputs[0].data.regions[0].region_info);
      console.log("\n\ndata.outputs[0].regions.data: ", data.outputs[0].data.regions[0].data);
      return data.outputs[0].data.regions;
    }).catch((err) => {
      console.log(err)
    })
  }
  
  onRouteChange = (newRoute) => {
    // console.log("b4 change: ", this.state.route)
    this.setState({route: newRoute})
    // console.log("after change: ", this.state.route)
  }

  render() {
    return (
      <div className="App">
        <ParticlesBg type="circle" bg={true} className="particles"/>
        {this.state.route === routeOptions.SignIn && <div>
          <Navigation onRouteChange={this.onRouteChange} currPage={this.state.route} loadUser={this.loadUser}/>
          <SignIn onRouteChange={this.onRouteChange} updateIsSignedIn={this.updateIsSignedIn} loadUser={this.loadUser}/>
        </div>}

        {this.state.route === routeOptions.Register && <div>
          <Navigation onRouteChange={this.onRouteChange} currPage={this.state.route}/>
          <RegisterPage onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>
        </div>}

        {this.state.route === routeOptions.HomeApp && <div>
          <Navigation onRouteChange={this.onRouteChange} currPage={this.state.route}/>
          <Logo />
          <Rank numEntries={this.state.user.entries} name={this.state.user.name}/>
          <ImageLinkForm onInputchange={this.onInputchange} onButtonSubmit={this.onButtonSubmit2} />
          <FaceDetector boxes={this.state.boundingBoxesInfo} inputIMG={this.state.imageURL}/>
        </div>}
        
      </div>
    )
  }
}

export default App
