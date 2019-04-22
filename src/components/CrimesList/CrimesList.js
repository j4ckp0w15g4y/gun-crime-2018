import Crime from '../Crime/Crime'
import React from 'react';

const CrimesList = (props) => {    
    const crimes  = (
        <div>
            {props.crimeData.map((crime, index) =>
                <Crime key={index} crime={crime} />
                )}
        </div>    
        )    

    return (   
        <div>{crimes}</div>
    )
}



export default CrimesList;