import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios'
import Map from "../Map/Map"
import SubmitFormBorough from "../SubmitForm/SubmitFormBorough"


//&boro=${this.state.borough}';

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
        <h2><strong>Resources</strong></h2>
        <br/>
        <p>New York Times: <a className="resource-link" href="https://www.nytimes.com/2019/04/02/nyregion/murders-brooklyn-gangs-nyc.html" target="_blank" rel="noopener noreferrer">What's Behind the Murder Spike in Brooklyn?</a></p>
        <br />
        <p>NPR: <a className="resource-link" href="https://www.npr.org/2018/10/17/658084556/new-york-city-had-its-first-weekend-without-a-shooting-in-25-years" target="_blank" rel="noopener noreferrer">New York City Had Its First Weekend Without A Shooting In 25 Years</a></p>
        <br />
        <p>New Yorker: <a className="resource-link" href="https://www.newyorker.com/magazine/2019/02/04/will-the-supreme-court-use-a-new-york-city-regulation-to-strike-down-gun-laws" target="_blank" rel="noopener noreferrer">Will the Supreme Court Use a New York City Regulation to Strike Down Gun Laws?</a></p>
        </div>
        </div>

      {/* NEED TO WORK ON DATE FILTER, NEED TO WORK ON BULMA SUBMIT, NEED TO MOVE MAP TO LOCATION OF THE AREA */}        
      </div>
    </div>
    </div>  
    );
  }
}

export default HomePage;