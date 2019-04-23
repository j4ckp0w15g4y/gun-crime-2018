import React from 'react';

function AboutPage(props) {
    return(
        <div className="container is-fluid">
        <div className="notification">
            <h1><strong>About the Map and the data</strong></h1>
            <br />
            <p>The data represented on this map is a visualisation of every shooting occurence documented by the NYPD throughout 2018. According to the NYC Open Data site, the data is freely available for "the public to explore the nature of police enforcement activity."</p>
            <br />
            <p>The map itself was created using Uber's React components for Mapbox GL</p>
            <br />
            <p>If you would like to access the API directly, and read more documentation regarding the source, please click <a href="https://data.cityofnewyork.us/Public-Safety/NYPD-Shooting-Incident-Data-Year-To-Date-/5ucz-vwe8" target="_blank">here</a></p>
          </div>
        </div>    

        
    )
}

export default AboutPage