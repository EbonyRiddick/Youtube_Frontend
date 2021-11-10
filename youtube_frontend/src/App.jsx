import logo from './logo.svg';
import './App.css';
import {googleAPIKey} from './keys';
import React,{ Component } from 'react';
import HomePage from './Components/DisplayVideo/DisplayVideo';
import axios from 'axios'

class App extends Component() {
  constructor(props){
    super(props);
    this.state = {
        video: []
    }
}

  componentDidMount(){
    this.getVideo()
  }

  getVideo = async() => {
    let response = await axios.get('https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com')
        this.setState({
            video: response.data
        })
  }

  render(){
    return (
      <div className="App">
        <DisplayVideo displayVideo={this.getVideo}/>
      </div>
    );
  }
}


export default App;
