import React from 'react'
import Programers from './Programers'
import Services from './Services'


function Companies(props) {
  return (
    <div style={{backgroundColor:'black',color:'white'}}>
      <h3>{props.namecomany}</h3>
      <h3>{props.worknam}</h3>
      <h3>{props.Founded}</h3>
      <Programers name1={props.name1}Languges={props.Languges}Work={props.Work}Company={props.Company}>
        
      </Programers>
      <Services Services={props.Services}Price={props.Price}/>
    </div>
  )
}
export default Companies