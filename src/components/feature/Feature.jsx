import React from 'react'
import './feature.css'

const Feature = (props) => {
  return (
    <div className='feature' style={{flexDirection: props.flexDirection || 'column'}}>
      <div className='feature--top-border'></div>
      <h2 className='feature--question'>{props.question}</h2>
      <p className='feature--answer'>{props.answer}</p>
    </div>
  )
}

export default Feature
