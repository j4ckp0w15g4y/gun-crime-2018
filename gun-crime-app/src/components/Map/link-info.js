import React, { PureComponent } from 'react';

class CrimeInfo extends PureComponent {

  render() {
    const { info } = this.props;
    const displayName = `${info.location_desc}`;

    return (
      <div>
        <div>{displayName}</div>
      </div>
    )

  }
}

export default CrimeInfo