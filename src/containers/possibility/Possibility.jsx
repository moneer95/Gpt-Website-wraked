import React from 'react'
import './possibility.css'
import possibility from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className='possibility section-margin' id='possibility'>
      <img src={possibility} alt="possibility image" />

      <div className='description'>
        <a href="https://www.futuretools.io/" target='blank'> 
          <h3 className='gradient-text'>Find The Most Exciting AI Application For You</h3> 
        </a>
        <a href="https://www.futuretools.io/" target='blank' className='gradient-text'>
          Explore Tons Of AI Applications
        </a>
      </div>
    </div>
  )
}

export default Possibility
