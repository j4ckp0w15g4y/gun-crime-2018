import React, { Component } from 'react';
// import './App.css';
import axios from 'axios'
import CrimesList from "../CrimesList/CrimesList";
import Map from "../Map/Map"
import SubmitForm from "../SubmitForm/SubmitForm"


//&boro=${this.state.borough}';


//Don't forget to change the limit with Mick

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      crimes: [],
      borough: ''

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
        <h1 className="is-size-4">NYC Shooting Incident Data Map (2018)</h1>
        <SubmitForm submitFunc={this.submitFunc} />
        <br />
        <div className="mapContainer" isAlign="center">
          <Map component={Map} crimeData={crimeData} />
        </div>
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