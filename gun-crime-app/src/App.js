import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

let url = 'https://data.cityofnewyork.us/resource/5ucz-vwe8.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      crimes: []
      
    }
  }

  componentDidMount() {
  
  axios.get(url)
  .then(response => {
    this.setState({
      crimes: response.data
    });
  console.log(this.state.data)   
  })
  .catch((error) => {
    console.log("Error:", error);
  });
}


  render() {
    console.log(this.state.crimes)
    const crimeData = this.state.crimes

    return (
      <div className="App">
       <div className="mapContainer">
          <Map component={Map} crimeData={crimeData} />
          </div>
         <div className="crimeContainer">
          <h1 className="is-size-4">Crimes: </h1>
            <CrimesList crimeData={crimeData} />
        </div>
      
      </div>
    );
  }
}

export default App;