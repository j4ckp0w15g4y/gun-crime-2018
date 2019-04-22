import React from 'react'

const Crime = (props) => {    
    return(
      <div>
      <p>Borough: {props.crime.boro}</p>
      <p>Date: {props.crime.occur_date}</p>
      <p>Time: {props.crime.occur_time}</p>
      </div>
    )
  }
  
  export default Crime