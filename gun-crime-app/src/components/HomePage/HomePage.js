import React, { Component } from 'react';
// import './App.css';
import axios from 'axios'
import CrimesList from "../CrimesList/CrimesList";
import Map from "../Map/Map"
import SubmitFormBorough from "../SubmitForm/SubmitFormBorough"


//&boro=${this.state.borough}';


//Don't forget to change the limit with Mick

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      crimes: [],
      borough: '',
      //month: 0
    }
  }

  getCrimeInfo(borough) {
    let url = `https://data.cityofnewyork.us/resource/5ucz-vwe8.json?&boro=${borough}`
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

   submitFunc = (e) => {
    // e.preventDefault();
     this.setState({
      borough: e.target.value
    })
    // console.log(e.target.value)
      this.getCrimeInfo(e.target.value)
    
    // this.componentDidMount();
  }

  componentDidMount() {
    this.getCrimeInfo();
  }


  render() {    
    const crimeData = this.state.crimes

    return (
      <div className="App">
        <div className="container is-fluid">
        <div className="notification">
        <h1 className="is-size-4"><strong>NYC Shooting Incident Data Map (2018)</strong></h1>
        <SubmitFormBorough submitFunc={this.submitFunc} />
        <br />
        <div className="columns">
        <div className="column">
        <div className="mapContainer" isAlign="center">
          <Map component={Map} crimeData={crimeData} />
        </div>
        </div>

        <div className="column">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        </div>

      {/* NEED TO WORK ON DATE FILTER, NEED TO WORK ON BULMA SUBMIT, NEED TO MOVE MAP TO LOCATION OF THE AREA */}


        <div className="crimeContainer">
          {/* <h1 className="is-size-4">Shooting Incident Data</h1> */}
          <CrimesList crimeData={crimeData} />
        </div>
        {/* <SubmitForm submitFunc={this.submitFunc} /> */}
      </div>
    </div>
    </div>  
    );
  }
}

export default HomePage;