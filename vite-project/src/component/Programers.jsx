import React from 'react'

function Programers(props) {
  return (
    <div className='divPro'>
    <h3>{props.name1}</h3>
      <h3>{props.Languges}</h3>
      <h3>{props.Work}</h3>
      <h3>{props.Company}</h3>
    </div>
  )
}
export default Programers