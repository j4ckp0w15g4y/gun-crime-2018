import React, { PureComponent } from 'react';

class CrimeInfo extends PureComponent {

  render() {
    const { info } = this.props;
    const location = `${info.location_desc}`;
    const borough = `${info.boro}`;
    const date = `${info.occur_date}`;
    const time = `${info.occur_time}`;


    return (
      <div>
        <div>Location description: {location}</div>
        <div>Borough: {borough} </div>
        <div>Date: {date.slice(0, 10)} </div>
        <div>Time: {time}</div>
        {/* time.slice(0, 5) or something IDK how to figure this out */}
      </div>
    )

  }
}

export default CrimeInfo