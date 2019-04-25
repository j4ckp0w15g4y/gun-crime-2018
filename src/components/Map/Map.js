import React, { Component } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import CrimePin from './crime-pin';
import CrimeInfo from './link-info'


const MAPBOX_TOKEN = process.env.REACT_APP_API_KEY

class Map extends Component {
  constructor() {
    super()
    this.state = {
      viewport: {
        width: 600,
        height: 400,
        latitude: 40.730610,
        longitude: -73.935242,
        zoom: 11
      },
      popupInfo: null
    }
    this._renderMarker = this._renderMarker.bind(this)
    this._renderPopup = this._renderPopup.bind(this)
  };


  _renderMarker(crimedata, i) {
    const lat = Number(crimedata.latitude)
    const long = Number(crimedata.longitude)
    return (
      <Marker key={`crimedata-${i}`} longitude={long} latitude={lat} >
        <CrimePin
          size={15}
          onClick={() =>
            this.setState({ popupInfo: crimedata })}
        />

      </Marker>

    );
  }

  _renderPopup() {
    const { popupInfo } = this.state;
    const lat = Number(popupInfo.latitude)
    const lng = Number(popupInfo.longitude)
    return (
      <Popup tipSize={5}
        anchor="top"
        longitude={lng}
        latitude={lat}
        onClose={() => this.setState({ popupInfo: null })} >
        <CrimeInfo info={popupInfo} />
      </Popup>
    )
  }


  render() {
    const { viewport } = this.state;
    const crimedata = this.props.crimeData

    console.log(MAPBOX_TOKEN)

    return (
      <div className="center-map">
        <ReactMapGL
          width={viewport.width}
          height={viewport.height}
          latitude={viewport.latitude}
          longitude={viewport.longitude}
          zoom={viewport.zoom}

          mapStyle="mapbox://styles/mapmen/cjusnru4s22nz1frvcf7fd1vy"

          onViewportChange={(viewport) => this.setState({ viewport })}
          mapboxApiAccessToken={MAPBOX_TOKEN}>

          {crimedata.map(this._renderMarker)}

          {this.state.popupInfo && this._renderPopup()}

        </ReactMapGL>
      </div>

    );
  }
}

export default Map;