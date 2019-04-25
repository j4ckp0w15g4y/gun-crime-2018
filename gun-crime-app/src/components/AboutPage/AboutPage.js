import React from 'react';
import Iframe from 'react-iframe'

function AboutPage(props) {
    return (
        <div className="container is-fluid">
            <div className="notification">
                <h1 className="is-size-3"><strong>About the Map and the data</strong></h1>
                <br />
                <p>The data represented on this map is a visualisation of every shooting occurence documented by the NYPD throughout 2018. According to the NYC Open Data site, the data is freely available for "the public to explore the nature of police enforcement activity."</p>
                <br />
                <p>The map itself was created using Uber's React components for Mapbox GL.</p>
                <br />
                <h1 className="is-size-4"><strong>Breaking down the incidents by Borough</strong></h1>
                <p>The interactive piechart below breaks down the number of incidents by borough.</p>
                <div className="pie-chart-container">
                    <Iframe className="pie-chart"
                        url="https://data.cityofnewyork.us/dataset/Breakdown-of-Shootings-by-Borough-2018-/g2wa-9xsp/embed?width=400&height=300"
                        width="400" height="300"
                        styles={{ border: 0, padding: 0, margin: 0 }} />
                </div>
                <p>If you would like to access the API directly, and read more documentation regarding the source, please click <a href="https://data.cityofnewyork.us/Public-Safety/NYPD-Shooting-Incident-Data-Year-To-Date-/5ucz-vwe8" target="_blank" rel="noopener noreferrer">here</a></p>
            </div>
        </div>
    )
}

export default AboutPage